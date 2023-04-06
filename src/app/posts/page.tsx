import FilterablePosts from "@/components/FilterablePosts";
import { getAllPosts } from "@/service/posts";

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
