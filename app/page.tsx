import Footer from "./components/Footer";
import Category from "./components/categories";
import Header from "./components/header";
import FAQ from "./components/home/FAQ/FAQ";
import ReviewsSection from "./components/home/ReviewsSection/ReviewsSection";
import StatsSection from "./components/home/StatsSection";
import Test from "./components/home/Test";
import NewInventory from "./components/home/new-Items";
import MarqueeText from "./components/home/running-text";

export default function Home() {
    return (
        <div className="font-[family-name:var(--font-geist-sans)]">
            {/* <div className="w-full h-[95dvh] bg-[#274247] flex "> */}
            <Header />

            <main className="flex flex-col  bg-[#F0F0F0]">
                <Category />
                <MarqueeText text={"Mastery is a never-ending exploration"} />
                {/* <NewInventory /> */}
                <StatsSection />
                <ReviewsSection />
                <FAQ />
                <Test />
            </main>
            <Footer />
        </div>
    );
}
