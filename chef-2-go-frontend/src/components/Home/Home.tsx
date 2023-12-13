import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { NavBar } from '../index';
import { Menu, Clear } from '@mui/icons-material';
import Pagination from '@mui/material/Pagination';
import './Home.css';
import compassSvg from './resources/compass.svg';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import mainFirstImage from './resources/main-page-f-cook.png';
import chefImage from './resources/home-page-main-2-chef.png';
import foodImage from './resources/home-page-main-2-food.png';
import mainPageImage from './resources/home-page-3.png';
import meatRight from './resources/meat-right.png';
import meatLeft from './resources/meat-left.png';
import { Box, Container } from '@mui/system';
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import CustomCard, { EntityDetails } from '../Card/CustomCard';
import Carousel from '../Carousel/Carousel';


gsap.registerPlugin(ScrollTrigger);

// sampleChefData
const sampleChefData: EntityDetails[] = [
  {
    'type': 'chef',
    'name': 'Chef 1',
    'imageUrl': 'https://cdn5.vectorstock.com/i/1000x1000/29/84/group-professionals-chef-cooking-vector-26812984.jpg',
    'id': '1',
  },
  {
    'type': 'chef',
    'name': 'Chef 2',
    'imageUrl': 'https://cdn5.vectorstock.com/i/1000x1000/29/84/group-professionals-chef-cooking-vector-26812984.jpg',
    'id': '2',
  },
  {
    'type': 'chef',
    'name': 'Chef 3',
    'imageUrl': 'https://cdn5.vectorstock.com/i/1000x1000/29/84/group-professionals-chef-cooking-vector-26812984.jpg',
    'id': '3',
  },
  {
    'type': 'chef',
    'name': 'Chef 4',
    'imageUrl': 'https://cdn5.vectorstock.com/i/1000x1000/29/84/group-professionals-chef-cooking-vector-26812984.jpg',
    'id': '4',
  },
  {
    'type': 'chef',
    'name': 'Chef 5',
    'imageUrl': 'https://cdn5.vectorstock.com/i/1000x1000/29/84/group-professionals-chef-cooking-vector-26812984.jpg',
    'id': '5',
  },
  {
    'type': 'chef',
    'name': 'Chef 6',
    'imageUrl': 'https://cdn5.vectorstock.com/i/1000x1000/29/84/group-professionals-chef-cooking-vector-26812984.jpg',
    'id': '6',
  },
  {
    'type': 'chef',
    'name': 'Chef 7',
    'imageUrl': 'https://cdn5.vectorstock.com/i/1000x1000/29/84/group-professionals-chef-cooking-vector-26812984.jpg',
    'id': '7',
  },
  {
    'type': 'chef',
    'name': 'Chef 8',
    'imageUrl': 'https://cdn5.vectorstock.com/i/1000x1000/29/84/group-professionals-chef-cooking-vector-26812984.jpg',
    'id': '8',
  },
  {
    'type': 'chef',
    'name': 'Chef 9',
    'imageUrl': 'https://cdn5.vectorstock.com/i/1000x1000/29/84/group-professionals-chef-cooking-vector-26812984.jpg',
    'id': '9',
  },
  {
    'type': 'chef',
    'name': 'Chef 10',
    'imageUrl': 'https://cdn5.vectorstock.com/i/1000x1000/29/84/group-professionals-chef-cooking-vector-26812984.jpg',
    id: '10',
  }
];


