"use client";
import React, { useState } from "react";

const UpdateProfile = () => {
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
              Update Profile
            </h2>
          </div>
          <form className="" onSubmit={handleSubmit}>
            <div className="space-y-6 bg-white">
              <div>
                <label className="block text-gray-500 font-medium text-sm mb-2">
                  Photo
                </label>
                <div className="mt-1 flex items-center justify-center">
                  <label className="flex flex-col items-center w-full cursor-pointer border-2 border-dashed border-gray-300 rounded-md px-6 py-5">
                    <input
                      type="file"
                      accept=".jpeg,.png,.webp"
                      className="hidden"
                      onChange={handleFileChange}
                    />
                    <svg
                      className="w-8 h-8 text-emerald-500 mb-2"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path>
                      <polyline points="16 16 12 12 8 16"></polyline>
                      <line x1="12" y1="12" x2="12" y2="21"></line>
                    </svg>
                    <span className="text-sm">Drag your image here</span>
                    <em className="text-xs text-gray-400">
                      (Only *.jpeg and *.png images)
                    </em>
                  </label>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-500 font-medium text-sm mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={user.name}
                    onChange={(e) => handleChange(e)}
                    placeholder="Full Name"
                    className="w-full p-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-emerald-500"
                  />
                  <span className="text-red-500 text-[0.8rem]">
                    {errors.name && errors.name}
                  </span>
                </div>

                <div>
                  <label className="block text-gray-500 font-medium text-sm mb-2">
                    Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    onChange={(e) => handleChange(e)}
                    value={user.address}
                    className="w-full p-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-emerald-500"
                  />
                  <span className="text-red-500 text-[0.8rem]">
                    {errors.address && errors.address}
                  </span>
                </div>

                <div>
                  <label className="block text-gray-500 font-medium text-sm mb-2">
                    Phone/Mobile
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={user.phone}
                    onChange={(e) => handleChange(e)}
                    placeholder="Phone/Mobile"
                    className="w-full p-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-emerald-500"
                  />
                  <span className="text-red-500 text-[0.8rem]">
                    {errors.phone && errors.phone}
                  </span>
                </div>

                <div>
                  <label className="block text-gray-500 font-medium text-sm mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={user.email}
                    onChange={(e) => handleChange(e)}
                    readOnly
                    className="w-full p-2 border rounded-md bg-gray-100 cursor-not-allowed text-gray-500"
                  />
                  <span className="text-red-500 text-[0.8rem]">
                    {errors.email && errors.email}
                  </span>
                </div>
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

export default UpdateProfile;