import Image from "next/image";
import Link from "next/link";

const values = [
  {
    title: "Exploration",
    description:
      "Constantly seeking the unknown and discovering innovative paths to create exceptional experiences.",
    number: "01",
  },
  {
    title: "Growth",
    description:
      "Persistently driven to find better ways of doing things and evolving both personally and professionally.",
    number: "02",
  },
  {
    title: "Intention",
    description:
      "Ensuring every task is meaningful and executed to the highest standard with purpose and mindfulness.",
    number: "03",
  },
  {
    title: "Service",
    description:
      "Striving to develop myself to better support and uplift others through meaningful work.",
    number: "04",
  },
  {
    title: "Boldness",
    description:
      "A willingness to challenge conventional wisdom and push boundaries to drive innovation.",
    number: "05",
  },
];

const marqueeItems = [
  "Experience Design",
  "Innovation Strategy",
  "Human-Centered Design",
  "Service Blueprinting",
  "Journey Mapping",
  "Creative Direction",
  "Brand Strategy",
  "Consumer Insights",
  "Drumming",
  "Sound Healing",
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 pt-20 pb-8 md:pt-32 md:pb-16">
          <div className="grid md:grid-cols-12 gap-8 items-end">
            <div className="md:col-span-7">
              <p className="text-warm font-semibold text-sm tracking-wide mb-6">
                Experience Designer / Business Builder / Creative
              </p>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-foreground leading-[0.95] tracking-tight mb-8">
                We give a<br />
                voice to<br />
                <span className="text-warm">experience.</span>
              </h1>
              <p className="text-body leading-relaxed max-w-md text-lg mb-10">
                I help organizations transform consumer insights into strategic
                innovation that drives business growth through human-centered design.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/about"
                  className="inline-flex items-center px-8 py-3.5 rounded-full bg-foreground text-background text-xs uppercase tracking-[0.15em] font-semibold hover:bg-warm transition-colors"
                >
                  About Me
                </Link>
                <Link
                  href="/projects"
                  className="inline-flex items-center px-8 py-3.5 rounded-full border-2 border-foreground text-foreground text-xs uppercase tracking-[0.15em] font-semibold hover:border-warm hover:text-warm transition-colors"
                >
                  View Projects
                </Link>
              </div>
            </div>
            <div className="md:col-span-5 relative">
              <div className="rounded-3xl overflow-hidden hover-zoom shadow-[var(--shadow-lg)]">
                <Image
                  src="/images/hero-workspace.jpg"
                  alt="A modern creative workspace with design tools and technology"
                  width={600}
                  height={700}
                  className="w-full h-[400px] md:h-[520px] object-cover"
                  priority
                />
              </div>
              {/* Floating accent element */}
              <div className="absolute -bottom-4 -left-4 bg-warm text-white rounded-2xl px-6 py-4 shadow-[var(--shadow-lg)]">
                <p className="text-xs uppercase tracking-wider font-semibold">Currently at</p>
                <p className="font-bold text-lg">Pfizer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scrolling Marquee */}
      <section className="border-y border-border py-5 overflow-hidden mt-8 md:mt-16">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="mx-8 text-sm uppercase tracking-[0.2em] font-semibold text-muted flex items-center gap-8">
              {item}
              <span className="w-1.5 h-1.5 rounded-full bg-warm inline-block" />
            </span>
          ))}
        </div>
      </section>

      {/* Values Section - asymmetric layout */}
      <section className="py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-8 mb-16">
            <div className="md:col-span-5">
              <p className="text-warm font-semibold text-sm tracking-wide mb-4">
                Core Values
              </p>
              <h2 className="text-3xl md:text-5xl font-extrabold text-foreground leading-tight text-balance">
                What Drives Me
              </h2>
            </div>
            <div className="md:col-span-7 flex items-end">
              <p className="text-body leading-relaxed text-lg max-w-lg">
                These principles shape every decision I make -- from designing patient
                experiences at Pfizer to performing on stage with my band.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-3xl overflow-hidden">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-background p-8 md:p-10 group hover:bg-warm-light transition-colors"
              >
                <span className="text-5xl font-extrabold text-border group-hover:text-warm/20 transition-colors leading-none">
                  {value.number}
                </span>
                <h3 className="text-xl font-bold text-foreground mt-4 mb-3 group-hover:text-warm-deep transition-colors">
                  {value.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
            {/* Extra cell for visual balance */}
            <div className="bg-warm p-8 md:p-10 flex flex-col justify-center items-center text-center">
              <p className="text-white/80 text-sm uppercase tracking-wider font-semibold mb-2">
                Let{"'"}s Connect
              </p>
              <p className="text-white font-bold text-2xl mb-4">
                Ready to collaborate?
              </p>
              <a
                href="https://www.linkedin.com/in/codywales"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-2.5 rounded-full border-2 border-white text-white text-xs uppercase tracking-[0.15em] font-semibold hover:bg-white hover:text-warm transition-colors"
              >
                Say Hello
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Bio Section - editorial layout */}
      <section className="border-t border-border">
        <div className="max-w-6xl mx-auto px-6 py-24 md:py-32">
          <div className="grid md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-7">
              <p className="text-warm font-semibold text-sm tracking-wide mb-4">
                About
              </p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-8 leading-tight text-balance">
                Designing Experiences That Matter
              </h2>
              <div className="space-y-4 text-body leading-relaxed text-lg">
                <p>
                  As a seasoned customer experience (CX) and service design strategist,
                  I help organizations transform consumer insights into strategic innovation
                  that drives business growth.
                </p>
                <p className="text-muted">
                  My expertise lies in designing and delivering human-centered experiences
                  that create measurable value for customers and employees.
                </p>
              </div>
              <Link
                href="/about"
                className="mt-8 inline-flex items-center gap-3 link-draw text-foreground font-semibold text-sm uppercase tracking-wider"
              >
                Read My Story
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div className="md:col-span-5 space-y-6">
              <div className="rounded-2xl border border-border p-8 bg-background hover:shadow-[var(--shadow-md)] transition-shadow">
                <p className="text-xs uppercase tracking-[0.2em] text-muted mb-2">Current Role</p>
                <p className="font-bold text-foreground text-lg">Senior Manager, Global Commercial Innovation Strategy & Insights</p>
                <p className="text-warm font-semibold mt-1">Pfizer</p>
              </div>
              <div className="rounded-2xl border border-border p-8 bg-background hover:shadow-[var(--shadow-md)] transition-shadow">
                <p className="text-xs uppercase tracking-[0.2em] text-muted mb-2">Education</p>
                <p className="font-bold text-foreground text-lg">MBA</p>
                <p className="text-warm font-semibold mt-1">Rollins College &ndash; Crummer Graduate School of Business</p>
              </div>
              <div className="rounded-2xl border border-border p-8 bg-background hover:shadow-[var(--shadow-md)] transition-shadow">
                <p className="text-xs uppercase tracking-[0.2em] text-muted mb-2">Creative Life</p>
                <p className="font-bold text-foreground text-lg">Musician & Sound Bath Facilitator</p>
                <p className="text-warm font-semibold mt-1">Flying W Entertainment</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-foreground">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8">
              <h2 className="text-3xl md:text-5xl font-extrabold text-background leading-tight">
                Let{"'"}s create something<br />
                <span className="text-warm">meaningful together.</span>
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
