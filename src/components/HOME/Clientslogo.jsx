import { useEffect, useRef } from "react";
import logo1 from "../../assets/myglamm.png";
import logo2 from "../../assets/Nykaa.svg"
import logo3 from "../../assets/facescanda.png"
import logo4 from "../../assets/SUGAR.png"
import logo5 from "../../assets/Mom's co.png"
import logo6 from "../../assets/colorsessence.jpg"
import logo7 from "../../assets/kay.jpeg"
import logo8 from "../../assets/kryolan.png"
import logo9 from "../../assets/images.jpeg"
import logo10 from "../../assets/clarins.png"
import logo11 from "../../assets/TheManCompany.png"
import logo12 from "../../assets/bombay_shaving.png"
import logo13 from "../../assets/floris.png"
import logo14 from "../../assets/Calvin-Klein.png"
import logo15 from "../../assets/Bottega-Veneta.jpg"
import logo16 from "../../assets/Bulgari.png"
import logo17 from "../../assets/Chanel.png"
import logo18 from "../../assets/christian.jpg"
import logo19 from "../../assets/Ajmal.png"
export default function Clientslogo() {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    let scrollAmount = 0;
    const scrollSpeed = 1; // Adjust the scroll speed here

    const scroll = () => {
      scrollAmount += scrollSpeed;
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
        scrollAmount = 0;
      }
      scrollContainer.scrollLeft = scrollAmount;
    };

    const scrollInterval = setInterval(scroll, 20); // Adjust the interval here

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <div className=" rounded-xl mt-5 mx-2 bg-sky-950 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className=" text-center text-2xl font-semibold leading-8 text-white">
          Trusted by the most innovative teams
        </h2>
        <div
          ref={scrollContainerRef}
          className="mx-auto mt-10 flex space-x-8 overflow-hidden"
        >
          <img
            alt="Myglamm"
            src={logo1}
            className="h-12 w-auto object-contain transition-transform duration-300 ease-in-out hover:translate-x-2"
          />
          <img
            alt="nykaa"
            src={logo2}
            className="h-12 w-auto object-contain transition-transform duration-300 ease-in-out hover:translate-x-2"
          />
          <img
            alt="Facescanda"
            src={logo3}
            className="h-14 w-auto object-contain transition-transform duration-300 ease-in-out hover:translate-x-2"
          />
          <img
            alt="sugar"
            src={logo4}
            className="h-12 w-auto object-contain transition-transform duration-300 ease-in-out hover:translate-x-2"
          />
          <img
            alt="Mom's co"
            src={logo5}
            className="h-12 w-auto object-contain transition-transform duration-300 ease-in-out hover:translate-x-2"
          />
              <img
            alt="coloressence"
            src={logo6}
            className="h-20 w-auto object-contain transition-transform duration-300 ease-in-out hover:translate-x-2"
          />
          <img
            alt="ka"
            src={logo7}
            className="h-12 w-auto object-contain transition-transform duration-300 ease-in-out hover:translate-x-2"
          />
          <img
            alt="karylon"
            src={logo8}
            className="h-12 w-auto object-contain transition-transform duration-300 ease-in-out hover:translate-x-2"
          />
          <img
            alt="clarins"
            src={logo9}
            className="h-12 w-auto object-contain transition-transform duration-300 ease-in-out hover:translate-x-2"
          />
          <img
            alt="Clarins"
            src={logo10}
            className="h-12 w-auto object-contain transition-transform duration-300 ease-in-out hover:translate-x-2"
          />
             <img
            alt="The man company"
            src={logo11}
            className="h-12 w-auto object-contain transition-transform duration-300 ease-in-out hover:translate-x-2"
          />
          <img
            alt="clarins"
            src={logo12}
            className="h-12 w-auto object-contain transition-transform duration-300 ease-in-out hover:translate-x-2"
          />
          <img
            alt="Clarins"
            src={logo13}
            className="h-12 w-auto object-contain transition-transform duration-300 ease-in-out hover:translate-x-2"
          />
              <img
            alt="The man company"
            src={logo14}
            className="h-12 w-auto object-contain transition-transform duration-300 ease-in-out hover:translate-x-2"
          />
          <img
            alt="clarins"
            src={logo15}
            className="h-12 w-auto object-contain transition-transform duration-300 ease-in-out hover:translate-x-2"
          />
          <img
            alt="Clarins"
            src={logo16}
            className="h-12 w-auto object-contain transition-transform duration-300 ease-in-out hover:translate-x-2"
          />
             <img
            alt="Clarins"
            src={logo17}
            className="h-12 w-auto object-contain transition-transform duration-300 ease-in-out hover:translate-x-2"
          />
              <img
            alt="The man company"
            src={logo18}
            className="h-12 w-auto object-contain transition-transform duration-300 ease-in-out hover:translate-x-2"
          />
          <img
            alt="clarins"
            src={logo19}
            className="h-12 w-auto object-contain transition-transform duration-300 ease-in-out hover:translate-x-2"
          />

        </div>
      </div>
    </div>
  );
}
