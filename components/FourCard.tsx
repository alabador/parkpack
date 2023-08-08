import ParkCard from "./ParkCard";

export default function FourCard() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 p-8 md:p-24 lg:p-8">
        <ParkCard src="/natl-parks/zion.jpg" alt="Zion National Park" desc="Zion"/>
        <ParkCard src="/natl-parks/smoky-mountains.jpg" alt="Smoky Mountains national park" desc="Smoky Mountains"/>
        <ParkCard src="/natl-parks/glacier-nat-park.jpg" alt="Glacier National Park" desc="Glacier"/>
        <ParkCard src="/natl-parks/antelope-canyon.jpg" alt="Antelope Canyon national park" desc="Antelope Canyon"/>
    </div>
  )
}
