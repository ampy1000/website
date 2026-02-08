import Image from "next/image";
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
    image: "/images/project-ache.jpg",
  },
  {
    title: "Coffee with Cody",
    category: "Community & Networking",
    description:
      "A platform that leverages coffee — a favorite beverage — to establish connections with interesting people in business, arts, and life. The initiative explores what has brought people to where they are today through meaningful conversations.",
    tags: ["Community Building", "Networking", "Storytelling"],
    image: "/images/project-coffee.jpg",
  },
  {
    title: "The Produced Podcast",
    category: "Creative Media",
    description:
      "Born from the venture with Joshua Martin Studios, this podcast was created to share learnings from building a creative enterprise. The show features dialogue between hosts as well as conversations with other creatives, exploring the intersection of business and art.",
    tags: ["Podcasting", "Creative Business", "Media"],
    image: "/images/project-podcast.jpg",
  },
  {
    title: "Gear Replacement Initiative",
    category: "Community Support",
    description:
      "When a friend named Joshua had his gear stolen, stepped in to help by reaching out directly to gear manufacturers requesting free replacements. Multiple manufacturers responded positively, demonstrating the power of initiative and community.",
    tags: ["Community", "Initiative", "Problem Solving"],
    image: "/images/project-gear.jpg",
  },
  {
    title: "Flying W Entertainment",
    category: "Entrepreneurship",
    description:
      "Founded and operates an entertainment company, combining a passion for music and live performance with business acumen. As a national touring musician, sound bath facilitator, and drummer, this venture brings creative experiences to audiences.",
    tags: ["Entertainment", "Music", "Business"],
    image: "/images/project-flying-w.jpg",
  },
];

export default function ProjectsPage() {
  return (
    <>
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-8 md:pt-32 md:pb-16">
        <p className="text-warm font-semibold text-sm tracking-wide mb-6">
          Projects
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-foreground leading-[0.95] tracking-tight mb-8">
          Things I{"'"}ve<br />
          <span className="text-warm">Built.</span>
        </h1>
        <p className="text-lg md:text-xl text-body leading-relaxed max-w-xl">
          From redesigning healthcare websites to launching podcasts and entertainment
          ventures, here are some of the projects I{"'"}m most proud of.
        </p>
      </section>

      {/* Featured Project */}
      <section className="max-w-6xl mx-auto px-6 pb-12">
        <div className="rounded-3xl overflow-hidden border border-border bg-foreground group hover-zoom">
          <div className="grid md:grid-cols-12">
            <div className="md:col-span-7 relative h-[300px] md:h-[450px] overflow-hidden">
              <Image
                src={projects[0].image}
                alt={projects[0].title}
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="md:col-span-5 p-8 md:p-12 flex flex-col justify-center">
              <p className="text-warm font-semibold text-sm tracking-wide mb-3">
                {projects[0].category}
              </p>
              <h2 className="text-2xl md:text-3xl font-extrabold text-background mb-4 leading-tight">
                {projects[0].title}
              </h2>
              <p className="text-background/60 leading-relaxed mb-6">
                {projects[0].description}
              </p>
              <div className="flex flex-wrap gap-2">
                {projects[0].tags.map((tag) => (
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
      </section>

      {/* Remaining Projects Grid */}
      <section className="border-t border-border">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="grid md:grid-cols-2 gap-8">
            {projects.slice(1).map((project) => (
              <div
                key={project.title}
                className="group rounded-3xl border border-border overflow-hidden bg-background hover:shadow-[var(--shadow-lg)] transition-shadow hover-zoom"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors" />
                </div>
                <div className="p-8">
                  <p className="text-warm font-semibold text-xs tracking-wide uppercase mb-2">
                    {project.category}
                  </p>
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-warm-deep transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-body leading-relaxed mb-6">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full bg-warm-light text-warm-deep text-xs font-semibold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
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
                Collaboration
              </p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-background leading-tight">
                Want to work together?<br />
                <span className="text-warm">Let{"'"}s make it happen.</span>
              </h2>
            </div>
            <div className="md:col-span-4 flex md:justify-end">
              <a
                href="https://www.linkedin.com/in/codywales"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-3.5 rounded-full bg-warm text-white text-xs uppercase tracking-[0.15em] font-semibold hover:bg-warm-deep transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
