export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  image: string;
  content: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "product-thinking-is-not-feature-shipping",
    title: "Product Thinking Is Not Feature Shipping",
    category: "Product Strategy",
    excerpt:
      "Too many organizations treat product work like a feature factory. But the real work of product strategy happens long before anyone writes a ticket -- it starts with understanding people.",
    date: "Feb 8, 2026",
    readTime: "5 min read",
    tags: ["Product Strategy", "User Research", "Strategy"],
    image: "/images/hero-workspace.jpg",
    content: [
      "There's a persistent misunderstanding in corporate settings about what product work actually is. Too many organizations treat it like a feature factory -- ship the thing, hit the target, move on. But the real work of product strategy happens long before anyone writes a ticket.",
      "It starts with understanding people. Not personas, not segments, not demographics on a slide deck. Actual people with actual frustrations, workarounds, and unmet needs that no one has bothered to ask about.",
      "When I moved into innovation strategy at Pfizer, one of the first things that struck me was how much institutional knowledge existed about what the company built -- and how little existed about how people actually experienced it. The gap between intent and impact was enormous.",
      "This isn't a critique of any one company. It's a pattern I've seen everywhere. Organizations get really good at optimizing what they make without ever questioning whether they're solving the right problem. Product thinking -- real product thinking -- forces that question.",
      "The best product work I've been part of hasn't been about shipping the most features. It's been about making something clear. Reducing friction. Eliminating confusion. Making sure the person on the other end of the product doesn't have to work so hard just to get what they need.",
      "That's the job. Not feature shipping. Not velocity for its own sake. Product strategy is the discipline of giving a damn about the people you're building for.",
    ],
  },
  {
    slug: "strategy-without-empathy",
    title: "Strategy Without Empathy Is Just a Spreadsheet",
    category: "Product Strategy",
    excerpt:
      "Numbers tell you what happened. Empathy tells you why. The best product strategies I've seen start with a conversation, not a dashboard.",
    date: "Jan 24, 2026",
    readTime: "4 min read",
    tags: ["Product Strategy", "Consumer Insights", "Leadership"],
    image: "/images/project-coffee.jpg",
    content: [
      "I've sat through enough strategy presentations to know that most of them start and end with numbers. Market share. NPS scores. Conversion rates. And look, those things matter. But they only tell you what happened -- they never tell you why.",
      "Empathy is the why. It's the thing that turns a data point into a story, and a product roadmap into something people actually believe in.",
      "Early in my career, I learned this the hard way. I built a strategy deck that was bulletproof on paper -- great data, clear recommendations, tight logic. It landed with a thud. The stakeholders nodded politely and moved on. What I'd missed was the human element. I hadn't connected the numbers to the lived experience of the people we were trying to serve.",
      "Since then, I've made it a practice to start every product strategy effort with conversations. Not surveys. Not focus groups behind one-way glass. Real conversations with real people, asking open-ended questions and actually listening to the answers.",
      "The insights that emerge from those conversations are almost always more valuable than anything you'll find in a dataset. They give you the context that numbers lack. They reveal the workarounds, the frustrations, and the moments of delight that no dashboard will ever surface.",
      "Strategy without empathy is just a spreadsheet. And nobody ever changed the world with a spreadsheet.",
    ],
  },
  {
    slug: "the-case-for-side-projects",
    title: "The Case for Side Projects",
    category: "Creativity",
    excerpt:
      "The most interesting professionals I know have something going on outside their job title. Side projects aren't distractions -- they're how you stay sharp.",
    date: "Jan 10, 2026",
    readTime: "6 min read",
    tags: ["Creativity", "Growth", "Personal Development"],
    image: "/images/project-podcast.jpg",
    content: [
      "There's a weird cultural expectation that once you reach a certain level in your career, your job should be everything. All your energy, all your best thinking, all your ambition -- poured into one role at one company. I think that's both unrealistic and counterproductive.",
      "The most interesting product people I know have something going on outside their job title. A podcast. A community project. A side business. These aren't distractions from their 'real' work -- they're how they stay sharp, curious, and connected to ideas that would never show up in a quarterly review.",
      "When Joshua Martin and I started The Produced Podcast, it wasn't because we had extra time. It was because we were learning things through our business that felt worth sharing. The discipline of having to articulate those lessons -- to turn lived experience into something coherent enough for an audience -- made us better at the work itself.",
      "Side projects give you permission to experiment without the stakes. To test a new approach, explore a new domain, or serve a new audience without needing a business case or executive approval. That freedom is where some of the best product thinking comes from.",
      "The skills I've developed through side projects -- stakeholder management, go-to-market thinking, community engagement, strategic communication -- have made me measurably better at my day job. The cross-pollination is real.",
      "So if you've been sitting on an idea because it doesn't fit neatly into your LinkedIn bio, that might be exactly why you should pursue it.",
    ],
  },
  {
    slug: "what-healthcare-taught-me-about-product",
    title: "What Healthcare Taught Me About Product",
    category: "Healthcare",
    excerpt:
      "Healthcare is where product thinking gets real. When the stakes are someone's health, you stop tolerating bad products pretty fast.",
    date: "Dec 15, 2025",
    readTime: "7 min read",
    tags: ["Healthcare", "Product Strategy", "Patient Experience"],
    image: "/images/project-ache.jpg",
    content: [
      "Before working in pharma, I thought I understood how to build for users. I'd done the journey maps, the service blueprints, the stakeholder interviews. But healthcare taught me that everything I knew about building products was the easy version.",
      "In healthcare, the user isn't just a customer. They're a patient navigating a system that wasn't designed with them in mind. They're a provider trying to deliver care while wrestling with tools and processes that create friction at every turn. The stakes aren't conversion rates -- they're outcomes that affect people's lives.",
      "That changes how you approach the work. You can't just optimize for satisfaction. You have to build for trust, for clarity, for the moments when someone is scared, confused, or overwhelmed and needs the product to work effortlessly.",
      "One of the biggest lessons healthcare taught me is that the people closest to the problem almost always have the best insight into the solution. Patients know what's broken. Providers know what's slowing them down. The job isn't to strategize in a vacuum -- it's to listen, synthesize, and then make a compelling case for what to build next.",
      "Healthcare also taught me patience with complexity. The regulatory landscape, the stakeholder dynamics, the sheer number of people who need to align before anything moves -- it's humbling. But it's also where the best product thinkers thrive, because the challenge demands rigor.",
      "If you can build a better product in healthcare, you can build a better product anywhere. The complexity is the training ground.",
    ],
  },
  {
    slug: "stop-asking-for-permission-to-lead",
    title: "Stop Asking for Permission to Lead",
    category: "Leadership",
    excerpt:
      "Nobody is going to tap you on the shoulder and say you're ready. Leadership starts when you decide the thing that needs to happen matters more than waiting to be asked.",
    date: "Nov 28, 2025",
    readTime: "4 min read",
    tags: ["Leadership", "Career", "Growth"],
    image: "/images/project-gear.jpg",
    content: [
      "There's a version of career advice that goes something like: put your head down, do great work, and eventually someone will notice and promote you. I believe the first part. The second part is mostly wishful thinking.",
      "The leaders I admire didn't wait for a title to start leading. They saw something that needed to happen and made it their problem. They built the deck that nobody asked for. They organized the meeting that should have happened months ago. They raised their hand for the project everyone else was avoiding.",
      "When I got involved with ACHE, it wasn't because someone invited me to redesign the chapter website. I saw that the website wasn't serving the mission, and I offered to fix it. That led to joining the Board. Which led to the Communications Chair role. Which led to a completely different trajectory in healthcare leadership.",
      "None of that happens if I'm waiting for permission.",
      "Leadership isn't a position -- it's a posture. It's the willingness to take responsibility for outcomes that aren't technically your job. It's making the thing that needs to happen more important than your comfort zone.",
      "The moment you stop waiting to be asked and start deciding to act, everything changes. Not because the opportunities get easier, but because you start seeing them everywhere.",
    ],
  },
  {
    slug: "building-in-public",
    title: "Why I Build in Public",
    category: "Creativity",
    excerpt:
      "Sharing the process, not just the finished product. There's something powerful about letting people see the messy middle.",
    date: "Nov 10, 2025",
    readTime: "5 min read",
    tags: ["Creativity", "Community", "Storytelling"],
    image: "/images/about-creative.jpg",
    content: [
      "Most people only show the highlight reel. The shipped product, the polished deliverable, the success metrics on a slide. And that's fine -- but it's not the whole story, and it's not the most useful part.",
      "I've started sharing more of the process. The drafts, the dead ends, the strategies that didn't work and why. Not because I think my process is uniquely interesting, but because I've learned more from other people's process than from their finished work.",
      "When you build in public, you invite feedback at the stage where it's actually useful -- before everything is locked in. You attract people who think like you, or who challenge how you think. You create a record of your own growth that's more honest than any portfolio.",
      "The vulnerability is real. Sharing something unfinished means accepting that people might see you struggle. But I've found that the people worth building relationships with don't judge you for the struggle. They respect it.",
      "Coffee with Cody started partly as an exercise in building in public. Having real conversations about how people got to where they are -- including the messy, nonlinear, uncertain parts -- turned out to resonate more than any polished interview format would have.",
      "The work gets better when you share it. Not because of the feedback alone, but because the act of sharing forces you to think more clearly about what you're actually building and why.",
    ],
  },
  {
    slug: "the-myth-of-the-right-path",
    title: "The Myth of the Right Path",
    category: "Leadership",
    excerpt:
      "There is no single correct career path. The people doing the most interesting work got there by connecting dots that nobody else thought to connect.",
    date: "Oct 22, 2025",
    readTime: "5 min read",
    tags: ["Career", "Growth", "Exploration"],
    image: "/images/hero-workspace.jpg",
    content: [
      "I've lost count of the people who've asked me how I ended up doing what I do. Product strategy? Innovation? At a pharma company? With a podcast and a business on the side? The honest answer is: none of this was planned.",
      "And I think that's the point. The most interesting careers aren't linear. They're built by people who followed their curiosity, said yes to things that didn't fit neatly into a five-year plan, and figured out the narrative later.",
      "The MBA didn't lead to product strategy in a straight line. Patient experience led to customer experience. Service design led to innovation. But each thing taught me something that made the next thing possible. The consumer insights work taught me to listen. The service design work taught me to synthesize. The business taught me to ship. And the healthcare context gave me a reason to care deeply about getting the product right.",
      "We tell people to find their passion and follow it, as if passion is a fixed destination. In my experience, passion is what shows up when you're fully engaged in something worth doing. It's a result, not a starting point.",
      "If your career path doesn't make sense on paper, good. It probably means you've been brave enough to follow the interesting thread instead of the safe one. And the people doing the most impactful work I know are exactly those people -- the ones who connected dots that nobody else thought to connect.",
      "There is no right path. There's your path. And the only way to find it is to keep walking.",
    ],
  },
];
