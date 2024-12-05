import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default function DashboardSidebar() {
  const { isAuthenticated, user } = useAuth();
  return (
    <aside className="w-64 bg-white shadow-md">
      <div className="p-4 border-b">
        <Link to={'/'} className="text-2xl font-bold text-blue-600">
          {isAuthenticated ? `Welcome, ${user?.username}` : "Dashboard"}
        </Link>
      </div>
      <nav className="mt-4">
        <ul className="space-y-2">
          <li>
            <Link
              to="/dashboard"
              className="block py-2 px-4 text-gray-700 hover:bg-blue-100 hover:text-blue-600 rounded-md">
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/admin"
              className="block py-2 px-4 text-gray-700 hover:bg-blue-100 hover:text-blue-600 rounded-md">
              Admin Panel
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/profile"
              className="block py-2 px-4 text-gray-700 hover:bg-blue-100 hover:text-blue-600 rounded-md">
              Profile
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
