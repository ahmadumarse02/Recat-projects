import React from "react";
import cardImg1 from "../assets/images/cardImg1.png";
import cardImg2 from "../assets/images/cardImg2.png";
import cardImg3 from "../assets/images/cardImg3.png";
import cardImg4 from "../assets/images/cardImg4.png";
import Card from "./Card";
import personImg1 from "../assets/images/personImg1.svg";
import personImg2 from "../assets/images/personImg2.svg";
import personImg3 from "../assets/images/personImg3.svg";

function Offer() {
  return (
    <div className="flex gap-8 flex-wrap mx-auto">
      <Card cardImg={cardImg1} personImg={personImg1} />
      <Card cardImg={cardImg2} personImg={personImg2} />
      <Card cardImg={cardImg3} personImg={personImg3} />
      <Card cardImg={cardImg4} personImg={personImg1} />
    </div>
  );
}

export default Offer;
