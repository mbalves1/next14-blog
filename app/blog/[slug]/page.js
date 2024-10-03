export default function BlogPage({ params }) {

  console.log(params)

  return (
    <>
      Hello! {params.slug}
    </>
  )
}