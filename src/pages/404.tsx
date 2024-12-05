import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="text-center">
        <h1 className="text-6xl md:text-8xl font-bold text-blue-500">404</h1>
        <p className="text-2xl md:text-3xl font-semibold mt-4">
          Oops! Page Not Found
        </p>
        <p className="text-gray-400 mt-2">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <Link to="/">
          <button className="mt-6 bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-lg transition">
            Go Back Home
          </button>
        </Link>
      </div>
    </div>
  );
}
