
function Card({title}) {
  return (
    <div className="border rounded-md border-gray-600 p-4 w-[500px]">
      {title}
    </div>
  )
}

export default function Home() {
  return (
    <>
      <div className="p-20">
        <div>
        Hello World!
        </div>
        <Card title="This is being passed from the parent!" />
      </div>
    </>
  );
}
