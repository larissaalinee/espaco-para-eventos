import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { About } from "./components/about";
import { Structure } from "./components/structure";
import { Gallery } from "./components/gallery";
import { HowItWorks } from "./components/how-it-works";
import { CancellationPolicy } from "./components/cancellation-policy";
import { Location } from "./components/location";
import { VisitSection } from "./components/visit-section";
import { VideoSection } from "./components/video-section";
import { CtaSection } from "./components/cta-section";
import { Footer } from "./components/footer";
import { WhatsappFloat } from "./components/whatsapp-float";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <HowItWorks />
        <About />
        <Structure />
        <Gallery />
        <VideoSection />
        <Location />
        <VisitSection />
        <CtaSection />
        <CancellationPolicy />
      </main>
      <Footer />
      <WhatsappFloat />
    </>
  );
}
