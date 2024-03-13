import { useForm, ValidationError } from "@formspree/react";
import "./Contact.css";
import contact from "./Images/Contact.png";
import swal from "sweetalert";

const Contact = () => {
  // this is the react form in which you have pass a code
  // which you'll find in the react-form-spree useForm inside "code"
  const [state, handleSubmit] = useForm("code");
  if (state.succeeded) {
    swal({
      title: "Thanks to reaching us!! 👍",
      text: "We got your message!!!",
      icon: "success",
    });
    for (const form of document.getElementsByTagName("form")) {
      form.reset();
    }
  }
  return (
    <>
      <div className="main-contact-us">
        <div className="main-contact-heading">
          <h1>Eager to connect with you and provide top-notch assistance.</h1>
        </div>
        <div className="in-main-contact-us">
          <div className="left-in-main">
            <img src={contact} alt="contact" />
          </div>
          <div className="right-in-main">
            <form onSubmit={handleSubmit}>
              <div className="name-div">
                <label htmlFor="name">
                  <span className="req-text">Name</span>
                  <span className="star">
                    <sup>*</sup>
                  </span>
                </label>
                <div className="writing-block">
                  <input
                    id="name"
                    type="name"
                    name="name"
                    placeholder="Enter your name"
                    required
                  />
                  <ValidationError
                    prefix="Name"
                    field="name"
                    errors={state.errors}
                  />
                </div>
              </div>
              <div className="email-div">
                <label htmlFor="email">
                  <span className="req-text">Email Address</span>

                  <span className="star">
                    <sup>*</sup>
                  </span>
                </label>
                <div className="writing-block">
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    required
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                </div>
              </div>

              <div className="message-div">
                <label htmlFor="textarea">
                  <span className="req-text">Message</span>
                  <span className="star">
                    <sup>*</sup>
                  </span>
                </label>
                <div className="writing-block-message">
                  <div className="con"></div>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Ask your query"
                    required
                  />
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                  />
                </div>
              </div>
              <div className="message-button">
                <button type="submit" disabled={state.submitting}>
                  Drop Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
