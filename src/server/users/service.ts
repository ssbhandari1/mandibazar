import User from "./model";
import { hash } from "bcryptjs";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret_key";

/**
 * Adds a new user to the database after validating and hashing the password.
 * @param userData Object containing user details (username, email, password, etc.)
 * @returns The newly created user
 * @throws Error if validation fails or saving to the database fails
 */
export const addUser = async (userData: any) => {
  const { username, email, password } = userData;


  if (!username || !email || !password) {
    throw new Error("All fields (username, email, password) are required.");
  }

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new Error("User with this email already exists.");
  }

  const hashedPassword = await hash(password, 10);

  const newUser = new User({
    username,
    email,
    password: hashedPassword,
  });

  await newUser.save();

  const { ...userWithoutPassword } = newUser.toObject();
  return userWithoutPassword;
};


export const getUser = async (email: any) => {
  try {
    const user = await User.findOne({ email });
    return user;
  } catch (error: any) {
    throw new Error(`Error fetching user: ${error.message}`);
  }
};

// Handle login logic
export const loginUser = async (email: string, password: string) => {
  try {
    const user = await getUser(email);
    if (!user) {
      throw new Error("Invalid credentials");
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new Error("Invalid credentials");
    }

    // Create JWT token
    const token = jwt.sign(
      { id: user._id, email: user.email },
      JWT_SECRET,
      { expiresIn: "1h" }
    );

    return {
      token,
      user: {
        id: user._id.toString(),
        name: user.name,
        email: user.email,
      },
    };
  } catch (error: any) {
    throw new Error(`Login failed: ${error.message}`);
  }
};