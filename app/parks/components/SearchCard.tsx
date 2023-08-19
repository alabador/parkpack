import Link from "next/link";
import { parkInfo } from "./SearchResults";


export default function SearchCard({info}: {info:parkInfo}) {
  return (
    <Link href={`/parks/${info.parkCode}`} className="w-full rounded-md flex flex-col h-[350px] overflow-hidden shadow-lg relative">
      <img className="w-full image object-cover h-[350px]" src={info.images[0].url} alt={info.images[0].altText} />
      <div className="px-6 py-4 overflow-hidden absolute bottom-0 bg-black bg-opacity-80">
        <h3 className="font-bold text-xl mb-2 text-white">{info.fullName}</h3>
        <h4 className="text-lg mb-2 text-white">{info.states}</h4>
        {/* <Link href={`/parks/${info.parkCode}`} 
          className="absolute bottom-0 left-0 w-full text-center m-0 py-7 bg-gradient-to-b from-transparent to-white" 
        >
          <span className="bg-green-800 text-white rounded-md font-bold p-4 hover:bg-slate-300 hover:border-transparent transition duration-150">Learn More</span>
        </Link> */}
      </div>
    </Link>
  )
}
