import Searchbar from "@/components/Searchbar";
import SearchDisplay from "./components/SearchDisplay";

interface searchQueries {
  state: string;
  park: string;
}

export default function Parks({searchParams}: {searchParams:searchQueries}) {
  return (
    <div className="min-h-screen">
      <Searchbar offset="0"/>
      {/* <SearchDisplay /> */}
      <p>{searchParams.state}</p>
      <p>{searchParams.park}</p>
    </div>
  )
}
