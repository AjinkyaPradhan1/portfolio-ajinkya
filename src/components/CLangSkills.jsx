import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { BallCanvas } from "./canvas";
import { appDev,dvtools,dataAnaylsis} from "../constants";

const SkillsCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full'
  >
    <p className='text-white font-black text-[48px]'>"</p>

    <div className='mt-1'>
      <p className='text-white tracking-wider text-[18px]'>{testimonial}</p>

      <div className='mt-7 flex justify-between items-center gap-1'>
        <div className='flex-1 flex flex-col'>
          <p className='text-white font-medium text-[16px]'>
            <span className='blue-text-gradient'>@</span> {name}
          </p>
          <p className='mt-1 text-secondary text-[12px]'>
            {designation} of {company}
          </p>
        </div>

        <img
          src={image}
          alt={`feedback_by-${name}`}
          className='w-10 h-10 rounded-full object-cover'
        />
      </div>
    </div>
  </motion.div>
);

const CLangSkills = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubTextSkills}>Which Web & Software Development Skills Do I Specialize In?</p>
          <h2 className={styles.sectionHeadTextSkills}>Software Development Skills.</h2>
        </motion.div>
      </div>
      
      <div className={`mt-5 sm:-mt-20 pb-14 px-4 sm ${styles.paddingX} flex flex-wrap gap-7`}>
       
        {/* {appDev.map((appDev) => (
          <div className='w-28 h-28' key={appDev.name}>
            <BallCanvas icon={appDev.icon} />
          </div>
        ))} */}

        {appDev.map((skill) => (
          <div className='w-20 h-20' key={skill.name}>
            {typeof window !== "undefined" && window.innerWidth > 768 ? (
              <BallCanvas icon={skill.icon} />
            ) : (
              <div className='w-full h-full bg-white rounded-full flex items-center justify-center p-2'>
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className='w-[80%] h-[80%] object-contain'
                />
              </div>
            )}
          </div>
        ))}
      </div>


      <div className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubTextSkills}>Which Development Tools Do I Specialize In?</p>
          <h2 className={styles.sectionHeadTextSkills}>Technical Tools.</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
       
        {/* {dvtools.map((dvtools) => (
          <div className='w-28 h-28' key={dvtools.name}>
            <BallCanvas icon={dvtools.icon} />
          </div>
        ))} */}

        {dvtools.map((skill) => (
          <div className='w-20 h-20' key={skill.name}>
            {typeof window !== "undefined" && window.innerWidth > 768 ? (
              <BallCanvas icon={skill.icon} />
            ) : (
              <div className='w-full h-full bg-white rounded-full flex items-center justify-center p-2'>
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className='w-[80%] h-[80%] object-contain'
                />
              </div>
            )}
          </div>
        ))}

      </div>

    </div>
  );
};

export default SectionWrapper(CLangSkills, "clangskills");
