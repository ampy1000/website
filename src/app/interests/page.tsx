import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Interests | Cody Wales",
  description:
    "Books, podcasts, and inspirations that shape how Cody Wales thinks about product strategy, leadership, and life. A look beyond the resume.",
};

const books = [
  {
    title: "Inspired",
    author: "Marty Cagan",
    note: "The book that crystallized how I think about product. If you build things for people, start here.",
  },
  {
    title: "The Mom Test",
    author: "Rob Fitzpatrick",
    note: "Changed how I ask questions. The best user research isn't about getting compliments -- it's about getting truth.",
  },
  {
    title: "Good Strategy Bad Strategy",
    author: "Richard Rumelt",
    note: "Most strategies are just goals dressed up in fancy language. This book teaches you to tell the difference.",
  },
  {
    title: "Creative Confidence",
    author: "Tom & David Kelley",
    note: "A reminder that creativity isn't a gift -- it's a practice. IDEO's founders on unlocking it in yourself and others.",
  },
  {
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    note: "Understanding how people actually make decisions. Essential for anyone who builds products or makes strategy.",
  },
  {
    title: "Start with Why",
    author: "Simon Sinek",
    note: "Simple idea, deep implications. The best products and the best leaders start from the same place: purpose.",
  },
  {
    title: "Build",
    author: "Tony Fadell",
    note: "Straight talk from the guy who built the iPod and Nest. No theory -- just lessons from actually shipping things.",
  },
  {
    title: "Crossing the Chasm",
    author: "Geoffrey Moore",
    note: "The go-to-market playbook for moving from early adopters to mainstream. Still relevant decades later.",
  },
];

const podcasts = [
  {
    title: "Lenny's Podcast",
    host: "Lenny Rachitsky",
    note: "The best product management conversations happening right now. Deep, practical, and consistently excellent.",
  },
  {
    title: "How I Built This",
    host: "Guy Raz",
    note: "Founder stories that reveal the messy middle between idea and success. Good for remembering that everyone figures it out as they go.",
  },
  {
    title: "The Knowledge Project",
    host: "Shane Parrish",
    note: "Mental models, decision-making, and how to think clearly. The kind of podcast that makes you better at everything else.",
  },
  {
    title: "Masters of Scale",
    host: "Reid Hoffman",
    note: "How companies grow from zero to massive. Pattern recognition for scale -- useful even if you're not building a startup.",
  },
  {
    title: "Acquired",
    host: "Ben Gilbert & David Rosenthal",
    note: "Deep dives into the world's greatest companies. The level of research in each episode is absurd -- in the best way.",
  },
  {
    title: "WorkLife",
    host: "Adam Grant",
    note: "Organizational psychology made practical. How to build better teams, cultures, and ways of working.",
  },
];

const inspirations = [
  {
    label: "Healthcare that starts with the patient, not the process",
    category: "Mission",
  },
  {
    label: "People who build in public and share what they learn",
    category: "Community",
  },
  {
    label: "Good coffee and better conversation",
    category: "Ritual",
  },
  {
    label: "The moment an insight clicks and changes the direction of a project",
    category: "Craft",
  },
  {
    label: "Snowboarding -- reading the mountain and adapting in real time",
    category: "Adventure",
  },
  {
    label: "Side projects that teach you more than your day job",
    category: "Growth",
  },
  {
    label: "Founders and makers who refuse to accept 'that's just how it works'",
    category: "Mindset",
  },
  {
    label: "Travel that changes how you see a problem",
    category: "Perspective",
  },
  {
    label: "Design that's invisible -- products so intuitive you forget they're designed",
    category: "Craft",
  },
  {
    label: "Conversations with people who think nothing like you",
    category: "Exploration",
  },
];

