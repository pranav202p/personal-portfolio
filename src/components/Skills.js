import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"
import html from "../assets/img/html.png"
import css from "../assets/img/css-3.png"
import js from "../assets/img/js.png"
import tailwind from "../assets/img/file-type-tailwind.svg"
import mongo from "../assets/img/mongodb-ar21.svg"
import react from "../assets/img/atom.png"
import github from "../assets/img/github (1).png"
export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>A quick look at the skills and technologies I specialize in.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={html} alt="Image" />
                                
                            </div>
                            <div className="item">
                                <img src={css} alt="Image" />
                               
                            </div>
                            <div className="item">
                                <img src={js} alt="Image" />
                                
                            </div>
                            <div className="item">
                                <img src={react} alt="Image" />
                                
                            </div>
                            <div className="item">
                                <img src={github} alt="Image" />
                                
                            </div>
                            <div className="item">
                                <img src={tailwind} alt="Image" />
                                
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
