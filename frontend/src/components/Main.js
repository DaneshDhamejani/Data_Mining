import React, { Component } from "react";
import { Route } from "react-router-dom";
import Question from "./Question/Question";
import ProgessBar from "./ProgressBar/ProgressBar";
import Methodology from "./Methodology/Methodology";
import Algorithm from "./Algorithm/Algorithm";

function Main() {
  return (
    <div>
      {" "}
      {/*Render Different Component based on Route*/}
      <Route exact path="/" component={Question} />
      <Route exact path="/methodology" component={Methodology} />
      <Route exact path="/algos" component={Algorithm} />
    </div>
  );
}
// Export The Main Component
export default Main;
