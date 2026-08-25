import FeaturedCourses from "@/components/FeaturedCourses";
import GridSmallBackgroundDemo from "@/components/GridSmallBackgroundDemo";
import HeroSection from "@/components/HeroSection";
import TestimonialCards from "@/components/TestimonialCards";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/0.96 antialiased
    bg-grid-white/0.02">
      <HeroSection/>
      <FeaturedCourses/>
      <WhyChooseUs />
      <GridSmallBackgroundDemo>
        <TestimonialCards />
      </GridSmallBackgroundDemo>
      <UpcomingWebinars/>
    </main>
  );
}
