import MainNav from "../components/navigations/MainNav";

import OverlayLayer from "@/components/icons/nav/search/OverlayLayer";

export default function Home() {
  return (
    <main className="contents">
      <MainNav />
      <OverlayLayer />
      <div className="w-[70%] p-[4rem] outline mx-auto mt-[20%] flex flex-col items-center justify-around">
        <h1 className="text-4xl text-center">marn.co.uk</h1>
        <p className="w-2/3 text-center py-4">
          This is the home page and It&apos;s were main content would
          go
        </p>
      </div>
      ;
    </main>
  );
}
