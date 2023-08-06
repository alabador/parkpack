import Image from "next/image";
import Link from "next/link";
import { Josefin_Sans } from "next/font/google";

const josefin = Josefin_Sans({subsets: ['latin']})

export default function Navbar() {
  return (
    <header className={`flex justify-between items-center bg-white px-6 py-4 ${josefin.className}`}>
        <div className="flex flex-col justify-center items-center">
            <Link href='/'>
              <Image src="/ParkPack.png" width={75} height={50} alt="ParkPack logo of tent and backpack" />
              <p className={`text-xl ${josefin.className}`}>ParkPlan</p> 
            </Link>
        </div>
        <nav className="flex gap-4">
            <Link href='/parks'>PARKS</Link>
            <Link href='/activities'>ACTIVITIES</Link>
        </nav>
    </header>
  )
}
