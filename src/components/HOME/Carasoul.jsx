import { Carousel } from "@material-tailwind/react";
import carsoul1 from '../../assets/carasoul1.jpg';
import carsoul2 from '../../assets/carasoul2.jpg';
import carsoul3 from '../../assets/carasoul3.jpg';
import carsoul4 from '../../assets/carasoul4.jpg';

export function Carasoul() {
  return (
    <div className="w-full overflow-hidden">
      <Carousel
        autoplay
        loop
        transition={{ duration: 1 }}
        className="rounded-xl w-full"
        showArrows={true} // Ensure that the arrows are shown
        indicators={true} // Show indicators for better navigation
      >
        <img
          src={carsoul1}
          alt="image 1"
          className="h-160 w-full object-cover"
        />
        <img
          src={carsoul2}
          alt="image 2"
          className="h-160 w-full object-cover"
        />
        <img
          src={carsoul3}
          alt="image 3"
          className="h-160 w-full object-cover"
        />
         <img
          src={carsoul4}
          alt="image 4"
          className="h-160 w-full object-cover"
        />
      </Carousel>
    </div>
  );
}
