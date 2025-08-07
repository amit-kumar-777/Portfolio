import { useEffect, useState } from "react";

function UserDetails() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch(
          "https://api.freeapi.app/api/v1/public/randomusers?page=1&limit=10"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        if (result.success && result.data && result.data.data) {
          setUsers(result.data.data);
        } else {
          console.error("Unexpected response format:", result);
        }
      } catch (error) {
        console.error("Fetch error:", error);
      }
    }

    fetchUsers();
  }, []);

  return (
    <>
      <h1 className="flex justify-center font-medium text-blue-700">Total Members: {users.length}</h1>
      <div className="border-2 border-black-300 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {users.map((user, index) => (
          <div
            key={user.id || index}
            className="p-4 border border-grey-500 shadow-2xl bg-blue-400 rounded hover:border-2 hover:cursor-pointer"
          >
            <img
              src={user.picture.medium}
              alt={`${user.name.first} ${user.name.last}`}
              className="rounded-full mb-2 w-20 h-20 object-cover"
            />
            <div className="text-lg font-semibold">
              {user.name.title} {user.name.first} {user.name.last}
            </div>
            <div className="text-sm text-gray-600">Phone: {user.phone}</div>
            <div className="text-sm text-gray-600">Email: {user.email}</div>
            <div className="text-sm text-gray-600">
              Country: {user.location.country}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default UserDetails;
