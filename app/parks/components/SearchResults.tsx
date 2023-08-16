import GetData from "@/api/GetData"
import SearchCard from "./SearchCard"


export interface parkInfo {
  total: string
  limit: string
  start: string
  data: [
    {
      fullName: string,
      images: [
        {
          url: string,
          altText: string,
        }
      ]
    }
  ]

}

export default async function SearchResults({stateSearch, parkSearch}: 
    {stateSearch:string, parkSearch: string}) {
    
    const baseUrl:string = `https://developer.nps.gov/api/v1/parks?q=${parkSearch}&api_key=${process.env.API_KEY}`
    const data:parkInfo = await GetData(baseUrl)
    return (
      <div>
        <SearchCard data={data}/>
      </div>
    )
}
