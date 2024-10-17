import { notFound } from "next/navigation"
import { MDXRemote } from "next-mdx-remote/rsc"

import { loadPost } from "@/lib/posts"

const titles = {
  "first": "hello first",
  "second": "hello second",
}



export async function generateMetadata({ params, searchParams }, parent) {
  const description = (await parent).description ?? "Default description"
  return {
    title: titles[params.slug],
    description
  }
}

export default function BlogPage({ params }) {

  // if (!["first", "second"].includes(params.slug)) {
  //   notFound()
  // }

  let markdown;

  try {
    markdown = loadPost(params.slug)
  } catch (error) {
    console.error(error);
    notFound()
  }

  return (
    <article className="prose dark:prose-invert">
      <MDXRemote
        source={markdown}
      />
    </article>
  )
}