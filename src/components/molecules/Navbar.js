import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navBar">
      <div className="container">
        <Link to="/">Home</Link>
        <Link to="/hangman">Hangman</Link>
      </div>
    </div>
  );
};

export default Navbar;
