import Button from '../components/Button.jsx';
import {words} from '../constants/index.js';
import HeroExperience from '../components/HeroModels/HeroExperience'; 
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import AnimatedCounter from '../components/AnimatedCounter.jsx';

const Hero = () => {
  useGSAP(()=>{
    gsap.fromTo('.hero-text h1',
      {
          y: 50,
          opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.inOut',
        stagger: {
          amount: 0.2,
          from: 'start',
        },
      }
    )
  })

  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="background" />
      </div>

      <div className="hero-layout">
        {/* LEFT: HERO CONTENT */}
        <header className="flex flex-col justify-center w-full  md:px-20 px-10">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>Shaping 
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word)=>(
                      <span key={word.text} className="flex items-center md:gap-3 gap-1 pb-2">
                        <img 
                        src={word.imgPath} 
                        alt={word.text} 
                        className="xl:size-12 md:size-10 size-8 md:p-2 p-1 rounded-full bg-white-50"
                        />

                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>        
              <h1>into Real Projects</h1>
              <h1>that Deliver Results</h1>
            </div>
            <p className='text-white-50 md:text-xl text-xl realtive z-10 pointer-events-none '>
              Hi, I'm Hritik, a developer and designer with a passion for creating innovative solutions.
            </p>

            <Button 
              className="md:w-80 md:h-16 w-64 h-14"
              id="button"
              text={"See my Work"}
            />
          </div>
        </header>

        {/* RIGHT: 3D MODEL */}
        <figure className="w-full md:w-[90%] h-full flex items-center justify-center">
  <div className="hero-3d-layout ">
    <HeroExperience />
  </div>
</figure>

     </div>
     {/* <AnimatedCounter /> */}
    </section>
  );
};

export default Hero;
