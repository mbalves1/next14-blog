// export const dynamic = 'force-dynamic';

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
            <div>{repo.title}</div>
            <div>{repo.description}</div>
            <div>{repo.stargazers_count}</div>
          </li>
        )) }
      </ul>
    </>
  )
}