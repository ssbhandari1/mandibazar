import Table from "@/components/common/Table";
import React from "react";
import Logo from "@/components/common/logo";

const Page = () => {
  return (
    <div className="max-w-screen-2xl mx-auto py-10 px-3 sm:px-6">
      <div className="bg-emerald-100 rounded-md mb-5 px-4 py-3">
        <label>
          Thank You{" "}
          <span className="font-bold text-emerald-600">Xx undefined,</span> Your
          order has been received!
        </label>
      </div>
      <div className="bg-white rounded-lg shadow-sm">
        <div>
          <div className="bg-indigo-50 p-8 rounded-t-xl">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-4 border-b border-gray-50">
              <div>
                <h1 className="font-bold text-2xl uppercase">Invoice</h1>
                <h6 className="text-gray-700">
                  Status: <span className="text-orange-500">Pending</span>
                </h6>
              </div>
              <div className="text-center lg:text-right">
              <Logo textCLR='green-600'/>
                <p className="text-sm text-gray-500">
                  59 Station Rd, Purls Bridge, United Kingdom
                </p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row justify-between pt-4">
              <div className="mb-3 lg:mb-0">
                <span className="font-bold text-sm uppercase text-gray-600 block">
                  Date
                </span>
                <span className="text-sm text-gray-500 block">
                  November 26, 2024
                </span>
              </div>
              <div className="mb-3 lg:mb-0">
                <span className="font-bold text-sm uppercase text-gray-600 block">
                  Invoice No.
                </span>
                <span className="text-sm text-gray-500 block">#11430</span>
              </div>
              <div className="text-left lg:text-right">
                <span className="font-bold text-sm uppercase text-gray-600 block">
                  Invoice To
                </span>
                <span className="text-sm text-gray-500 block">
                  Xx undefined
                  <br />
                  justin@gmail.com <span className="ml-2">9999999999999</span>
                  <br />
                  Xxxxx
                </span>
              </div>
            </div>
          </div>
          <div className="overflow-x-auto px-8 my-10">
            <Table />
          </div>
          <div className="border-t border-b border-gray-100 p-10 bg-emerald-50">
            <div className="flex flex-col lg:flex-row justify-between pt-4">
              <div className="mb-3">
                <span className="mb-1 font-bold text-sm uppercase text-gray-600 block">
                  Payment Method
                </span>
                <span className="text-sm text-gray-500 font-semibold block">
                  Cash
                </span>
              </div>
              <div className="mb-3">
                <span className="mb-1 font-bold text-sm uppercase text-gray-600 block">
                  Shipping Cost
                </span>
                <span className="text-sm text-gray-500 font-semibold block">
                  $60.00
                </span>
              </div>
              <div className="mb-3">
                <span className="mb-1 font-bold text-sm uppercase text-gray-600 block">
                  Discount
                </span>
                <span className="text-sm text-gray-500 font-semibold block">
                  $0.00
                </span>
              </div>
              <div>
                <span className="mb-1 font-bold text-sm uppercase text-gray-600 block">
                  Total Amount
                </span>
                <span className="text-2xl font-bold text-red-500 block">
                  $743.79
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white p-8 rounded-b-xl">
          <div className="flex flex-col gap-2 sm:flex-row justify-between">
            <button className="flex items-center justify-center bg-emerald-500 text-white font-semibold h-10 px-5 rounded-md">
              Download Invoice
            </button>

            <button className="flex items-center justify-center bg-emerald-500 text-white font-semibold h-10 px-5 rounded-md">
              Print Invoice
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
