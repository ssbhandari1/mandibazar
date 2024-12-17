import React, { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { CiEdit } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

const Table = ({
  tableheaderData,
  tableData,
  handleDelete,
  handleUpdate,
  type,
  handleStatus,
}: any) => {
  console.log('tableData333444',tableData)
  const navigate = useNavigate();
  const [open, setOpen] = useState<boolean>(false);
  const [rowData, setRowData] = useState<any>({});
  const [deleteModal, setDeleteModal] = useState<any>(false);
  const handleEditModal = (row: any) => {
    if (type === "product") {
      navigate("/add-product", { state: row });
    } else {
      setRowData(row);
      setOpen(true);
    }
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRowData((prevData: any) => ({
      ...prevData,
      [name]: value,
    }));
  };
  // navigate('/login', { state: { from: location.pathname } });
  const handleDeleteModal = (row: any) => {
    setRowData(row);
    setDeleteModal(true);
  };
  return (
    <div className="w-full">
      {open && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-5 rounded-lg shadow-lg w-80">
            <h2 className="text-lg font-semibold mb-4">Edit Name</h2>
            <input
              type="text"
              value={rowData?.[type]}
              name={type}
              onChange={handleChange}
              className="w-full px-3 py-2 mb-4 border rounded"
              placeholder="Enter new name"
            />
            <div className="flex justify-end">
              <button
                className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
                onClick={() => {
                  setOpen(false);
                }}
              >
                Cancel
              </button>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded"
                onClick={() => {
                  handleUpdate(rowData);
                  setOpen(false);
                }}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="w-full flow-root">
        <div className="lg:w-[70vw] -mx-4 -my-2 sm:-mx-6 lg:-mx-8 overflow-auto ">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300 overflow-auto">
              <thead>
                <tr className="divide-x divide-gray-200">
                  {tableheaderData.map((tHead: any, index: number) => {
                    return (
                      <th
                        scope={tHead.scop}
                        className="py-3.5 pl-4 pr-4 text-left text-sm font-bold text-gray-900 "
                        key={index}
                      >
                        {tHead.name}
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {tableData?.map((row: any, rowIndex: number) => (
                  <tr key={row?.id} className="divide-x divide-gray-200">
                    {tableheaderData?.map((header: any, colIndex: number) => (
                      <td
                        key={colIndex}
                        className={` ${
                          row.description
                            ? "whitespace-wrap"
                            : "whitespace-nowrap"
                        } px-4 py-4 pl-4 pr-4 text-sm  text-gray-700 `}
                      >
                        {header.id === "name" ? (
                          <div className="flex items-center">
                            {row?.img && (
                              <div className="h-11 w-11 flex-shrink-0">
                                <img
                                  className="h-11 w-11 rounded-full"
                                  src={row?.img}
                                  alt=""
                                />
                              </div>
                            )}

                            <div className="ml-4">
                              <div className="font-medium text-gray-900">
                                {row.name}
                              </div>
                              <div className="mt-1 text-gray-500">
                                {row.email}
                              </div>
                            </div>
                          </div>
                        ) : header.id === "photo" ? (
                          <div className="h-11 w-11 flex-shrink-0">
                            <img
                              className="h-11 w-11 rounded-full"
                              src={row.photo}
                              alt=""
                            />
                          </div>
                        ) : header.id === "status" ? (
                          <button
                            className={`text-white px-4 py-2 rounded-md ${
                              row?.status === "pending"
                                ? "bg-yellow-500"
                                : row?.status === "confirmed"
                                ? "bg-green-500"
                                : row?.status === "cancelled"
                                ? "bg-red-500"
                                : "bg-gray-500"
                            }`}
                          >
                            {row?.status}
                          </button>
                        ) : header.id === "action" ? (
                          <div className="flex justify-end space-x-4">
                            {row.action.first === "edit" ? (
                              <div
                                className="px-2 py-1 border border-dashed  border-[#FC2323]  h-[28px] flex items-center cursor-pointer"
                                onClick={() => handleEditModal(row)}
                              >
                                <CiEdit className="text-xl text-[#FC2323]" />
                              </div>
                            ) : (
                              <button
                                className={`rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm min-w-[100px] text-center 
                                             ${
                                               row?.status === "pending"
                                                 ? "bg-[#DB0B2E] hover:bg-[#088F7F]"
                                                 : "bg-gray-400 cursor-not-allowed"
                                             }`}
                                onClick={() =>
                                  handleStatus(row?.id, "cancelled")
                                }
                                disabled={row?.status !== "pending"}
                              >
                                {row.action.first}
                              </button>
                            )}
                            {row.action.second === "delete" ? (
                              <>
                                {/* Delete button */}
                                <div
                                  className="px-2 py-1 border border-dashed border-[#FC2323] h-[28px] flex items-center cursor-pointer"
                                  onClick={() => handleDeleteModal(row)}
                                >
                                  <AiOutlineDelete className="text-xl text-[#FC2323]" />
                                </div>

                                {/* Modal */}
                                {deleteModal && (
                                  <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
                                    <div className="bg-white p-5 rounded-lg shadow-lg flex flex-col gap-3">
                                      <h2 className="text-lg font-semibold mb-4">
                                        Are you sure you want to delete this
                                        data?
                                      </h2>
                                      <div className="flex justify-end">
                                        <button
                                          className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
                                          onClick={() => setDeleteModal(false)}
                                        >
                                          No
                                        </button>
                                        <button
                                          className="bg-blue-500 text-white px-4 py-2 rounded"
                                          onClick={() => {
                                            handleDelete(rowData);
                                            setDeleteModal(false);
                                          }}
                                        >
                                          Yes
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                )}
                              </>
                            ) : (
                              <button
                                className={`rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm min-w-[100px] text-center 
                                ${
                                  row?.status === "pending"
                                    ? "bg-[#0CA895] hover:bg-[#088F7F]"
                                    : "bg-gray-400 cursor-not-allowed"
                                }`}
                                onClick={() =>
                                  handleStatus(row?.id, "confirmed")
                                }
                                disabled={row?.status !== "pending"}
                              >
                                {row.action.second}
                              </button>
                            )}

                            {row.action.third === "view" && (
                              <a
                                href="#"
                                className="px-2 py-1 border border-dashed  border-[#06A546]  h-[28px] flex items-center"
                                title="View Details"
                              >
                                <svg
                                  width="20"
                                  height="15"
                                  viewBox="0 0 20 15"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M1.78396 7.50005C1.87504 7.65744 1.99578 7.85802 2.14536 8.08962C2.52955 8.68449 3.09849 9.47557 3.83714 10.2635C5.32964 11.8555 7.41631 13.3334 10.0001 13.3334C12.5838 13.3334 14.6705 11.8555 16.163 10.2635C16.9017 9.47557 17.4706 8.68449 17.8548 8.08962C18.0044 7.85802 18.1251 7.65744 18.2162 7.50005C18.1251 7.34266 18.0044 7.14209 17.8548 6.91049C17.4706 6.31562 16.9017 5.52454 16.163 4.73665C14.6705 3.14466 12.5838 1.66668 10.0001 1.66668C7.41631 1.66668 5.32964 3.14466 3.83714 4.73665C3.09849 5.52454 2.52955 6.31562 2.14536 6.91049C1.99578 7.14209 1.87504 7.34266 1.78396 7.50005ZM19.1668 7.50005C19.9122 7.12737 19.912 7.12709 19.9119 7.12679L19.9105 7.12411L19.9077 7.11842L19.8982 7.09991C19.8902 7.08445 19.879 7.06281 19.8645 7.03542C19.8355 6.98063 19.7935 6.90274 19.7385 6.80504C19.6287 6.60975 19.4669 6.33464 19.2549 6.00627C18.8318 5.35113 18.2028 4.47553 17.3789 3.59674C15.7464 1.85538 13.2497 0 10.0001 0C6.75046 0 4.25377 1.85538 2.62124 3.59674C1.79738 4.47553 1.1684 5.35113 0.745285 6.00627C0.533212 6.33464 0.371496 6.60975 0.261645 6.80504C0.206688 6.90274 0.164618 6.98063 0.135629 7.03542C0.121131 7.06281 0.109897 7.08445 0.101949 7.09991L0.0924923 7.11842L0.0896164 7.12411L0.0886424 7.12605C0.0884893 7.12635 0.087978 7.12737 0.833339 7.50005L0.087978 7.12737C-0.029326 7.36198 -0.029326 7.63813 0.087978 7.87273L0.833339 7.50005C0.087978 7.87273 0.0878249 7.87243 0.087978 7.87273L0.0896164 7.876L0.0924923 7.88169L0.101949 7.9002C0.109897 7.91566 0.121131 7.9373 0.135629 7.96469C0.164618 8.01948 0.206688 8.09737 0.261645 8.19507C0.371496 8.39036 0.533212 8.66547 0.745285 8.99384C1.1684 9.64898 1.79738 10.5246 2.62124 11.4034C4.25377 13.1447 6.75046 15.0001 10.0001 15.0001C13.2497 15.0001 15.7464 13.1447 17.3789 11.4034C18.2028 10.5246 18.8318 9.64898 19.2549 8.99384C19.4669 8.66547 19.6287 8.39036 19.7385 8.19507C19.7935 8.09737 19.8355 8.01948 19.8645 7.96469C19.879 7.9373 19.8902 7.91566 19.8982 7.9002L19.9077 7.88169L19.9105 7.876L19.9115 7.87406C19.9117 7.87376 19.9122 7.87273 19.1668 7.50005ZM19.1668 7.50005L19.9122 7.87273C20.0295 7.63813 20.0292 7.36139 19.9119 7.12679L19.1668 7.50005Z"
                                    fill="#06A546"
                                  />
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M10.0001 5.83324C9.07965 5.83324 8.33346 6.57944 8.33346 7.49992C8.33346 8.4204 9.07965 9.1666 10.0001 9.1666C10.9206 9.1666 11.6668 8.4204 11.6668 7.49992C11.6668 6.57944 10.9206 5.83324 10.0001 5.83324ZM6.66678 7.49992C6.66678 5.65896 8.15917 4.16656 10.0001 4.16656C11.8411 4.16656 13.3335 5.65896 13.3335 7.49992C13.3335 9.34088 11.8411 10.8333 10.0001 10.8333C8.15917 10.8333 6.66678 9.34088 6.66678 7.49992Z"
                                    fill="#06A546"
                                  />
                                </svg>
                              </a>
                            )}
                          </div>
                        ) : (
                          row[header.id]
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
