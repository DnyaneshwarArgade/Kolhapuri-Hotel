import { useNavigate } from "react-router-dom";

function Bottombar() {
  const navigate = useNavigate();

  return (
    <div className="bottom-bar">
      <button onClick={() => navigate("/")}>Home</button>
      <button onClick={() => navigate("/menu")}>Menu</button>
      <button onClick={() => navigate("/order")}>Order</button>
      <button onClick={() => navigate("/profile")}>Profile</button>
    </div>
  );
}

export default Bottombar;
