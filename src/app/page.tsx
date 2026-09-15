import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Wellness from "@/components/Wellness";
import Resort from "@/components/Resort";
import Stay from "@/components/Stay";
import Experiences from "@/components/Experiences";
import Location from "@/components/Location";
import Dining from "@/components/Dining";
import Trust from "@/components/Trust";
import Journal from "@/components/Journal";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="w-full flex flex-col bg-canvas-ivory selection:bg-accent-gold/20 selection:text-forest-deep overflow-hidden">
      <Navigation />
      <Hero />
      <Wellness />
      <Resort />
      <Stay />
      <Experiences />
      <Location />
      <Dining />
      <Trust />
      <Journal />
      <Contact />
      <Footer />
    </main>
  );
}
