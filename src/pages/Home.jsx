import React, { Fragment } from "react";
import Header from "../Header/Header";
import HeroSection from "../Hero-section/HeroSection";
import Company from "../Company section/Company";
import Offer from "../Offers/Offer";
import Courses from "../Course Section/Courses";
import AboutUs from "../components/AboutUs";
import Update from "../Getupdates/Update";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <Fragment>
      <Header />
      <HeroSection />
      <Company />
      <Offer />
      <Courses />
      <AboutUs />
      <Update />
      <Footer />
    </Fragment>
  );
};

export default Home;
