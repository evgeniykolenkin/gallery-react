import React from "react";
import "../Gallery/Gallery.css";
import Heading from "../Heading/Heading";
import Tours from "../Tours/Tours";

function Gallery() {
  return (
    <>
      <Heading class="heading__h1" level="h1" text="Галерея путешествий" />
      <Tours />
    </>
  );
}

export default Gallery;
