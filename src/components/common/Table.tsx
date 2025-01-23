import React from "react";

const Table = ({tableheaderData, tableData}:any) => {
  const orders = [
    {
      id: "101",
      orderTime: "2024-11-18 14:30",
      method: "Cash",
      status: "Completed",
      total: 50.0,
    },
    {
      id: "102",
      orderTime: "2024-11-18 15:00",
      method: "Online",
      status: "Pending",
      total: 75.5,
    },
    {
      id: "103",
      orderTime: "2024-11-18 15:30",
      method: "Cash",
      status: "Cancelled",
      total: 30.0,
    },
  ];
// Utility function for conditional styling based on status
const getStatusColor = (status:any) => {
    switch (status) {
      case "Completed":
        return "text-green-500";
      case "Pending":
        return "text-yellow-500";
      case "Cancelled":
        return "text-red-500";
      default:
        return "";
    }
  };
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse border border-gray-300 text-left text-sm">
        <thead>
          <tr className="bg-gray-100">
          {tableheaderData?.map((tHead: any, index: number) => {
                    return (
                      <th
                        scope={tHead.scop}
                        className="border border-gray-300 px-4 py-2 "
                        key={index}
                      >
                        {tHead.name}
                      </th>
                    );
                  })}
          
          </tr>
        </thead>
        <tbody>
        {tableData?.map((row: any) => (
                  <tr key={row?.id} className="hover:bg-gray-50">
                    {tableheaderData?.map((header: any, colIndex: number) => (
                      <td
                        key={colIndex}
                        className={`border border-gray-300 px-4 py-2 ${getStatusColor(row?.status)} `}
                      >
                      {row[header.id]}
                      </td>
                    ))}
                  </tr>
                ))}
          {orders.map((order) => (
            <tr key={order.id} className="hover:bg-gray-50">
              <td className="border border-gray-300 px-4 py-2">{order.id}</td>
              <td className="border border-gray-300 px-4 py-2">{order.orderTime}</td>
              <td className="border border-gray-300 px-4 py-2">{order.method}</td>
              <td className={`border border-gray-300 px-4 py-2 ${getStatusColor(order.status)}`}>
                {order.status}
              </td>
              <td className="border border-gray-300 px-4 py-2">${order.total.toFixed(2)}</td>
              <td className="border border-gray-300 px-4 py-2">
                <button className="text-blue-500 hover:underline">Details</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};



export default Table;
