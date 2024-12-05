import { Navigate, Outlet } from "react-router-dom";
import DashboardSidebar from "../components/dashboard-sidebar";
import useAuth from "../hooks/useAuth";

export default function DashboardLayout() {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? (
    <div className="flex h-screen font-sans bg-gray-100">
      {/* Sidebar */}
      <DashboardSidebar />
      {/* Main Content */}
      <main className="flex-1 p-6 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  ) : (
    <Navigate to="/login" />
  );
}
