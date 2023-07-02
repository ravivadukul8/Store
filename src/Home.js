import React from "react";
import Featurproducts from "./components/Featurproducts";
import Herosection from "./components/Herosection";
import Services from "./components/Services";
import Trusted from "./components/Trusted";

function Home() {
  const data = {
    name: " Store",
  };
  return (
    <div>
      <Herosection myData={data} />
      <Services />
      <Featurproducts />
      <Trusted />
    </div>
  );
}

// const Wrapper = styled.section`
//     background-color : ${({theme}) => theme.colors.bg};
//     width : '10px';
//     height : "10px";
// `;

export default Home;
