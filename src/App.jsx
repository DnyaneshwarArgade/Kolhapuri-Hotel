import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Menu from "./Pages/Menu/Menu";
import Order from "./Pages/Order/Order";
import Bottombar from "./Components/Bottombar/Bottombar";

function App() {
  return (
    <>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/Order" element={<Order />} />
      </Routes>

      <Bottombar />
    </>
  );
}

export default App;
