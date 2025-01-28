import Table from "@/components/common/Table";
import { HeaderType, TableDataType } from "@/components/types";
import React from "react";

const Page = () => {
  const tableheaderData: HeaderType = [
    { id: "id", name: "ID" },
    { id: "name", name: "Product" },
    { id: "order", name: "Order" },
    { id: "method", name: "Method" },
    { id: "status", name: "Status" },
    { id: "total", name: "Total" },
    { id: "action", name: "Action" },
  ];

  const tableData: TableDataType = [
    {
      id: "1",
      img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80",
      name: "cloths",
      order: "Delivered",
      appointment: "20/04/24, 09:00 AM",
      method: "cash",
      status: "pending",
      total: "234",
      action: "details",
    },
    {
      id: "1",
      img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80",
      name: "cloths",
      order: "Delivered",
      appointment: "20/04/24, 09:00 AM",
      method: "cash",
      status: "pending",
      total: "234",
      action: "details",
    },
    {
      id: "1",
      img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80",
      name: "cloths",
      order: "Delivered",
      appointment: "20/04/24, 09:00 AM",
      method: "cash",
      status: "pending",
      total: "234",
      action: "details",
    },
  ];
  return (
    <div className="w-full bg-white mt-4 lg:mt-0 p-4 sm:p-5 lg:p-8 rounded-md overflow-hidden">
      <h2 className="text-xl font-serif font-semibold mb-5">Dashboard</h2>
      <div className="grid gap-4 mb-8 md:grid-cols-2 xl:grid-cols-4">
        {/* Total Product */}
        <div className="flex h-full">
          <div className="flex items-center border w-full rounded-lg p-4">
            <div className="flex items-center justify-center p-3 rounded-full h-12 w-12 text-xl mr-4 text-red-600 bg-red-200">
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
            </div>
            <div>
              <h5 className="text-base font-medium font-serif text-gray-700">
                Total Product
              </h5>
              <p className="text-xl font-bold font-serif text-gray-800">393</p>
            </div>
          </div>
        </div>
        {/* Pending Product */}
        <div className="flex h-full">
          <div className="flex items-center border w-full rounded-lg p-4">
            <div className="flex items-center justify-center p-3 rounded-full h-12 w-12 text-xl mr-4 text-orange-600 bg-orange-200">
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polyline points="23 4 23 10 17 10"></polyline>
                <polyline points="1 20 1 14 7 14"></polyline>
                <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
              </svg>
            </div>
            <div>
              <h5 className="text-base font-medium font-serif text-gray-700">
                total_categories
              </h5>
              <p className="text-xl font-bold font-serif text-gray-800">104</p>
            </div>
          </div>
        </div>
        {/* Processing Product */}
        <div className="flex h-full">
          <div className="flex items-center border w-full rounded-lg p-4">
            <div className="flex items-center justify-center p-3 rounded-full h-12 w-12 text-xl mr-4 text-indigo-600 bg-indigo-200">
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="1" y="3" width="15" height="13"></rect>
                <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
                <circle cx="5.5" cy="18.5" r="2.5"></circle>
                <circle cx="18.5" cy="18.5" r="2.5"></circle>
              </svg>
            </div>
            <div>
              <h5 className="text-base font-medium font-serif text-gray-700">
                total_barnds
              </h5>
              <p className="text-xl font-bold font-serif text-gray-800">49</p>
            </div>
          </div>
        </div>
      </div>

      {/*  Product */}
      <div>
        <h3 className="text-lg font-serif font-medium mb-5">Product List</h3>
        <div className="overflow-x-auto border rounded-md">
         <Table tableheaderData={tableheaderData} tableData={tableData}/>
        </div>
      </div>
    </div>
  );
};

export default Page;
