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
    <div className="w-full flex flex-col gap-4">
      <h2 className="text-xl font-semibold">My Orders</h2>

      <Table tableheaderData={tableheaderData} tableData={tableData} />
    </div>
  );
};

export default Page;
