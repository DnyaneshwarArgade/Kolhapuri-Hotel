import React, { useState } from "react";
import "./Order.css";
import logo from "../../assets/logo.png";

const Order = ({ cart, setCart, billNo, setBillNo }) => {

  const [mobile, setMobile] = useState("");

  const removeItem = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };
 // Calculations
  const subtotal = cart.reduce(
    (acc, item) => acc + item.qty * item.price,
    0
  );

  const serviceCharge = subtotal * 0.10;
  const total = subtotal + serviceCharge;
     
  const generateNextBill = () => {
  const today = new Date().toLocaleDateString();
  const savedDate = localStorage.getItem("billDate");

  let newBill;

  if (savedDate === today) {
    newBill = Number(localStorage.getItem("billNo")) + 1;
  } else {
    newBill = 1;
    localStorage.setItem("billDate", today);
  }

  localStorage.setItem("billNo", newBill);
  setBillNo(newBill);
   };
    const handleCancel = () => {
  setCart([]);
  generateNextBill();
   };

  const handlePrint = () => {
  window.print();
  setCart([]);
  generateNextBill();
};

  return (
    <div className="bill-print">
      <div className="order-container">
        <div className="order-card">

          {/* Header */}
            <div className="header-top">
  <div className="header-left">
    <h2 className="hotel-name">हॉटेल कोल्हापुरी</h2>
    <p className="bill-info">Bill No: {billNo}</p>
       <div className="mobile-row">
    <span>Mobile:</span>
    <input type="text" value={mobile}onChange={(e) => setMobile(e.target.value)}
    placeholder="Enter mobile number"/>
   </div>
     </div>
      <img src={logo} alt="Hotel Logo" className="hotel-logo" />
     </div>

          {/* Table Header */}
          <div className="table-header">
            <span>Name</span>
            <span>Qty</span>
            <span>Price</span>
            <span></span>
          </div>

          {/* Items */}
          {cart.length === 0 ? (
            <p style={{ textAlign: "center" }}>No items added</p>
          ) : (
            cart.map((item) => (
              <div className="item-row" key={item.id}>
                <span>{item.name}</span>
                <span>{item.qty}</span>
                <span>₹{item.price.toFixed(2)}</span>

                <button
                  className="delete-btn"
                  onClick={() => removeItem(item.id)}
                >
                  ✖
                </button>
              </div>
            ))
          )}

          {/* Totals */}
          <div className="total-section">

            <div className="total-row">
              <span>Subtotal</span>
              <span>₹{subtotal.toFixed(2)}</span>
            </div>

            <div className="total-row">
              <span>Service Charge (10%)</span>
              <span>₹{serviceCharge.toFixed(2)}</span>
            </div>

            <div className="total-row total-bold">
              <span>Total</span>
              <span>₹{total.toFixed(2)}</span>
            </div>

          </div>

          {/* Buttons */}
          <div className="button-section">
            <button className="cancel-btn" onClick={handleCancel}>
              Cancel
            </button>

            <button className="print-btn" onClick={handlePrint}>
              Print
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Order;