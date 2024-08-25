import { motion } from "framer-motion";

import { styles } from "./styles";


const Hero = () => {
  return (
    <section className={`relative h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
       

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
           Why Participate in  <span className='text-[#915EFF]'>SIH??</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
          Solve Real-World Challenges: <br className='sm:block hidden' />
          Make an impact with your innovative solutions. 🌍


          </p>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
          Represent Your College: <br className='sm:block hidden' />
          Showcase your talent and school spirit. 🎓
          </p>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
          Win Big: <br className='sm:block hidden' />
          Connect with visionaries and industry leaders. 🤝
          </p>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
          Network with Innovators: <br className='sm:block hidden' />
          Each problem statement offers a reward of 1 lakh INR. 🏆💰
          </p>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
          Enjoy free meal: <br className='sm:block hidden' />
          Free meals will be provided during the Grand Hackathon on the 31st August 
          </p>
                      
        </div>
      </div>

    
    </section>
  );
};

export default Hero;
