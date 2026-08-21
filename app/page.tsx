import GlobalCTASection from "@/components/section/GlobalCTASection";
import HeroSection from "@/components/section/HeroSection";
import PartnerSection from "@/components/section/PartnerSection";
import SecurityFAQSection from "@/components/section/SecurityFAQSection";
import ShopSection from "@/components/section/ShopSection";


export default function Home() {
  return (
    <div className="flex-1">
      <HeroSection />
      <PartnerSection/>
      <ShopSection/>
      <SecurityFAQSection/>
      <GlobalCTASection/>
    </div>
  );
}
