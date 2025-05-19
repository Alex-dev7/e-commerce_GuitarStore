import Header from "./components/header";


export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      {/* <div className="w-full h-[95dvh] bg-[#274247] flex "> */}
      <Header />

      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">

      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
      </footer>
    </div>
  );
}
