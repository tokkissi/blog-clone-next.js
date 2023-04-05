import FilterablePosts from "@/components/FilterablePosts";
import { getAllPosts } from "@/service/posts";

export default async function PostsPage() {
  // 전체 포스트에서 카테고리만 추출하여 중복을 제거한 배열을 만들어준다
  // 클라이언트 랜더링용 컴포넌트를 만들어주고 거기로 포스트들과 카테고리를 넘겨준다
  // 클라이언트 컴포넌트 안에서 아래를 진행한다
  // 카테고리 배열은 카테고리 컴포에 인자로 넘겨준다
  // 카테고리 컴포는 인자로 받은 배열로 카테고리를 map 으로 만들어준다
  // 카테고리마다 onclick 을 넣어서 해당 카테고리와 같은 포스트만 filter로 가져온다
  // 가져온 포스트를 포스트 그리드 컴포의 인자로 넣어준다

  const allPosts = await getAllPosts();
  const duplicatedCategories = allPosts.map((post) => post.category);
  const categories = [...new Set(duplicatedCategories)];

  return (
    <section>
      <FilterablePosts posts={allPosts} categories={categories} />
    </section>
  );
}
