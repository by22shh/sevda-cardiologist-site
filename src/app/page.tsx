import Hero from "@/components/Hero";
import About from "@/components/About";
import Benefits from "@/components/Benefits";
import TreatmentProfile from "@/components/TreatmentProfile";
import LearningProcess from "@/components/LearningProcess";
import StatsVisualization from "@/components/StatsVisualization";
import Pricing from "@/components/Pricing";
import BookingForm from "@/components/BookingForm";
import Testimonials from "@/components/Testimonials";
import ColleaguesOpinions from "@/components/ColleaguesOpinions";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import WaveDivider from "@/components/WaveDivider";
import ScrollToTop from "@/components/ScrollToTop";
import FloatingContact from "@/components/FloatingContact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />

      <div className="relative">
        <WaveDivider variant="top" color="white" />
        <About />
        <WaveDivider variant="bottom" color="slate" />
      </div>

      <Benefits />

      <div className="relative">
        <WaveDivider variant="top" color="white" />
        <TreatmentProfile />
        <WaveDivider variant="bottom" color="slate" />
      </div>

      <div className="relative">
        <WaveDivider variant="top" color="white" />
        <LearningProcess />
        <WaveDivider variant="bottom" color="slate" />
      </div>

      <StatsVisualization />

      <div className="relative">
        <WaveDivider variant="top" color="white" />
        <Pricing />
        <WaveDivider variant="bottom" color="slate" />
      </div>

      <BookingForm />

      <div className="relative">
        <WaveDivider variant="top" color="slate" />
        <Testimonials />
        <WaveDivider variant="bottom" color="white" />
      </div>

      <div className="relative">
        <WaveDivider variant="top" color="white" />
        <ColleaguesOpinions />
        <WaveDivider variant="bottom" color="slate" />
      </div>

      <FAQ />

      <div className="relative">
        <WaveDivider variant="top" color="slate" flip={true} />
        <Contact />
      </div>

      <ScrollToTop />
      <FloatingContact />
    </main>
  );
}
