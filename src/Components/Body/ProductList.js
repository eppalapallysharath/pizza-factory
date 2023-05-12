import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsList } from "../../Redux/Actions/ProductActions";
import { Button, Card, Carousel, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import carousel1 from "../../Assets/carsouel/Hundo Pizza.webp";
import carousel2 from "../../Assets/carsouel/top-view-pepperoni-pizza-sliced-into-six-slices.jpg";
import carousel3 from "../../Assets/carsouel/top-view-pepperoni-pizza-sliced-into-six-slices.jpg";
import "./ProductList.css";

const ProductList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const productList = useSelector((state) => state?.productR?.products);
  useEffect(() => {
    dispatch(fetchProductsList());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Carousel className="my-2 mx-1">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={carousel1}
            alt="First slide"
            height="500px"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={carousel2}
            alt="Second slide"
            height="500px"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={carousel3}
            alt="Third slide"
            height="500px"
          />
        </Carousel.Item>
      </Carousel>
      {productList.length > 0 ? (
        <>
          <div>
            <h3 className="text-center">GRAB THE PIZZA</h3>
          </div>
          <div className="main-container">
            {productList?.map((item) => (
              <Card
                key={item.id}
                onClick={() => navigate(`/productsDetails/${item.id}`)}
              >
                <Card.Img
                  // variant="top"
                  src={item.image}
                  width={200}
                  height={200}
                />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                </Card.Body>
              </Card>
            ))}
          </div>
        </>
      ) : (
        <Button variant="dark" disabled>
          <Spinner
            as="span"
            animation="border"
            size="sm"
            role="status"
            aria-hidden="true"
          />
          Loading PIZZA...
        </Button>
      )}
    </>
  );
};

export default ProductList;
