import React from "react";
import Card1 from "./components/Card1";
import Card2 from "./components/Card2";
import Contact from "./components/Contact";
import Grid1 from "./components/Grid1";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Card1 />
      <br />
      <Grid1 />
      <br />
      <br />

      <Card2 />
      <br />
      <Contact />
    </div>
  );
};

export default App;
