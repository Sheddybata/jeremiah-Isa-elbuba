import About from "@/components/About";
import Book from "@/components/Book";
import BookPromo from "@/components/BookPromo";
import Contact from "@/components/Contact";
import Faith from "@/components/Faith";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Work from "@/components/Work";

export default function Home() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Work />
        <Faith />
        <BookPromo />
        <Book />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
