import CarouselPosts from "@/components/CarouselPosts";
import FeaturedPosts from "@/components/FeaturedPosts";
import HeroProfile from "@/components/HeroProfile";

export default function Home() {
  return (
    <>
      <HeroProfile />
      {/* @ts-expect-error Async Server Component */}
      <FeaturedPosts />
      {/* @ts-expect-error Async Server Component */}
      <CarouselPosts />
    </>
  );
}
