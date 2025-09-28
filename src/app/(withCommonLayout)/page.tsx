import HeroSection from "@/components/Home/HeroSection";
import FindTravelBuddy from "@/components/Home/FindTravelBuddy";
import WhyTravelWithUs from "@/components/Home/WhyTravelWithUs";
import TopDestination from "@/components/Home/TopDesitination";
import HowTripLinkWork from "@/components/Home/HowTripLinkWork";
import TravelWorldwide from "@/components/Home/TravelWorldwide";
import TrustedTravelBuddies from "@/components/Home/TrustedTravelBuddies";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <HowTripLinkWork />
      <TrustedTravelBuddies />
      <FindTravelBuddy />
      <WhyTravelWithUs />
      <TopDestination />
      <TravelWorldwide />
    </>
  );
};

export default HomePage;
