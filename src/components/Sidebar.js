import "./sidebar.css";
import { Link } from "react-router-dom";
function Sidebar() {
  return (
    <>
      <ul className="list-unstyled sidebar">
        <li>
          <Link to="/products"> get all products </Link>
        </li>
        <li>
          <Link to="/categories"> get all categories</Link>
        </li>
      </ul>
    </>
  );
}
export default Sidebar;
