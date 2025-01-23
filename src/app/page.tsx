'use client'
import NextJsCarousel from "@/components/common/Carousel";
import Category from "@/pages/dashboard/category";
import Popular from "@/pages/dashboard/popular";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter()
  useEffect(() => {
    const token = localStorage.getItem("authToken");

    if (!token) {
      // Redirect to login if no token is found
      router.push("/auth/login");
    }
  }, [router]);
  return (
    <div className="w-full bg-gray-100">
      <div className="w-full p-4 hidden lg:flex">
        <div className="w-full h-full flex  rounded">
          <div className="w-[60%] h-full">
            <NextJsCarousel />
          </div>
          <div className="h-[50vh] w-[40%] border-2 border-red-900 rounded-none">
            {/* Other content here */}
          </div>
        </div>
      </div>
      <Category />
      <Popular />
    </div>
  );
}
