import { useState } from "react";
import Navigation from "./components/Navigation";
import HeroPage from "./components/HeroPage";
import AboutPage from "./components/AboutPage";
import JoinWaitlist from "./components/JoinWaitlist";
import Contact from "./components/Contact";

function App() {
  const [currentPage, setCurrentPage] = useState("about");
  return (
    <div className="container mx-auto max-w-7xl px-4">
      <Navigation currentPage={currentPage} />
      <HeroPage setCurrentPage={setCurrentPage} currentPage={currentPage} />
      {currentPage === "about" ? <AboutPage /> : <JoinWaitlist />}
      <Contact />
    </div>
  );
}

export default App;
