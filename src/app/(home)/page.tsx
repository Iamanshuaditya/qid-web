import React from "react";
import Hero from "../components/Hero";
import Business from "../components/Business";
import Analytics from "../components/Anyalatics";
import Info from "../components/Info";

function Home() {
  return (
    <div>
      <main>
        <Hero />
        <Info />
        <Business />
        <Analytics />
      </main>
    </div>
  );
}

export default Home;
