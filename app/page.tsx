import AccountFeatures from "@/components/section/AccountFeatures";
import FeatureSection from "@/components/section/FeatureSection/FeatureSection";
import GlobalCTASection from "@/components/section/GlobalCTASection";
import HeroSection from "@/components/section/HeroSection/HeroSection";
import PartnerSection from "@/components/section/PartnerSection";
import SecurityFAQSection from "@/components/section/SecurityFAQSection";
import ShopSection from "@/components/section/ShopSection";


export default function Home() {
  return (
    <div className="flex-1">
      <HeroSection />
      <PartnerSection />
      <FeatureSection />
      <AccountFeatures />
      <ShopSection />
      <SecurityFAQSection />
      <GlobalCTASection />
    </div>
  );
}
