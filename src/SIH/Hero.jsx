import { styles } from "./styles";


const Hero = () => {
  return (
    <section className={`relative h-auto mt-4 mx-auto`}>
      <div
        className={`mt-[180px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Smart India Hackathon  <span className='text-[#915EFF]'>2024</span>
          </h1>
          <br></br>
          <span className="text-slate-400 text-3xl font-bold">Register Here : </span> <a className="text-blue-600 text-2xl font-bold cursor-pointer" href={'https://forms.gle/6ZUmRqAUrgRh1KwL6'} target="_blank">https://sih.gov.in/</a>
          <br/>
          <br/>
          <h2 className="text-white text-3xl font-bold">Why participate???</h2>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            {">"}Solve Real-World Challenges: <br className='sm:block hidden' />
            Make an impact with your innovative solutions. 🌍
          </p>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
          {">"}Represent Your College: <br className='sm:block hidden' />
            Showcase your talent and school spirit. 🎓
          </p>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
          {">"}Win Big: <br className='sm:block hidden' />
            Connect with visionaries and industry leaders. 🤝
          </p>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
          {">"}Network with Innovators: <br className='sm:block hidden' />
            Each problem statement offers a reward of 1 lakh INR. 🏆💰
          </p>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
          {">"}Enjoy free meal: <br className='sm:block hidden' />
            Free meals will be provided during the Grand Hackathon on the 31st August
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
