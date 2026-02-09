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
      "The chapter's website wasn't doing the mission justice. I migrated and redesigned the whole thing -- and it worked well enough that they invited me onto the Board of Directors as Communications Chair. The goal from there: make the brand match the ambition of being the premier society for healthcare leaders.",
    tags: ["Web Design", "Brand Strategy", "Healthcare"],
    image: "/images/project-ache.jpg",
  },
  {
    title: "Coffee with Cody",
    category: "Community & Networking",
    description:
      "Simple premise: buy someone interesting a cup of coffee, ask them how they got to where they are, and actually listen. It started as a networking experiment and turned into one of the most valuable things I do -- real conversations with people across business, arts, and life.",
    tags: ["Community Building", "Networking", "Storytelling"],
    image: "/images/project-coffee.jpg",
  },
  {
    title: "The Produced Podcast",
    category: "Creative Media",
    description:
      "This one came out of building a creative business with Joshua Martin Studios. We figured if we were learning this much, other people might want to hear it too. The show is part behind-the-scenes, part conversation with other creatives navigating the space where business meets art.",
    tags: ["Podcasting", "Creative Business", "Media"],
    image: "/images/project-podcast.jpg",
  },
  {
    title: "Gear Replacement Initiative",
    category: "Community Support",
    description:
      "When my friend Joshua had his gear stolen, I didn't wait around. I reached out directly to manufacturers and asked for help. Multiple companies stepped up with free replacements. Sometimes the simplest move -- just asking -- is the most powerful one.",
    tags: ["Community", "Initiative", "Problem Solving"],
    image: "/images/project-gear.jpg",
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
          Some of these started with a strategy deck. Others started with a cold email
          or a cup of coffee. All of them taught me something I couldn{"'"}t have learned
          any other way.
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
                Got a project that needs<br />
                <span className="text-warm">a different perspective?</span>
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
