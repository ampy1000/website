import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "My Stack | Cody Wales",
  description:
    "The tools, platforms, and systems Cody Wales uses daily to drive product strategy, innovation, and user-centered design at Pfizer and beyond.",
};

const categories = [
  {
    name: "Strategy & Product",
    description:
      "Where the thinking happens. These are the tools I use to plan roadmaps, align stakeholders, and turn ambiguous problems into clear product direction.",
    tools: [
      {
        name: "Miro",
        description: "Whiteboarding, journey maps, service blueprints, and workshop facilitation. If it needs a visual, it starts here.",
      },
      {
        name: "Notion",
        description: "My second brain. Strategy docs, meeting notes, frameworks, personal knowledge base -- all in one place.",
      },
      {
        name: "Jira",
        description: "Tracking work across cross-functional teams. Not glamorous, but essential when you're shipping at scale.",
      },
      {
        name: "Confluence",
        description: "Long-form documentation, decision logs, and the kind of institutional knowledge that should outlive any single person's tenure.",
      },
      {
        name: "PowerPoint",
        description: "Still the lingua franca of executive storytelling. A well-built deck can move a strategy forward faster than a 20-page report.",
      },
    ],
  },
  {
    name: "Research & Insights",
    description:
      "The work doesn't start with opinions -- it starts with evidence. These tools help me listen, synthesize, and surface what actually matters.",
    tools: [
      {
        name: "Qualtrics",
        description: "Surveys at scale. When you need structured feedback from thousands of users, this is the go-to.",
      },
      {
        name: "Dovetail",
        description: "Qualitative research analysis. Tagging, theming, and making sense of messy human feedback.",
      },
      {
        name: "UserTesting",
        description: "Watching real people interact with real products. Nothing humbles a hypothesis like actual user behavior.",
      },
      {
        name: "Excel",
        description: "Underrated and irreplaceable. Pivot tables, data cleaning, quick analyses -- sometimes the simplest tool wins.",
      },
    ],
  },
  {
    name: "Design & Mapping",
    description:
      "I'm not a designer, but I think visually. These tools help me prototype ideas, map experiences, and communicate what the product should feel like.",
    tools: [
      {
        name: "Figma",
        description: "Collaborative design and prototyping. Even for non-designers, it's how you show -- not tell -- what you're building.",
      },
      {
        name: "Whimsical",
        description: "Fast wireframes, flowcharts, and mind maps. When Figma is too much and a napkin sketch isn't enough.",
      },
      {
        name: "Lucidchart",
        description: "Process flows, org charts, and system diagrams. The stuff that makes complexity legible.",
      },
    ],
  },
  {
    name: "Data & Analytics",
    description:
      "Insights without data are just guesses. These help me track what's working, spot patterns, and make the case with evidence.",
    tools: [
      {
        name: "Tableau",
        description: "Data visualization that tells a story. Dashboards that make stakeholders lean in instead of tune out.",
      },
      {
        name: "Google Analytics",
        description: "Understanding digital behavior -- where users go, where they drop off, and what that means for the product.",
      },
    ],
  },
  {
    name: "AI & Productivity",
    description:
      "The toolkit is evolving fast. I use AI to accelerate research, draft thinking, and pressure-test ideas -- not to replace the human judgment.",
    tools: [
      {
        name: "Claude",
        description: "My go-to for thought partnership. Strategy brainstorming, writing refinement, and working through complex problems.",
      },
      {
        name: "ChatGPT",
        description: "Quick research, content drafts, and rapid prototyping of ideas. Another lens on the same problem.",
      },
      {
        name: "Copilot",
        description: "Microsoft's AI layer across the suite. Useful for summarizing, drafting, and speeding up the mundane stuff.",
      },
    ],
  },
  {
    name: "Communication & Collaboration",
    description:
      "Strategy is a team sport. These keep the conversation flowing and the alignment tight across time zones and functions.",
    tools: [
      {
        name: "Slack",
        description: "Real-time collaboration with cross-functional teams. Channels, threads, and the occasional well-placed emoji.",
      },
      {
        name: "Microsoft Teams",
        description: "The enterprise backbone. Meetings, file sharing, and the daily rhythm of corporate collaboration.",
      },
      {
        name: "Loom",
        description: "Async video that replaces meetings. Walk someone through a deck, a prototype, or an idea on their own time.",
      },
    ],
  },
];

export default function ToolsPage() {
  return (
    <>
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-8 md:pt-32 md:pb-16">
        <div className="grid md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-7">
            <p className="text-warm font-semibold text-sm tracking-wide mb-6">
              My Stack
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-foreground leading-[0.95] tracking-tight mb-8">
              Tools of<br />
              the <span className="text-warm">Trade.</span>
            </h1>
          </div>
          <div className="md:col-span-5 pb-4">
            <p className="text-lg text-body leading-relaxed">
              No tool replaces good thinking -- but the right ones remove friction
              so you can spend more time on the work that actually matters. Here{"'"}s
              what I reach for daily.
            </p>
          </div>
        </div>
      </section>

      {/* Tool Categories */}
      <section className="border-t border-border">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <div className="space-y-20">
            {categories.map((category, catIndex) => (
              <div key={category.name}>
                <div className="grid md:grid-cols-12 gap-8 mb-10">
                  <div className="md:col-span-4">
                    <span className="text-5xl font-extrabold text-border leading-none">
                      {String(catIndex + 1).padStart(2, "0")}
                    </span>
                    <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mt-3 leading-tight">
                      {category.name}
                    </h2>
                  </div>
                  <div className="md:col-span-8 flex items-end">
                    <p className="text-body leading-relaxed text-lg max-w-xl">
                      {category.description}
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {category.tools.map((tool) => (
                    <div
                      key={tool.name}
                      className="group rounded-2xl border border-border p-6 md:p-8 bg-background hover:shadow-[var(--shadow-md)] transition-shadow hover:border-warm/30"
                    >
                      <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-warm-deep transition-colors">
                        {tool.name}
                      </h3>
                      <p className="text-sm text-muted leading-relaxed">
                        {tool.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy callout */}
      <section className="border-t border-border">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-4">
              <p className="text-warm font-semibold text-sm tracking-wide mb-4">
                Philosophy
              </p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-foreground leading-tight">
                Tools Change.<br />Principles Don{"'"}t.
              </h2>
            </div>
            <div className="md:col-span-8">
              <div className="space-y-4 text-body leading-relaxed text-lg">
                <p>
                  The specific tools in this list will evolve -- some of them weren{"'"}t
                  here a year ago, and some won{"'"}t be here next year. That{"'"}s fine.
                  What matters is the underlying approach: start with the user, make
                  the work visible, and communicate in a way that moves people to action.
                </p>
                <p className="text-muted">
                  The best toolkit is the one that gets out of the way and lets you focus
                  on the problem worth solving.
                </p>
              </div>
            </div>
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
                Want to compare notes on<br />
                <span className="text-warm">what{"'"}s working?</span>
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
