import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { NavBar } from '../index';
import { Menu, Clear } from '@mui/icons-material';
import './Home.css';
import compassSvg from './resources/compass.svg';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import mainFirstImage from './resources/main-page-f-cook.png';
import chefImage from './resources/home-page-main-2-chef.png';
import foodImage from './resources/home-page-main-2-food.png';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const [isNavBarOpen, setIsNavBarOpen] = useState(false);

  // references for gsap animations
  const compassRef = useRef<HTMLImageElement>(null);
  const chefRef = useRef<HTMLImageElement>(null);
  const foodRef = useRef<HTMLImageElement>(null);

  // Animating the texts
  const wildTextRef = useRef<HTMLParagraphElement>(null);
  const sustTextRef = useRef<HTMLParagraphElement>(null);
  const deliciousTextRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const compassEl = compassRef.current;
    gsap.fromTo(compassEl, { rotation: 0 }, {
      rotation: 360, delay: 1, duration: 2, scrollTrigger: {
        trigger: compassEl,
        scrub: true,
      }
    });

    const chefEl = chefRef.current;
    gsap.fromTo(chefEl, { rotation: 3 }, {
      rotation: 0,
      scrollTrigger: {
        trigger: chefEl,
        start: 'top 80%',
        scrub: true,
      }
    });
  }, []);
  const foodEl = foodRef.current;
  gsap.fromTo(foodEl, { rotation: 5 }, {
    rotation: 0, duration: 2,
    scrollTrigger: {
      trigger: foodEl,
      start: 'top 80%',
      scrub: true,
    }
  });

  // yet to confirm
  const wildText = wildTextRef.current;
  const sustText = sustTextRef.current;
  const deliciousText = deliciousTextRef.current;

  // Animating the text elements
  gsap.from(wildText, { opacity: 0, y: 5000, duration: 1, delay: 1 });
  gsap.from(sustText, { opacity: 0, y: 50, duration: 1, delay: 1.5 });
  gsap.from(deliciousText, { opacity: 0, y: 50, duration: 1, delay: 2 });

  return (
    <div>
      {/* Navigation Bar */}
      <div>
        <div>
          <span
            onClick={() => setIsNavBarOpen(!isNavBarOpen)}
            className="hover:cursor-pointer"
            style={{ zIndex: 1, position: 'absolute', color: 'pink', top: 10, right: 10 }}
          >
            {isNavBarOpen ? <Clear sx={{ fontSize: '3rem' }} /> : <Menu sx={{ fontSize: '3rem' }} />}
          </span>
        </div>

        {/* Render NavBar based on the state */}
        {/* {isNavBarOpen &&  */}
        {<NavBar navbarState={isNavBarOpen} />}
        {/* } */}
      </div>

      {/* Main page components */}
      <div>
        {/* main page part - 1 */}
        <div className="bg-img bg-main-background">
          <div className="text-container text-9xl font-Morion font-bold text-soft-mint-green  absolute left-2/3 top-1/2 transform -translate-x-2/3 -translate-y-1/2">
            <div className="tagline-container">
              <p ref={wildTextRef} id="wild-text">Wild.</p>
            </div>
            <div>
              <p ref={sustTextRef} id="sust-text">Sustainable.</p>
            </div>
            <div className="flex items-center gap-4">
              <img ref={compassRef} src={compassSvg} alt="" className="h-44" />
              <p ref={deliciousTextRef} id="delicious-text">
                Delicious.
              </p>
            </div>
          </div>
          <div>
            {/* img holder */}
            <img src={mainFirstImage} alt="" />
          </div>
          <div className="flex pt-44 gap-12">
            {/* Image and text holder */}
            <div className="chef-img-holder">
              <img ref={chefRef} src={chefImage} alt="" className="w-3/4 h-3/5 float-right" />
            </div>
            <div className="right-side-text-food-img-holder flex flex-col gap-44 justify-center">
              <div className="text-holder flex">
                <div className="text-soft-mint-green w-1/6 text-2xl font-bold font-Morion">01</div>
                <div className="flex flex-col gap-10 text-soft-mint-green w-1/2">
                  <p className="text-3xl font-Morion font-bold text-soft-mint-green">The best meat for you & the planet.</p>
                  <p>We partner with landowners to preserve native habitats & agricultural land by ethically harvesting Australian wild game.</p>
                  <p>Learn more about our mission to start a conscious carnivore revolution.</p>
                  <a href="/">DISCOVER OUR MISSION</a>
                </div>
              </div>
              <div className="img-holder">
                <img ref={foodRef} src={foodImage} alt="" className="w-3/4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
