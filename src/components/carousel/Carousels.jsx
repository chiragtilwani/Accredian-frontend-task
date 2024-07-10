import { useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import AOS from "aos";
import "aos/dist/aos.css";

import BannerImage1 from "../../assets/bannerImage.jpg";
import BannerImage2 from "../../assets/bannerImage2.jpg";
import BannerImage3 from "../../assets/bannerImage3.jpg";
import BannerImage4 from "../../assets/bannerImage4.jpg";

import "./Carousels.css";

function ControlledCarousel() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <Carousel className="Carousel" autoPlay infiniteLoop showThumbs={false} showArrows={false}>
      <div className="BannerItemContainer">
        <img src={BannerImage1} className="bannerImage" alt="Banner-1" />
      </div>
      <div className="BannerItemContainer">
        <img src={BannerImage2} className="bannerImage" alt="Banner-2" />
      </div>
      <div className="BannerItemContainer">
        <img src={BannerImage3} className="bannerImage" alt="Banner-3" />
      </div>
      <div className="BannerItemContainer">
        <img src={BannerImage4} className="bannerImage" alt="Banner-4" />
      </div>
    </Carousel>
  );
}

export default ControlledCarousel;
