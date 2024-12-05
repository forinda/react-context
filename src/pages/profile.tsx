
export default function Profile() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
    <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
      {/* Profile Header */}
      <div className="flex flex-col items-center">
        <img
          className="w-24 h-24 rounded-full border-4 border-blue-500"
          src="https://via.placeholder.com/150"
          alt="User Avatar"
        />
        <h1 className="mt-4 text-xl font-semibold text-gray-800">John Doe</h1>
        <p className="text-gray-500">Software Developer</p>
      </div>

      {/* Bio Section */}
      <div className="mt-6">
        <h2 className="text-lg font-semibold text-gray-800">About Me</h2>
        <p className="mt-2 text-gray-600 text-sm">
          Hi, I’m John! I’m a software developer with a passion for building
          user-friendly web applications. In my free time, I love contributing
          to open-source projects and exploring new technologies.
        </p>
      </div>

      {/* Social Links */}
      <div className="mt-6">
        <h2 className="text-lg font-semibold text-gray-800">Social Links</h2>
        <ul className="mt-2 space-y-2">
          <li>
            <a
              href="https://github.com/johndoe"
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/johndoe"
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com/in/johndoe"
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  )
}
