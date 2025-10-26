import MainNav from "./MainNav";
import OverlayLayer from "./OverlayLayer";

export default function DebugPage() {
  return (
    <main className="contents">
      <MainNav />
      <OverlayLayer />
      <div className="mt-[120px] p-8">
        <p>Main content goes here</p>
      </div>
    </main>
  );
}
