import React from "react";
import "./Cart.css";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import {
  cartDecrement,
  cartIncrement,
  deleteFromCart,
} from "../../Redux/Actions/ProductActions";

const Cart = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.productR.cart);

  const orderSummary = data?.reduce(
    (total, item) => total + item.productPrice * item.quantity,
    50
  );

  return (
    <div className="cart-container">
      <div className="cart-items">
        {data.length > 0 ? (
          <>
            <h2>Cart Items</h2>
            {data?.map((item) => (
              <div key={item.id} className="cart-item">
                <div className="product-details">
                  <img src={item.productImage} alt={item.productName} />
                  <div>
                    <p>{item.productName}</p>
                    <p>${item.productPrice * item.quantity}</p>
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
        <p>Shipping Charges: ₹ 50</p>
        <p>Total: ${orderSummary}</p>
        <Button>Checkout</Button>
      </div>
    </div>
  );
};

export default Cart;
