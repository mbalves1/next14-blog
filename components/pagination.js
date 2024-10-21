'use client'

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { usePathname } from "next/navigation";

export default function Pagination({ pageCount }) {

  const searchParams = useSearchParams();
  const pathName = usePathname();
  console.log('pathName', pathName);

  const pages = [];
  const page = Number(searchParams.get('page') ?? 1);

  for (let i = 1; i <= pageCount; i++) {
    pages.push(i)    
  }

  return (
      <ul className="flex justify-center space-x-4 font-mono text-lg">
        { pages.map((pageNumber) => {
          const params = new URLSearchParams(searchParams)
          params.set('page', pageNumber.toString())
          return (
            <li key={pageNumber}>
              <Link
                href={`${pathName}?${params.toString()}`}
                className={`${pageNumber === page ?
                  'decoration-gray-400 underline-offest-4 underline decoration-4' : ''
                } text-gray-500 dark:text-gray-400`}
              >{ pageNumber }</Link>
            </li>
          )
        }) }
      </ul>
  )
}