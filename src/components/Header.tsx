import { Link, useMatch } from "react-router";

export const Header = () => {
  const isHome = useMatch("/");
  return (
    <header className="globalHeader">
      <h1 className="globalHeaderTitle">UI with Motion</h1>
      <div>
        {!isHome && (
          <Link to="/" className="globalHeaderLink">
            Back to Home
          </Link>
        )}
      </div>
    </header>
  );
};
