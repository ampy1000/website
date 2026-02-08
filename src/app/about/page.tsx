import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me | Cody Wales",
  description:
    "Learn about Cody Wales — experience designer, business builder, and creative with a passion for human-centered innovation.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-14 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-accent-light font-medium mb-6">
              About Me
            </p>
            <h1 className="font-sans text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-8 text-balance">
              Hey, I&apos;m Cody.
            </h1>
            <p className="text-lg text-body leading-relaxed">
              I am an experience designer, business builder and creative. I help
              organizations transform consumer insights into strategic innovation
              that drives business growth.
            </p>
          </div>
          <div className="hidden md:block">
            <div className="rounded-2xl overflow-hidden border border-border shadow-[var(--shadow-lg)]">
              <Image
                src="/images/about-creative.jpg"
                alt="Creative workspace with drumsticks and design sketches"
                width={600}
                height={500}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="bg-surface">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="grid md:grid-cols-2 gap-14">
            <div>
              <h2 className="font-sans text-2xl font-bold text-foreground mb-6">My Story</h2>
              <div className="space-y-4 text-body leading-relaxed">
                <p>
                  My journey into healthcare began when a close friend&apos;s snowmobile accident
                  showed me the profound impact of whole person care. While my pre-med aspirations
                  eventually led me to marketing, I discovered my true calling in understanding
                  and connecting with people.
                </p>
                <p>
                  As a seasoned customer experience (CX) and service design strategist, I help
                  organizations transform consumer insights into strategic innovation that drives
                  business growth. My expertise lies in designing and delivering human-centered
                  experiences that create measurable value for customers and employees.
                </p>
                <p>
                  Beyond my professional work, I&apos;m a national touring musician, sound bath
                  facilitator, and founder of Flying W Entertainment. I love to laugh, be goofy,
                  and believe deeply in the power of creative expression.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-surface-alt rounded-2xl p-7 border border-border">
                <h3 className="text-xs uppercase tracking-[0.2em] text-muted mb-5">Education</h3>
                <div className="space-y-5">
                  <div>
                    <p className="font-semibold text-foreground">Master of Business Administration</p>
                    <p className="text-sm text-accent-light mt-1">Rollins College &ndash; Crummer Graduate School of Business</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Bachelor of Business Administration</p>
                    <p className="text-sm text-accent-light mt-1">Andrews University</p>
                  </div>
                </div>
              </div>
              <div className="bg-surface-alt rounded-2xl p-7 border border-border">
                <h3 className="text-xs uppercase tracking-[0.2em] text-muted mb-5">Recognition</h3>
                <div>
                  <p className="font-semibold text-foreground">ACHE of Central Florida Regent&apos;s Award</p>
                  <p className="text-sm text-muted mt-1">American College of Healthcare Executives</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section>
        <div className="max-w-6xl mx-auto px-6 py-20">
          <p className="text-xs uppercase tracking-[0.25em] text-accent-light font-medium mb-4">
            Methodology
          </p>
          <h2 className="font-sans text-2xl font-bold text-foreground mb-12">My Approach</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Customer-First Mindset",
                text: "Bringing a deep understanding of user needs to the complex healthcare ecosystem, translating consumer insights into product strategy and innovation opportunities.",
              },
              {
                title: "Service Design",
                text: "Using tools such as journey mapping and service blueprinting to provide strategic insights that shape product development and go-to-market approaches.",
              },
              {
                title: "Cross-Functional Collaboration",
                text: "Working with diverse stakeholders across organizations to enable breakthrough, best-in-class products and experiences for patients, providers, and colleagues.",
              },
              {
                title: "Consumer-Driven Innovation",
                text: "Championing methodologies that help teams identify unmet needs and develop solutions that resonate in the market.",
              },
              {
                title: "Human-Centered Design",
                text: "Creating meaningful solutions through empathy and research that help patients and healthcare professionals achieve better health outcomes.",
              },
              {
                title: "Strategic Innovation",
                text: "Orchestrating the collaboration between design and product teams, ensuring innovations directly improve the healthcare experience.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl p-7 border border-border hover:border-accent/40 transition-colors bg-surface">
                <h3 className="font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Takeaways */}
      <section className="bg-surface">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <p className="text-xs uppercase tracking-[0.25em] text-accent-light font-medium mb-4">
            Philosophy
          </p>
          <h2 className="font-sans text-2xl font-bold text-foreground mb-10">Key Beliefs</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <blockquote className="border-l-2 border-accent rounded-r-2xl bg-surface-alt/50 pl-6 pr-6 py-6">
              <p className="text-body leading-relaxed italic font-sans text-lg">
                &ldquo;Realize the value of a strong network &mdash; you can accomplish so much
                more with a diverse group than you can alone.&rdquo;
              </p>
            </blockquote>
            <blockquote className="border-l-2 border-accent rounded-r-2xl bg-surface-alt/50 pl-6 pr-6 py-6">
              <p className="text-body leading-relaxed italic font-sans text-lg">
                &ldquo;Feedback is a gift &mdash; the sooner and more often you&apos;re willing
                to get it, the better the outcome of the product.&rdquo;
              </p>
            </blockquote>
          </div>
        </div>
      </section>
    </>
  );
}
