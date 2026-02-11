import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Origin Story | Cody Wales",
  description:
    "The origin story of Cody Wales -- from patient experience to product strategy. How a background in healthcare, service design, and innovation shaped a product strategist.",
};

/* ── chapter data ── */

const powers = [
  {
    title: "Start With the User",
    text: "Not the feature list, not the roadmap, not the quarterly target. The user. Everything else follows from actually understanding what someone needs.",
  },
  {
    title: "Map It Before You Build It",
    text: "Journey maps and service blueprints aren't just workshop artifacts. They're how you catch the gaps between what you think the product does and what it actually does.",
  },
  {
    title: "Work Across the Lines",
    text: "The best products die in silos. I work with engineering, clinical teams, marketers, and executives -- because the real breakthroughs live at the intersections.",
  },
  {
    title: "Find the Unmet Need",
    text: "Users will tell you what they want. The job is figuring out what they need but can't articulate yet. That's where the most meaningful product decisions happen.",
  },
  {
    title: "Empathy + Evidence",
    text: "Empathy gets you close to the truth. Research gets you the rest of the way. Good product strategy does both -- it feels right and holds up under scrutiny.",
  },
  {
    title: "Close the Gap",
    text: "A great strategy that users never feel is just a PowerPoint. I focus on the connective tissue between what we plan and what people actually experience.",
  },
];

/* ── helpers ── */

function ChapterBadge({ num, label }: { num: string; label: string }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-foreground text-background text-xs font-bold">
        {num}
      </span>
      <span className="text-xs font-bold uppercase tracking-[0.18em] text-muted">
        {label}
      </span>
    </div>
  );
}

/* ── page ── */

