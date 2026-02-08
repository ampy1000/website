import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me | Cody Wales",
  description:
    "Learn about Cody Wales — experience designer, business builder, and creative with a passion for human-centered innovation.",
};

const approaches = [
  {
    title: "Customer-First Mindset",
    text: "Bringing a deep understanding of user needs to the complex healthcare ecosystem, translating consumer insights into product strategy.",
  },
  {
    title: "Service Design",
    text: "Using tools such as journey mapping and service blueprinting to provide strategic insights that shape product development.",
  },
  {
    title: "Cross-Functional Collaboration",
    text: "Working with diverse stakeholders to enable breakthrough, best-in-class products and experiences.",
  },
  {
    title: "Consumer-Driven Innovation",
    text: "Championing methodologies that help teams identify unmet needs and develop solutions that resonate.",
  },
  {
    title: "Human-Centered Design",
    text: "Creating meaningful solutions through empathy and research that help patients and professionals.",
  },
  {
    title: "Strategic Innovation",
    text: "Orchestrating the collaboration between design and product teams to directly improve the healthcare experience.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-8 md:pt-32 md:pb-16">
        <div className="grid md:grid-cols-12 gap-12 items-end">
          <div className="md:col-span-7">
            <p className="text-warm font-semibold text-sm tracking-wide mb-6">
              About Me
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-foreground leading-[0.95] tracking-tight mb-8">
              Hey, I{"'"}m<br />
              <span className="text-warm">Cody.</span>
            </h1>
            <p className="text-lg md:text-xl text-body leading-relaxed max-w-lg">
              I am an experience designer, business builder and creative. I help
              organizations transform consumer insights into strategic innovation
              that drives business growth.
            </p>
          </div>
          <div className="md:col-span-5">
            <div className="rounded-3xl overflow-hidden hover-zoom shadow-[var(--shadow-lg)]">
              <Image
                src="/images/about-creative.jpg"
                alt="Creative workspace with drumsticks and design sketches"
                width={600}
                height={500}
                className="w-full h-[380px] object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Story Section - editorial split */}
      <section className="border-t border-border">
        <div className="max-w-6xl mx-auto px-6 py-24 md:py-32">
          <div className="grid md:grid-cols-12 gap-14">
            <div className="md:col-span-7">
              <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mb-8">My Story</h2>
              <div className="space-y-5 text-body leading-relaxed text-lg">
                <p>
                  My journey into healthcare began when a close friend{"'"}s snowmobile accident
                  showed me the profound impact of whole person care. While my pre-med aspirations
                  eventually led me to marketing, I discovered my true calling in{" "}
                  <span className="text-foreground font-semibold">understanding and connecting with people.</span>
                </p>
                <p>
                  As a seasoned customer experience (CX) and service design strategist, I help
                  organizations transform consumer insights into strategic innovation that drives
                  business growth. My expertise lies in designing and delivering human-centered
                  experiences that create measurable value.
                </p>
                <p className="text-muted">
                  Beyond my professional work, I{"'"}m a{" "}
                  <span className="text-warm font-semibold">national touring musician</span>,{" "}
                  <span className="text-warm font-semibold">sound bath facilitator</span>, and{" "}
                  <span className="text-warm font-semibold">founder of Flying W Entertainment</span>.
                  I love to laugh, be goofy, and believe deeply in the power of creative expression.
                </p>
              </div>
            </div>
            <div className="md:col-span-5 space-y-6">
              <div className="rounded-2xl border border-border p-8 bg-background hover:shadow-[var(--shadow-md)] transition-shadow">
                <h3 className="text-xs uppercase tracking-[0.2em] text-muted mb-5">Education</h3>
                <div className="space-y-5">
                  <div>
                    <p className="font-bold text-foreground">Master of Business Administration</p>
                    <p className="text-warm font-semibold text-sm mt-1">Rollins College &ndash; Crummer Graduate School of Business</p>
                  </div>
                  <div className="border-t border-border pt-5">
                    <p className="font-bold text-foreground">Bachelor of Business Administration</p>
                    <p className="text-warm font-semibold text-sm mt-1">Andrews University</p>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl border border-border p-8 bg-background hover:shadow-[var(--shadow-md)] transition-shadow">
                <h3 className="text-xs uppercase tracking-[0.2em] text-muted mb-5">Recognition</h3>
                <div>
                  <p className="font-bold text-foreground">ACHE of Central Florida Regent{"'"}s Award</p>
                  <p className="text-warm font-semibold text-sm mt-1">American College of Healthcare Executives</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section - numbered grid */}
      <section className="bg-foreground">
        <div className="max-w-6xl mx-auto px-6 py-24 md:py-32">
          <div className="mb-16">
            <p className="text-warm font-semibold text-sm tracking-wide mb-4">
              Methodology
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-background leading-tight">My Approach</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-background/10 rounded-3xl overflow-hidden">
            {approaches.map((item, i) => (
              <div key={item.title} className="bg-foreground p-8 md:p-10 group hover:bg-foreground/80 transition-colors">
                <span className="text-4xl font-extrabold text-background/10 group-hover:text-warm/30 transition-colors leading-none">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-bold text-background mt-4 mb-3 group-hover:text-warm transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-background/60 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Beliefs */}
      <section className="py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-warm font-semibold text-sm tracking-wide mb-4">
            Philosophy
          </p>
          <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mb-12">Key Beliefs</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <blockquote className="border-l-4 border-warm rounded-r-2xl bg-warm-light px-8 py-8">
              <p className="text-foreground leading-relaxed text-lg md:text-xl font-medium">
                &ldquo;Realize the value of a strong network &mdash; you can accomplish so much
                more with a diverse group than you can alone.&rdquo;
              </p>
            </blockquote>
            <blockquote className="border-l-4 border-warm rounded-r-2xl bg-warm-light px-8 py-8">
              <p className="text-foreground leading-relaxed text-lg md:text-xl font-medium">
                &ldquo;Feedback is a gift &mdash; the sooner and more often you{"'"}re willing
                to get it, the better the outcome of the product.&rdquo;
              </p>
            </blockquote>
          </div>
        </div>
      </section>
    </>
  );
}
