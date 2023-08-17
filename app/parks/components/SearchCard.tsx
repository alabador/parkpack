import { parkInfo } from "./SearchResults";


export default function SearchCard({info}: {info:parkInfo}) {
  return (
    <div className="w-full rounded-md flex flex-col h-[500px] overflow-hidden shadow-lg">
      <img className="w-full image object-cover h-[300px]" src={info.images[0].url} alt={info.images[0].altText} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{info.fullName}</div>
        <p className="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
        </p>
      </div>
    </div>
  )
}
