import Image from "next/image";
import Link from "next/link";

const values = [
  {
    title: "Exploration",
    description:
      "Constantly seeking the unknown and discovering innovative paths to create exceptional experiences.",
    icon: "M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9 12l2 2 4-4",
  },
  {
    title: "Growth",
    description:
      "Persistently driven to find better ways of doing things and evolving both personally and professionally.",
    icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
  },
  {
    title: "Intention",
    description:
      "Ensuring every task is meaningful and executed to the highest standard with purpose and mindfulness.",
    icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Service",
    description:
      "Striving to develop myself to better support and uplift others through meaningful work.",
    icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
  },
  {
    title: "Boldness",
    description:
      "A willingness to challenge conventional wisdom and push boundaries to drive innovation.",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section>
        <div className="max-w-6xl mx-auto px-6 py-28 md:py-40">
          <div className="grid md:grid-cols-2 gap-14 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-accent-light font-medium mb-6">
              Welcome
            </p>
            <h1 className="font-sans text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-tight mb-8 text-balance">
              We give a voice to experience in all its manifestations
            </h1>
            <p className="text-body leading-relaxed mb-4 max-w-lg">
              I am an <span className="text-foreground font-medium">experience designer</span>,{" "}
              <span className="text-foreground font-medium">business builder</span> and{" "}
              <span className="text-foreground font-medium">creative</span>.
            </p>
            <p className="text-muted leading-relaxed mb-10 max-w-lg">
              I help organizations transform consumer insights into strategic innovation
              that drives business growth through human-centered design.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/about"
                className="inline-flex items-center px-7 py-3 rounded-full border border-accent text-accent text-xs uppercase tracking-[0.15em] font-medium hover:bg-accent hover:text-white transition-colors"
              >
                View More
              </Link>
              <Link
                href="/experience"
                className="inline-flex items-center px-7 py-3 rounded-full border border-border text-foreground text-xs uppercase tracking-[0.15em] font-medium hover:border-accent-light hover:text-accent-light transition-colors"
              >
                My Experience
              </Link>
            </div>
          </div>
          <div className="hidden md:block relative">
            <div className="rounded-2xl overflow-hidden border border-border shadow-[var(--shadow-lg)]">
              <Image
                src="/images/hero-workspace.jpg"
                alt="A modern creative workspace with design tools and technology"
                width={600}
                height={500}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-surface">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.25em] text-accent-light font-medium mb-4">
              Core Values
            </p>
            <h2 className="font-sans text-3xl md:text-4xl font-bold text-foreground text-balance">
              What Drives Me
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-surface-alt rounded-2xl p-7 border border-border hover:border-accent/40 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-abyss flex items-center justify-center mb-5">
                  <svg
                    className="w-5 h-5 text-accent-light"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d={value.icon} />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Bio Section */}
      <section>
        <div className="max-w-6xl mx-auto px-6 py-24">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-accent-light font-medium mb-4">
                About
              </p>
              <h2 className="font-sans text-3xl font-bold text-foreground mb-6 text-balance">
                Designing Experiences That Matter
              </h2>
              <p className="text-body leading-relaxed mb-4">
                As a seasoned customer experience (CX) and service design strategist,
                I help organizations transform consumer insights into strategic innovation
                that drives business growth.
              </p>
              <p className="text-muted leading-relaxed mb-8">
                My expertise lies in designing and delivering human-centered experiences
                that create measurable value for customers and employees.
              </p>
              <Link
                href="/about"
                className="text-accent-light font-medium text-xs uppercase tracking-[0.15em] hover:text-accent transition-colors inline-flex items-center gap-2 border-b border-accent-light pb-1"
              >
                Explore
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="bg-surface rounded-2xl border border-border p-8">
              <div className="space-y-8">
                <div className="border-b border-border pb-6">
                  <p className="text-xs uppercase tracking-[0.2em] text-muted mb-2">Current Role</p>
                  <p className="font-semibold text-foreground">Senior Manager, Global Commercial Innovation Strategy &amp; Insights</p>
                  <p className="text-sm text-accent-light mt-1">Pfizer</p>
                </div>
                <div className="border-b border-border pb-6">
                  <p className="text-xs uppercase tracking-[0.2em] text-muted mb-2">Education</p>
                  <p className="font-semibold text-foreground">MBA</p>
                  <p className="text-sm text-accent-light mt-1">Rollins College &ndash; Crummer Graduate School of Business</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-muted mb-2">Location</p>
                  <p className="font-semibold text-foreground">Orlando, FL</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-surface">
        <div className="max-w-6xl mx-auto px-6 py-20 text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-accent-light font-medium mb-4">
            Collaborators
          </p>
          <div className="w-12 h-1 bg-accent rounded-full mx-auto mb-10" />
          <h2 className="font-sans text-2xl md:text-3xl font-bold text-foreground mb-4">
            Let&apos;s Connect
          </h2>
          <p className="text-muted mb-10 max-w-lg mx-auto leading-relaxed">
            Interested in collaboration, speaking opportunities, or just want to chat?
            Find me on social media or explore my work.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://www.linkedin.com/in/codywales"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-7 py-3 rounded-full border border-accent text-accent text-xs uppercase tracking-[0.15em] font-medium hover:bg-accent hover:text-white transition-colors"
            >
              Connect on LinkedIn
            </a>
            <Link
              href="/projects"
              className="inline-flex items-center px-7 py-3 rounded-full border border-border text-foreground text-xs uppercase tracking-[0.15em] font-medium hover:border-accent-light hover:text-accent-light transition-colors"
            >
              View My Projects
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
