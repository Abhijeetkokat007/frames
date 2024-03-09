import React, { useState } from 'react';
import './EcommerseSlider.css';
import Tiger from "./tiger.png"

const EcommerseSlider = () => {
  const [active, setActive] = useState(0);
  const count = 5; // Number of slides
  const width_item = 500; // Width of each slide

  const nextSlide = () => {
    setActive(active >= count - 1 ? count - 1 : active + 1);
    runCarousel();
  };

  const prevSlide = () => {
    setActive(active <= 0 ? 0 : active - 1);
    runCarousel();
  };

  const runCarousel = () => {
    const prev = document.getElementById('prev');
    const next = document.getElementById('next');
    prev.style.display = active === 0 ? 'none' : 'block';
    next.style.display = active === count - 1 ? 'none' : 'block';

    const list = document.querySelector('.list');
    const leftTransform = width_item * (active - 1) * -1;
    list.style.transform = `translateX(${leftTransform}px)`;
  };

  // Set Text on a Circle
  const textCircle = '            ****************              *************'.split('');
  const circleText = textCircle.map((value, key) => (
    <span key={key} style={{ '--rotate': `${(360 / textCircle.length) * (key + 1)}deg` }}>{value}</span>
  ));

  return (
    <div className="slider">
      <div className="list">
        <div className="item">
          <img className='img-50' src={Tiger} alt="Slide 1" />
        </div>
        <div className={`item ${active === 1 ? 'active' : ''}`}>
          <img src={Tiger} alt="slide 2" />
        </div>
        <div className="item">
          <img src={Tiger} alt="Slide 3" />
        </div>
        <div className="item">
          <img src={Tiger} alt="Slide 4" />
        </div>
        <div className="item">
          <img src={Tiger} alt="Slide 5" />
        </div>
      </div>
      <div className="circle">{circleText}</div>
      <div className="content">
        <div>tuger</div>
        <div>animal</div>
        {/* <button>See More</button> */}
      </div>
      <div className="arow">
        <button id="prev" onClick={prevSlide}>{'<'}</button>
        <button id="next" onClick={nextSlide}>{'>'}</button>
      </div>
    </div>
  );
};

export default EcommerseSlider;
