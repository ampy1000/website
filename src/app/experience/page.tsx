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
      "Bring a customer-first mindset to the complex healthcare ecosystem, translating consumer needs into product strategy and innovation opportunities.",
      "Use service design tools such as journey mapping and service blueprinting to provide strategic insights that shape product development and go-to-market approaches.",
      "Work with diverse stakeholders across the organization to enable breakthrough, best-in-class products and experiences for patients, health care providers, and colleagues.",
      "Champion consumer-driven innovation methodologies, helping teams identify unmet needs and develop solutions that resonate in the market.",
      "Contributed to critical COVID-19 efforts, such as providing virtual visit options for families and supporting the distribution of vaccines.",
    ],
  },
  {
    role: "Communications Chair, Board of Directors",
    company: "ACHE of Central Florida",
    type: "leadership",
    description: [
      "Joined the Board of Directors after migrating and completely redesigning the chapter website.",
      "Focused on building the brand of the chapter to better deliver the mission statement to be the 'premier professional membership society for leaders of healthcare.'",
    ],
  },
  {
    role: "Marketing Assistant (Integrated Marketing & Communications)",
    company: "University Enrollment Management",
    type: "past",
    description: [
      "During final year of school, joined the Integrated Marketing & Communications team part-time to support the development of strategy and content related to enrollment management.",
    ],
  },
  {
    role: "Marketing & Advertising Intern",
    company: "Advertising Agency",
    type: "past",
    description: [
      "During the summer before the final undergraduate year, sought opportunities in marketing and advertising, reaching out cold to a desired employer.",
      "Had the opportunity to work with notable accounts including KitchenAid and Newell-Rubbermaid.",
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
              From marketing internships to global innovation strategy at one of the world{"'"}s
              leading pharmaceutical companies, my career has been driven by a passion for
              understanding people.
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
