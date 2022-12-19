// import React from "react";
import React, { useState, useEffect } from "react";
import { Container, Row, Col, Table, Image ,Form, Button} from "react-bootstrap";
import { FiPhoneCall } from "react-icons/fi";
import { ImMobile } from "react-icons/im";
import { AiOutlineMail } from "react-icons/ai";
import { useDispatch } from "react-redux";
const Contact = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  
  return (
    <>
      <Container style={{ marginTop: "50px" }} className ="bg-light">
        <Row>
          <Col md={6}>
            <h1 className="bg-warning text-center ">Fry Nation </h1>

          <Form>
          <Form.Group className="mb-3">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
            />
            
          </Form.Group>
          <br/>
          <select class="form-select custom-select-lg mb-3">
            <option selected>How can we help you ?</option>
            <option value="1">Need help with online order</option>
            <option value="2">I found incorrect/outdated information on a page.</option>
            <option value="3">There is a photo/review that is bothering me and I would like to report it.</option>
            <option value="4">The website/app are not working the way they should.</option>
            <option value="5">Others</option>
          </select>
          <br/>
          
          <label for="comment">Comment:</label>
              <textarea class="form-control" rows="4" id="comment"></textarea>
          <br/>
          <Button variant="primary" >
            Contact us
          </Button>
        </Form>
        <br/>
        <hr/>

            <Table striped bordered hover className="text-center">
              <thead>
                <tr>
                  <th className="bg-warning text-center" colSpan={3}>
                    --- Contact Details ---
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <FiPhoneCall />
                  </td>
                  <td>Phone</td>
                  <td>011-888-000</td>
                </tr>
                <tr>
                  <td>
                    <ImMobile />
                  </td>
                  <td>Call</td>
                  <td>900880314</td>
                </tr>
                <tr>
                  <td>
                    <AiOutlineMail />
                  </td>
                  <td>Email</td>
                  <td>frynation@frynation.com</td>
                </tr>
              </tbody>
            </Table>
          </Col>
          <Col md={6}>
            <Image
              src="images/frynation.jpg"
              style={{ width: "100%", height: "100%" }}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Contact;
