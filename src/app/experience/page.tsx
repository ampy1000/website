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

export default function ExperiencePage() {
  return (
    <>
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <p className="text-xs uppercase tracking-[0.25em] text-accent-light font-medium mb-6">
          Experience
        </p>
        <h1 className="font-sans text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-8 text-balance">
          Work History
        </h1>
        <p className="text-lg text-body leading-relaxed max-w-2xl">
          From marketing internships to global innovation strategy at one of the world&apos;s
          leading pharmaceutical companies, my career has been driven by a passion for
          understanding people and creating meaningful experiences.
        </p>
      </section>

      {/* Timeline */}
      <section className="bg-surface">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <div key={i} className="relative">
                <div className="bg-surface-alt rounded-2xl p-8 border border-border hover:border-accent/40 transition-colors">
                  <div className="flex flex-wrap items-start gap-3 mb-4">
                    {exp.type === "current" && (
                      <span className="inline-block px-3 py-1 rounded-full bg-abyss text-accent-light text-xs uppercase tracking-[0.1em] font-medium border border-accent/30">
                        Current
                      </span>
                    )}
                    {exp.type === "leadership" && (
                      <span className="inline-block px-3 py-1 rounded-full bg-abyss text-accent-light text-xs uppercase tracking-[0.1em] font-medium border border-accent/30">
                        Leadership
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-1">
                    {exp.role}
                  </h3>
                  <p className="text-accent-light font-medium mb-5">{exp.company}</p>
                  <ul className="space-y-3">
                    {exp.description.map((desc, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                        <span className="text-body leading-relaxed text-sm">{desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section>
        <div className="max-w-6xl mx-auto px-6 py-20">
          <p className="text-xs uppercase tracking-[0.25em] text-accent-light font-medium mb-4">
            Capabilities
          </p>
          <h2 className="font-sans text-2xl font-bold text-foreground mb-10">Skills & Expertise</h2>
          <div className="flex flex-wrap gap-3">
            {[
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
            ].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 rounded-full bg-abyss text-accent-light text-sm font-medium border border-accent/20"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
