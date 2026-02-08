import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Cody Wales",
  description:
    "Explore the projects and creative ventures of Cody Wales — from healthcare chapter branding to podcasting and community building.",
};

const projects = [
  {
    title: "ACHE Chapter Website Redesign",
    category: "Healthcare Leadership",
    description:
      "Migrated and completely redesigned the ACHE of Central Florida chapter website. This project led to an invitation to join the Board of Directors as Communications Chair, where the focus was on building the chapter brand to better deliver the mission of being the 'premier professional membership society for leaders of healthcare.'",
    tags: ["Web Design", "Brand Strategy", "Healthcare"],
    icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
  },
  {
    title: "Coffee with Cody",
    category: "Community & Networking",
    description:
      "A platform that leverages coffee — a favorite beverage — to establish connections with interesting people in business, arts, and life. The initiative explores what has brought people to where they are today through meaningful conversations.",
    tags: ["Community Building", "Networking", "Storytelling"],
    icon: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z",
  },
  {
    title: "The Produced Podcast",
    category: "Creative Media",
    description:
      "Born from the venture with Joshua Martin Studios, this podcast was created to share learnings from building a creative enterprise. The show features dialogue between hosts as well as conversations with other creatives, exploring the intersection of business and art.",
    tags: ["Podcasting", "Creative Business", "Media"],
    icon: "M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z",
  },
  {
    title: "Gear Replacement Initiative",
    category: "Community Support",
    description:
      "When a friend named Joshua had his gear stolen, stepped in to help by reaching out directly to gear manufacturers requesting free replacements. Multiple manufacturers responded positively, demonstrating the power of initiative and community.",
    tags: ["Community", "Initiative", "Problem Solving"],
    icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
  },
  {
    title: "Flying W Entertainment",
    category: "Entrepreneurship",
    description:
      "Founded and operates an entertainment company, combining a passion for music and live performance with business acumen. As a national touring musician, sound bath facilitator, and drummer, this venture brings creative experiences to audiences.",
    tags: ["Entertainment", "Music", "Business"],
    icon: "M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3",
  },
];

export default function ProjectsPage() {
  return (
    <>
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <p className="text-xs uppercase tracking-[0.25em] text-accent-light font-medium mb-6">
          Projects
        </p>
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-8 text-balance">
          Things I&apos;ve Built
        </h1>
        <p className="text-lg text-body leading-relaxed max-w-2xl">
          From redesigning healthcare websites to launching podcasts and entertainment
          ventures, here are some of the projects I&apos;m most proud of.
        </p>
      </section>

      {/* Projects Grid */}
      <section className="bg-surface">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <div
                key={project.title}
                className="bg-surface-alt rounded-2xl p-8 border border-border hover:border-accent/40 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-abyss flex items-center justify-center mb-6">
                  <svg
                    className="w-6 h-6 text-accent-light"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d={project.icon} />
                  </svg>
                </div>
                <p className="text-xs uppercase tracking-[0.2em] text-accent-light font-medium mb-2">
                  {project.category}
                </p>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {project.title}
                </h3>
                <p className="text-sm text-body leading-relaxed mb-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-abyss text-muted text-xs font-medium border border-accent/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="max-w-6xl mx-auto px-6 py-20 text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-accent-light font-medium mb-4">
            Collaboration
          </p>
          <div className="w-12 h-1 bg-accent rounded-full mx-auto mb-8" />
          <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
            Want to Work Together?
          </h2>
          <p className="text-muted mb-10 max-w-lg mx-auto leading-relaxed">
            I&apos;m always open to exploring new opportunities and collaborations.
            Reach out and let&apos;s create something meaningful.
          </p>
          <a
            href="https://www.linkedin.com/in/codywales"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-7 py-3 rounded-full border border-accent text-accent text-xs uppercase tracking-[0.15em] font-medium hover:bg-accent hover:text-background transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </>
  );
}
