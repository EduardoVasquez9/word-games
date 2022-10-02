import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navBar">
      <Link to="/">Home</Link>
      <Link to="/hangman">Hangman</Link>
    </div>
  );
};

export default Navbar;
