import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import AboutImg from "../../assets/images/aboutImg.jpeg";

const About = () => {
  return (
    <section className="about slide-up-fade-in">
      <div className="about-img">
        <LazyLoadImage
          alt={"photo of yashkumar"}
          className="gallery-img"
          effect="blur"
          src={AboutImg}
        />
      </div>
      <article className="about-title">
        <h3> ABOUT YASHKUMAR JANI </h3>
        <p>
          {" "}
          Yashkumar Jani possesses expertise in front-end technologies and has
          recently commenced work on a MERN stack project. In the future, he
          plans to introduce his product to the market, targeting users who will
          benefit from it, thereby enhancing their profitability and
          sustainability.
        </p>
        <a aria-label="Chat on WhatsApp" href="https://wa.me/918320870517">
          {/* <img
            alt="Chat on WhatsApp"
            src="https://www.pmexamstudy.com/wp-content/uploads/2020/07/whatsapp-button.png"
            width={100}
          />{" "} */}
          <button style={{ padding: "5px 10px" }}>LET'S CHAT</button>
        </a>
      </article>
    </section>
  );
};

export default About;
