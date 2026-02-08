import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me | Cody Wales",
  description:
    "The backstory on Cody Wales -- experience designer, drummer, sound bath facilitator, and the kind of person who cold-emails gear manufacturers for a friend.",
};

const approaches = [
  {
    title: "Start With the Person",
    text: "Not the product, not the roadmap, not the quarterly target. The person. Everything else follows from actually understanding what someone needs -- and what's getting in the way.",
  },
  {
    title: "Map It Before You Build It",
    text: "Journey maps and service blueprints aren't just workshop artifacts. They're how you catch the gaps between what you think the experience is and what it actually is.",
  },
  {
    title: "Work Across the Lines",
    text: "The best ideas die in silos. I work with clinical teams, product teams, marketers, and executives -- not because it's efficient, but because the real breakthroughs live at the intersections.",
  },
  {
    title: "Find the Unmet Need",
    text: "People will tell you what they want. The job is figuring out what they need but can't articulate yet. That's where the most meaningful innovation happens.",
  },
  {
    title: "Design With Empathy, Decide With Evidence",
    text: "Empathy gets you close to the truth. Research gets you the rest of the way. Good design does both -- it feels right and holds up under scrutiny.",
  },
  {
    title: "Close the Gap Between Strategy and Experience",
    text: "A great strategy that patients never feel is just a PowerPoint. I focus on the connective tissue between what we plan and what people actually encounter.",
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
              Experience designer, business builder, national touring drummer,
              sound bath facilitator -- and yes, all of those things connect
              more than you{"'"}d think.
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
              <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mb-8">How I Got Here</h2>
              <div className="space-y-5 text-body leading-relaxed text-lg">
                <p>
                  It started with a snowmobile accident -- not mine, a close friend{"'"}s.
                  Watching the difference that whole-person care made in his recovery
                  rewired how I thought about healthcare. I went in planning to be pre-med.
                  I came out understanding that{" "}
                  <span className="text-foreground font-semibold">connecting with people is the point, not just treating them.</span>
                </p>
                <p>
                  That realization eventually pulled me toward CX and service design,
                  where the work is figuring out the gap between what an organization
                  thinks it delivers and what a person actually experiences. I{"'"}ve
                  spent years doing that work in healthcare -- mapping journeys,
                  blueprinting services, and making the case for why all of it matters
                  to people who hold the budget.
                </p>
                <p className="text-muted">
                  Outside of that, I{"'"}m a{" "}
                  <span className="text-warm font-semibold">national touring musician</span>,{" "}
                  <span className="text-warm font-semibold">sound bath facilitator</span>, and{" "}
                  <span className="text-warm font-semibold">founder of Flying W Entertainment</span>.
                  I love to laugh, be goofy, and I believe the best version of myself
                  shows up when creative expression is part of the equation.
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
                &ldquo;You can accomplish so much more with a diverse group than you
                can alone. Build the network before you need it.&rdquo;
              </p>
            </blockquote>
            <blockquote className="border-l-4 border-warm rounded-r-2xl bg-warm-light px-8 py-8">
              <p className="text-foreground leading-relaxed text-lg md:text-xl font-medium">
                &ldquo;Feedback is a gift. The sooner you{"'"}re willing to hear it,
                the better the work gets. Every single time.&rdquo;
              </p>
            </blockquote>
          </div>
        </div>
      </section>
    </>
  );
}
