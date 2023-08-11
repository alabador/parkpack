'use client'

import { usePathname } from "next/navigation"

export default function SearchDisplay({stateSearch, parkSearch}: 
    {stateSearch:string, parkSearch: string}) {
    const pathname = usePathname()

    return (
        <div className="flex flex-col justify-center items-center ">
            <p>{stateSearch}</p>
            <p>{parkSearch}</p>
        </div>
    )
}
