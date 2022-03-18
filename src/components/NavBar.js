import { Link } from 'react-router-dom';
import { CgProfile } from 'react-icons/cg';

const Nav = () => (
  <header className="Navbar">
    <Link to="/">Bookstore CMS</Link>
    <Link to="/">Books</Link>
    <Link to="/Categories">Categories</Link>
    <div className="icon"><CgProfile size={35} /></div>
  </header>
);

export default Nav;
