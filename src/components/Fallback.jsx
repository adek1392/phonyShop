export default function Fallback({ message = "Loading..." }) {
  return (
    <div className="flex justify-center items-center w-full h-60 bg-gray-100/20 rounded-lg shadow-inner animate-pulse">
      <p className="text-blue-600 text-lg font-medium">{message}</p>
    </div>
  )
}