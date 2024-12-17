import React from "react";
import { FiLock } from "react-icons/fi";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
const Page = () => {
  return (
    <div className="w-full flex justify-center mt-10 mb-10">
      <div className="mx-auto text-left justify-center rounded-md w-full max-w-lg px-4 py-8 sm:p-10 overflow-hidden align-middle transition-all transform bg-white shadow-xl">
        <div className="overflow-hidden mx-auto">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold font-serif">Signing Up</h2>
            <p className="text-sm md:text-base text-gray-500 mt-2 mb-8 sm:mb-10">
              Create an account by signing up with a provider.
            </p>
          </div>

          <form className="flex flex-col justify-center mb-6">
            <div className="grid grid-cols-1 gap-5">
              <div className="form-group">
                <label className="block text-gray-500 font-medium text-sm mb-2">
                  Email
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-800">
                    <MdOutlineMailOutline className="text-gray-400" />
                  </span>
                  <input
                    name="email"
                    type="email"
                    placeholder="Email"
                    autoComplete="email"
                    className="py-2 pl-10 w-full border text-sm text-gray-900 rounded-md transition focus:outline-none focus:border-emerald-500 h-11"
                    // value="justin@gmail.com"
                  />
                </div>
              </div>
             
              <button
                type="submit"
                className="w-full py-3 rounded bg-emerald-500 text-white hover:bg-emerald-600 transition"
              >
                SignUp
              </button>
            </div>{" "}
          </form>

          <div className="flex flex-col mb-4">
            <button className="inline-flex items-center justify-center py-4 h-12 w-full mb-6 bg-green-600 text-white hover:bg-green-700 rounded-md">
              <FaGoogle className="text-2xl" />
              <span className="ml-2">Login With Google</span>
            </button>
            <button className="inline-flex items-center justify-center py-4 h-12 w-full mb-6 bg-blue-500 text-white hover:bg-blue-600 rounded-md">
              <FaFacebookF className="text-2xl" />
              <span className="ml-2">Login With Facebook</span>
            </button>
          
          </div>

          <div className="text-center text-sm text-gray-900 mt-4">
            <div className="text-gray-500 mt-2.5">
              Already have an account?
              <span className="capitalize cursor-pointer text-gray-800 hover:text-cyan-500 font-bold mx-2">
                Login
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
