import { Link, useLocation } from 'react-router-dom';

export function Navbar() {
  const location = useLocation();

  const navItems = [
    { to: '/about', label: 'About' },
    { to: '/work', label: 'Work' },
    { to: '/notes', label: 'Notes' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="scrapbook-nav" aria-label="Main navigation">
      <Link
        to="/"
        className="scrapbook-logo font-display-hand"
        aria-label="Return to Shyline Mwanza home page"
      >
        SHYLINE
      </Link>

      <div className="scrapbook-links font-display-hand">
        {navItems.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className={location.pathname === item.to ? 'active' : ''}
            aria-current={
              location.pathname === item.to ? 'page' : undefined
            }
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}