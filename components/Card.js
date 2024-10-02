export default function Card({title = "Nothing to say!"}) {
  return (
    <div className="border rounded-md border-gray-600 p-4 my-1">
      {title}
    </div>
  )
}