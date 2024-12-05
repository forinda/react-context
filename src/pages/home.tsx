import { Link } from "react-router-dom";
import LandingSvg from "../components/landing";
import useAuth from "../hooks/useAuth";

function Home() {
  const { isAuthenticated } = useAuth();
  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gray-900 overflow-hidden">
      {/* SVG Background Animation */}
      <div className="absolute inset-0">
        <LandingSvg />
      </div>
      {/* Content */}
      <div className="relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Welcome to Our Website
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-6">
          Discover amazing features and services tailored just for you.
        </p>
        {isAuthenticated ? (
          <Link
            to={"/dashboard"}
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-lg transition">
            Go to Dashboard
          </Link>
        ) : (
          <Link
            to={"/login"}
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-lg transition">
            Get Started
          </Link>
        )}
      </div>
    </div>
  );
}

export default Home;
