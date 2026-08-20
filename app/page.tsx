import GlobalCTASection from "@/components/section/GlobalCTASection";
import HeroSection from "@/components/section/HeroSection";


export default function Home() {
  return (
    <div className="flex-1">
      <HeroSection />
      <GlobalCTASection/>
    </div>
  );
}
