import GetData from "@/api/GetData"


interface parkInfo {
  total: string
  limit: string
  start: string
  data: [
    {
      fullName: string
    }
  ]

}

export default async function SearchResults({stateSearch, parkSearch}: 
    {stateSearch:string, parkSearch: string}) {
    
    const baseUrl:string = `https://developer.nps.gov/api/v1/parks?q=${parkSearch}&api_key=${process.env.API_KEY}`
    const data:parkInfo = await GetData(baseUrl)
    return (
      <div>
        {data.data[0].fullName}
      </div>
    )
}
