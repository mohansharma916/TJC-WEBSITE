import Image from "next/image";
import Header from "./components/Header";
import FeaturedStory from "./components/FeaturedStory";
import TopStories from "./components/TopStory";
import LatestStories from "./components/LatestStory";
import UpcomingStreaming from "./components/UpcomingStreaming";
import AllCategoryStory from "./components/AllCategoryStory";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
    <Header />
    <main className="container mx-auto px-4 py-6">
      <FeaturedStory />
      <TopStories />
      <div className="flex flex-col md:flex-row gap-6 mt-8">
        <LatestStories />
    <AllCategoryStory />
        <UpcomingStreaming />
      </div>
    </main>
  </div>
  );
}
