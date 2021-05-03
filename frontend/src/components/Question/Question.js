import { React, useState, useEffect } from "react";
import axios from "axios";
import Nav from "react-bootstrap/esm/Nav";

import Navbar from "react-bootstrap/Navbar";
import { Alert } from "react-alert";
import { useHistory } from "react-router-dom";
import {
  Button,
  Grid,
  Row,
  Col,
  ListGroup,
  Form,
  Card,
  Modal,
  Table,
} from "react-bootstrap";
import "./Question.css";

function Question() {
  const history = useHistory();
  const [validated, setValidated] = useState(false);
  const [question, setQuestion] = useState("all is well ?");
  const [completed, setCompleted] = useState(5);
  //const [alert, setAlert] = useState("");
  const [format, setFormat] = useState("");
  const [success, setSuccess] = useState(false);
  const [svm, setSVM] = useState("Loading..");
  const [neural, setNeural] = useState("Loading..");
  const [logistic, setLogistic] = useState("Loading..");
  const [naive, setNB] = useState("Loading..");

  useEffect(() => {
    console.log("use Effect called");
    setInterval(() => setCompleted(Math.floor(Math.random() * 100) + 1), 20000);
  }, []);

  const onSignup = (e) => {
    setFormat("");
    e.preventDefault();
    setValidated(true);

    if (question === "") {
      alert("Please enter Question !!");
    } else {
      if (question.includes("?")) {
        axios
          .post("http://localhost:5000/api", {
            question: question,
          })
          .then((response) => {
            console.log(response);
          })
          .catch((err) => {
            if (err.response) {
              console.log(err.response);
            }
          });
      } else {
        alert("Check question format");
      }
    }
  };

  function redirectToMethodology() {
    history.push({
      pathname: "/methodology",
    });
  }
  return (
    <div
      style={{
        backgroundImage: `url("https://www.savecg.com/en/wp-content/uploads/sites/51/2020/09/savecg_immagini22_10-1250x660.jpg")`,
        backgroundRepeat: "no-repeat",
        //height: "700px",
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100vw",
        height: "100vh",
      }}
    >
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">SINCERECTOR</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link>Predict</Nav.Link>
            <Nav.Link onClick={(event) => redirectToMethodology()}>
              Methodology
            </Nav.Link>
            <Nav.Link href="#algos">Algorithms Used</Nav.Link>
          </Nav>
        </Navbar>
        <Form noValidate validated={validated}>
          <Form.Row>
            <Form.Group
              as={Col}
              md={{ span: 5, offset: 3 }}
              controlId="validationCustom01"
            >
              <Form.Label className="text-center">
                <h4>Enter Question</h4>
              </Form.Label>
              <Form.Control
                className="text-center"
                style={{ width: "100%" }}
                required
                type="text"
                placeholder="Enter Question"
                onChange={(e) => {
                  setQuestion(e.target.value);
                }}
              />
              {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group
              as={Col}
              md={{ span: 5, offset: 3 }}
              controlId="validationCustom03"
            >
              <Button
                className="button-settleup"
                type="submit"
                variant="warning"
                onClick={onSignup}
              >
                SUBMIT
              </Button>
            </Form.Group>
          </Form.Row>
          <div></div>
          <Form.Row>
            <Form.Group
              as={Col}
              md={{ span: 5, offset: 3 }}
              controlId="validationCustom01"
            >
              <Form.Label className="text-center">
                <h4>Outputs</h4>
              </Form.Label>
            </Form.Group>
          </Form.Row>

          <Table striped bordered hover variant="dark" size="sm">
            <thead>
              <tr>
                <th>Sr.No</th>
                <th>Algorithm</th>
                <th>Output</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>SVM</td>
                <td>{svm}</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Neural Nets</td>
                <td>{neural}</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Naive Bayes</td>
                <td>{naive}</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Logistic Regression</td>
                <td>{logistic}</td>
              </tr>
            </tbody>
          </Table>
        </Form>
      </div>
    </div>
  );
}

export default Question;
