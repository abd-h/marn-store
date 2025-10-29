import Image from "next/image";
import TopBar from "../components/navigations/TopBar";
import MainNav from "../components/navigations/MainNav";
import SearchBanner from "@/components/icons/nav/search/SearchBanner";
import OverlayLayer from "@/components/icons/nav/search/OverlayLayer";




export default function Home() {
  return (
    <main className="contents">
      <MainNav />
      <OverlayLayer />
      <div className="w-[40rem] outline mx-auto flex flex-col gap-2 py-8 mt-[10%] items-center justify-center">
        <h1 className="text-2xl text-center my-[20%]">Marn.co.uk</h1>
        <p>
          This is the home page and It&apos;s your store were main content would
          go
        </p>
      </div>
      ;
    </main>
  );
}
