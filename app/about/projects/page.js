// export const dynamic = 'force-dynamic';

import ProjectsList from "@/app/about/projects/components/project-list";
import Loading from "./loading";

export default async function ProjectsPage() {

  return (
    <>
      <div className="p-20 w-full">
        <h1 className="mb-8 text-xl">Projects</h1>
        <ProjectsList />
      </div>
    </>
  )
}