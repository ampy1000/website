import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience | Cody Wales",
  description:
    "Professional experience and work history of Cody Wales — from marketing to global commercial innovation strategy at Pfizer.",
};

const experiences = [
  {
    role: "Senior Manager, Global Commercial Innovation Strategy & Insights",
    company: "Pfizer",
    type: "current",
    description: [
      "Bring a customer-first lens to one of the most complex ecosystems out there -- translating what real people need into product strategy that actually moves.",
      "Journey maps and service blueprints aren't just workshop deliverables here. They're how we catch the gaps between what we think we're delivering and what patients actually experience.",
      "Work across clinical, product, marketing, and executive teams. The breakthroughs don't happen in silos -- they happen at the intersections.",
      "Champion the methodologies that surface unmet needs. The kind of needs people can't always articulate but you can feel when you're paying attention.",
      "Contributed to critical COVID-19 response efforts, including virtual visit options for families and vaccine distribution support. Some work matters more than a roadmap.",
    ],
  },
  {
    role: "Communications Chair, Board of Directors",
    company: "ACHE of Central Florida",
    type: "leadership",
    description: [
      "Redesigned the chapter website from scratch. That project opened the door to a Board seat -- which tells you something about showing up with initiative.",
      "Focused on sharpening the brand so it actually reflected the mission: being the premier society for healthcare leaders, not just saying it on a banner.",
    ],
  },
  {
    role: "Marketing Assistant (Integrated Marketing & Communications)",
    company: "University Enrollment Management",
    type: "past",
    description: [
      "Joined the Integrated Marketing & Communications team during my final year. Part-time role, full immersion -- developing strategy and content for enrollment management while finishing the degree.",
    ],
  },
  {
    role: "Marketing & Advertising Intern",
    company: "Advertising Agency",
    type: "past",
    description: [
      "Cold-emailed the agency I wanted to work at the summer before senior year. They said yes. Sometimes the simplest move is just asking.",
      "Got to work on real accounts -- KitchenAid, Newell-Rubbermaid -- which taught me more about the craft in three months than a semester of theory.",
    ],
  },
];

const skills = [
  "Customer Experience (CX)",
  "Service Design",
  "Journey Mapping",
  "Service Blueprinting",
  "Innovation Strategy",
  "Consumer Insights",
  "Product Strategy",
  "Human-Centered Design",
  "Cross-Functional Collaboration",
  "Go-to-Market Strategy",
  "Healthcare",
  "Marketing Communications",
  "Brand Strategy",
  "Stakeholder Management",
];

export default function ExperiencePage() {
  return (
    <>
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-8 md:pt-32 md:pb-16">
        <div className="grid md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-7">
            <p className="text-warm font-semibold text-sm tracking-wide mb-6">
              Experience
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-foreground leading-[0.95] tracking-tight mb-8">
              Work<br />
              <span className="text-warm">History.</span>
            </h1>
          </div>
          <div className="md:col-span-5 pb-4">
            <p className="text-lg text-body leading-relaxed">
              Cold emails to agencies, a website redesign that turned into a board
              seat, and eventually global innovation strategy at one of the world{"'"}s
              largest pharmaceutical companies. The through-line is simple: I{"'"}m
              drawn to work where understanding people is the whole job.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="border-t border-border">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-border" aria-hidden="true" />

            <div className="space-y-12">
              {experiences.map((exp, i) => (
                <div key={i} className="relative pl-14 md:pl-24 group">
                  {/* Timeline dot */}
                  <div className={`absolute left-2.5 md:left-6.5 top-2 w-3 h-3 rounded-full border-2 ${
                    exp.type === "current"
                      ? "bg-warm border-warm"
                      : exp.type === "leadership"
                      ? "bg-accent border-accent"
                      : "bg-border border-muted"
                  }`} />

                  <div className="rounded-2xl border border-border p-8 md:p-10 bg-background hover:shadow-[var(--shadow-md)] transition-shadow group-hover:border-warm/30">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      {exp.type === "current" && (
                        <span className="inline-block px-3 py-1 rounded-full bg-warm-light text-warm-deep text-xs uppercase tracking-[0.1em] font-semibold">
                          Current
                        </span>
                      )}
                      {exp.type === "leadership" && (
                        <span className="inline-block px-3 py-1 rounded-full bg-abyss text-accent text-xs uppercase tracking-[0.1em] font-semibold">
                          Leadership
                        </span>
                      )}
                      <p className="text-warm font-semibold text-sm">{exp.company}</p>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-foreground mb-5 leading-tight">
                      {exp.role}
                    </h3>
                    <ul className="space-y-3">
                      {exp.description.map((desc, j) => (
                        <li key={j} className="flex items-start gap-3">
                          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-warm flex-shrink-0" />
                          <span className="text-body leading-relaxed">{desc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="bg-foreground">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-4">
              <p className="text-warm font-semibold text-sm tracking-wide mb-4">
                Capabilities
              </p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-background leading-tight">
                Skills &<br />Expertise
              </h2>
            </div>
            <div className="md:col-span-8">
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-5 py-2.5 rounded-full text-sm font-semibold border border-background/20 text-background/80 hover:bg-warm hover:text-white hover:border-warm transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
