import { notFound } from "next/navigation";
import { getPostData, getPostSlugs } from "@/lib/posts";

type Props = {
    params: {
        slug: string;
    };
};

export async function generateStaticParams() {
    const slugs = getPostSlugs();
    return slugs.map((slug) => ({ slug }));
}

export default async function BlogPost(props : Props) {
    const { params } = await props;
    const post = await getPostData(params.slug);
    if (!post) return notFound();

    return (
        <main className="max-w-2xl mx-auto py-8 px-4">
            <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
            <p className="text-sm text-gray-500 mb-6">{post.date}</p>
            <article
                className="prose prose-neutral"
                dangerouslySetInnerHTML={{ __html: post.contentHtml }}
            />
        </main>
    );
}
