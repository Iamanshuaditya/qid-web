import Analytics from "./components/Anyalatics";
import Business from "./components/Business";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Info from "./components/Info";

import Navbar from "./components/navbar";

export default function HomePage() {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <main>
        <Hero />
        <Info />
        <Business />
        <Analytics />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
