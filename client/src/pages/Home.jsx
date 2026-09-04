import { useState, useEffect } from "react";
import HeroBanner from "../components/home/HeroBanner";
import CategoryPills from "../components/home/CategoryPills";
import HotCategories from "../components/home/HotCategories";
import FestiveSection from "../components/home/FestiveSection";
import HiddenGems from "../components/home/HiddenGems";
import ShoppableFeed from "../components/home/ShoppableFeed";
import InTheSpotlight from "../components/home/InTheSpotlight";
import TrendPicks from "../components/home/TrendPicks";
import { getHomePageData, defaultHomeData } from "../services/homeService";

const Home = () => {
  const [data, setData] = useState(defaultHomeData);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    const loadData = async () => {
      try {
        const homeData = await getHomePageData();
        if (isMounted && homeData) {
          setData(homeData);
        }
      } catch (err) {
        console.error("Error loading home page data:", err);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    loadData();
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="w-full bg-white space-y-0 text-slate-800 antialiased">
      {/* 1. Hero Promotional Banner */}
      <HeroBanner data={data.heroBanner} />

      {/* 2. Top Category Pills Bar */}
      <CategoryPills items={data.categoryPills} />

      {/* 3. Hot & Happening Categories (Stamp / Scalloped Cards) */}
      <HotCategories items={data.hotCategories} />

      {/* 4. Festive Ganesh Chaturthi Edit (Ruby/Crimson Arch Cards) */}
      <FestiveSection data={data.festive} />

      {/* 5. Hidden Gems Artisanal Showcase (Dark Warm Brown Luxury) */}
      <HiddenGems data={data.hiddenGems} />

      {/* 6. Shoppable Influencer & Social Feed */}
      <ShoppableFeed items={data.shoppableFeed} />

      {/* 7. In The Spotlight Brand Grid */}
      <InTheSpotlight items={data.spotlightBrands} />

      {/* 8. Style / Trend Picks */}
      <TrendPicks items={data.trendPicks} />
    </div>
  );
};

export default Home;
