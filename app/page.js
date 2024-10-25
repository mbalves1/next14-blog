import H1 from "@/components/h1";
import { getPosts } from "@/lib/posts";
import Link from "next/link";


export default async function Home() {

  const { posts } = await getPosts({ newest: true, limit: 3 });

  return (
    <>
      <section className="mb-8">
        <H1>Welcome to my page!</H1>
        <p>My name is Murilo, I am a web developer</p>

        <p>
          Checkout my <Link href="/about/projects" className="underline">projects</Link>, photos and blog.
        </p>
      </section>

      <section>
        <h2 className="text-lg mb-8">Latest on the blog</h2>
        <ul className="font-mono">
          {posts.map(post => <li key={post.slug}>
            <span className="text-gray-400">
              {post.frontmatter.date}&nbsp;
              <Link href={`/blog/${post.slug}`} className="underline">
                {post.frontmatter.title}
              </Link>
            </span>
          </li>)}
        </ul>
      </section>
    </>
  );
}
