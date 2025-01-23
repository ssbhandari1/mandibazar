"use client";
import React, { useState } from "react";

const Page = () => {
  const [user, setUser] = useState({
    name: "",
    address: "",
    phone: "",
    email: "user@gmail.com",
  });
  const [file, setFile] = useState<File | null>(null);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((preUser) => ({
      ...preUser,
      [name]: value,
    }));
  };
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };
  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!user.name.trim()) newErrors.name = "Name is required.";
    if (!user.address.trim()) newErrors.address = "Address is required.";
    if (!user.phone.trim()) newErrors.phone = "Phone is required.";
    if (!user.email.trim()) newErrors.email = "Email is required.";
    setErrors(newErrors);

    // Return false if there are any errors
    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      console.log("Validation failed");
      return;
    }
    console.log("form submit", user);
    const formData = new FormData();

    Object.keys(user).forEach((key) => {
      formData.append(key, user[key as keyof typeof user]);
    });

    if (file) {
      formData.append("photo", file);
    }

    try {
      // const response = await fetch('https://your-backend-endpoint.com/upload', {
      // 	method: 'POST',
      // 	body: formData,
      //   });
    } catch (error) {
      console.log(error);
    }
  };
  console.log("errors$$$", errors);
  return (
    <div className="w-full bg-white  lg:mt-0 p-4 sm:p-5 lg:p-8 rounded-md overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="grid  gap-6">
          <div className="">
            <h2 className="text-xl font-serif font-semibold mb-5 px-4 sm:px-0">
              User Profile
            </h2>
          </div>
          <form className="" onSubmit={handleSubmit}>
            <div className="space-y-6 bg-white">
              <div className="flex items-center justify-start gap-3">
                <div className="mt-1 w-[20rem] h-[20rem] flex bg-gray-400 items-center justify-center" onChange={handleFileChange}></div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6" onChange={handleChange}></div>
              </div>

              <div className="text-right mt-6">
                <button
                  type="submit"
                  className="bg-emerald-500 text-white font-medium px-5 py-2 rounded-md hover:bg-emerald-600 transition-colors duration-300"
                >
                  Update Profile
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page;
