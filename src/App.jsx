import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './Nav'
import Hero from './hero'
import Stats from './Stats'
import About from './About'
import WhyChoose from './Why'
import Amenities from './Aminities'
import ProjectShowcase from './Project'
import Location from './Location'
import Pricing from './Price'
import FloorPlans from './FloorPlan'
import Gallery from './Gallery'
import FAQ from './Faq'
import Contact from './contact'
import Footer from './Footer'
import PropertyLeadPopup from './Popup'
import { ArticleDetail, ArticlesPage } from './Articles'

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [route, setRoute] = useState(window.location.hash || "#home");

  useEffect(() => {
    const handleRoute = () => setRoute(window.location.hash || "#home");
    window.addEventListener("hashchange", handleRoute);
    return () => window.removeEventListener("hashchange", handleRoute);
  }, []);

  useEffect(() => {
    const popupShown = sessionStorage.getItem("home-popup");

    if (!popupShown) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        // sessionStorage.setItem("home-popup", "true");
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, []);

  const articleSlug = route.startsWith("#article/") ? route.slice(9) : null;
  const isArticlesRoute = route === "#articles" || Boolean(articleSlug);

  useEffect(() => {
    if (!isArticlesRoute) {
      document.title = "Neo Downtown | Premium Commercial Property in Lucknow";
      const meta = document.querySelector('meta[name="description"]');
      if (meta) {
        meta.content = "Neo Downtown offers premium office and retail spaces in Gomti Nagar Extension, Lucknow. Explore project details, location and property insights.";
      }
      document.getElementById("article-schema")?.remove();
    }
  }, [isArticlesRoute]);

  if (isArticlesRoute) {
    return (
      <>
        <Navbar />
        {articleSlug ? <ArticleDetail slug={articleSlug} /> : <ArticlesPage />}
        <Footer />
      </>
    );
  }

  return (
    <>
     <PropertyLeadPopup
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    <Navbar/>
    <Hero/>
    <Stats/>
    <Amenities/>
    <About/>
    <Gallery/>
    <WhyChoose/>
    <ProjectShowcase/>
    <Location/>
    <Pricing/>
    <FloorPlans/>
    <FAQ/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App
