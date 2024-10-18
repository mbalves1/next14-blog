import { notFound } from "next/navigation"
import { getPost as getPostNotCached } from "@/lib/posts"
import { cache } from "react"

const getPost =cache(
  async (slug) => await getPostNotCached(slug)
)

export async function generateMetadata({ params, searchParams }, parent) {
  const description = (await parent).description ?? "Default description"

  try {
    const { frontmatter } = await getPost(params.slug)
    return frontmatter
  } catch (error) {
    notFound()
  }
}

export default async function BlogPage({ params }) {
  let post;

  try {
    post = await getPost(params.slug)
  } catch (error) {
    console.error(error);
    notFound()
  }

  return (
    <article className="prose dark:prose-invert">
      {/* <MDXRemote
        source={markdown}
      /> */}
      { post.content }
    </article>
  )
}