export default function InterestsPage() {
  return (
    <>
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-8 md:pt-32 md:pb-16">
        <div className="grid md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-7">
            <p className="text-warm font-semibold text-sm tracking-wide mb-6">
              Interests
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-foreground leading-[0.95] tracking-tight mb-8">
              Off the<br />
              <span className="text-warm">Clock.</span>
            </h1>
          </div>
          <div className="md:col-span-5 pb-4">
            <p className="text-lg text-body leading-relaxed">
              The books, podcasts, and ideas that shape how I think -- about product,
              about leadership, about everything else. The best inputs rarely come
              from inside your own industry.
            </p>
          </div>
        </div>
      </section>

      {/* Bookshelf */}
      <section className="border-t border-border">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-8 mb-14">
            <div className="md:col-span-4">
              <p className="text-warm font-semibold text-sm tracking-wide mb-4">
                Bookshelf
              </p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-foreground leading-tight">
                Books That<br />Shaped the Thinking
              </h2>
            </div>
            <div className="md:col-span-8 flex items-end">
              <p className="text-body leading-relaxed text-lg max-w-xl">
                These aren{"'"}t just books I read -- they{"'"}re books I go back to.
                Each one changed how I approach some part of the work,
                and I{"'"}d hand any of them to someone starting out tomorrow.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {books.map((book) => (
              <div
                key={book.title}
                className="group rounded-2xl border border-border p-8 bg-background hover:shadow-[var(--shadow-md)] transition-shadow hover:border-warm/30"
              >
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-10 h-14 rounded bg-warm-light flex items-center justify-center">
                    <svg className="w-5 h-5 text-warm-deep" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground group-hover:text-warm-deep transition-colors">
                      {book.title}
                    </h3>
                    <p className="text-warm font-semibold text-sm mb-2">
                      {book.author}
                    </p>
                    <p className="text-sm text-muted leading-relaxed">
                      {book.note}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Podcasts */}
      <section className="border-t border-border">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-8 mb-14">
            <div className="md:col-span-4">
              <p className="text-warm font-semibold text-sm tracking-wide mb-4">
                On Rotation
              </p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-foreground leading-tight">
                Podcasts I<br />Keep Coming Back To
              </h2>
            </div>
            <div className="md:col-span-8 flex items-end">
              <p className="text-body leading-relaxed text-lg max-w-xl">
                Most of my best ideas come from something I heard while doing
                something else entirely. These shows are a constant source of
                new frameworks, new stories, and new ways to think about old problems.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {podcasts.map((podcast) => (
              <div
                key={podcast.title}
                className="group rounded-2xl border border-border p-6 md:p-8 bg-background hover:shadow-[var(--shadow-md)] transition-shadow hover:border-warm/30"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-warm-light flex items-center justify-center">
                    <svg className="w-5 h-5 text-warm-deep" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground group-hover:text-warm-deep transition-colors">
                      {podcast.title}
                    </h3>
                    <p className="text-warm font-semibold text-xs">
                      {podcast.host}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-muted leading-relaxed">
                  {podcast.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mood Board / Inspirations */}
      <section className="border-t border-border">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-8 mb-14">
            <div className="md:col-span-5">
              <p className="text-warm font-semibold text-sm tracking-wide mb-4">
                Mood Board
              </p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-foreground leading-tight">
                Things That<br />Fuel the Work
              </h2>
            </div>
            <div className="md:col-span-7 flex items-end">
              <p className="text-body leading-relaxed text-lg max-w-xl">
                Not everything fits neatly on a resume. These are the experiences,
                ideas, and moments that keep the creative engine running.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-border rounded-3xl overflow-hidden">
            {inspirations.map((item) => (
              <div
                key={item.label}
                className="bg-background p-8 md:p-10 group hover:bg-warm-light transition-colors"
              >
                <span className="inline-block px-3 py-1 rounded-full bg-warm-light text-warm-deep text-xs uppercase tracking-[0.1em] font-semibold mb-4 group-hover:bg-warm/20 transition-colors">
                  {item.category}
                </span>
                <p className="text-foreground font-semibold leading-relaxed group-hover:text-warm-deep transition-colors">
                  {item.label}
                </p>
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
                Let{"'"}s Talk
              </p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-background leading-tight">
                Have a book rec or a podcast<br />
                <span className="text-warm">I should know about?</span>
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
                href="/blog"
                className="inline-flex items-center px-8 py-3.5 rounded-full border-2 border-background/30 text-background text-xs uppercase tracking-[0.15em] font-semibold hover:border-warm hover:text-warm transition-colors"
              >
                Read the Blog
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
