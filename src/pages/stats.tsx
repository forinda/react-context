export default function Stats() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Dashboard Stats</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Total Users Card */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-sm font-medium text-gray-500">Total Users</h2>
          <p className="mt-2 text-3xl font-bold text-gray-800">12,345</p>
          <p className="text-sm text-green-500 mt-1">+5.2% since last week</p>
        </div>

        {/* Revenue Card */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-sm font-medium text-gray-500">Revenue</h2>
          <p className="mt-2 text-3xl font-bold text-gray-800">$23,456</p>
          <p className="text-sm text-green-500 mt-1">+8.4% since last month</p>
        </div>

        {/* New Signups Card */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-sm font-medium text-gray-500">New Signups</h2>
          <p className="mt-2 text-3xl font-bold text-gray-800">1,234</p>
          <p className="text-sm text-red-500 mt-1">-1.2% since last week</p>
        </div>

        {/* Active Sessions Card */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-sm font-medium text-gray-500">Active Sessions</h2>
          <p className="mt-2 text-3xl font-bold text-gray-800">567</p>
          <p className="text-sm text-green-500 mt-1">+3.1% since yesterday</p>
        </div>
      </div>

      {/* Charts Section */}
      <div className="mt-8 bg-white shadow-md rounded-lg p-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">User Growth</h2>
        <div className="flex items-center justify-center h-64 bg-gray-100 rounded-lg">
          <p className="text-gray-500">[Insert Growth Chart Here]</p>
        </div>
      </div>
    </div>
  )
}
