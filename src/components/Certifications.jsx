import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { certifications } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const CertificationsCard = ({ certifications }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={certifications.date}
      iconStyle={{ background: certifications.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={certifications.icon}
            alt={certifications.issuer}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{certifications.title}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {certifications.issuer}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {certifications.points.map((point, index) => (
          <li
            key={`certifications-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

// const CertificationsCard = ({ certifications }) => {
//   return (
//     <VerticalTimelineElement
//       contentStyle={{
//         background: "#1d1836",
//         color: "#fff",
//         padding: "16px", // tighter padding on all screens
//       }}
//       contentArrowStyle={{ borderRight: "7px solid  #232631" }}
//       date={certifications.date}
//       iconStyle={{ background: certifications.iconBg }}
//       icon={
//         <div className='flex justify-center items-center w-full h-full'>
//           <img
//             src={certifications.icon}
//             alt={certifications.issuer}
//             className='w-[60%] h-[60%] object-contain'
//           />
//         </div>
//       }
//     >
//       <div>
//         <h3 className='text-white text-[18px] sm:text-[24px] font-bold'>
//           {certifications.title}
//         </h3>
//         <p
//           className='text-secondary text-[14px] sm:text-[16px] font-semibold mt-1'
//           style={{ margin: 0 }}
//         >
//           {certifications.issuer}
//         </p>
//       </div>

//       <ul className='mt-4 list-disc ml-5 space-y-2'>
//         {certifications.points.map((point, index) => (
//           <li
//             key={`certifications-point-${index}`}
//             className='text-white-100 text-[13px] sm:text-[14px] pl-1 tracking-wider leading-relaxed'
//           >
//             {point}
//           </li>
//         ))}
//       </ul>
//     </VerticalTimelineElement>
//   );
//};

const Certification = () => {
  return (
    <>
      <motion.div variants={textVariant()} animate={{ opacity: 1 }}>
        <p className={`${styles.sectionSubTextCerti} text-center`}>
          What Certifications have I done so far
        </p>
        <h2 className={`${styles.sectionHeadTextCerti} text-center`}>
          Certifications.
        </h2>
      </motion.div>

      <div className='mt-15 flex flex-col'>
        <VerticalTimeline>
          {certifications.map((certifications, index) => (
            <CertificationsCard
              key={`certifications-${index}`}
              certifications={certifications}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Certification, "certification");
