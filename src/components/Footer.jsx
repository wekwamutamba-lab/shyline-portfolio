export function Footer() {
  return (
    <footer className="container py-10 text-sm text-muted">
      <div className="flex flex-col gap-4 border-t border-ink/15 pt-6 md:flex-row md:items-center md:justify-between">
        <p className="font-hand">
          © 2026 Shyline Mwanza. All rights reserved.
        </p>

        <div className="flex flex-wrap gap-4 font-hand">
          <a
            href="mailto:shylinemwanza59@gmail.com"
            className="transition-colors hover:text-sky-900"
          >
            Email
          </a>

          <a
            href="https://www.linkedin.com/in/shyline-mwanza-6a73323aa"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-sky-900"
          >
            LinkedIn
          </a>

          <a
            href="https://www.instagram.com/?deoia=1"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-sky-900"
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}