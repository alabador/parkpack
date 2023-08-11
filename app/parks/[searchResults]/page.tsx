import React from 'react'
import SearchDisplay from '../components/SearchDisplay'

export default function SearchResults({searchParams}: {searchParams: string[]}) {
  return (
    <div className="min-h-screen">
        <SearchDisplay />
    </div>
  )
}
