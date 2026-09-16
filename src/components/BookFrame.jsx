export function BookFrame({ children, pageName = 'Shyline Mwanza' }) {
  return (
    <div className="book-scene">
      <div className="book-cover">
        <div className="book-page book-page-left">
          <div className="book-page-inner">
            <span className="book-page-label font-hand">
              Shyline Mwanza
            </span>
          </div>
        </div>

        <div className="book-spine" aria-hidden="true">
          <span className="book-ring book-ring-one" />
          <span className="book-ring book-ring-two" />
          <span className="book-ring book-ring-three" />
          <span className="book-ring book-ring-four" />
          <span className="book-ring book-ring-five" />
        </div>

        <div className="book-page book-page-right">
          <div className="book-page-inner">
            <span className="book-page-label book-page-label-right font-hand">
              {pageName}
            </span>

            <div className="book-content">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}