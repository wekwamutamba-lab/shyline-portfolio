export function Footer() {
  return (
    <footer className="container py-12 border-t border-ink/10 text-sm text-muted">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <p>© 2026 Shyline Mwanza. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="mailto:hello@shyline.design" className="hover:underline">
            Email
          </a>
          <a href="#" className="hover:underline">
            LinkedIn
          </a>
          <a href="#" className="hover:underline">
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}