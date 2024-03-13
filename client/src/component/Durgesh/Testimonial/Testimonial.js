import "./Testimonial.css";

const Testimonial = ({ name, deg, comment, src }) => {
  return (
    <>
      <div className="lev1-testimonial">
        <div className="lev2-imgCircle">
          <img src={src} alt="img" />
        </div>
        <div className="lev2-content">
          <div className="lev3-h1">
            <h1>{name}</h1>
          </div>
          <div className="lev3-h3">
            <h3>{deg}</h3>
          </div>
          <div className="lev3-p">
            <p>{comment}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;

// <div className="heading-testimonials">
//         <h1>Our Testimonials</h1>
//       </div>
//       <div className="main-testimonial">
//         <div className="lev1-testimonial">
//           <div className="lev2-imgCircle">
//             <img
//               src="https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=600"
//               alt="img"
//             />
//           </div>
//           <div className="lev2-content">
//             <div className="lev3-h1">
//               <h1>Name</h1>
//             </div>
//             <div className="lev3-h3">
//               <h3>Designation</h3>
//             </div>
//             <div className="lev3-p">
//               <p>
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                 Praesentium, ab! Lorem ipsum, dolor sit amet consectetur
//                 adipisicing elit. Eius, aut.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
