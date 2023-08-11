'use client'

import { usePathname } from "next/navigation"
import { useSearchParams } from "next/navigation"

export default function SearchDisplay() {
    const pathname = usePathname()
    const searchParams = useSearchParams()

    return (
        <div>
            <p>Current pathname: {pathname}</p>
        </div>
    )
}
