import React from "react";
import Banner from "../Components/FirstPage/Banner";
import NavBar from "../Components/FirstPage/NavBar";
import "./Styled.css";

const Home: React.FC = () => {
  return (
    <body className="body">
      <NavBar />
      <Banner />
    </body>
  );
};

export default Home;
