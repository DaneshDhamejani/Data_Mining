import { React, useState, useEffect } from "react";
import axios from "axios";
import Nav from "react-bootstrap/esm/Nav";
import { useHistory } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import { Alert } from "react-alert";
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

function Algorithm() {
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
            <Nav.Link href="/">Predict</Nav.Link>
            <Nav.Link href="/methodology">Methodology</Nav.Link>
            <Nav.Link href="#algos">Algorithms Used</Nav.Link>
          </Nav>
        </Navbar>
      </div>
    </div>
  );
}

export default Algorithm;
