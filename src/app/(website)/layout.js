import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SectionRevealManager from "@/components/SectionRevealManager";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";

export default function WebsiteLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
      <SectionRevealManager />
      <WhatsAppFloatingButton />
    </>
  );
}
