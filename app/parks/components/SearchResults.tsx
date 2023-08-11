

export default async function SearchResults({stateSearch, parkSearch}: 
    {stateSearch:string, parkSearch: string}) {
  return (
    <div>
        <p>{stateSearch}</p>
        <p>{parkSearch}</p>
    </div>
  )
}
