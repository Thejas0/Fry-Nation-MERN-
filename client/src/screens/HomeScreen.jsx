import React, { useEffect } from "react";
import AllPizza from'../pizza-data';
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import { getAllFood } from "../actions/foodAction";
import Pizza from "../components/Food";

import Filters from "../components/Filters";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const foodstate = useSelector((state) => state.getAllFoodReducer);
  const {pizzas} = foodstate;
  console.log("foods",pizzas);
  useEffect(() => {
    dispatch(getAllFood());
  }, [dispatch]);
// console.log("all : ",AllPizza);
  return (
    <>
      <Container>

        {/* <Row>
        <Filters />
          {AllPizza.map((pizza)=>(

            <Col md={4}><Pizza pizza={pizza}></Pizza></Col>
          ))}
        </Row>  */}

          <Row>
            <Filters />
            {pizzas.map((pizza) => (
              <Col md={4} key={pizza.name}>
                <Pizza pizza={pizza} />
              </Col>
            ))}
          </Row>
      </Container>
    </>
  );
};

export default HomeScreen;
