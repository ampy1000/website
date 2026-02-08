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
      <section className="relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 py-24 md:py-36">
          <div className="max-w-2xl">
            <p className="text-accent font-medium text-sm uppercase tracking-widest mb-4">
              Welcome
            </p>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground leading-tight mb-6">
              Hey, I&apos;m Cody.
            </h1>
            <p className="text-lg md:text-xl text-muted leading-relaxed mb-4">
              I am an <span className="text-foreground font-semibold">experience designer</span>,{" "}
              <span className="text-foreground font-semibold">business builder</span> and{" "}
              <span className="text-foreground font-semibold">creative</span>.
            </p>
            <p className="text-muted leading-relaxed mb-8">
              I help organizations transform consumer insights into strategic innovation
              that drives business growth through human-centered design.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/about"
                className="inline-flex items-center px-6 py-3 bg-accent text-white text-sm font-medium rounded-lg hover:bg-accent-light transition-colors"
              >
                Learn More About Me
              </Link>
              <Link
                href="/experience"
                className="inline-flex items-center px-6 py-3 border border-border text-foreground text-sm font-medium rounded-lg hover:bg-section-alt transition-colors"
              >
                View My Experience
              </Link>
            </div>
          </div>
        </div>
        {/* Decorative gradient */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-50 to-transparent -z-10" />
      </section>

      {/* Values Section */}
      <section className="bg-section-alt">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <div className="text-center mb-14">
            <p className="text-accent font-medium text-sm uppercase tracking-widest mb-3">
              Core Values
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              What Drives Me
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-card-bg rounded-xl p-6 border border-border hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-4">
                  <svg
                    className="w-5 h-5 text-accent"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
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
        <div className="max-w-5xl mx-auto px-6 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-accent font-medium text-sm uppercase tracking-widest mb-3">
                About
              </p>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Designing Experiences That Matter
              </h2>
              <p className="text-muted leading-relaxed mb-4">
                As a seasoned customer experience (CX) and service design strategist,
                I help organizations transform consumer insights into strategic innovation
                that drives business growth.
              </p>
              <p className="text-muted leading-relaxed mb-6">
                My expertise lies in designing and delivering human-centered experiences
                that create measurable value for customers and employees.
              </p>
              <Link
                href="/about"
                className="text-accent font-medium text-sm hover:text-accent-light transition-colors inline-flex items-center gap-1"
              >
                Read more about me
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-border">
              <div className="space-y-6">
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted mb-1">Current Role</p>
                  <p className="font-semibold text-foreground">Senior Manager, Global Commercial Innovation Strategy &amp; Insights</p>
                  <p className="text-sm text-accent">Pfizer</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted mb-1">Education</p>
                  <p className="font-semibold text-foreground">MBA</p>
                  <p className="text-sm text-accent">Rollins College &ndash; Crummer Graduate School of Business</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted mb-1">Location</p>
                  <p className="font-semibold text-foreground">Orlando, FL</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-foreground text-white">
        <div className="max-w-5xl mx-auto px-6 py-16 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Let&apos;s Connect
          </h2>
          <p className="text-gray-300 mb-8 max-w-lg mx-auto">
            Interested in collaboration, speaking opportunities, or just want to chat?
            Find me on social media or explore my work.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://www.linkedin.com/in/codywales"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-accent text-white text-sm font-medium rounded-lg hover:bg-accent-light transition-colors"
            >
              Connect on LinkedIn
            </a>
            <Link
              href="/projects"
              className="inline-flex items-center px-6 py-3 border border-gray-600 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors"
            >
              View My Projects
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
