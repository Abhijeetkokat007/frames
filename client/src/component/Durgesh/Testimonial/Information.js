import React from "react";
import Testimonial from "./Testimonial";
import "./Information.css";

function Information() {
  const data = [
    {
      name: "Name",
      degs: "Designation/User",
      comment: "Message About service...........",
      src: "https://images.pexels.com/photos/20284140/pexels-photo-20284140/free-photo-of-sally-haunts.png?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      name: "Name",
      degs: "Designation/User",
      comment: "Message About service...........",
      src: "https://images.pexels.com/photos/20284140/pexels-photo-20284140/free-photo-of-sally-haunts.png?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
  ];

  console.log(data);
  return (
    <div>
      <div className="heading-testimonials">
        <h1>Our Testimonials</h1>
      </div>
      <div className="main-testimonial">
        {data.map((item, ind) => {
          return (
            <Testimonial
              name={item.name}
              deg={item.degs}
              comment={item.comment}
              src={item.src}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Information;
