// src/app/page.tsx
import { getSortedPostsData } from "@/lib/posts";
import { Posts } from "@/components/Posts";

export default function Home() {
  const allPosts = getSortedPostsData(); // ← sincronía válida en App Router

  return (
    <div>
      <Posts posts={allPosts} />
    </div>
  );
}
