// src/components/Posts.tsx
import Link from "next/link";

type Post = {
    slug: string;
    title: string;
    excerpt: string;
    date: string;
};

type Props = {
    posts: Post[];
};

export function Posts({ posts }: Props) {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Posts</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {posts.map((post) => (
                    <div
                        key={post.slug}
                        className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition"
                    >
                        <Link href={`/blog/${post.slug}`}>
                            <h2 className="text-xl font-semibold hover:text-blue-500 cursor-pointer">
                                {post.title}
                            </h2>
                        </Link>
                        <p className="text-sm text-gray-500">{post.date}</p>
                        <p className="text-gray-700 mt-2">{post.excerpt}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
