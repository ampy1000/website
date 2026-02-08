import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-white">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          <div>
            <h3 className="text-lg font-bold text-foreground mb-2">Cody Wales</h3>
            <p className="text-muted text-sm max-w-xs">
              Experience designer, business builder &amp; creative.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="text-sm font-semibold text-foreground mb-1">Pages</h4>
            <Link href="/" className="text-sm text-muted hover:text-accent transition-colors">Home</Link>
            <Link href="/about" className="text-sm text-muted hover:text-accent transition-colors">About Me</Link>
            <Link href="/experience" className="text-sm text-muted hover:text-accent transition-colors">Experience</Link>
            <Link href="/projects" className="text-sm text-muted hover:text-accent transition-colors">Projects</Link>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="text-sm font-semibold text-foreground mb-1">Connect</h4>
            <a href="https://www.linkedin.com/in/codywales" target="_blank" rel="noopener noreferrer" className="text-sm text-muted hover:text-accent transition-colors">LinkedIn</a>
            <a href="https://www.instagram.com/walesdrum/" target="_blank" rel="noopener noreferrer" className="text-sm text-muted hover:text-accent transition-colors">Instagram</a>
            <a href="https://x.com/cdoubleu14" target="_blank" rel="noopener noreferrer" className="text-sm text-muted hover:text-accent transition-colors">X (Twitter)</a>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-border text-center">
          <p className="text-sm text-muted">&copy; {new Date().getFullYear()} Cody Wales. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
