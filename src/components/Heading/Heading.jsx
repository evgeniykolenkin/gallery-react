import React from "react";
import "../Heading/Heading.css";

function Heading(props) {
  if (props.level === "h1") {
    return <h1 className={props.class}>{props.text}</h1>;
  }
  if (props.level === "h2") {
    return <h2 className={props.class}>{props.text}</h2>;
  }
}

export default Heading;
