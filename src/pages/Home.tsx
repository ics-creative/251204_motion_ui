import { Link } from "react-router";

export const Home = () => {
  return (
    <div>
      <h1 className="pageTitle">Home</h1>
      <div className="contentsContainer">
        <ul className="indexList">
          <li>
            <Link to="/active-fb-button" className="indexListLink">
              Active Feedback Button
            </Link>
          </li>
          <li>
            <Link to="/ripple-button" className="indexListLink">
              Ripple Button
            </Link>
          </li>
          <li>
            <Link to="/modal-dialog" className="indexListLink">
              Modal Dialog
            </Link>
          </li>
          <li>
            <Link to="/accordion" className="indexListLink">
              Accordion
            </Link>
          </li>
          <li>
            <Link to="/segment-button" className="indexListLink">
              Segment Button
            </Link>
          </li>
          <li>
            <Link to="/scroll-triggered-animation" className="indexListLink">
              Scroll Triggered Animation
            </Link>
          </li>
          <li>
            <Link to="/hamburger-menu" className="indexListLink">
              Hamburger Menu
            </Link>
          </li>
          <li>
            <Link to="/svg-and-values" className="indexListLink">
              SVG & Values
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
