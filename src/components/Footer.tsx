import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10">
          <div>
            <h3 className="font-sans text-lg font-bold text-foreground mb-2">Cody Wales</h3>
            <p className="text-muted text-sm max-w-xs leading-relaxed">
              Experience designer, business builder &amp; creative.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-foreground mb-2">Pages</h4>
            <Link href="/" className="text-sm text-muted hover:text-accent-light transition-colors">Home</Link>
            <Link href="/about" className="text-sm text-muted hover:text-accent-light transition-colors">About</Link>
            <Link href="/experience" className="text-sm text-muted hover:text-accent-light transition-colors">Experience</Link>
            <Link href="/projects" className="text-sm text-muted hover:text-accent-light transition-colors">Projects</Link>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-foreground mb-2">Connect</h4>
            <a href="https://www.linkedin.com/in/codywales" target="_blank" rel="noopener noreferrer" className="text-sm text-muted hover:text-accent-light transition-colors">LinkedIn</a>
            <a href="https://www.instagram.com/walesdrum/" target="_blank" rel="noopener noreferrer" className="text-sm text-muted hover:text-accent-light transition-colors">Instagram</a>
            <a href="https://x.com/cdoubleu14" target="_blank" rel="noopener noreferrer" className="text-sm text-muted hover:text-accent-light transition-colors">X (Twitter)</a>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-border text-center">
          <p className="text-xs uppercase tracking-[0.15em] text-muted">&copy; {new Date().getFullYear()} Cody Wales. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
