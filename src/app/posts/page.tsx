import FilterablePosts from "@/components/FilterablePosts";
import { getAllPosts } from "@/service/posts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Posts",
  description: "블로그 글 전체보기",
};

export default async function PostsPage() {
  const allPosts = await getAllPosts();
  const duplicatedCategories = allPosts.map((post) => post.category);
  const categories = [...new Set(duplicatedCategories)];

  return (
    <section>
      <FilterablePosts posts={allPosts} categories={categories} />
    </section>
  );
}
