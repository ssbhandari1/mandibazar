
import React from 'react'

function Page() {
  return (
    <div>Page</div>
  )
}

export default Page
// 'use client'
// import { useIndexedDB } from '@/server/hooks/useIndexDB';
// import { STORES } from '@/server/model/store';
// import React, { useState, useEffect } from 'react';

// interface User {
//   id: string;
//   name: string;
//   email: string;
// }

// const App: React.FC = () => {
//   const { addItem, getItem: getAllUsers, deleteItem, loading, error } = useIndexedDB<User>(STORES.USER_STORE);
//   const [userName, setUserName] = useState('');
//   const [userEmail, setUserEmail] = useState('');
//   const [users, setUsers] = useState<User[]>([]);

//   const handleAddUser = async () => {
//     if (!userName || !userEmail) {
//       alert('Please fill in all fields.');
//       return;
//     }

//     await addItem({ name: userName, email: userEmail });
//     alert('User added successfully!');
//     setUserName('');
//     setUserEmail('');
//     fetchUsers(); // Refresh the table
//   };

//   const handleDeleteUser = async (id: string) => {
//     await deleteItem(id);
//     alert('User deleted successfully!');
//     fetchUsers(); // Refresh the table
//   };

//   const fetchUsers = async () => {
// 	const allUsers = await getAllUsers(''); // Ensure getAllUsers returns an array or transform its result
// 	setUsers(Array.isArray(allUsers) ? allUsers : []);
//   };
  

//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
//       <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-4xl">
//         <h1 className="text-2xl font-bold text-gray-800 mb-6">User Management</h1>
//         <div className="space-y-4">
//           <input
//             className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-indigo-200"
//             placeholder="Name"
//             value={userName}
//             onChange={(e) => setUserName(e.target.value)}
//           />
//           <input
//             className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-indigo-200"
//             placeholder="Email"
//             value={userEmail}
//             onChange={(e) => setUserEmail(e.target.value)}
//           />
//           <button
//             className="bg-indigo-500 text-white font-semibold rounded-lg px-4 py-2 hover:bg-indigo-600 focus:ring focus:ring-indigo-200 disabled:opacity-50"
//             onClick={handleAddUser}
//             disabled={loading}
//           >
//             Add User
//           </button>
//         </div>
//         <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">User List</h2>
//         <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
//           <thead>
//             <tr>
//               <th className="text-left p-4 border-b font-medium text-gray-700">Name</th>
//               <th className="text-left p-4 border-b font-medium text-gray-700">Email</th>
//               <th className="text-left p-4 border-b font-medium text-gray-700">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {users.length > 0 ? (
//               users.map((user) => (
//                 <tr key={user.id}>
//                   <td className="p-4 border-b">{user.name}</td>
//                   <td className="p-4 border-b">{user.email}</td>
//                   <td className="p-4 border-b">
//                     <button
//                       className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
//                       onClick={() => handleDeleteUser(user.id)}
//                     >
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan={3} className="p-4 text-center text-gray-500">
//                   No users found.
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//         {error && <p className="text-red-500 mt-4">{error}</p>}
//       </div>
//     </div>
//   );
// };

// export default App