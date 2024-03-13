import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { Expo } from "gsap/all";
import "./Plant.css";
import plant from "./images/Plant.jpg";
import plant1 from "./images/Plant1.jpg";
import plant2 from "./images/Plant2.jpg";
import plant3 from "./images/Plant3.jpg";

function Plant() {
  const comp1Ref = useRef(null);
  const comp2Ref = useRef(null);
  const comp3Ref = useRef(null);
  const comp4Ref = useRef(null);
  const indexRef1 = useRef(0);
  const indexRef2 = useRef(0);
  const indexRef3 = useRef(0);
  const indexRef4 = useRef(0);

  useEffect(() => {
    const comp1 = comp1Ref.current.children;
    const comp2 = comp2Ref.current.children;
    const comp3 = comp3Ref.current.children;
    const comp4 = comp4Ref.current.children;

    const animateCard1 = () => {
      gsap.to(comp1[indexRef1.current], {
        left: "-100%",
        ease: Expo.easeInOut,
        duration: 1,
        onComplete: function () {
          gsap.set(this._targets[0], { left: "100%" });
        },
      });

      indexRef1.current === comp1.length - 1
        ? (indexRef1.current = 0)
        : (indexRef1.current += 1);

      gsap.to(comp1[indexRef1.current], {
        left: "3%",
        ease: Expo.easeInOut,
        duration: 1,
      });
    };
    const animateCard2 = () => {
      gsap.to(comp2[indexRef2.current], {
        left: "-100%",
        ease: "expo.inOut",
        duration: 1,
        onComplete: function () {
          gsap.set(this._targets[0], { left: "100%" });
        },
      });

      indexRef2.current === comp2.length - 1
        ? (indexRef2.current = 0)
        : (indexRef2.current += 1);

      gsap.to(comp2[indexRef2.current], {
        left: "3%",
        ease: "expo.inOut",
        duration: 1,
      });
    };
    const animateCard3 = () => {
      gsap.to(comp3[indexRef3.current], {
        left: "-100%",
        ease: "expo.inOut",
        duration: 1,
        onComplete: function () {
          gsap.set(this._targets[0], { left: "100%" });
        },
      });

      indexRef3.current === comp3.length - 1
        ? (indexRef3.current = 0)
        : (indexRef3.current += 1);

      gsap.to(comp3[indexRef3.current], {
        left: "3%",
        ease: "expo.inOut",
        duration: 1,
      });
    };
    const animateCard4 = () => {
      gsap.to(comp4[indexRef4.current], {
        left: "-100%",
        ease: "expo.inOut",
        duration: 1,
        onComplete: function () {
          gsap.set(this._targets[0], { left: "100%" });
        },
      });

      indexRef4.current === comp4.length - 1
        ? (indexRef4.current = 0)
        : (indexRef4.current += 1);

      gsap.to(comp4[indexRef4.current], {
        left: "3%",
        ease: "expo.inOut",
        duration: 1,
      });
    };

    const intervalId1 = setInterval(animateCard1, 2000);
    const intervalId2 = setInterval(animateCard2, 2000);
    const intervalId3 = setInterval(animateCard3, 2000);
    const intervalId4 = setInterval(animateCard4, 2000);

    return () => {
      clearInterval(intervalId1);
      clearInterval(intervalId2);
      clearInterval(intervalId3);
      clearInterval(intervalId4);
    };
  }, []);

  return (
    <>
      <div className="main-div">
        <div className="all-card-div">
          <div className="card-div first-zoom">
            <div className="in-card-div-img first-imgs" ref={comp1Ref}>
              <img src={plant} alt="" />
              <img src={plant1} alt="" />
              <img src={plant2} alt="" />
              <img src={plant3} alt="" />
            </div>
          </div>
          <div className="card-div not-first">
            <div className="in-card-div-img" ref={comp2Ref}>
              <img src={plant1} alt="" />
              <img src={plant2} alt="" />
              <img src={plant3} alt="" />
              <img src={plant} alt="" />
            </div>
          </div>
          <div className="card-div not-first">
            <div className="in-card-div-img" ref={comp3Ref}>
              <img src={plant2} alt="" />
              <img src={plant3} alt="" />
              <img src={plant} alt="" />
              <img src={plant1} alt="" />
            </div>
          </div>
          <div className="card-div not-first">
            <div className="in-card-div-img" ref={comp4Ref}>
              <img src={plant3} alt="" />
              <img src={plant} alt="" />
              <img src={plant1} alt="" />
              <img src={plant2} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Plant;
