import GetData from "@/api/GetData"
import SearchCard from "./SearchCard"


export interface searchInfo {
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

export interface parkInfo {
  fullName: string,
  images: [
    {
      url: string,
      altText: string,
    }
  ]
}

export default async function SearchResults({stateSearch, parkSearch}: 
    {stateSearch:string, parkSearch: string}) {
    
    const baseUrl:string = `https://developer.nps.gov/api/v1/parks?q=${parkSearch}&api_key=${process.env.API_KEY}`
    const data:searchInfo = await GetData(baseUrl)
    return (
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center py-8 px-8 md:px-12 lg:px-16">
        {data.data.map((park:parkInfo) => (
          <SearchCard key={park.fullName} info={park}/>
        ))}
      </section>
    )
}
