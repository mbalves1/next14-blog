// export const dynamic = 'force-dynamic';

import Card from "@/components/Card";

export default async function ProjectsList() {
  // const response = await fetch('http://localhost:3001/repos')
  const response = await fetch('https://api.github.com/users/mbalves1/repos')
  
  const repos = await response.json()

  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 md:gap-4">
      { repos.map(repo => (
        <li key={repo.id} className="mb-4">
          <Card className="font-mono h-full">
            <div className="flex justify-between items-center mb-4">
              <div className="font-semibold">{repo.name}</div>
              <div>★{repo.stargazers_count ?? 0}</div>
            </div>
            <div>{repo.description ?? "Without description"}</div>
          </Card>
        </li>
      )) }
    </ul>
  )
}