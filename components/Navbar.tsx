import Image from "next/image";
import Link from "next/link";
import { Josefin_Sans } from "next/font/google";

const josefin = Josefin_Sans({subsets: ['latin']})

export default function Navbar() {
  return (
    <header className="flex justify-between items-center bg-white p-4">
        <div className="flex flex-col justify-center items-center">
            <Image src="/ParkPack.png" width={100} height={100} alt="ParkPack logo of tent and backpack" />
            <p className={`text-xl ${josefin.className}`}>ParkPack</p>
        </div>
        <nav className="flex gap-4">
            <Link href='/parks'>Parks</Link>
            <Link href='/activities'>Activities</Link>
        </nav>
    </header>
  )
}
