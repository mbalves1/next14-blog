export default function AboutLayout({ children }) {

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="w-6/12">{ children }</div>
      </div>
    </>
  )
}