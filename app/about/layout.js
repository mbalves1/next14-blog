export default function AboutLayout({ children }) {

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div>{ children }</div>

        <div>
          <h2>You might also like</h2>

          <ul>
            <li>First blog post</li>
            <li>Second blog post</li>
          </ul>
        </div>
      </div>
    </>
  )
}