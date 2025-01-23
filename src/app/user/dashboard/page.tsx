import Table from "@/components/common/Table";
import React from "react";
const Page = () => {

  const tableheaderData: any = [
    { id: "id", name: "ID" },
    { id: "name", name: "Product" },
    { id: "order", name: "Order" },
    { id: "method", name: "Method" },
    { id: "status", name: "Status" },
    { id: "total", name: "Total" },
    { id: "action", name: "Action" },
  ];

  const tableData: any = [
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
    <div className="w-full flex flex-col justify-center mt-10 mb-10 gap-5">
      <h2 className="text-xl font-semibold">Dashboard</h2>
      <div className="w-full">
        <div className="grid gap-4 mb-8 md:grid-cols-2 xl:grid-cols-4">
          <div className="flex h-full">
            <div className="flex items-center border border-gray-200 w-full rounded-lg p-4">
              <div className="flex items-center justify-center p-3 rounded-full h-12 w-12 text-xl text-center mr-4 text-red-600 bg-red-200"></div>
              <div>
                <h5 className="leading-none mb-2 text-base font-medium font-serif text-gray-700">
                  Total Orders
                </h5>
                <p className="text-xl font-bold font-serif leading-none text-gray-800">
                  319
                </p>
              </div>
            </div>
          </div>

          <div className="flex h-full">
            <div className="flex items-center border border-gray-200 w-full rounded-lg p-4">
              <div className="flex items-center justify-center p-3 rounded-full h-12 w-12 text-xl text-center mr-4 text-orange-600 bg-orange-200"></div>
              <div>
                <h5 className="leading-none mb-2 text-base font-medium font-serif text-gray-700">
                  Pending Orders
                </h5>
                <p className="text-xl font-bold font-serif leading-none text-gray-800">
                  82
                </p>
              </div>
            </div>
          </div>

          <div className="flex h-full">
            <div className="flex items-center border border-gray-200 w-full rounded-lg p-4">
              <div className="flex items-center justify-center p-3 rounded-full h-12 w-12 text-xl text-center mr-4 text-indigo-600 bg-indigo-200"></div>
              <div>
                <h5 className="leading-none mb-2 text-base font-medium font-serif text-gray-700">
                  Processing Orders
                </h5>
                <p className="text-xl font-bold font-serif leading-none text-gray-800">
                  37
                </p>
              </div>
            </div>
          </div>

          <div className="flex h-full">
            <div className="flex items-center border border-gray-200 w-full rounded-lg p-4">
              <div className="flex items-center justify-center p-3 rounded-full h-12 w-12 text-xl text-center mr-4 text-emerald-600 bg-emerald-200"></div>
              <div>
                <h5 className="leading-none mb-2 text-base font-medium font-serif text-gray-700">
                  Complete Orders
                </h5>
                <p className="text-xl font-bold font-serif leading-none text-gray-800">
                  167
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col gap-4">
      <h2 className="text-xl font-semibold">Recent Orders</h2>
      <Table tableheaderData={tableheaderData} tableData={tableData}/>
      </div>
    </div>
  );
};

export default Page;
