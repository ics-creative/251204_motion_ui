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
            <Link to="/modal-dialog" className="indexListLink">
              Modal Dialog
            </Link>
          </li>
          <li>
            <Link to="/ripple-button" className="indexListLink">
              Ripple Button
            </Link>
          </li>
          <li>
            <Link to="/accordion" className="indexListLink">
              Accordion
            </Link>
          </li>
          <li>
            <Link to="/list" className="indexListLink">
              List
            </Link>
          </li>
          <li>
            <Link to="/dropdown" className="indexListLink">
              Dropdown
            </Link>
          </li>
          <li>
            <Link to="/progress-rate" className="indexListLink">
              Progress Rate
            </Link>
          </li>
          <li>
            <Link to="/segment-button" className="indexListLink">
              Segment Button
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
