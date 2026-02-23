import { Routes, Route } from "react-router-dom";

import { useState } from "react";

import Home from "./Pages/Home/Home";
import Menu from "./Pages/Menu/Menu";
import Order from "./Pages/Order/Order";
import Profile from "./Pages/Profile/Profile";
import Layout from "./Layout/Layout";


function App() {
const [cart, setCart] = useState([]);

   const [billNo, setBillNo] = useState(() => {
    const today = new Date().toLocaleDateString();
    const savedDate = localStorage.getItem("billDate");
    const savedBill = Number(localStorage.getItem("billNo")) || 0;

    if (savedDate === today) {
      return savedBill;
    } else {
      localStorage.setItem("billDate", today);
      localStorage.setItem("billNo", 0);
      return 0;
    }
  });

  return (
    <Routes>

      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        {/* <Route path="menu" element={<Menu />} />
        <Route path="order" element={<Order />} /> */}
          <Route path="menu" element={<Menu cart={cart} setCart={setCart} />}/>
         <Route path="order" element={<Order cart={cart} setCart={setCart} billNo={billNo} setBillNo={setBillNo}/>}/>
        <Route path="profile" element={<Profile />} />
         </Route>
    </Routes>
  );
}

export default App;



