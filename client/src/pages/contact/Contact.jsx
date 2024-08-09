import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { TbMailFilled } from "react-icons/tb";
import { PiWhatsappLogoFill } from "react-icons/pi";
import { PiLinkedinLogoFill } from "react-icons/pi";
import ContactImg from "../../assets/images/contactImg.jpeg";

const Contact = () => {
  return (
    <div className="contact slide-up-fade-in">
      <div className="contact-img">
        <LazyLoadImage
          alt={"photo of yashkumar"}
          className="gallery-img"
          effect="blur"
          src={ContactImg}
        />
      </div>
      <div className="contact-title">
        <h3> LET'S CONTACT WITH YASHKUMAR JANI </h3>
        <hr />
        <div className="contact-now">
          <a
            className="social"
            target="_blank"
            aria-label="Chat on WhatsApp"
            href="https://wa.me/918320870517"
          >
            <PiWhatsappLogoFill className="social-icon" />{" "}
            <label htmlFor="">chat on WhatsApp</label>
          </a>
          <a
            className="social"
            target="_blank"
            aria-label="Mail on Gmail"
            href="mailto:eryashkumarjani@gmail.com?subject=Hello%20there&body=This%20is%20a%20predefined%20gmail%20body."
          >
            <TbMailFilled className="social-icon" />
            <label htmlFor="">send mail on Gmail</label>
          </a>
          <a
            className="social"
            target="_blank"
            aria-label="Connect on Linkedin"
            href="https://linkedin.com/in/er-yashkumar-jani-064072299"
          >
            <PiLinkedinLogoFill className="social-icon" />
            <label htmlFor="">connect on Linkedin</label>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
