import React from "react";
import Pizza from "./Pizza";

const App = () => {
  return (
    <div>
      <h1>Padre Gino's - Order Now</h1>
      <Pizza name="Pepperoni" description="pep, cheese n stuff" />
      <Pizza name="Princewill" description="pep, cheese n stuff" />
      <Pizza name="Lilian" description="pep, cheese n stuff" />
      <Pizza name="Confidence" description="pep, cheese n stuff" />
    </div>
  );
};

export default App;
