import GlobalCTASection from "@/components/section/GlobalCTASection";
import HeroSection from "@/components/section/HeroSection";
import SecurityFAQSection from "@/components/section/SecurityFAQSection";


export default function Home() {
  return (
    <div className="flex-1">
      <HeroSection />
      <SecurityFAQSection/>
      <GlobalCTASection/>
    </div>
  );
}
