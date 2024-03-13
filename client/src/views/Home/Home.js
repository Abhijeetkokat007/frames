import "./Home.css";
import React from "react";
import EcommerseSlider from "../../component/Abhijeet/EcommerseSlider/EcommerseSlider";
import Information from "../../component/Durgesh/Testimonial/Information";
import Contact from "../../component/Durgesh/Contact Form1/Contact";
import Plant from "../../component/Durgesh/Plant/Plant";

const Home = () => {
  return (
    <div className="main-home">
      <EcommerseSlider />
      <Information />
      <Contact />
      <Plant />
    </div>
  );
};

export default Home;
