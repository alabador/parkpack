import Hero from '@/app/components/Hero'
import ParkCard from '@/components/ParkCard'
import Searchbar from '@/components/Searchbar'

export default function Home() {
  return (
    <main className="min-h-screen ">
      <Hero></Hero>
      <Searchbar />
    </main>
  )
}
