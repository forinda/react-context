
export default function Admin() {
    const users = [
        { id: 1, name: 'John Doe', role: 'Admin', email: 'john@example.com' },
        { id: 2, name: 'Jane Smith', role: 'User', email: 'jane@example.com' },
        { id: 3, name: 'Mike Johnson', role: 'Moderator', email: 'mike@example.com' },
      ];
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Admin Panel</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-4 text-left">ID</th>
              <th className="border p-4 text-left">Name</th>
              <th className="border p-4 text-left">Role</th>
              <th className="border p-4 text-left">Email</th>
              <th className="border p-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-gray-100">
                <td className="border p-4">{user.id}</td>
                <td className="border p-4">{user.name}</td>
                <td className="border p-4">{user.role}</td>
                <td className="border p-4">{user.email}</td>
                <td className="border p-4">
                  <button className="text-blue-500 hover:underline mr-2">
                    Edit
                  </button>
                  <button className="text-red-500 hover:underline">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
