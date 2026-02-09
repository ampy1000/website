import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience | Cody Wales",
  description:
    "The full career timeline -- from managing a rec center budget to global innovation strategy at Pfizer. Every role taught something the last one couldn't.",
};

const experiences = [
  {
    role: "Senior Manager, Global Commercial Innovation Strategy & Insights",
    company: "Pfizer",
    period: "Jun 2024 - Present",
    type: "current",
    description: [
      "Every healthcare innovation begins with purpose. Our team leads the discovery, assessment, and development of solutions that transform patient care.",
      "My role focuses on orchestrating the collaboration between design and product teams -- making sure our innovations directly improve the healthcare experience as we guide concepts from ideation through to real-world solutions.",
      "Human-centered approaches aren't a phase of the project here. They're the foundation.",
    ],
  },
  {
    role: "Senior Manager, Customer Experience Strategy - Service Design",
    company: "Pfizer",
    period: "Mar 2022 - Jun 2024",
    type: "past",
    description: [
      "Healthcare is a complex ecosystem. My role was to bring humans to the center of it -- whether that meant patients, providers, or colleagues.",
      "Journey mapping, service blueprinting, and other service design tools weren't just workshop artifacts. They were how we provided strategic insights that shaped what the business actually built.",
      "That customer-first mindset enabled breakthrough products and experiences across Pfizer's global footprint.",
    ],
  },
  {
    role: "Manager, Consumer Experience Design",
    company: "AdventHealth",
    period: "Dec 2020 - Mar 2022",
    type: "past",
    description: [
      "Deeply understanding the health system ecosystem and designing experiences that support more meaningful patient and team member outcomes.",
      "Analyzed millions of patient comments to uncover actionable insights. Provided guidance on physical design for innovative care models. Delivered C-suite briefings that told the story of patients and team members in a way the numbers alone couldn't.",
      "For a significant portion of this role, efforts were redirected to support critical COVID-19 response -- virtual visit options for families and vaccine distribution. Some work matters more than a roadmap.",
    ],
  },
  {
    role: "Project Manager, Experience Strategy",
    company: "AdventHealth",
    period: "Nov 2018 - Dec 2020",
    type: "past",
    description: [
      "Supported the deployment of a unified set of service standards and cultural training program for 60,000 team members nationwide. That's not a typo -- sixty thousand.",
      "Partnered with physicians to coordinate a physician-to-physician communication program that bridged gaps the org chart couldn't.",
      "The highlight: designing and executing the personalized experience for each cancer survivor and their family in the 'Survivor Bell Choir' commercial. I'm still in contact with most of them.",
    ],
  },
  {
    role: "Strategy Resident",
    company: "AdventHealth",
    period: "May 2016 - Nov 2018",
    type: "past",
    description: [
      "A rotation-based, hands-on learning experience across multiple disciplines -- including time in the board room. PR, risk-based contracting, marketing, and more.",
      "The highlight was helping lead the planning and execution of the first-ever 'C-Suite Summit' for over 300 of the company's most senior executives. All in just a few months.",
      "This is where I learned to communicate across every level of an organization. That skill compounds.",
    ],
  },
  {
    role: "Director of Strategy",
    company: "Joshua Martin Studios",
    period: "May 2017 - Sep 2021",
    type: "past",
    description: [
      "A small production agency focused on sharing stories of the human condition. We worked with a diverse group of clientele -- from design agencies to international celebrity influencers.",
      "Part creative partner, part strategic lead. The kind of role where you wear every hat and learn something from each one.",
    ],
  },
  {
    role: "Communications Chair, Board of Directors",
    company: "ACHE of Central Florida",
    period: "Board Role",
    type: "leadership",
    description: [
      "Redesigned the chapter website from scratch. That project opened the door to a Board seat -- which tells you something about showing up with initiative.",
      "Focused on sharpening the brand so it actually reflected the mission: being the premier society for healthcare leaders, not just saying it on a banner.",
    ],
  },
  {
    role: "Marketing Assistant",
    company: "Andrews University",
    period: "May 2015 - May 2016",
    type: "past",
    description: [
      "Responsible for developing promotional websites and brochures across 51 unique degree programs -- from kickoff to launch.",
      "Managing stakeholders was a tireless part of the role, but it also meant opportunities to imagine and execute new concepts for innovative programs being launched by the university.",
    ],
  },
  {
    role: "Financial Vice President, Student Association",
    company: "Andrews University",
    period: "May 2014 - Apr 2015",
    type: "past",
    description: [
      "Managed a $275k annual budget for the student organization. Took the radical step of publishing it publicly so the student body could see where their funds were going.",
      "Built relationships with administration that led to tangible outcomes -- including permanently moving final exam schedules later in the day. Small change, big impact during a stressful time.",
    ],
  },
  {
    role: "Account Service Intern",
    company: "Johnson Rauhoff",
    period: "May 2015 - Aug 2015",
    type: "past",
    description: [
      "Cold-emailed the agency I wanted to work at the summer before senior year. They said yes. Sometimes the simplest move is just asking.",
      "Worked on real accounts -- KitchenAid, Newell-Rubbermaid -- which taught me more about client relationship management and creative execution in four months than a semester of theory.",
    ],
  },
];

const education = [
  {
    degree: "Master of Business Administration (MBA)",
    focus: "Marketing Concentration",
    school: "Rollins College - Crummer Graduate School of Business",
  },
  {
    degree: "Bachelor of Business Administration (BBA)",
    focus: "Major: Marketing | Minor: Leadership",
    school: "Andrews University",
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
  "Product Management",
  "Human-Centered Design",
  "Cross-Functional Collaboration",
  "Go-to-Market Strategy",
  "Healthcare",
  "Enrollment Management",
  "Project Management",
  "Stakeholder Management",
  "Brand Strategy",
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
              From managing a rec center and publishing a student budget to
              global innovation strategy at one of the world{"'"}s largest
              pharmaceutical companies. The through-line: I{"'"}m drawn to work
              where understanding people is the whole job.
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
                    <div className="flex flex-wrap items-center gap-3 mb-1">
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
                    <p className="text-muted text-xs mb-4">{exp.period}</p>
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

      {/* Education */}
      <section className="border-t border-border">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-4">
              <p className="text-warm font-semibold text-sm tracking-wide mb-4">
                Education
              </p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-foreground leading-tight">
                The<br />Foundation
              </h2>
            </div>
            <div className="md:col-span-8 space-y-8">
              {education.map((edu) => (
                <div
                  key={edu.degree}
                  className="rounded-2xl border border-border p-8 bg-background hover:shadow-[var(--shadow-md)] transition-shadow hover:border-warm/30"
                >
                  <h3 className="text-xl font-bold text-foreground mb-1">{edu.degree}</h3>
                  <p className="text-warm font-semibold text-sm mb-2">{edu.focus}</p>
                  <p className="text-muted text-sm">{edu.school}</p>
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
