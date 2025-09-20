import Image from "next/image";
import TopBar from "./components/navigations/TopBar";

export default function Home() {
  return (
    <main>
      <TopBar />
      <h1 className="text-2xl text-center my-[20%]">Marn.co.uk</h1>
   </main>
  );
}
