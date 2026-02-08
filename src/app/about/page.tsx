import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me | Cody Wales",
  description:
    "Learn about Cody Wales — experience designer, business builder, and creative with a passion for human-centered innovation.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <p className="text-accent font-medium text-sm uppercase tracking-widest mb-4">
          About Me
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6">
          Hey, I&apos;m Cody.
        </h1>
        <p className="text-lg text-muted leading-relaxed max-w-2xl">
          I am an experience designer, business builder and creative. I help
          organizations transform consumer insights into strategic innovation
          that drives business growth.
        </p>
      </section>

      {/* Bio Section */}
      <section className="bg-section-alt">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">My Story</h2>
              <div className="space-y-4 text-muted leading-relaxed">
                <p>
                  My journey into healthcare began when a close friend&apos;s snowmobile accident
                  showed me the profound impact of whole person care. While my pre-med aspirations
                  eventually led me to marketing, I discovered my true calling in understanding
                  and connecting with people.
                </p>
                <p>
                  As a seasoned customer experience (CX) and service design strategist, I help
                  organizations transform consumer insights into strategic innovation that drives
                  business growth. My expertise lies in designing and delivering human-centered
                  experiences that create measurable value for customers and employees.
                </p>
                <p>
                  Beyond my professional work, I&apos;m a national touring musician, sound bath
                  facilitator, and founder of Flying W Entertainment. I love to laugh, be goofy,
                  and believe deeply in the power of creative expression.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-card-bg rounded-xl p-6 border border-border">
                <h3 className="text-sm uppercase tracking-widest text-muted mb-4">Education</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-foreground">Master of Business Administration</p>
                    <p className="text-sm text-accent">Rollins College &ndash; Crummer Graduate School of Business</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Bachelor of Business Administration</p>
                    <p className="text-sm text-accent">Andrews University</p>
                  </div>
                </div>
              </div>
              <div className="bg-card-bg rounded-xl p-6 border border-border">
                <h3 className="text-sm uppercase tracking-widest text-muted mb-4">Recognition</h3>
                <div>
                  <p className="font-semibold text-foreground">ACHE of Central Florida Regent&apos;s Award</p>
                  <p className="text-sm text-muted">American College of Healthcare Executives</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section>
        <div className="max-w-5xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-bold text-foreground mb-10">My Approach</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Customer-First Mindset",
                text: "Bringing a deep understanding of user needs to the complex healthcare ecosystem, translating consumer insights into product strategy and innovation opportunities.",
              },
              {
                title: "Service Design",
                text: "Using tools such as journey mapping and service blueprinting to provide strategic insights that shape product development and go-to-market approaches.",
              },
              {
                title: "Cross-Functional Collaboration",
                text: "Working with diverse stakeholders across organizations to enable breakthrough, best-in-class products and experiences for patients, providers, and colleagues.",
              },
              {
                title: "Consumer-Driven Innovation",
                text: "Championing methodologies that help teams identify unmet needs and develop solutions that resonate in the market.",
              },
              {
                title: "Human-Centered Design",
                text: "Creating meaningful solutions through empathy and research that help patients and healthcare professionals achieve better health outcomes.",
              },
              {
                title: "Strategic Innovation",
                text: "Orchestrating the collaboration between design and product teams, ensuring innovations directly improve the healthcare experience.",
              },
            ].map((item) => (
              <div key={item.title} className="p-6 rounded-xl border border-border hover:shadow-md transition-shadow bg-card-bg">
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Takeaways */}
      <section className="bg-foreground text-white">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-bold mb-8">Key Beliefs</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <blockquote className="border-l-4 border-accent pl-6">
              <p className="text-gray-300 leading-relaxed italic">
                &ldquo;Realize the value of a strong network &mdash; you can accomplish so much
                more with a diverse group than you can alone.&rdquo;
              </p>
            </blockquote>
            <blockquote className="border-l-4 border-accent pl-6">
              <p className="text-gray-300 leading-relaxed italic">
                &ldquo;Feedback is a gift &mdash; the sooner and more often you&apos;re willing
                to get it, the better the outcome of the product.&rdquo;
              </p>
            </blockquote>
          </div>
        </div>
      </section>
    </>
  );
}
