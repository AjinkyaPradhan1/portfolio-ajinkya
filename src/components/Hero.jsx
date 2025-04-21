import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas,ManCanvas,RobotCanvas,RoomViewCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div className={`absolute inset-0 top-[100px] max-w-7xl mx-auto ${styles.paddingX} flex flex-col sm:flex-row items-start gap-5`}>
      <div className='flex flex-row sm:flex-col justify-start items-center sm:mt-5'>
          <div className='w-3 h-3 sm:w-5 sm:h-5 rounded-full bg-[#915EFF]' />
          <div className='h-32 sm:h-80 w-1 violet-gradient mt-2 sm:mt-0' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white text-[32px] sm:text-[60px]`}>
            Hi, I'm <span className='text-[#915EFF]'>Ajinkya Pradhan</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100 text-[16px] sm:text-[24px]`}>
            I am a Software Developer <br className='sm:block hidden' />
            Dedicated to deliver innovative solutions 
          </p>
        </div>
      </div>

       <ManCanvas/> 


      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center '
      style={{ transform: 'translateX(-150px)' }}>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 20, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
