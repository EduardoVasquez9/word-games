import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="container">
        <Link to="/">Home</Link>
        <div className="right_options">
          <Link to="/hangman">Hangman</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
