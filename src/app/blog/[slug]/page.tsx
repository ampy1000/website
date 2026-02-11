import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { blogPosts } from "../data";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} | Cody Wales`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const currentIndex = blogPosts.findIndex((p) => p.slug === slug);
  const relatedPosts = blogPosts
    .filter((p) => p.slug !== slug)
    .slice(0, 3);

  return (
    <>
      {/* Back link */}
      <section className="max-w-6xl mx-auto px-6 pt-20 md:pt-28">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-muted hover:text-foreground transition-colors text-sm font-semibold uppercase tracking-wider"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 16l-4-4m0 0l4-4m-4 4h18"
            />
          </svg>
          All Posts
        </Link>
      </section>

      {/* Article Header */}
      <article className="max-w-6xl mx-auto px-6 pt-8 pb-16">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-warm font-semibold text-sm tracking-wide">
              {post.category}
            </span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span className="text-muted text-sm">{post.readTime}</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span className="text-muted text-sm">{post.date}</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-foreground leading-[1.05] tracking-tight mb-8">
            {post.title}
          </h1>
          <p className="text-xl text-body leading-relaxed">
            {post.excerpt}
          </p>
        </div>

        {/* Featured Image */}
        <div className="relative h-[300px] md:h-[500px] rounded-3xl overflow-hidden mt-12 mb-16">
          <Image
            src={post.image}
            alt={post.title}
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </div>

        {/* Article Body */}
        <div className="max-w-3xl mx-auto">
          <div className="space-y-6">
            {post.content.map((paragraph, i) => (
              <p
                key={i}
                className={`text-lg leading-relaxed ${
                  i === 0
                    ? "text-foreground font-medium text-xl"
                    : "text-body"
                }`}
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-border">
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-1.5 rounded-full bg-warm-light text-warm-deep text-xs font-semibold"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Post Navigation */}
          <div className="mt-12 pt-8 border-t border-border flex justify-between items-center">
            {currentIndex > 0 ? (
              <Link
                href={`/blog/${blogPosts[currentIndex - 1].slug}`}
                className="group flex items-center gap-3"
              >
                <svg
                  className="w-4 h-4 text-muted group-hover:text-warm transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 16l-4-4m0 0l4-4m-4 4h18"
                  />
                </svg>
                <div>
                  <p className="text-xs text-muted uppercase tracking-wider">
                    Previous
                  </p>
                  <p className="text-sm font-semibold text-foreground group-hover:text-warm-deep transition-colors">
                    {blogPosts[currentIndex - 1].title}
                  </p>
                </div>
              </Link>
            ) : (
              <div />
            )}
            {currentIndex < blogPosts.length - 1 ? (
              <Link
                href={`/blog/${blogPosts[currentIndex + 1].slug}`}
                className="group flex items-center gap-3 text-right"
              >
                <div>
                  <p className="text-xs text-muted uppercase tracking-wider">
                    Next
                  </p>
                  <p className="text-sm font-semibold text-foreground group-hover:text-warm-deep transition-colors">
                    {blogPosts[currentIndex + 1].title}
                  </p>
                </div>
                <svg
                  className="w-4 h-4 text-muted group-hover:text-warm transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </article>

      {/* Related Posts */}
      <section className="border-t border-border">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="grid md:grid-cols-12 gap-8 mb-12">
            <div className="md:col-span-5">
              <p className="text-warm font-semibold text-sm tracking-wide mb-4">
                Keep Reading
              </p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-foreground leading-tight">
                More Posts
              </h2>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {relatedPosts.map((related) => (
              <Link
                key={related.slug}
                href={`/blog/${related.slug}`}
                className="group rounded-3xl border border-border overflow-hidden bg-background hover:shadow-[var(--shadow-lg)] transition-shadow hover-zoom"
              >
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={related.image}
                    alt={related.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-warm font-semibold text-xs tracking-wide uppercase">
                      {related.category}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-border" />
                    <span className="text-muted text-xs">
                      {related.readTime}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-foreground leading-snug group-hover:text-warm-deep transition-colors">
                    {related.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-foreground">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8">
              <p className="text-warm font-semibold text-sm tracking-wide mb-4">
                Conversation
              </p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-background leading-tight">
                Got thoughts on this?<br />
                <span className="text-warm">I{"'"}d love to hear them.</span>
              </h2>
            </div>
            <div className="md:col-span-4 flex md:justify-end">
              <a
                href="https://www.linkedin.com/in/codywales"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-3.5 rounded-full bg-warm text-white text-xs uppercase tracking-[0.15em] font-semibold hover:bg-warm-deep transition-colors"
              >
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
