import Footer from "./components/Footer";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Popup from "./components/Popup";
import HomeAbout from "./home/HomeAbout";
import HomeBook from "./home/HomeBook";
import HomeFeatures from "./home/HomeFeatures";
import HomeServices from "./home/HomeServices";
import HomeStories from "./home/HomeStories";

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
