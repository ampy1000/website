import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <h3 className="font-extrabold text-2xl text-foreground mb-3">
              Cody<span className="text-warm">.</span>
            </h3>
            <p className="text-muted leading-relaxed max-w-xs mb-6">
              Building what people actually need. Making the case for why it matters.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/codywales"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-foreground text-background flex items-center justify-center hover:bg-warm transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>

            </div>
          </div>
          <div className="md:col-span-3 md:col-start-8">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-foreground mb-4">Pages</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-muted hover:text-warm transition-colors link-draw">Home</Link></li>
              <li><Link href="/about" className="text-muted hover:text-warm transition-colors link-draw">About</Link></li>
              <li><Link href="/experience" className="text-muted hover:text-warm transition-colors link-draw">Experience</Link></li>
              <li><Link href="/projects" className="text-muted hover:text-warm transition-colors link-draw">Projects</Link></li>
              <li><Link href="/blog" className="text-muted hover:text-warm transition-colors link-draw">Blog</Link></li>
            </ul>
          </div>
          <div className="md:col-span-2">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-foreground mb-4">Connect</h4>
            <ul className="space-y-3">
              <li><a href="https://www.linkedin.com/in/codywales" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-warm transition-colors link-draw">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-14 pt-6 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted">&copy; {new Date().getFullYear()} Cody Wales. All rights reserved.</p>
          <p className="text-xs text-muted">Built with intention. And a lot of coffee.</p>
        </div>
      </div>
    </footer>
  );
}
