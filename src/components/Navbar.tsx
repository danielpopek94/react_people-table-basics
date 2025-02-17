import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav
      data-cy="nav"
      className="navbar is-fixed-top has-shadow"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <NavLink
            className={(state) => (`navbar-item
                ${state.isActive
                ? 'has-background-grey-lighter'
                : ''}`
            )}
            to="/"
          >
            Home
          </NavLink>

          <NavLink
            className={(state) => (`navbar-item
              ${state.isActive
                ? 'has-background-grey-lighter'
                : ''}`
            )}
            to="/people"
          >
            People
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
