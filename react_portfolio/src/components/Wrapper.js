import React from "react";
import "./Views/style.css";

function Wrapper(props) {
  return <main className="wrapper">{props.children}</main>;
}

export default Wrapper;
