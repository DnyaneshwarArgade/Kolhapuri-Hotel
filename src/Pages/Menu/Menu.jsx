import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

import { useNavigate } from "react-router-dom";
  

import "./Menu.css";
import starter from "../../assets/Starter.webp";
import paneermasala from "../../assets/veg paneer masala.jpg";
import butterpaneer from "../../assets/paneer butter masala.jpg";
import mixveg from "../../assets/Mix veg.jpg";
import vegkolhapuri from "../../assets//Veg-Kolhapuri.jpg";
import paneerkohlapuri from "../../assets/paneer kohlapuri.jpg";
import kajumasala from "../../assets/Kaju masala.jpg";
import kajupaneermasala from "../../assets/kaju paneer masala.jpg";
import shevbhaji from "../../assets/Shev Bhaji.jpg";
import matakimasala from "../../assets/Matki masala.jpg";
import daltadka from "../../assets/DalTadka.webp";
import Chapati from "../../assets/Chapati.jpg";
import BajrichiBhakar from "../../assets/Bajrichi Bhakri.jpg";
import TandooriRoti from "../../assets/Tandoori-Roti.png";
import ButterRoti from "../../assets/Butter-Roti.jpg";
import ButterNaan from "../../assets/Butter-Naan.jpg";
import planerice from "../../assets/Plane rice.jpg";
import jirarice from "../../assets/Jira rice.jpg";
import indrayani from "../../assets/Indrayani-rice.jpg";
import dalkhichdi from "../../assets/Dal Khichdi.jpg";
import dalkhichditadkha from "../../assets/DalTadka.webp";
import chickenhundi from "../../assets/Chicken-hundi.jpg";
import chickenmasala from "../../assets/Chicken-Masala.jpg";
import chickenkolhapuri from "../../assets/kolhapuri-chicken.jpg";
import chickensuka from "../../assets/chicken-sukka.webp";
import chickenfry from "../../assets/Chicken Fry.jpg";
import chickencurry from "../../assets/Chicken curry.jpg";
import muttonhundi from "../../assets/MuttonHundi.jpg"
import muutonkolhapuri from "../../assets/Mutton Kolhapuri.webp"
import muutonmasala from "../../assets/Mutton-Masala.jpg"
import muutonfry from "../../assets/Mutton-Fry.jpg"
import andacurry from "../../assets/AndaCurry.webp";
import andamasala from "../../assets/Anda-Masala.jpg";
import andaboil from "../../assets/Boil-Eggs.jpg";
import chickenbriyani from "../../assets/Chicken-biryani.jpg";
import muttonbriyani from "../../assets/Mutton-briyani.jpg";
import andabriyani from "../../assets/Anda-briyani.jpg";
import vegbriyani from "../../assets/Veg Briyani.jpg";
import solkadhi from "../../assets/solkadhi.avif";
import masalatak from "../../assets/MasalaTak.png";
import panjabithali from "../../assets/Panjabi Thali.webp";
import paneermasalathali from "../../assets/Paneer Masala Thali.jpg";
import shevbhajithali from "../../assets/Shev Bhaji Thali.jpg";
import benganmasalathali from "../../assets/BenganMasala.jpg";
import matakimasalathali from "../../assets/Mataki Thali.jpg";
import muttonthali from "../../assets/MuttonThali.png";
import khrdamuttonthali from "../../assets/Khrda Mutton Thali.jpg";
import muttonkolhapurithali from "../../assets/Kolhapuri-Mutton Thali.jpg";
import chickenthali from "../../assets/ChickenThali.jpg";
import khrdachickenthali from "../../assets/Chicken Khrada Thali.jpg";
import chickenkolhapurithali from "../../assets/Chicken Kolhapuri Thali.avif";
import combinationthali from "../../assets/combination Thali.jpg";
import andamasalathali from "../../assets/Anda Masala.jpg";
import andacurrythali from "../../assets/Anda curry thali.jpg";

