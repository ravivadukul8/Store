import React from "react";
import Herosection from "./components/Herosection";
import { useProductContext } from "./context/productcontext";

function About() {
  const { Thenem } = useProductContext();
  // console.log({ Thenem });
  const data = {
    name: "Ecommarce",
  };
  return (
    <>
      {Thenem}
      <Herosection myData={data} />
    </>
  );
}

export default About;
