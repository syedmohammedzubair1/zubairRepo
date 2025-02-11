import React, { useRef } from "react";
import "./Home.css";
import Navbar1 from "../../components/NavBar/Navbar";
import Herosection from "../../components/HomeComponent/Herosection";
import Carousel from "../../components//HomeComponent/Carousel";
import Homepageswiper from "../../components/HomeComponent/homePageSwiper";
import HomeMin from "../../components/HomeComponent/HomeMin";

const OHome = () => {
  const heroSectionRef = useRef(null);
  const carouselRef = useRef(null);
  const homeMinRef = useRef(null);
  const homePageSwiperRef = useRef(null);

  // Scroll function to handle section scrolling
  const scrollToSection = (section) => {
    switch (section) {
      case "herosection":
        heroSectionRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "carousel":
        carouselRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "contact":
        homeMinRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "homepageSwiper":
        homePageSwiperRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      default:
        break;
    }
  };

  return (
    <>
      
      <Navbar1 scrollToSection={scrollToSection} />
      
      <div ref={heroSectionRef}>
        <Herosection />
      </div>
      
      <div ref={carouselRef}>
        <Carousel />
      </div>
      
      <div ref={homeMinRef}>
        <HomeMin />
      </div>
      
      <div ref={homePageSwiperRef}>
        <Homepageswiper />
      </div>
    </>
  );
};

export default OHome;
