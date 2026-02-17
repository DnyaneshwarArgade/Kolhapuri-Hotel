import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Menu.css";
import grilledsteak from "../../assets/Grilled Steak.jpg";
import CaesarSalad from "../../assets/Caesar Salad.jpg";
import pizza from "../../assets/Margherita pizza.jpg";
import pasta from "../../assets/seafood pasta.jpg";
import DobleCheesePizza from "../../assets/DobleCheesepizza.jpeg";
import grilledribeyesteak from "../../assets/Grilled ribeye steak.png";

const menuData = [
  {
    id: 1,
    title: "Grilled Steak",
    desc: "Served with vegetables & fries.",
    price: 2084,
    category: "Breakfast",
    image: grilledsteak,
  },
  {
    id: 2,
    title: "Caesar Salad",
    desc: "Classic Caesar with chicken.",
    price: 1250,
    category: "Breakfast",
    image: CaesarSalad,
  },
  {
    id: 3,
    title: "Margherita Pizza",
    desc: "Tomato, mozzarella & basil.",
    price: 1580,
    category: "Lunch",
    image: pizza,
  },
  {
    id: 4,
    title: "Seafood Pasta",
    desc: "Pasta with shrimp & mussels.",
    price: 1900,
    category: "Dinner",
    image: pasta,
  },
  {
    id: 5,
    title: "Grilled ribeye steak",
    desc: "Tomato sauce, fresh mozzarella Doble Cheese",
    price: 1550,
    category: "Lunch",
    image: DobleCheesePizza,
  },
   {
    id: 6,
    title: "Grilled ribeye steak",
    desc: "Served with vegetables & fries.",
    price: 1240,
    category: "Dinner",
    image: grilledribeyesteak,
  },
];

const MenuPage = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState("All");

  const filteredItems =
    active === "All"
      ? menuData
      : menuData.filter((item) => item.category === active);

  return (
    <div className="menu-page">
      <div className="hotel">
        {/* <button className="back-btn" onClick={() => navigate("/")}>
          ← Back
        </button> */}
        <div className="hotel-menu">
          <h1>Hotel Menu</h1>
          <p>Explore our delicious offerings</p>

        </div>
      </div>

      <div className="filters">
        {["All", "Breakfast", "Lunch", "Dinner"].map((cat) => (
          <button
            key={cat}
            className={active === cat ? "active" : ""}
            onClick={() => setActive(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
      <h1 className="section-title">Popular Dishes</h1>

      <div className="card-grid">
        {filteredItems.map((item) => (
          <div className="menu-card" key={item.id}>
            <img src={item.image} alt={item.title} />
            <div className="card-content">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <div className="card-footer">
                <span>₹{item.price}</span>
                <button>Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuPage;

