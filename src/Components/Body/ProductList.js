import React, { useState } from "react";
import { Button, Card, Carousel, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { data } from "../Data/pizzadata";
import carousel1 from "../../Assets/carousel/Hundo Pizza.webp";
import carousel2 from "../../Assets/carousel/top-view-pepperoni-pizza-sliced-into-six-slices.jpg";
import carousel3 from "../../Assets/carousel/top-view-pepperoni-pizza-sliced-into-six-slices.jpg";
import "./ProductList.css";

const ProductList = () => {
  const pizzasData = data.pizza;
  const [filterData, setFilterData] = useState(pizzasData);
  const navigate = useNavigate();

  const handleFilter = (value) => {
    const update = pizzasData.filter((product) => product.vegetarian === value);
    setFilterData(update);
  };

  return (
    <div className="main-productList-container">
      <Carousel>
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

      {data?.pizza?.length > 0 ? (
        <>
          {/* <div>
            <h3 className="text-center">TASTE DELICIOUS PIZZA FROM US</h3>
          </div> */}
          <div className="my-3 d-flex justify-content-center productList-filter">
            <Button
              type="button"
              variant="warning"
              className="mx-2"
              onClick={() => setFilterData(pizzasData)}
            >
              ALL
            </Button>
            <Button
              type="button"
              className="mx-2"
              onClick={() => handleFilter(true)}
            >
              VEG PIZZA
            </Button>
            <Button
              type="button"
              className="mx-2"
              onClick={() => handleFilter(false)}
            >
              NON VEG PIZZA
            </Button>
          </div>
          <div className="productList-container">
            {filterData.map((item) => (
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
    </div>
  );
};

export default ProductList;
