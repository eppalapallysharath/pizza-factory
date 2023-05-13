import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart, deleteFromCart } from "../../Redux/Actions/ProductActions";
import { Button } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { data } from "../Data/pizzadata";
import "./ProductDetails.css";

const ProductDetails = () => {
  const { id } = useParams();
  const { pizza, add_ons } = data;
  const product = pizza?.find((v) => v.id === id * 1);
  const cartData = useSelector((state) => state.productR.cart)?.find(
    (v) => v.productId === id
  );
  // const cartItem = cartData?.find((v) => v.productId === id);
  const [cart, setCart] = useState({
    productId: id,
    productName: product.name,
    productImage: product.image,
    productPrice: "",
    crustType: "",
  });
  const [itemPrice, setItemPrice] = useState({
    price: "",
    topping: "",
    extras: "",
  });
  const [carted, setCarted] = useState(false || cartData?.isCart);
  const dispatch = useDispatch();

  const handleCrustSelection = (e) => {
    setCart({
      ...cart,
      [e.target.name]: e.target.value,
    });
  };

  const handlePriceSelections = (e) => {
    setItemPrice({ ...itemPrice, [e.target.name]: e.target.value });
  };

  const handleAddToCart = (e) => {
    e.preventDefault();
    if (cart.productPrice > 0) {
      dispatch(addToCart(cart));
      setCarted(true);
    } else {
      alert("Select at least one option (Price)");
    }
  };
  // const handleAdd = (e) => {
  //   e.preventDefault();
  //   setCarted(cartItem.isCart);
  // };
  const handleRemoveFromCart = () => {
    // e.preventDefault();
    dispatch(deleteFromCart(id));
    setCarted(false);
  };

  const overallPrice =
    itemPrice?.price * 1 + itemPrice?.topping * 1 + itemPrice?.extras * 1;

  useEffect(() => {
    if (overallPrice) {
      setCart((prevCart) => ({
        ...prevCart,
        productPrice: overallPrice,
      }));
    }
  }, [overallPrice]);

  return (
    <div class="main-product-container">
      {Object.values(data).length > 0 ? (
        <div className="pizza-card">
          <div className="card-img-container">
            <div className="product-img">
              <img
                src={product?.image}
                width="300"
                height="200"
                alt={product?.name}
              />
            </div>
            <div className="product-description">
              <p>{product?.description}</p>
            </div>
          </div>
          <div className="product-detail">
            <div className="product-detail-title">
              <h3>{product?.name}</h3>
            </div>
            <div className="product-detail-prices">
              <h5>Prices</h5>
              <div className="prices">
                {product?.price?.map((val, index) => (
                  <label key={index} htmlFor={"price" + index}>
                    <input
                      type="radio"
                      id={"price" + index}
                      name="price"
                      value={val?.price}
                      onChange={handlePriceSelections}
                    />
                    <div className="price-box">
                      {val?.name} ₹{val.price}
                    </div>
                  </label>
                ))}
              </div>
            </div>
            <div className="product-detail-toppings">
              <h5>Toppings</h5>
              <div className="toppings">
                {product?.vegetarian === true
                  ? add_ons?.toppings?.veg_toppings.map((val, index) => (
                      <label key={index} htmlFor={"topping" + index}>
                        <input
                          type="radio"
                          id={"topping" + index}
                          name="topping"
                          value={val?.price}
                          onChange={handlePriceSelections}
                        />
                        <div className="topping-box">
                          {val.name} ₹{val.price}
                        </div>
                      </label>
                    ))
                  : add_ons?.toppings?.non_veg_toppings.map((val, index) => (
                      <label key={index} htmlFor={"topping" + index}>
                        <input
                          type="radio"
                          id={"topping" + index}
                          name="topping"
                          value={val?.price}
                          onChange={handlePriceSelections}
                        />
                        <div className="topping-box">
                          {val?.name} ₹{val.price}
                        </div>
                      </label>
                    ))}
              </div>
            </div>
            <div className="product-detail-crust">
              <h5>Crust Type</h5>
              <div className="crusts">
                {add_ons?.crustType?.map((val, index) => (
                  <label key={index} htmlFor={"crustType" + index}>
                    <input
                      type="radio"
                      id={"crustType" + index}
                      name="crustType"
                      value={val}
                      onChange={handleCrustSelection}
                    />
                    <div className="crust-box">{val}</div>
                  </label>
                ))}
              </div>
            </div>
            <div className="product-detail-sides">
              <h5>Sides</h5>
              <div className="sides">
                {add_ons?.sides?.map((val, index) => (
                  <label key={index} htmlFor={"extras" + index}>
                    <input
                      type="radio"
                      id={"extras" + index}
                      name="extras"
                      value={val.price}
                      onChange={handlePriceSelections}
                    />
                    <div className="sides-box">
                      {val.name} ₹{val.price}
                    </div>
                  </label>
                ))}
              </div>
            </div>
            <div>
              {carted === true ? (
                <div className="product-button">
                  <Button variant="danger" onClick={handleRemoveFromCart}>
                    <FaShoppingCart />
                    <span> Remove From Cart</span>
                  </Button>
                </div>
              ) : (
                <div className="product-button">
                  <Button
                    type="button"
                    variant="success"
                    onClick={handleAddToCart}
                    className="add-to-cart-button"
                  >
                    <FaShoppingCart />
                    <spam> ADD TO CART ₹{overallPrice}</spam>
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <h4>Loading</h4>
      )}
    </div>
  );
};

export default ProductDetails;
