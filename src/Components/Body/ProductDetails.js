import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  addToCart,
  fetchProduct,
  deleteFromCart,
  removeProduct,
} from "../../Redux/Actions/ProductActions";
import { Button } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import "./ProductDetails.css";

const ProductDetails = () => {
  const { id } = useParams();
  const [cart, setCart] = useState({
    productId: id,
    productName: "",
    productImage: "",
    productPrice: "",
    crustType: "",
  });
  const [itemPrice, setItemPrice] = useState({
    price: "",
    topping: "",
    extras: "",
  });
  const [isCart, setIsCart] = useState(false);

  const product = useSelector((state) => state.productR.productDescription);
  const pizzaAddons = useSelector((state) => state.productR.productAddons);
  // const cartData = useSelector((state) => state.productR.cart);
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
    cart?.productPrice > 0
      ? dispatch(addToCart(cart))
      : alert("Select at least one option (price)");
    setIsCart(true);
  };
  const handleRemoveFromCart = (e) => {
    e.preventDefault();
    dispatch(deleteFromCart(id));
    setIsCart(false);
  };
  const overallPrice =
    itemPrice?.price * 1 + itemPrice?.topping * 1 + itemPrice?.extras * 1;
  useEffect(() => {
    if (product || overallPrice) {
      const { name, image } = product;
      setCart((prevCart) => ({
        ...prevCart,
        productName: name,
        productImage: image,
        productPrice: overallPrice,
      }));
    }
  }, [product, overallPrice]);
  useEffect(() => {
    dispatch(fetchProduct(id));
    return () => {
      dispatch(removeProduct());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {Object.values(product).length > 0 ? (
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
                  ? pizzaAddons?.toppings?.veg_toppings.map((val, index) => (
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
                  : pizzaAddons?.toppings?.non_veg_toppings.map(
                      (val, index) => (
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
                      )
                    )}
              </div>
            </div>
            <div className="product-detail-crust">
              <h5>Crust Type</h5>
              <div className="crusts">
                {pizzaAddons?.crustType?.map((val, index) => (
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
                {pizzaAddons?.sides?.map((val, index) => (
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
            {isCart ? (
              <div className="product-button">
                <Button
                  type="button"
                  variant="danger"
                  onClick={handleRemoveFromCart}
                >
                  <FaShoppingCart /> <span>REMOVE FROM CART</span>
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
                  ADD TO CART ₹{overallPrice}
                </Button>
              </div>
            )}
          </div>
        </div>
      ) : (
        <h4>Loading</h4>
      )}
    </div>
  );
};

export default ProductDetails;
