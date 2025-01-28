import { NextRequest, NextResponse } from "next/server";
import { connectToDB } from "@/server/lib/db";
import { loginUser } from "@/server/users/service";

export async function POST(req: NextRequest) {
    await connectToDB();

    function isError(obj: unknown): obj is Error {
        return typeof obj === "object" && obj !== null && "message" in obj;
    }

    try {
        const { email, password } = await req.json();

        // Use the service function to handle login
        const result = await loginUser(email, password);

        return NextResponse.json({
            message: "Login successful",
            ...result,
        });
    } catch (error) {
        if (isError(error)) {
            return NextResponse.json({ message: error.message }, { status: 400 });
        }
        return NextResponse.json({ message: "An unknown error occurred" }, { status: 400 });
    }

}