const menuData = [
  { id: 1, title: "Masala Papad", desc: "Crispy papad with spicy toppings", price: 40, category: "Starter", image: starter, },
  { id: 2, title: "Paneer Masala", desc: "Creamy paneer with Indian spices", price: 180, category: "Veg", image: paneermasala, },
  { id: 3, title: "Paneer Butter Masala", desc: "Rich Paneer in creamy butter", price: 180, category: "Veg", image: butterpaneer, },
  { id: 4, title: "Mix Veg", desc: "Colorful mix of veggies", price: 170, category: "Veg", image: mixveg, },
  { id: 5, title: "Veg kolhapuri", desc: "Spicy veggie delight from kolhapur", price: 180, category: "Veg", image: vegkolhapuri, },
  { id: 6, title: "Paneer Kolhapuri", desc: "Spicy paneer dish from kolhapur", price: 190, category: "Veg", image: paneerkohlapuri, },
  { id: 7, title: "Kaju Masala", desc: "Rich cashew masala", price: 200, category: "Veg", image: kajumasala, },
  { id: 8, title: "Kaju Paneer Masala", desc: "Creamy paneer in cashew", price: 200, category: "Veg", image: kajupaneermasala, },
  { id: 9, title: "Shev Bhaji", desc: "Crispy shev & veggie mix", price: 170, category: "Veg", image: shevbhaji, },
  { id: 10, title: "Mataki Masala", desc: "Spicy moth bean curry", price: 170, category: "Veg", image: matakimasala, },
  { id: 11, title: "Dal Tadka", desc: "Tempered lentil goodness", price: 160, category: "Dal", image: daltadka, },
  { id: 12, title: "Chapati", desc: "Soft indian chapati", price: 15, category: "Roti", image: Chapati, },
  { id: 13, title: "Bajrichi Bhakar", desc: "Served with spicy curries & vegetables", price: 30, category: "Roti", image: BajrichiBhakar, },
  { id: 14, title: "Tandoori Roti", desc: "Leavened faltbread cooked in a tanddor", price: 15, category: "Roti", image: TandooriRoti, },
  { id: 15, title: "Butter Roti", desc: "Soft roti with butter", price: 20, category: "Roti", image: ButterRoti, },
  { id: 16, title: "Butter Naan", desc: "Soft naan with butter", price: 50, category: "Roti", image: ButterNaan, },
  { id: 17, title: "Plain Rice", desc: "Simple,fluffy & perfect with curries", price: "50/70", category: "Rice", image: planerice, },
  { id: 18, title: "Jira Rice", desc: "Jeera & spices give it unique taste,perfect with curries", price: "70/120", category: "Rice", image: jirarice, },
  { id: 19, title: "Indrayani Rice", desc: "Steamed rice with served all curries", price: "90/160", category: "Rice", image: indrayani, },
  { id: 20, title: "Dal Khichdi", desc: "Coforting lentil rice porridge", price: 150, category: "Rice", image: dalkhichdi, },
  { id: 21, title: "Dal Khichdi Tadkhawali", desc: "Spicy lentil rice with tempering", price: 170, category: "Rice", image: dalkhichditadkha, },
  { id: 22, title: "Chicken Hundi", desc: "Spicy clay pot chicken curry", price: "300/450", category: "Chicken", image: chickenhundi, },
  { id: 23, title: "Chicken Masala", desc: "Rich and spicy chicken masala", price: 200, category: "Chicken", image: chickenmasala, },
  { id: 24, title: "Chicken Kolhapuri", desc: "Spicy kolhapuri chicken curry delight", price: 220, category: "Chicken", image: chickenkolhapuri, },
  { id: 25, title: "Chicken Suka", desc: "Dry spicy chicken masala dish", price: 180, category: "Chicken", image: chickensuka, },
  { id: 26, title: "Chicken Fry", desc: "Crispy fried chicken pieces", price: 170, category: "Chicken", image: chickenfry, },
  { id: 27, title: "Chicken Curry", desc: "Flavorful & spicy chicken delight", price: 160, category: "Chicken", image: chickencurry, },
  { id: 28, title: "Mutton Handi", desc: "Rich,slow-cooked mutton treat", price: "450/700", category: "Mutton", image: muttonhundi, },
  { id: 29, title: "Mutton Kolhapuri", desc: "A spicy & utterly satisfying dish", price: 320, category: "Mutton", image: muutonkolhapuri, },
  { id: 30, title: "Mutton Masala", desc: "Rich & spicy mutton curry", price: 300, category: "Mutton", image: muutonmasala, },
  { id: 31, title: "Mutton Fry", desc: "Crispy fried mutton pieces", price: 270, category: "Mutton", image: muutonfry, },
  { id: 32, title: "Anda Curry", desc: "Boiled eggs in a rich,flavorful gravy", price: 150, category: "Anda", image: andacurry, },
  { id: 33, title: "Anda Masala", desc: "Anda cooked with special spices & masala", price: 170, category: "Anda", image: andamasala, },
  { id: 34, title: "Anda Boil", desc: "Hard boiled eggs", price: 30, category: "Anda", image: andaboil, },
  { id: 35, title: "Chicken Briyani", desc: "Briyani style chicken spiced & layered with rice", price: 130, category: "Briyani", image: chickenbriyani, },
  { id: 36, title: "Mutton Briyani", desc: "Briyani style mutton spiced & layered with rice", price: 200, category: "Briyani", image: muttonbriyani, },
  { id: 37, title: "Anda Briyani", desc: "Briyani style eggs spiced & layered with rice", price: 130, category: "Briyani", image: andabriyani, },
  { id: 38, title: "Veg Briyani", desc: "Mixed veggies & rice with aromatic spices", price: 150, category: "Briyani", image: vegbriyani, },
  { id: 39, title: "Solkadhi", desc: "Solkadhi is a refreshing coconut milk drink ", price: 25, category: "Cold-drink", image: solkadhi, },
  { id: 40, title: "Masala Tak", desc: "Made with yogurt,spices like coriander & mint", price: 20, category: "Cold-drink", image: masalatak, },
  { id: 41, title: "Panjabi Thali", desc: "", price: 160, category: "Pure Veg", image: panjabithali, },
  { id: 42, title: "Paneer Masala Thali", desc: "", price: 100, category: "Pure Veg", image: paneermasalathali, },
  { id: 43, title: "Shev Bhaji Thali", desc: "", price: 100, category: "Pure Veg", image: shevbhajithali, },
  { id: 44, title: "Bengan Masala Thali", desc: "", price: 100, category: "Pure Veg", image: benganmasalathali, },
  { id: 45, title: "Mataki Masala Thali", desc: "", price: 100, category: "Pure Veg", image: matakimasalathali, },
  { id: 46, title: "Mutton Thali", desc: "", price: 350, category: "Mutton Thali", image: muttonthali, },
  { id: 47, title: "Khrda Mutton Thali", desc: "", price: 370, category: "Mutton Thali", image: khrdamuttonthali, },
  { id: 48, title: "Mutton Kolhapuri Thali", desc: "", price: 400, category: "Mutton Thali", image: muttonkolhapurithali, },
  { id: 49, title: "Chicken Thali", desc: "", price: 220, category: "Chicken Thali", image: chickenthali, },
  { id: 50, title: "Khrda Chicken Thali", desc: "", price: 240, category: "Chicken Thali", image: khrdachickenthali, },
  { id: 51, title: "Chicken Kolhapuri Thali", desc: "", price: 250, category: "Chicken Thali", image: chickenkolhapurithali, },
  { id: 52, title: "Combination Thali", desc: "", price: 350, category: "Chicken Thali", image: combinationthali, },
  { id: 53, title: "Anda Masala Thali", desc: "", price: 170, category: "Anda", image: andamasalathali, },
  { id: 54, title: "Anda Curry Thali", desc: "", price: 170, category: "Anda", image: andacurrythali, },

];
   const MenuPage = ({ cart, setCart }) => {

  const [active, setActive] = useState("All");
  const filteredItems =
    active === "All"
      ? menuData
      : menuData.filter((item) => item.category === active);

 const navigate = useNavigate();

   const addToCart = (item) => {

  const existing = cart.find((i) => i.id === item.id);

  if (existing) {
    // same item click → qty 
    setCart(
      cart.map((i) =>
        i.id === item.id
          ? { ...i, qty: i.qty + 1 }
          : i
      )
    );
  } else {
    // new item add करा
    setCart([
      ...cart,
      {
        id: item.id,
        name: item.title,
        price: Number(item.price) || 0,
        qty: 1,
      },
    ]);
  }

  navigate("/order"); 
};



  return (
    <div className="menu-page">
      <div className="hotel">
        <div className="hotel-menu">
          <h1>Hotel Menu</h1>
          <p>Explore our delicious offerings</p>
        </div>
      </div>

      <div className="filters">
        {["All", "Starter", "Veg", "Dal", "Roti", "Rice", "Chicken", "Mutton", "Anda", "Briyani", "Cold-drink", "Pure Veg", "Mutton Thali", "Chicken Thali"].map((cat) => (
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
          // <div className="menu-card" key={item.id}>
          <div className="menu-card" key={item.id} onClick={() => addToCart(item)}style={{ cursor: "pointer" }}>
            <img src={item.image} alt={item.title} />
            <div className="card-content">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <div className="card-footer">
                <span>₹{item.price}</span>
                {/* <button>Add to Cart</button> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuPage;