export default function AboutPage() {
  return (
    <>
      {/* ============================================
          SPLASH PANEL — full-width title card
          ============================================ */}
      <section className="relative overflow-hidden bg-foreground">
        <div className="absolute inset-0 action-lines opacity-60" />
        <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-16 md:pt-36 md:pb-24">
          <div className="grid md:grid-cols-12 gap-10 items-end">
            <div className="md:col-span-7 relative z-10">
              <div className="caption-box rounded-md mb-8 w-fit">
                Every strategist has a beginning&hellip;
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-background leading-[0.92] tracking-tight mb-6">
                Origin<br />
                <span className="text-warm">Story.</span>
              </h1>
              <p className="text-background/60 text-lg md:text-xl leading-relaxed max-w-md">
                From patient experience to product strategy &mdash;
                this is how I got here.
              </p>
            </div>

            {/* Character portrait panel */}
            <div className="md:col-span-5 flex justify-center md:justify-end">
              <div className="comic-panel rounded-2xl bg-warm-light w-full max-w-xs">
                <div className="halftone-warm">
                  <Image
                    src="/images/cody-avatar.png"
                    alt="Illustrated portrait of Cody Wales"
                    width={400}
                    height={480}
                    className="w-full h-auto object-contain relative z-10"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          CHAPTER 1 — The Inciting Incident
          ============================================ */}
      <section className="border-t-4 border-foreground">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <ChapterBadge num="01" label="The Inciting Incident" />

          <div className="grid md:grid-cols-12 comic-grid">
            {/* Big scene panel */}
            <div className="md:col-span-7 comic-panel rounded-2xl overflow-hidden">
              <div className="relative">
                <Image
                  src="/images/about-creative.jpg"
                  alt="Creative workspace — drumsticks and design sketches"
                  width={700}
                  height={460}
                  className="w-full h-[320px] md:h-[400px] object-cover"
                />
                {/* Overlay narration caption */}
                <div className="absolute top-4 left-4 right-4 md:right-auto md:max-w-xs">
                  <div className="caption-box rounded-md text-sm leading-snug">
                    It started with a snowmobile accident&nbsp;&mdash; not mine, a close
                    friend{"'"}s.
                  </div>
                </div>
                <div className="absolute bottom-4 right-4 md:max-w-[260px]">
                  <div className="caption-box rounded-md text-sm leading-snug bg-foreground/90">
                    Watching the difference that whole-person care made in his recovery
                    rewired how I thought about healthcare.
                  </div>
                </div>
              </div>
            </div>

            {/* Stacked reaction panels */}
            <div className="md:col-span-5 flex flex-col comic-grid">
              {/* Reaction panel 1 */}
              <div className="comic-panel rounded-2xl bg-surface-alt p-6 md:p-8 flex-1 flex flex-col justify-center halftone">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-muted mb-3">
                  The Plan
                </p>
                <p className="text-foreground text-lg font-bold leading-snug">
                  I went in planning to be pre-med.
                </p>
              </div>

              {/* Reaction panel 2 — speech bubble */}
              <div className="comic-panel rounded-2xl bg-background p-6 md:p-8 flex-1 flex flex-col justify-center">
                <div className="speech-bubble">
                  <p className="text-foreground font-bold text-lg md:text-xl leading-snug">
                    &ldquo;Connecting with people is the point &mdash;
                    not just treating them.&rdquo;
                  </p>
                </div>
                <p className="text-muted text-sm mt-6 pl-1">
                  &uarr; The moment everything changed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          CHAPTER 2 — The Transformation
          ============================================ */}
      <section className="border-t-4 border-foreground bg-surface-alt">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <ChapterBadge num="02" label="The Transformation" />

          {/* Wide narrative panel */}
          <div className="comic-panel rounded-2xl bg-background p-8 md:p-12 mb-4">
            <div className="max-w-3xl">
              <p className="text-2xl md:text-3xl font-black text-foreground leading-snug mb-4">
                Pre-med &rarr; CX &rarr; Product Strategy
              </p>
              <p className="text-body text-lg leading-relaxed">
                That realization pulled me toward patient experience and service
                design, then into product strategy -- where the work is figuring
                out the gap between what an organization <em>thinks</em> it
                delivers and what a person <em>actually</em> needs.
              </p>
            </div>
          </div>

          {/* Two-panel row */}
          <div className="grid md:grid-cols-2 comic-grid">
            <div className="comic-panel rounded-2xl bg-foreground p-8 md:p-10 relative overflow-hidden">
              <div className="absolute inset-0 action-lines opacity-40" />
              <div className="relative z-10">
                <span className="text-5xl md:text-6xl font-black text-warm/20 leading-none block mb-3">
                  &darr;
                </span>
                <p className="text-background font-bold text-lg mb-2">
                  Understanding the problem.
                </p>
                <p className="text-background/60 leading-relaxed">
                  I{"'"}ve spent years mapping the real paths people take through
                  healthcare &mdash; the friction, the handoffs, the moments
                  where a better product could change everything.
                </p>
              </div>
            </div>
            <div className="comic-panel rounded-2xl bg-foreground p-8 md:p-10 relative overflow-hidden">
              <div className="absolute inset-0 action-lines opacity-40" />
              <div className="relative z-10">
                <span className="text-5xl md:text-6xl font-black text-warm/20 leading-none block mb-3">
                  &uarr;
                </span>
                <p className="text-background font-bold text-lg mb-2">
                  Building the case.
                </p>
                <p className="text-background/60 leading-relaxed">
                  Translating insights into product strategy and making a
                  compelling case for why all of it matters to the people
                  who hold the budget.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          CHAPTER 3 — The Training Arc
          ============================================ */}
      <section className="border-t-4 border-foreground">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <ChapterBadge num="03" label="The Training Arc" />

          <div className="grid md:grid-cols-3 comic-grid">
            {/* Education panel 1 */}
            <div className="comic-panel rounded-2xl bg-warm p-8 md:p-10 text-white relative overflow-hidden">
              <div className="absolute top-3 right-4 text-7xl font-black text-white/10 leading-none select-none">
                MBA
              </div>
              <div className="relative z-10">
                <span className="caption-box rounded-md bg-white/20 text-white text-xs mb-6 inline-block">
                  Power-Up Unlocked
                </span>
                <p className="font-bold text-xl mb-2">
                  Master of Business Administration
                </p>
                <p className="text-white/80 text-sm font-semibold">
                  Rollins College &ndash; Crummer Graduate School of Business
                </p>
              </div>
            </div>

            {/* Education panel 2 */}
            <div className="comic-panel rounded-2xl bg-background p-8 md:p-10 relative overflow-hidden">
              <div className="absolute top-3 right-4 text-7xl font-black text-border leading-none select-none">
                BBA
              </div>
              <div className="relative z-10">
                <span className="caption-box rounded-md text-xs mb-6 inline-block">
                  Power-Up Unlocked
                </span>
                <p className="font-bold text-xl text-foreground mb-2">
                  Bachelor of Business Administration
                </p>
                <p className="text-warm font-semibold text-sm">
                  Andrews University
                </p>
              </div>
            </div>

            {/* Recognition panel */}
            <div className="comic-panel rounded-2xl bg-foreground p-8 md:p-10 relative overflow-hidden">
              <div className="absolute inset-0 halftone opacity-5" />
              <div className="relative z-10">
                <span className="inline-block mb-6 px-3 py-1.5 rounded-md bg-warm/20 text-warm text-xs font-bold uppercase tracking-wider">
                  Achievement
                </span>
                <p className="font-bold text-xl text-background mb-2">
                  ACHE of Central Florida Regent{"'"}s Award
                </p>
                <p className="text-background/60 text-sm font-semibold">
                  American College of Healthcare Executives
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          CHAPTER 4 — The Arsenal
          ============================================ */}
      <section className="border-t-4 border-foreground bg-foreground">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <ChapterBadge num="04" label="The Arsenal" />
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-background leading-tight">
              Every strategist needs a toolkit.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 comic-grid">
            {powers.map((power, i) => (
              <div
                key={power.title}
                className="comic-panel comic-panel-sm rounded-xl bg-foreground border-background/20 p-7 md:p-8 group hover:border-warm transition-colors relative"
              >
                <span className="absolute top-4 right-5 text-4xl font-black text-background/8 group-hover:text-warm/20 transition-colors leading-none select-none">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="relative z-10">
                  <h3 className="font-bold text-background mb-3 group-hover:text-warm transition-colors text-lg">
                    {power.title}
                  </h3>
                  <p className="text-sm text-background/50 leading-relaxed">
                    {power.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          CHAPTER 5 — The Code
          ============================================ */}
      <section className="border-t-4 border-foreground">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <ChapterBadge num="05" label="The Code" />
          <p className="text-muted text-lg mb-10 max-w-lg">
            Every origin story has its guiding principles.
            These are the ones I come back to.
          </p>

          <div className="grid md:grid-cols-2 comic-grid">
            <div className="thought-bubble">
              <p className="text-foreground text-lg md:text-xl font-bold leading-snug">
                &ldquo;You can accomplish so much more with a diverse group than
                you can alone. Build the network before you need it.&rdquo;
              </p>
            </div>
            <div className="thought-bubble">
              <p className="text-foreground text-lg md:text-xl font-bold leading-snug">
                &ldquo;Feedback is a gift. The sooner you{"'"}re willing to hear
                it, the better the work gets. Every single time.&rdquo;
              </p>
            </div>
          </div>

          {/* Small character note */}
          <div className="comic-panel rounded-2xl bg-surface-alt mt-4 p-8 md:p-10">
            <p className="text-body text-lg leading-relaxed max-w-2xl">
              Outside of work, I love to laugh, be goofy, and I believe the best
              version of myself shows up when creative expression is part of the
              equation.
            </p>
            <p className="text-muted text-sm mt-4 font-semibold">
              &mdash; The human behind the panels
            </p>
          </div>
        </div>
      </section>

      {/* ============================================
          CLOSING PANEL — To Be Continued…
          ============================================ */}
      <section className="border-t-4 border-foreground bg-foreground relative overflow-hidden">
        <div className="absolute inset-0 action-lines opacity-40" />
        <div className="relative max-w-6xl mx-auto px-6 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8">
              <div className="caption-box rounded-md mb-6 w-fit">
                To be continued&hellip;
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-background leading-tight">
                Every good story needs<br />
                <span className="text-warm">a next chapter.</span>
              </h2>
            </div>
            <div className="md:col-span-4 flex md:justify-end gap-4 flex-wrap">
              <a
                href="https://www.linkedin.com/in/codywales"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-3.5 rounded-full bg-warm text-white text-xs uppercase tracking-[0.15em] font-semibold hover:bg-warm-deep transition-colors"
              >
                Connect on LinkedIn
              </a>
              <Link
                href="/projects"
                className="inline-flex items-center px-8 py-3.5 rounded-full border-2 border-background/30 text-background text-xs uppercase tracking-[0.15em] font-semibold hover:border-warm hover:text-warm transition-colors"
              >
                View Projects
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
