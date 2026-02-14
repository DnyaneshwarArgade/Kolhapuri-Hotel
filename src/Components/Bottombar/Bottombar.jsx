import { Link } from "react-router-dom";
import "./Bottombar.css";

function Bottombar() {
  return (
    <div className="bottom-bar">
      <Link to="/">Home</Link>
      <Link to="/menu">Menu</Link>
      <Link to="/order">Order</Link>
    </div>
  );
}

export default Bottombar;
