import React from "react";
import { Container, Row, Col,Image,Table } from "react-bootstrap";

const About = () => {
  return (
    <>
      <Container style={{ marginTop: "50px" }}>
        <h1>Who we are : </h1>
        <p>
          Our technology platform connects customers, restaurant partners and delivery partners,
          serving their multiple needs. Customers use our platform to search and discover restaurants, 
          read and write customer generated reviews and view and upload photos, order food delivery,
          book a table and make payments while dining-out at restaurants. On the other hand, 
          we provide restaurant partners with industry-specific marketing tools which enable 
          them to engage and acquire customers to grow their business while also providing a 
          reliable and efficient last mile delivery service. We also operate a one-stop procurement
          solution, Hyperpure, which supplies high quality ingredients and kitchen products to restaurant
          partners. We also provide our delivery partners with transparent and flexible earning opportunities.
        </p>
        <h1>Our Speciality</h1>
        <Row>
          <Col md={6}>
            <p>
            Imagine needing something when you are at home and getting it before you have tied your shoelaces to step out. 
            We are revolutionizing e-commerce by making the stuff most important to you, available to you in a blink of your eye.
            Our mission is - “instant commerce indistinguishable from magic”. Using a backbone of technology, data sciences, 
            and rich customer insights, we've built a dense and fast network of partner stores enabling lightning fast
             deliveries in minutes.

            In order to become one of the most important e-retail companies of our generation, we need builders who can
             think on their feet, take extreme ownership and commit to making outcomes happen. If you are ambitious, smart, 
             and don't have an ego about it, we'd love to hear from you. 
            </p>
            <p>
            They just don't think they are right, they can also verbalise and make other people see the world through their eyes.
             This doesn't mean that they are only sellers, they also believe and repeatedly prove what they are saying is true.
              A good leader conveys expectations, feedback, challenges and context etc. in a simple, honest and timely manner, 
              while maintaining an open channel for the same things to flow upwards from the people they lead
            </p>
            <p>
            So if you're hungry for good food and great conversation with fellow cooks, we're so happy you're here! And there's 
            no better place to start than our community's 75 Top-Rated Recipes of All Time, from five-star banana bread to our
             most-popular mac and cheese.
            </p>
          </Col>
          <Col md={6}>
            
            <Image
              src="images/frynation1.jpg"
              style={{ width: "100%", height: "90%" }}
            />
          </Col>
        </Row>
        <Row>
          <h1>Our Cheif</h1>
          <table class="table table-dark">
  <thead>
    <tr>
      <th scope="col"></th>
      <th scope="col">Name</th>
      <th scope="col">Contact Number</th>
      <th scope="col">Email</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Thejas N</td>
      <td>9008880314</td>
      <td>thejas@gmail.com</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Sriraksha</td>
      <td>9902324780</td>
      <td>sriraksha@gmail.com</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Thalleen</td>
      <td>8073428532</td>
      <td>thalleen@gmail.com</td>
    </tr>
  </tbody>
</table>
        </Row>
      </Container>
    </>
  );
};

export default About;
