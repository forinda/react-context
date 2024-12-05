
export default function LandingSvg() {
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 800 400"
    className="w-full h-full opacity-20">
    <circle
      cx="100"
      cy="100"
      r="50"
      className="fill-blue-500 animate-pulse"
    />
    <circle
      cx="300"
      cy="200"
      r="75"
      className="fill-blue-300 animate-pulse delay-300"
    />
    <circle
      cx="600"
      cy="300"
      r="100"
      className="fill-blue-700 animate-pulse delay-[5000] ease-out"
    />
  </svg>
  )
}
