import React from "react";
import "./Contact.css";
import msg_icon from "../../assets/msg_icon.png";
import mail_icon from "../../assets/mail_icon.png";
import phone_icon from "../../assets/phone_icon.png";
import location_icon from "../../assets/location_icon.png";
import white_arrow from "../../assets/white_arrow.png";

const Contact = () => {
  //-------Copied from Web3Form to get Email Submitions-------

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "ba449472-297f-4e22-b5ab-2c9bbac60c05");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  //-----------------Contact Us------------------
  return (
    <div className="contact">
      {/*----------------Left-Side---------------*/}
      <div className="contact-col">
        <h3>
          Send ua a message <img src={msg_icon} />
        </h3>
        <p>
          We’re here to help! Whether you have questions, feedback, or need
          assistance, our team is ready to support you. Reach out to us through
          email, phone, or our contact form, and we’ll respond promptly. Your
          inquiries are important to us, and we look forward to connecting with
          you!
        </p>
        <ul>
          <li>
            <img src={mail_icon} />
            @leasrning.com
          </li>
          <li>
            <img src={phone_icon} />
            01 123-456-789
          </li>
          <li>
            <img src={location_icon} />K P 1234, united World
          </li>
        </ul>
      </div>

      {/* ----------Right-Side Form for sending Mail--------- */}
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />
          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your mobile number"
            required
          />
          <label>Write your messages here</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Enter your message"
            required
          ></textarea>
          <button type="submit" className="btn dark-btn">
            Submit now <img src={white_arrow} />
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
