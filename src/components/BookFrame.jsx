import { WritingText } from './WritingText';

export function BookFrame({ children, pageName = 'Shyline Mwanza', leftContent = null }) {
  return (
    <div className="book-scene">
      <div className="book-cover">

        {/* ── LEFT PAGE ──────────────────────────────── */}
        <div className="book-page book-page-left">
          <div className="book-page-inner">
            <WritingText
              as="span"
              text="Shyline Mwanza"
              className="book-page-label font-hand"
              speed={42}
              delay={120}
              cursor={false}
            />
            <div className="book-content">{leftContent}</div>
          </div>
        </div>

        {/* ── SPINE ─────────────────────────────────── */}
        <div className="book-spine" aria-hidden="true">
          <span className="book-ring book-ring-one" />
          <span className="book-ring book-ring-two" />
          <span className="book-ring book-ring-three" />
          <span className="book-ring book-ring-four" />
          <span className="book-ring book-ring-five" />
        </div>

        {/* ── RIGHT PAGE ────────────────────────────── */}
        <div className="book-page book-page-right">
          <div className="book-page-inner">
            <WritingText
              as="span"
              text={pageName}
              className="book-page-label book-page-label-right font-hand"
              speed={42}
              delay={250}
              cursor={false}
            />

            <div className="book-content">{children}</div>
          </div>
        </div>

      </div>
    </div>
  );
}