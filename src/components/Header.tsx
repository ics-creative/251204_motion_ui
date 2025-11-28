import { Link } from "react-router";

export const Header = () => {
  return (
    <header className="globalHeader">
      <h1 className="globalHeaderTitle">UI with Motion</h1>
      <div>
        <Link to="/" className="globalHeaderLink">
          Back to Home
        </Link>
      </div>
    </header>
  );
};
