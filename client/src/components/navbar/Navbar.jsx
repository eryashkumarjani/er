import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav>
        <NavLink
          to={`/home`}
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          home
        </NavLink>
        <NavLink
          to={`/about`}
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          about
        </NavLink>
        <NavLink
          to={`/resume`}
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          resume
        </NavLink>
        <NavLink
          to={`/contact`}
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          contact
        </NavLink>
      </nav>
    </>
  );
};

export default Navbar;
