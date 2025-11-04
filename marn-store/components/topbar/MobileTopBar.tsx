import PromoTicker from "./PromoTicker";


export default function MobileTopBar() {

    return (
      <header className="w-screen bg-newtral-100 text-[12px] text-black font-[600] border-b border-gray-300">
        <nav
          aria-label="Top navigation"
          className="max-w-screen-2xl mx-auto flex justify-center mobile:justify-center items-center h-[40px] px-4 gap-2 tracking-[0.15em]"
        >
          {/* Left section*/}

          {/* <ul className="mobile:hidden tablet:hidden  flex flex-wrap justify-center h-full items-stretch role=list">
            <li className="px-8 flex items-center h-full border-r-2 border-gray-300">
              <a
                href="#"
                className="hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus-ring-black"
              >
                Marn Hire
              </a>
            </li>
            <li className="px-8 flex items-center h-full border-r-2 border-gray-300">
              <a
                href="#"
                className="hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus-ring-black"
              >
                Gift Cards
              </a>
            </li>
            <li className="px-8 border-r-2 border-gray-300 flex items-center">
              <a
                href="#"
                className="hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus-ring-black "
              >
                Editorial
              </a>
            </li>
          </ul> */}

          {/* Central section*/}
          <div className=" mobile:w-full text-center px-4" aria-live="polite">
            <PromoTicker />
          </div>
          {/* Right section*/}
          {/* <ul className="mobile:hidden tablet:hidden flex flex-wrap justify-center md:justify-end h-full items-stretch  divide-x divide-gray-300 role=list ">
            <li className="px-8 flex items-center  border-l-2 border-gray-300">
              <a
                href="#"
                className="hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus-ring-black"
              >
                Find a store
              </a>
            </li>
            <li className="px-8 flex items-center">
              <a href="#">
                GBP £ <span className="text-xl px-[2px]">⌵ </span>
              </a>
            </li>
          </ul> */}
        </nav>
      </header>
    );
}