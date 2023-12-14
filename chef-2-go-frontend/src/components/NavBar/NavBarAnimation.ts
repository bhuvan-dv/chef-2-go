// NavBarAnimation.ts
import { gsap, Power3 } from 'gsap';

export const initializeNavBarAnimation = (navBarMenu: HTMLDivElement, leftNavBar: HTMLDivElement, rightNavBar: HTMLDivElement) => {
  const navBarTimeline = gsap.timeline({ paused: true });
  /**
   * GSAP timeline for NavBar animation, initially paused.
   */
  navBarTimeline.fromTo(
    [navBarMenu],
    {
      duration: 0,
      y: '-100%',
    },
    {
      duration: 0.75,
      y: '0%',
      ease: Power3.easeInOut,
      stagger: {
        amount: 0.5,
      },
    }
  );
  /**
    * Animation for showing the left and right sections.
    */
  navBarTimeline.fromTo(
    [rightNavBar, leftNavBar],
    {
      duration: 0,
      y: '200%',
    },
    {
      duration: 0.5,
      y: '0%',
      ease: Power3.easeInOut,
      stagger: {
        amount: 0.5,
      },
    }
  );

  return navBarTimeline;
};
