
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import { Carousel } from "react-responsive-carousel";
import slider1 from "../assets/images/slider-1.jpg";
import slider2 from "../assets/images/slider-2.avif";
import slider3 from "../assets/images/slider-3.jpg";
import slider4 from "../assets/images/slider-4.webp";
import slider5 from "../assets/images/slider-5.jpg";
import slider6 from "../assets/images/slider-6t.jpg";
import slider7 from "../assets/images/slider-7.jpg";
import slider8 from "../assets/images/slider-8jpg.jpg";
import ThemeToggle from "./ThemeToggle";

const Banner = () => {
  const images = [slider1, slider2, slider3, slider4, slider5,slider6,slider7,slider8];

  return (
    <div className="w-full h-auto">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={true} // Show thumbs
        showStatus={false} // Hide status
        showIndicators={true} // Hide indicators (dots)
        thumbWidth={80} // Set thumbnail width
        className="carousel-container"
        thumbPosition="bottom" // Set position of thumbnails (default is bottom)
        centerMode={true} // Enable centering of the active thumbnail
      >
        {images.map((image, index) => (
          <div key={index} className="h-[60vh]">
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="h-full w-full"
            />
          </div>
        ))}
      </Carousel>
      <div className="fixed bottom-0 right-0 z-50 p-5">
        <ThemeToggle></ThemeToggle>
      </div>
    </div>
  );
};

export default Banner;
