import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import CertificateImg from "../../assets/images/certificate.png";
import resume2025 from "../../assets/pdf/resume2025.pdf";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

// import required modules
import { EffectCube, Pagination } from "swiper/modules";

//react icons
import { ImHtmlFive } from "react-icons/im";
import { DiCss3 } from "react-icons/di";
import { SiBootstrap } from "react-icons/si";
import { SiSass } from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";
import { TbBrandAngular } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandRedux } from "react-icons/tb";
import { FaNode } from "react-icons/fa6";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiFirebase } from "react-icons/si";
import { RxGithubLogo } from "react-icons/rx";

const Resume = () => {
  return (
    <div className="resume slide-up-fade-in">
      <div className="resume-title">
        <h1>Resume</h1>
      </div>
      <hr />
      <div className="resume-content">
        <div className="content-title">
          <h2>Work Experience</h2>
        </div>
        <div className="content-container">
          <div className="content-experience">
            {/* Wipro */}
            <div className="company-title">
              <h3>WIPRO</h3>
              <p>2021 - 2024</p>
            </div>
            <div className="company-work">
              <h4>REACT DEVELOPER</h4>
              <ul>
                <li>
                  Developed and enhanced user interfaces for web application.
                </li>
                <li>
                  Responsible for UI changes and optimisation of legacy code to
                  improve performance and user experience.{" "}
                </li>
                <li>
                  Implemented features as per the legacy web application, which
                  can be used in the website.
                </li>
                <li>
                  Collaborated with a team of 2 developers to build projects
                  from scratch using React.js, resulting in a 40% improvement in
                  frontend performance and a 30% reduction in loading time.
                </li>
                <li>
                  Develop unit test cases and prioritize testing activities.
                </li>
              </ul>
            </div>
          </div>
          <div className="content-experience">
            {/* Expinn */}
            <div className="company-title">
              <h3>EXPINN TECHNOLOGIES</h3>
              <p>2019 - 2021</p>
            </div>
            <div className="company-work">
              <h4>ANGULAR DEVELOPER</h4>
              <ul>
                <li>
                  Designed and developed a comprehensive web application that
                  facilitated user appointment scheduling.
                </li>
                <li>
                  Implemented distinct modules for Patients, Doctors, and Admin,
                  ensuring seamless interaction and management.
                </li>
                <li>
                  Strategised and implemented flag-based features to enhance
                  application functionality and user experience.
                </li>
                <li>
                  Design and develop high-performing and responsive web
                  applications using Angular best practices.
                </li>
                <li>
                  Integration of UI using Angular with backend as Node JS using
                  Express Js and Mongoose for MongoDB.
                </li>
              </ul>
            </div>
          </div>
          <div className="content-experience">
            {/* Infiniteworx */}
            <div className="company-title">
              <h3>INFINITEWORX</h3>
              <p>2017 - 2019</p>
            </div>
            <div className="company-work">
              <h4>WEB DEVELOPER</h4>
              <ul>
                <li>
                  Reviewing application requirements and interface designs.
                </li>
                <li>Developed and implemented responsive website.</li>
                <li>
                  Understands UI, cross-browser compatibility, and general web
                  functions and standards.
                </li>
                <li>
                  Meeting with the development team to discuss user interface
                  ideas and application.
                </li>
                <li>
                  Identifying and addressing bugs, glitches, and performance
                  issues to maintain application functionality.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="resume-content">
        <div className="content-title">
          <h2>SKILLS</h2>
        </div>
        <div className="content-container">
          <div className="content-experience">
            <div id="skills" className="company-work">
              <h4>DIPLOMA IN COMPUTER ENGINEERING</h4>
              <p>
                The following section outlines my skills, highlighting my
                strengths.
              </p>
              {/* Slider */}
              <Swiper
                effect={"cube"}
                grabCursor={true}
                cubeEffect={{
                  shadow: true,
                  slideShadows: true,
                  shadowOffset: 20,
                  shadowScale: 0.94,
                }}
                pagination={true}
                modules={[EffectCube, Pagination]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <ImHtmlFive />
                  Html5
                </SwiperSlide>
                <SwiperSlide>
                  <DiCss3 />
                  Css3
                </SwiperSlide>
                <SwiperSlide>
                  <SiBootstrap />
                  Bootstrap
                </SwiperSlide>
                <SwiperSlide>
                  <SiSass />
                  Scss
                </SwiperSlide>
                <SwiperSlide>
                  <TbBrandJavascript />
                  Javascript
                </SwiperSlide>
                <SwiperSlide>
                  <TbBrandAngular />
                  Angular
                </SwiperSlide>
                <SwiperSlide>
                  <RiTailwindCssFill />
                  Tailwind css
                </SwiperSlide>
                <SwiperSlide>
                  <RiReactjsLine />
                  React js
                </SwiperSlide>
                <SwiperSlide>
                  <TbBrandRedux /> Redux toolkit
                </SwiperSlide>
                <SwiperSlide>
                  <FaNode /> Node js
                </SwiperSlide>
                <SwiperSlide>
                  <SiExpress /> Express js
                </SwiperSlide>
                <SwiperSlide>
                  <SiMongodb />
                  MongoDB
                </SwiperSlide>
                <SwiperSlide>
                  <SiFirebase /> Firebase
                </SwiperSlide>
                <SwiperSlide>
                  <RxGithubLogo /> Github
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="resume-content">
        <div className="content-title">
          <h2>Education</h2>
        </div>
        <div className="content-container">
          <div className="content-experience">
            {/* Wipro */}
            <div className="company-title">
              <h3>NIRMA UNIVERSITY</h3>
              <p>2011 - 2014</p>
            </div>
            <div className="company-work">
              <h4>DIPLOMA IN COMPUTER ENGINEERING</h4>
              <p>
                I completed my diploma in computer engineering at Nirma
                University, achieving a CGPA of 6.6%.
              </p>
            </div>
          </div>
          <div className="content-experience">
            {/* Expinn */}
            <div className="company-title">
              <h3>GUJARAT UNIVERSITY</h3>
              <p>2014 - 2017</p>
            </div>
            <div className="company-work">
              <h4>BE IN COMPUTER SCIENCE ENGINEERING</h4>
              <p>
                I completed my Bachelor of Engineering in Computer Science at
                Dr. Jivraj Mehta Institute of Technology, achieving a CGPA of
                7.6%.
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="resume-content">
        <div className="content-title">
          <h2> Certificate</h2>
        </div>
        <div className="content-container">
          <div className="content-experience">
            {/* mern stack course */}
            <div className="company-title">
              <h3>PESTO TECH</h3>
              <p>2023 - 2024</p>
            </div>
            <div className="company-work">
              <h4>MERN STACK DEVELOPER</h4>
              <p>
                I successfully finished a one-year full stack developer program
                at a pesto tech company specializing in MERN stack technology.
              </p>
              <div className="company-img">
                <LazyLoadImage
                  alt={"photo of yashkumar"}
                  className="gallery-img"
                  effect="blur"
                  src={CertificateImg}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="resume-footer">
        <a href={resume2025} download="resume2025">
          <button>DOWNLOAD CV</button>
        </a>
      </div>
    </div>
  );
};

export default Resume;
