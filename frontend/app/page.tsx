import CategoryMainHome from "./components/CategorySection/CategoryMainSection";
import FeaturesBanner from "./components/Featured/FeatureBanner";
import FeaturedProducts from "./components/Featured/FeaturedProducts";
import BrandStory from "./components/OurBrand";
import Slider from "./components/Slider/Slider";
import NewArrivalsSection from "./NewArrivalsSection";

export default function Home() {
  return (
    <main className=" ">
      <Slider />

      <BrandStory />
      <CategoryMainHome />
      <FeaturedProducts />

      <NewArrivalsSection />
      <FeaturesBanner />
    </main>
  );
}
