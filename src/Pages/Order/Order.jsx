import React from "react";
import "./Order.css";
// import logo from "./assets/logo.png";
import logo from "../../assets/logo.png";



const Order = () => {
  return (
    <div className="order-container">
      <div className="order-card">
           <div className="logo-section">
  
    <img src={logo} alt="Hotel Logo" className="hotel-logo" />

  <p className="summary-text1">
    Here is the summary of your order.
  </p>

     </div>
      
          {/* <div className="logo-section">
  <img src={logo} alt="Hotel Logo" className="hotel-logo" />

  <h2 className="hotel-title">Hotel Logo</h2>

  <p className="summary-text1">
    Here is the summary of your order.
  </p>
</div> */}


        <div className="items-header">
          <span>Items</span>
          <span>Quantity</span>
        </div>

        {/* Items */}
        <div className="item-row">
          <img src="https://cdn.arabsstock.com/uploads/images/187252/delicious-grilled-beef-restaurants-with-thumbnail-187252.webp" alt="" />
          <div className="item-info">
            <h4>Grilled Steak</h4>
            <p>(1 item per item)</p>
          </div>
          <span className="price">$24.99</span>
        </div>

        <div className="item-row">
          <img src="https://feelgoodfoodie.net/wp-content/uploads/2020/04/Caesar-Salad-TIMG.jpg" alt="" />
          <div className="item-info">
            <h4>Caesar Salad</h4>
            <p>(1 item per item)</p>
          </div>
          <span className="price">$14.99</span>
        </div>

        <div className="item-row">
          <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/FOOD_CATALOG/IMAGES/CMS/2025/9/25/553633f0-c2be-4571-9534-f7235afa161a_32111e7d-f076-4582-917d-281ba25719b9.jpg" alt="" />
          <div className="item-info">
            <h4>Margherita Pizza</h4>
            <p>(1 item per item)</p>
          </div>
          <span className="price">$18.99</span>
        </div>

        <div className="item-row">
          <img src="https://static.vecteezy.com/system/resources/thumbnails/054/929/513/small/steaming-seafood-pasta-dish-with-shrimp-and-mussels-photo.jpeg" alt="" />
          <div className="item-info">
            <h4>Seafood Pasta</h4>
            <p>(1 item per item)</p>
          </div>
          <span className="price">$22.99</span>
        </div>

        {/* Summary */}
        <div className="summary">
          <div className="summary-row">
            <span>Subtotal</span>
            <span>$81.96</span>
          </div>
          <div className="summary-row">
            <span>Service charge (10%)</span>
            <span>$8.20</span>
          </div>
          <div className="summary-row">
            <span>Taxes (7%)</span>
            <span>$6.00</span>
          </div>

          <div className="total-row">
            <span>Total</span>
            <span>$96.16</span>
          </div>
        </div>

        {/* <div className="button-section">
          <button className="cancel-btn">Cancel</button>
          <button className="pay-btn">Pay Now</button>
        </div> */}
        <div class="button-container">
  <button class="cancel-btn">Cancel</button>
  <button class="pay-btn">Pay Now</button>
</div>

      </div>
    </div>
  );
};

export default Order;
