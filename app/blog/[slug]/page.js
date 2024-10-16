import { notFound } from "next/navigation"

//const titles = {
//  'first': 'hello first',
//  'second': 'hello second',
//}

//export async function generateMetadata({ params, searchParams }, parent) {
//  const description = (await parent).description ?? "Default description"
//  return {
//    title: titles[params.slug],
//    description
//  }//
//}

export default function BlogPage({ params }) {
  console.log(params)

  if (!['first', 'second'].includes(params.slug)) {
    notFound()
  }

  return (
    <>
      Hello! {params.slug}
    </>
  )
}