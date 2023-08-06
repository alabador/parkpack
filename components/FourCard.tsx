import ParkCard from "./ParkCard";

export default function FourCard() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="relative">
            <img className="rounded-sm" src="/natl-parks/zion.jpg" alt="Zion national park" />
            <p className="absolute text-white">Zion National Park</p>
        </div>
        <div className="relative">
            <img className="rounded-sm" src="/natl-parks/smoky-mountains.jpg" alt="Smoky mountains national park" />
            <p className="absolute text-white">Smoky Mountains National Park</p>
        </div>
        <ParkCard src="/natl-parks/zion.jpg" alt="Zion National Park" desc="Zion National Park"/>
    </div>
  )
}
