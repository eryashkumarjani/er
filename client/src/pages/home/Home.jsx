import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import HomeImg from "../../assets/images/homeImg.jpeg";

const Home = () => {
  return (
    <div className="home slide-up-fade-in">
      <div className="home-img">
        <LazyLoadImage
          alt={"photo of yashkumar"}
          className="gallery-img"
          effect="blur"
          src={HomeImg}
        />
      </div>
      <div className="home-title">
        <h1>Hi, I'm Yashkumar Jani</h1>
        <p className="typing-loader ">MERN STACK DEVELOPER</p>
      </div>
    </div>
  );
};

export default Home;
