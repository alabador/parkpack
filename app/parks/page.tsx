import Searchbar from "@/components/Searchbar";
import SearchDisplay from "./components/SearchDisplay";
import SearchResults from "./components/SearchResults";

interface searchQueries {
  state: string;
  park: string;
}

export default function Parks({searchParams}: {searchParams:searchQueries}) {

  return (
    <div className="min-h-screen">
      <Searchbar offset="bottom-0"/>
      <SearchDisplay stateSearch={searchParams.state} parkSearch={searchParams.park}/>
      <SearchResults stateSearch={searchParams.state} parkSearch={searchParams.park}/>
    </div>
  )
}
