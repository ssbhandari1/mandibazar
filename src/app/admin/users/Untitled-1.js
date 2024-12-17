checkout --> <pageXOffset className="tsx"></pageXOffset>


'use client'
import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa6";
import { FaRegTrashCan } from "react-icons/fa6";

const Page = () => {
  const items = [
    {
      image: "https://i.postimg.cc/8Ck40tYr/Pineapple-1-5lb.jpg",
      alt: "Pineapple Imported",
      title: "Pineapple Imported",
      price: 30,
      quantity: 1,
      totalPrice: 30,
      link: "/product/undefined",
    },
    {
      image: "https://i.postimg.cc/Z5yQ47YB/Rainbow-Chard-Package-per-lb.jpg",
      alt: "Rainbow Chard",
      title: "Rainbow Chard",
      price: 7.07,
      quantity: 3,
      totalPrice: 21.21,
      link: "/product/rainbow-chard",
    },
    {
      image: "https://i.postimg.cc/Z5yQ47YB/Rainbow-Chard-Package-per-lb.jpg",
      alt: "Rainbow Chard",
      title: "Rainbow Chard",
      price: 7.07,
      quantity: 3,
      totalPrice: 21.21,
      link: "/product/rainbow-chard",
    },
  ];

  const [user, setUser] = useState({
    Firstname: "",
	LastName:"",
    ShippingAddress: "",
    phone: "",
    email: "user@gmail.com",
	City:"",
	Country:"",
	ZipCode:"",
	ShippingCost:"",



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

    if (!user.Firstname.trim()) newErrors.name = "Name is Firstname.";
    if (!user.ShippingAddress.trim()) newErrors.address = "Address is required.";
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
  return (
    <div className="py-10 lg:py-12 px-0 2xl:max-w-screen-2xl w-full xl:max-w-screen-xl flex flex-col md:flex-row lg:flex-row">
      <div className="md:w-full lg:w-3/5 flex h-full flex-col order-2 sm:order-1 lg:order-1">
        <div className="mt-5 md:mt-0">
          <form>
            <div className="flex justify-end my-2">
              <label className="text-sm font-semibold text-gray-600 mr-1 flex items-center">
                Use Default Shipping Address
                <input
                  type="checkbox"
                  className="ml-3 h-6 w-12 rounded-full bg-red-600 focus:ring-0 checked:bg-green-600 transition-all cursor-pointer"
                />
              </label>
            </div>

            {/* Personal Details */}
            <div>
              <h2 className="font-semibold text-base text-gray-700 pb-3">
                01. Personal Details
              </h2>
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                  <label className="block text-gray-500 text-sm font-medium mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="John"
                    className="w-full py-2 px-4 border border-gray-200 rounded-md text-sm h-11 focus:outline-none focus:border-emerald-500"
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label className="block text-gray-500 text-sm font-medium mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Doe"
                    className="w-full py-2 px-4 border border-gray-200 rounded-md text-sm h-11 focus:outline-none focus:border-emerald-500"
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label className="block text-gray-500 text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="youremail@gmail.com"
                    readOnly
                    className="w-full py-2 px-4 border border-gray-200 rounded-md text-sm h-11 bg-gray-100 cursor-not-allowed text-gray-500"
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label className="block text-gray-500 text-sm font-medium mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+062-6532956"
                    className="w-full py-2 px-4 border border-gray-200 rounded-md text-sm h-11 focus:outline-none focus:border-emerald-500"
                  />
                </div>
              </div>
            </div>

            {/* Shipping Details */}
            <div className="mt-12">
              <h2 className="font-semibold text-base text-gray-700 pb-3">
                02. Shipping Details
              </h2>
              <div className="grid grid-cols-6 gap-6 mb-8">
                <div className="col-span-6">
                  <label className="block text-gray-500 text-sm font-medium mb-2">
                    Street Address
                  </label>
                  <input
                    type="text"
                    placeholder="123 Boulevard Rd, Beverley Hills"
                    className="w-full py-2 px-4 border border-gray-200 rounded-md text-sm h-11 focus:outline-none focus:border-emerald-500"
                  />
                </div>
                <div className="col-span-6 sm:col-span-2">
                  <label className="block text-gray-500 text-sm font-medium mb-2">
                    City
                  </label>
                  <input
                    type="text"
                    placeholder="Los Angeles"
                    className="w-full py-2 px-4 border border-gray-200 rounded-md text-sm h-11 focus:outline-none focus:border-emerald-500"
                  />
                </div>
                <div className="col-span-6 sm:col-span-2">
                  <label className="block text-gray-500 text-sm font-medium mb-2">
                    Country
                  </label>
                  <input
                    type="text"
                    placeholder="United States"
                    className="w-full py-2 px-4 border border-gray-200 rounded-md text-sm h-11 focus:outline-none focus:border-emerald-500"
                  />
                </div>
                <div className="col-span-6 sm:col-span-2">
                  <label className="block text-gray-500 text-sm font-medium mb-2">
                    Zip Code
                  </label>
                  <input
                    type="text"
                    placeholder="2345"
                    className="w-full py-2 px-4 border border-gray-200 rounded-md text-sm h-11 focus:outline-none focus:border-emerald-500"
                  />
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="mt-12">
              <h2 className="font-semibold text-base text-gray-700 pb-3">
                03. Payment Method
              </h2>
              <div className="grid sm:grid-cols-3 gap-4">
                <label className="cursor-pointer flex items-center p-4 border border-gray-200 rounded-md justify-around">
                  <span className="text-xl mr-3 text-gray-400">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      version="1.1"
                      viewBox="0 0 16 16"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M14.5 2h-13c-0.825 0-1.5 0.675-1.5 1.5v9c0 0.825 0.675 1.5 1.5 1.5h13c0.825 0 1.5-0.675 1.5-1.5v-9c0-0.825-0.675-1.5-1.5-1.5zM1.5 3h13c0.271 0 0.5 0.229 0.5 0.5v1.5h-14v-1.5c0-0.271 0.229-0.5 0.5-0.5zM14.5 13h-13c-0.271 0-0.5-0.229-0.5-0.5v-4.5h14v4.5c0 0.271-0.229 0.5-0.5 0.5zM2 10h1v2h-1zM4 10h1v2h-1zM6 10h1v2h-1z"></path>
                    </svg>
                  </span>
                  <span className="ml-3 text-sm text-gray-600">
                    Cash On Delivery
                  </span>
                  <input
                    type="radio"
                    name="paymentMethod"
                    className="text-emerald-500 focus:ring-0"
                  />
                </label>
                <label className="cursor-pointer flex items-center p-4 border border-gray-200 rounded-md justify-around">
                  <span className="text-xl mr-3 text-gray-400">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      version="1.1"
                      viewBox="0 0 16 16"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M14.5 2h-13c-0.825 0-1.5 0.675-1.5 1.5v9c0 0.825 0.675 1.5 1.5 1.5h13c0.825 0 1.5-0.675 1.5-1.5v-9c0-0.825-0.675-1.5-1.5-1.5zM1.5 3h13c0.271 0 0.5 0.229 0.5 0.5v1.5h-14v-1.5c0-0.271 0.229-0.5 0.5-0.5zM14.5 13h-13c-0.271 0-0.5-0.229-0.5-0.5v-4.5h14v4.5c0 0.271-0.229 0.5-0.5 0.5zM2 10h1v2h-1zM4 10h1v2h-1zM6 10h1v2h-1z"></path>
                    </svg>
                  </span>
                  <span className="ml-3 text-sm text-gray-600">
                    Credit Card
                  </span>
                  <input
                    type="radio"
                    name="paymentMethod"
                    className="text-emerald-500 focus:ring-0"
                  />
                </label>
                <label className="cursor-pointer flex items-center p-4 border border-gray-200 rounded-md justify-around">
                  <span className="text-xl mr-3 text-gray-400">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      version="1.1"
                      viewBox="0 0 16 16"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M14.5 2h-13c-0.825 0-1.5 0.675-1.5 1.5v9c0 0.825 0.675 1.5 1.5 1.5h13c0.825 0 1.5-0.675 1.5-1.5v-9c0-0.825-0.675-1.5-1.5-1.5zM1.5 3h13c0.271 0 0.5 0.229 0.5 0.5v1.5h-14v-1.5c0-0.271 0.229-0.5 0.5-0.5zM14.5 13h-13c-0.271 0-0.5-0.229-0.5-0.5v-4.5h14v4.5c0 0.271-0.229 0.5-0.5 0.5zM2 10h1v2h-1zM4 10h1v2h-1zM6 10h1v2h-1z"></path>
                    </svg>
                  </span>
                  <span className="ml-3 text-sm text-gray-600">RazorPay</span>
                  <input
                    type="radio"
                    name="paymentMethod"
                    className="text-emerald-500 focus:ring-0"
                  />
                </label>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-6 gap-4 lg:gap-6 mt-10">
              <a
                href="/"
                className="col-span-6 sm:col-span-3 bg-indigo-50 border border-indigo-100 rounded py-3 text-center text-sm font-medium text-gray-700 hover:bg-gray-50 transition"
              >
                Continue Shipping
              </a>
              <button
                type="submit"
                disabled
                className="col-span-6 sm:col-span-3 bg-emerald-500 hover:bg-emerald-600 border border-emerald-500 rounded py-3 text-center text-sm font-medium text-white transition"
              >
                Confirm Order
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="md:w-full lg:w-2/5 lg:ml-10 xl:ml-14 md:ml-6 flex flex-col h-full md:sticky lg:sticky top-28 md:order-2 lg:order-2">
        <div className="border p-5 lg:px-8 lg:py-8 rounded-lg bg-white">
          <h2 className="font-semibold text-lg pb-4">Order Summary</h2>

          <div className="overflow-y-scroll flex-grow scrollbar-hide w-full max-h-64 bg-gray-50 block">
            {items.length <= 0 && (
              <div className="overflow-y-auto flex-grow w-full max-h-64 bg-gray-50">
                <div className="text-center py-10">
                  <span className="flex justify-center text-gray-500 font-semibold text-4xl">
                    <svg
                      viewBox="0 0 512 512"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8"
                    >
                      <path d="M454.65 169.4A31.82 31.82 0 00432 160h-64v-16a112 112 0 00-224 0v16H80a32 32 0 00-32 32v216c0 39 33 72 72 72h272a72.22 72.22 0 0050.48-20.55 69.48 69.48 0 0021.52-50.2V192a31.75 31.75 0 00-9.35-22.6zM176 144a80 80 0 01160 0v16H176zm192 96a112 112 0 01-224 0v-16a16 16 0 0132 0v16a80 80 0 00160 0v-16a16 16 0 0132 0z"></path>
                    </svg>
                  </span>
                  <h2 className="font-medium text-sm pt-2 text-gray-600">
                    No Item Added Yet!
                  </h2>
                </div>
              </div>
            )}
            {items.map((item, index) => (
              <>
                <div
                  key={index}
                  className="group w-full h-auto flex justify-start items-center bg-white py-3 px-4 border-b hover:bg-gray-50 transition-all border-gray-100 relative last:border-b-0"
                >
                  {/* Product Image */}
                  <div className="relative flex rounded-full border border-gray-100 shadow-sm overflow-hidden flex-shrink-0 cursor-pointer mr-4">
                    <img src={item.image} width="40" height="40" alt={"alt"} />
                  </div>

                  {/* Product Details */}
                  <div className="flex flex-col w-full overflow-hidden">
                    <span className="truncate text-sm font-medium text-gray-700 text-heading line-clamp-1">
                      {item.title}
                    </span>
                    <span className="text-xs text-gray-400 mb-1">
                      Item Price ${item.price}
                    </span>

                    {/* Price and Actions */}
                    <div className="flex items-center justify-between">
                      <div className="font-bold text-sm md:text-base text-heading leading-5">
                        <span>{item.totalPrice}</span>
                      </div>

                      <div className="h-8 w-22 md:w-24 lg:w-24 flex flex-wrap items-center justify-evenly p-1 border border-gray-100 bg-white text-gray-600 rounded-md">
                        {/* Decrement Button */}
                        <button>
                          <span className="text-dark text-base">
                            <FaMinus />
                          </span>
                        </button>

                        {/* Quantity */}
                        <p className="text-sm font-semibold text-dark px-1">
                          {item.quantity}
                        </p>

                        {/* Increment Button */}
                        <button>
                          <span className="text-dark text-base">
                            <FaPlus />
                          </span>
                        </button>
                      </div>

                      {/* Remove Button */}
                      <button className="hover:text-red-600 text-red-400 text-lg cursor-pointer">
                        <FaRegTrashCan />
                      </button>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>

          <div className="flex items-center mt-4 py-4 lg:py-4 text-sm w-full font-semibold text-heading border-t border-gray-200">
            <form className="w-full">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-end">
                <input
                  type="text"
                  placeholder="Input your coupon code"
                  className="py-2 px-3 md:px-4 w-full border rounded-md h-12 text-sm bg-white border-gray-200 focus:outline-none focus:border-emerald-500 placeholder-gray-500"
                />
                <button className="mt-3 sm:mt-0 sm:ml-3 py-3 px-5 md:px-6 lg:px-8 bg-white border border-gray-200 rounded-md text-sm font-semibold hover:bg-emerald-500 hover:text-white transition duration-300 focus:outline-none">
                  Apply
                </button>
              </div>
            </form>
          </div>

          <div className="flex items-center py-2 text-sm w-full font-semibold text-gray-500 border-t border-gray-200">
            Subtotal
            <span className="ml-auto text-gray-800 font-bold">0.00</span>
          </div>
          <div className="flex items-center py-2 text-sm w-full font-semibold text-gray-500 border-t border-gray-200">
            Shipping Cost
            <span className="ml-auto text-gray-800 font-bold">0.00</span>
          </div>
          <div className="flex items-center py-2 text-sm w-full font-semibold text-gray-500 border-t border-gray-200">
            Discount
            <span className="ml-auto text-orange-400 font-bold">0.00</span>
          </div>

          <div className="border-t mt-4 pt-5">
            <div className="flex items-center font-bold justify-between text-sm uppercase">
              TOTAL COST
              <span className="text-lg font-extrabold">0.00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;








// hooks/useForm.ts

import { useState } from "react";

interface FormState<T> {
  values: T;
  errors: { [key: string]: string };
  setValues: React.Dispatch<React.SetStateAction<T>>;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  validate: () => boolean;
  handleSubmit: (e: React.FormEvent) => void;
}

export function useForm<T>(initialValues: T, validateFn: (values: T) => { [key: string]: string }) {
  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [file, setFile] = useState<File | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const validate = () => {
    const newErrors = validateFn(values);
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      console.log("Validation failed");
      return;
    }

    console.log("form submit", values);

    const formData = new FormData();
    Object.keys(values).forEach((key) => {
      formData.append(key, (values as any)[key]);
    });

    if (file) {
      formData.append("photo", file);
    }

    try {
      // Example of how you could send the form data
      // const response = await fetch('/your-backend-endpoint', {
      //   method: 'POST',
      //   body: formData,
      // });
      // console.log(response);
    } catch (error) {
      console.log("Submission failed:", error);
    }
  };

  return {
    values,
    errors,
    setValues,
    handleChange,
    handleFileChange,
    validate,
    handleSubmit,
  };
}





// pages/first-page.tsx
import { useForm } from "../hooks/useForm";

const FirstPage = () => {
  const initialValues = {
    name: "",
    address: "",
    phone: "",
    email: "user@gmail.com",
  };

  const validateForm = (values: typeof initialValues) => {
    const errors: { [key: string]: string } = {};
    if (!values.name.trim()) errors.name = "Name is required.";
    if (!values.address.trim()) errors.address = "Address is required.";
    if (!values.phone.trim()) errors.phone = "Phone is required.";
    if (!values.email.trim()) errors.email = "Email is required.";
    return errors;
  };

  const {
    values,
    errors,
    handleChange,
    handleFileChange,
    handleSubmit,
  } = useForm(initialValues, validateForm);

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={values.name}
        onChange={handleChange}
        placeholder="Name"
      />
      <span>{errors.name}</span>

      <input
        type="text"
        name="address"
        value={values.address}
        onChange={handleChange}
        placeholder="Address"
      />
      <span>{errors.address}</span>

      <input
        type="text"
        name="phone"
        value={values.phone}
        onChange={handleChange}
        placeholder="Phone"
      />
      <span>{errors.phone}</span>

      <input
        type="email"
        name="email"
        value={values.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <span>{errors.email}</span>

      <input type="file" onChange={handleFileChange} />

      <button type="submit">Submit</button>
    </form>
  );
};

export default FirstPage;






// pages/second-page.tsx
import { useForm } from "../hooks/useForm";

const SecondPage = () => {
  const initialValues = {
    Firstname: "",
    LastName: "",
    ShippingAddress: "",
    phone: "",
    email: "user@gmail.com",
    City: "",
    Country: "",
    ZipCode: "",
    ShippingCost: "",
  };

  const validateForm = (values: typeof initialValues) => {
    const errors: { [key: string]: string } = {};
    if (!values.Firstname.trim()) errors.Firstname = "Firstname is required.";
    if (!values.ShippingAddress.trim()) errors.ShippingAddress = "Address is required.";
    if (!values.phone.trim()) errors.phone = "Phone is required.";
    if (!values.email.trim()) errors.email = "Email is required.";
    return errors;
  };

  const {
    values,
    errors,
    handleChange,
    handleFileChange,
    handleSubmit,
  } = useForm(initialValues, validateForm);

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="Firstname"
        value={values.Firstname}
        onChange={handleChange}
        placeholder="Firstname"
      />
      <span>{errors.Firstname}</span>

      <input
        type="text"
        name="ShippingAddress"
        value={values.ShippingAddress}
        onChange={handleChange}
        placeholder="Shipping Address"
      />
      <span>{errors.ShippingAddress}</span>

      <input
        type="text"
        name="phone"
        value={values.phone}
        onChange={handleChange}
        placeholder="Phone"
      />
      <span>{errors.phone}</span>

      <input
        type="email"
        name="email"
        value={values.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <span>{errors.email}</span>

      <input type="file" onChange={handleFileChange} />

      <button type="submit">Submit</button>
    </form>
  );
};

export default SecondPage;


