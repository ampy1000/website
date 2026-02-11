import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { blogPosts } from "./data";
import CategoryFilter from "./CategoryFilter";

export const metadata: Metadata = {
  title: "Blog | Cody Wales",
  description:
    "Thoughts on experience design, innovation strategy, healthcare, and the messy middle between business and creativity.",
};

export default function BlogPage() {
  const featured = blogPosts[0];
  const remaining = blogPosts.slice(1);
  const categories = [
    "All",
    ...Array.from(new Set(blogPosts.map((p) => p.category))),
  ];

  return (
    <>
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-8 md:pt-32 md:pb-16">
        <div className="grid md:grid-cols-12 gap-8">
          <div className="md:col-span-7">
            <p className="text-warm font-semibold text-sm tracking-wide mb-6">
              Blog
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-foreground leading-[0.95] tracking-tight mb-8">
              Thinking<br />
              Out <span className="text-warm">Loud.</span>
            </h1>
            <p className="text-lg md:text-xl text-body leading-relaxed max-w-xl">
              Notes on experience design, innovation strategy, and everything
              in between. Some of this is polished. Some of it{"'"}s just me
              working through an idea in public.
            </p>
          </div>
          <div className="md:col-span-5 flex items-end">
            <p className="text-muted leading-relaxed max-w-sm">
              I write about the things I{"'"}m learning, building, and
              questioning -- mostly at the intersection of business, design,
              and what it means to actually serve people well.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <CategoryFilter categories={categories} />

      {/* Featured Post */}
      <section className="max-w-6xl mx-auto px-6 pb-12">
        <Link
          href={`/blog/${featured.slug}`}
          className="block rounded-3xl overflow-hidden border border-border bg-foreground group hover-zoom"
          data-category={featured.category}
        >
          <div className="grid md:grid-cols-12">
            <div className="md:col-span-7 relative h-[300px] md:h-[450px] overflow-hidden">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="md:col-span-5 p-8 md:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-warm font-semibold text-sm tracking-wide">
                  {featured.category}
                </span>
                <span className="w-1 h-1 rounded-full bg-background/30" />
                <span className="text-background/50 text-sm">
                  {featured.readTime}
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-background mb-4 leading-tight group-hover:text-warm transition-colors">
                {featured.title}
              </h2>
              <p className="text-background/60 leading-relaxed mb-6">
                {featured.excerpt}
              </p>
              <div className="flex items-center gap-4">
                <span className="text-background/40 text-sm">
                  {featured.date}
                </span>
                <div className="flex flex-wrap gap-2">
                  {featured.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-background/10 text-background/70 text-xs font-semibold border border-background/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Link>
      </section>

      {/* Post Grid */}
      <section className="border-t border-border">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {remaining.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group rounded-3xl border border-border overflow-hidden bg-background hover:shadow-[var(--shadow-lg)] transition-shadow hover-zoom"
                data-category={post.category}
              >
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors" />
                </div>
                <div className="p-7">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-warm font-semibold text-xs tracking-wide uppercase">
                      {post.category}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-border" />
                    <span className="text-muted text-xs">{post.readTime}</span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2 leading-snug group-hover:text-warm-deep transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-body leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-muted text-xs">{post.date}</span>
                    <span className="text-warm text-xs font-semibold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
                      Read
                    </span>
                  </div>
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
                Stay Connected
              </p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-background leading-tight">
                Want to keep the<br />
                <span className="text-warm">conversation going?</span>
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
