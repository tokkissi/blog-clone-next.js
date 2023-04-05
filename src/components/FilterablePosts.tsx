"use client";

import { Post } from "@/service/posts";
import { useState } from "react";
import Categories from "./Categories";
import PostsGrid from "./PostsGrid";

type Props = {
  posts: Post[];
  categories: string[];
};

export default function FilterablePosts({ posts, categories }: Props) {
  const [selected, setSelected] = useState("All Posts");

  const filteredPosts =
    selected === "All Posts"
      ? posts
      : posts.filter((post) => post.category === selected);
  return (
    <section className="flex m-4">
      <PostsGrid posts={filteredPosts} />
      <Categories
        categories={["All Posts", ...categories]}
        selected={selected}
        onClick={setSelected}
      />
    </section>
  );
}
