import Link from "next/link";

export default function Hero() {
  return (
    <section 
        className="h-[70vh] bg-[url(/yosemite-hero.jpg)] bg-no-repeat bg-left-top
        text-white flex flex-col justify-center pl-8 lg:pl-16 pr-4 bg-slate-400 bg-blend-multiply ">
        <div className="text-center w-full">
            <h1 className="text-5xl sm:text-6xl font-bold">Discover America's National Parks</h1>
            <h2 className="mt-8 text-md sm:text-lg">Plan your next trip to one of over 400+ national parks in the United States. </h2>
        </div>
        <div className="flex gap-8 w-full justify-center pt-8">
          <Link href="/parks" className="bg-green-800 rounded-md font-bold p-4 hover:bg-slate-300 hover:border-transparent transition duration-150">Visit a Park</Link>
          {/* <Link href="/activities" className="border-green-800 border-2 p-4">Activities</Link> */}
        </div>
    </section>
  );
}
