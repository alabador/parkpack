export default function Hero() {
  return (
    <section 
        className="h-[70vh] bg-[url(/yosemite-hero.jpg)] bg-no-repeat bg-left-top
        text-white flex items-center pl-8 lg:pl-16 pr-4 bg-slate-400 bg-blend-multiply ">
        <div className="max-w-[60ch]">
            <h1 className="text-6xl font-bold">Discover America's National Parks</h1>
            <h2 className="mt-8 text-lg">Plan your next trip to one of over 400+ national parks in the United States. </h2>
        </div>
    </section>
  );
}
