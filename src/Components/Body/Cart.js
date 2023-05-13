import React from "react";
import "./Cart.css";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import {
  cartDecrement,
  cartIncrement,
  deleteFromCart,
} from "../../Redux/Actions/ProductActions";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.productR.cart);
  const cartPrice = data.reduce(
    (total, item) => total + item.productPrice * item.quantity,
    0
  );
  const ShippingCharges = 50;
  const orderSummary = cartPrice + ShippingCharges;

  return (
    <div className="cart-container">
      <div className="cart-items">
        {data.length > 0 ? (
          <>
            <h2>Cart Items</h2>
            {data?.map((item, index) => (
              <div className="cart-item" key={index}>
                <div
                  className="product-details"
                  onClick={() => navigate(`/productsDetails/${item.productId}`)}
                >
                  <img src={item.productImage} alt={item.productName} />
                  <div className="product-name">
                    <p>{item.productName}</p>
                    <p>₹ {item.productPrice * item.quantity}</p>
                  </div>
                </div>
                <div className="quantity">
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => dispatch(cartDecrement(item.productId))}
                  >
                    -
                  </Button>
                  <p>{item.quantity}</p>
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => dispatch(cartIncrement(item.productId))}
                  >
                    +
                  </Button>
                </div>
                <Button
                  variant="danger"
                  size="sm"
                  className="delete-button"
                  onClick={() => dispatch(deleteFromCart(item.productId))}
                >
                  Delete
                </Button>
              </div>
            ))}
          </>
        ) : (
          <h2>Your Cart is empty</h2>
        )}
      </div>
      <div className="order-summary">
        <h2>Order Summary</h2>
        <p>No. of Products: {data?.length}</p>
        <p>Cart Price: ₹ {cartPrice}</p>
        <p>Shipping Charges: ₹ 50</p>
        <p>
          Total: ₹
          {data?.length > 0 ? <span>{orderSummary}</span> : <span>0</span>}
        </p>
        <Button>Checkout</Button>
      </div>
    </div>
  );
};

export default Cart;
