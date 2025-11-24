import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeHero from "./home/HomeHero";
import HomeBook from "./home/HomeBook";
import HomeFeatures from "./home/HomeFeatures";
import HomeServices from "./home/HomeServices";
import HomeStories from "./home/HomeStories";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <HomeHero />
        <HomeFeatures />
        <HomeServices />
        <HomeStories />
        <HomeBook />
      </main>

      <Footer />
    </>
  );
}
