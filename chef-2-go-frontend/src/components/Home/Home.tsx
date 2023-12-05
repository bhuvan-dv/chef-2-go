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
import mainPageImage from './resources/home-page-3.png';
import meatRight from './resources/meat-right.png';
import meatLeft from './resources/meat-left.png';
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
  const meatLeftRef = useRef<HTMLImageElement>(null);
  const meatRightRef = useRef<HTMLImageElement>(null);
  const mainPageImageRef = useRef<HTMLImageElement>(null);

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

    const foodEl = foodRef.current;
    gsap.fromTo(foodEl, { rotation: 5 }, {
      rotation: 0, duration: 2,
      scrollTrigger: {
        trigger: foodEl,
        start: 'top 80%',
        scrub: true,
      }
    });

    const meatLeftEl = meatLeftRef.current;
    gsap.fromTo(meatLeftEl, { rotation: 5 }, {
      rotation: 0, duration: 2,
      scrollTrigger: {
        trigger: meatLeftEl,
        start: 'top 80%',
        scrub: true,
      }
    });

    const meatRightEl = meatRightRef.current;
    gsap.fromTo(meatRightEl, { rotation: 5 }, {
      rotation: 0, duration: 2,
      scrollTrigger: {
        trigger: meatRightEl,
        start: 'top 80%',
        scrub: true,
      }
    });
    const mainPageImageEl = mainPageImageRef.current;

    if(mainPageImageEl) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: mainPageImageEl,
          start: 'center center',
          end: 'bottom center',
          scrub: true,
        },
      });

      tl.to(mainPageImageEl, { opacity: 0, scale: 10, duration: 1 });
    }
  }, []);

  // yet to confirm
  // const wildText = wildTextRef.current;
  // const sustText = sustTextRef.current;
  // const deliciousText = deliciousTextRef.current;

  // // Animating the text elements
  // gsap.from(wildText, { opacity: 0, y: 5000, duration: 1, delay: 1 });
  // gsap.from(sustText, { opacity: 0, y: 50, duration: 1, delay: 1.5 });
  // gsap.from(deliciousText, { opacity: 0, y: 50, duration: 1, delay: 2 });

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
              {!isNavBarOpen && <p ref={wildTextRef} id="wild-text">Wild.</p>}
            </div>
            <div>
              {!isNavBarOpen && <p ref={sustTextRef} id="sust-text">Sustainable.</p>}
            </div>
            <div className="flex items-center gap-4">
              <img ref={compassRef} src={compassSvg} alt="" className="h-44" />
              {!isNavBarOpen && <p ref={deliciousTextRef} id="delicious-text">
                Delicious.
              </p>}
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
          {/* need to check below section */}
          {/* main page nature image */}
          <div className="mt-28 bg-dark-green">
            <img className="flex items-center justify-center w-full h-full bg-center bg-cover" ref={mainPageImageRef} src={mainPageImage} alt="" />
          </div>

          {/* 02 text with images */}
          <div className="flex gap-10 pl-10 pt-40 font-extrabold bg-dark-green text-pale-green font-Morion">
            <div>02</div>
            <div>
              <div>
                <p className="text-9xl">
                  Our Secret,
                </p>
              </div>
              <div className="flex  items-center">
                <img src={compassSvg} alt="" className='h-44' />
                <p className="text-9xl">Now yours</p>
              </div>
            </div>
          </div>

          {/* 03 flex text and images */}
          <div className="bg-dark-green text-pale-green font-Morion pt-40 flex gap-20">
            <div className="flex flex-col gap-40 items-center">
              <div className="flex flex-col gap-10 text-pale-green w-1/2">
                <p className="text-3xl font-Morion font-bol">
                  Discover the taste of wild Sambar venison from Australia's pristine high country.
                </p>
                <p>
                  Always tender with a mild nutty flavour. Distinctly complex and uniquely Australian.
                </p>
                <a href="/">
                  DISCOVER OUR PRODUCTS
                </a>
              </div>
              <div>
                <img ref={meatLeftRef} src={meatLeft} className="h-2/3 float-right" alt="" />
              </div>
            </div>
            <div>
              <img ref={meatRightRef} src={meatRight} className="h-1/2" alt="" />
            </div>
          </div>
        </div>

        {/* main page part - 2 */}
        {/* <div className="bg-red-600 h-64">
          {/* <img src={mainPageImage} alt="" /> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default Home;
