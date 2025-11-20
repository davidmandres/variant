"use client";

import Footer from "../components/Footer";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import Popup from "../components/Popup";
import HomeAbout from "./HomeAbout";
import HomeBook from "./HomeBook";
import HomeFeatures from "./HomeFeatures";
import HomeServices from "./HomeServices";
import HomeStories from "./HomeStories";

export default function Home() {
  return (
    <>
      <Navigation />

      <Header />

      <main>
        <HomeAbout />
        <HomeFeatures />
        <HomeServices />
        <HomeStories />
        <HomeBook />
      </main>

      <Footer />

      <Popup />
    </>
  );
}