const Home = () => {
  // references for gsap animations
  const compassRef = useRef<HTMLImageElement>(null);
  const chefRef = useRef<HTMLImageElement>(null);
  const foodRef = useRef<HTMLImageElement>(null);
  const ytd1 = useRef<HTMLImageElement>(null);
  const ytd2 = useRef<HTMLImageElement>(null);

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

    if (mainPageImageEl) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: mainPageImageEl,
          start: 'top center',
          end: 'bottom top',
          scrub: true,
        },
      });

      tl.to(mainPageImageEl, { opacity: 0, scale: 0, duration: 3 });
    }

    // expirement
    const texts = document.querySelectorAll('.scrolling-text');

    texts.forEach((text, index) => {
      gsap.fromTo(
        text,
        {
          x: '-200%', // Initial x position (off-screen to the left),
          y: '200%',
        },
        {
          x: '0%', // Move to the center
          y: '0%',
          ease: 'power4.out',
          duration: 1.5,
          scrollTrigger: {
            trigger: '.scrolling-text-container',
            start: '0% bottom',
            toggleActions: 'play none none reverse',
            scrub: true,
          },
        }
      );
    });


    const ytd1El = ytd1.current;
    gsap.fromTo(ytd1El, { rotation: 3 }, {
      rotation: 0,
      scrollTrigger: {
        trigger: ytd1El,
        start: 'top 80%',
        scrub: true,
      }
    });

    const ytd2El = ytd2.current;
    gsap.fromTo(ytd2El, { rotation: 5 }, {
      rotation: 0, duration: 2,
      scrollTrigger: {
        trigger: ytd2El,
        start: 'top 80%',
        scrub: true,
      }
    });


  }, []);

  return (
    <div>
      {/* Main page components */}
        {/* main page part - 1 */}
        <div className="bg-img bg-main-background">
          {/* first page */}
          <div className="h-fullvh">
            <div className="text-container text-9xl font-Morion font-bold text-soft-mint-green  float float-right pr-32 pt-40">
              <div className="tagline-container">
                <p ref={wildTextRef} id="wild-text">Desi.</p>
              </div>
              <div>
                <p ref={sustTextRef} id="sust-text">Expeditious.</p>
              </div>
              <div className="flex items-center gap-4">
                <img ref={compassRef} src={compassSvg} alt="" className="h-44" />
                <p ref={deliciousTextRef} id="delicious-text">
                Delicious.
                </p>
              </div>
            </div>
          </div>
          {/* end of first page */}



          {/* second page */}
          <div>
            {/* img holder */}
            <img src={mainFirstImage} alt="" className= "bg-cover" />
          </div>
          {/* end of second page */}




          {/* third page */}
          <div>
            <div className="flex pt-44 gap-12">
              {/* Image and text holder */}
              <div className="chef-img-holder">
                <img ref={chefRef} src={chefImage} alt="" className="w-3/4 h-3/5 float-right bg-cover" />
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

          {/* end of thrid page */}
        </div>

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

        {/* section with multiple backgroun images */}
        <div className="py-40 border-y-2 bg-dark-green text-pale-green font-Morion scrolling-text-container bg-scroll-img bg-cover">
          <div className="flex flex-col items-center justify-center">
            <p className="scrolling-text test text-9xl font-extrabold leading-relaxed text-center">
              Every bite we
            </p>
            <p className="scrolling-text text-9xl font-extrabold text-center">
              take from our
            </p>
            <p className="scrolling-text text-9xl font-extrabold leading-relaxed text-center">
              plates forms
            </p>
            <p className="scrolling-text text-9xl font-extrabold text-center">
              the legacy of
            </p>
            <p className="scrolling-text text-9xl font-extrabold leading-relaxed text-center">
              ecology we are
            </p>
            <p className="scrolling-text text-9xl font-extrabold text-center">
              leaving for
            </p>
            <p className="scrolling-text text-9xl font-extrabold leading-relaxed text-center">
              future
            </p>
            <p className="scrolling-text text-9xl font-extrabold text-center">
              generations.
            </p>
          </div>
        </div>

        {/* Recipe intro section */}
        <div className="flex py-44 gap-12 bg-dark-green text-pale-green">
          {/* Image and text holder */}
          <div className="chef-img-holder">
            <img ref={ytd1} src={chefImage} alt="" className="w-3/4 h-3/5 float-right" />
          </div>
          <div className="right-side-text-food-img-holder flex flex-col gap-44 justify-center">
            <div className="text-holder flex">
              <div className=" w-1/6 text-2xl font-bold font-Morion">03</div>
              <div className="flex flex-col gap-10  w-1/2">
                <p className="text-3xl font-Morion font-bold ">Born to be wild.</p>
                <p>Wild game never suffer captivity, live transport or abattoirs. Ethically harvested, free range and 100% antibiotic and hormone free, just as nature intended.</p>
                <p>Game to try some of our recipes? Discover the ease & versatility of cooking with wild game.</p>
                <a href="/">DISCOVER OUR RECIPES</a>
              </div>
            </div>
            <div className="img-holder">
              <img ref={ytd2} src={foodImage} alt="" className="w-3/4" />
            </div>
          </div>
        </div>

        {/* top chefs */}
        <div className="py-10 flex flex-col gap-32 border-b-4">
            <p className="self-center text-5xl font-Morion text-soft-mint-green">Top Chefs</p>
            <Carousel entities={sampleChefData}/>
        </div>
        <div className="py-10 flex flex-col gap-32">
            <p className="self-center text-5xl font-Morion text-soft-mint-green">Top Recipes</p>
            <Carousel entities={sampleChefData}/>
        </div>
    </div>
  );
};

export default Home;
