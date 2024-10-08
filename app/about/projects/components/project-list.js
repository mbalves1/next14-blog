// export const dynamic = 'force-dynamic';

import Card from "@/components/Card";

export default async function ProjectsList() {
  // const response = await fetch('http://localhost:3001/repos', { next: { revalidate: 3600 }})
  const response = await fetch('http://localhost:3001/repos')
  console.log('response', response);
  
  const repos = await response.json()

  return (
    <>
      <ul className="">
        { repos.map(repo => (
          <li key={repo.id} className="mb-4">
            <Card>
              <div className="flex justify-between items-center mb-4">
                <div>{repo.title}</div>
                <div>★{repo.stargazers_count}</div>
              </div>
              <div>{repo.description}</div>
            </Card>
          </li>
        )) }
      </ul>
    </>
  )
}