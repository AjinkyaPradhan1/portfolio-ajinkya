import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { RobotCanvas, TonyCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";


//Template ID: template_omcpeqh
//Service Id: service_nkohywo
//public ID: Sv4nYx2tGjaZgnHsS


const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'service_nkohywo',
        'template_omcpeqh',
        {
          from_name: form.name,
          to_name: "Ajinkya Pradhan",
          from_email: form.email,
          to_email: "silent.thunder2050@gmail.com",
          message: form.message,
        },
        'Sv4nYx2tGjaZgnHsS'
      )
      .then(
        () => {
          setLoading(false);
          alert("Thankyou for reaching out to one of the finest developers. I'll get back to you soon.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Sorry, your message couldn't be sent. Please try again.");
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="Please Enter your Name"
              className='sm:placeholder:text-[16px] placeholder:text-[12px] sm:placeholder:content-["Please_enter_your_name_completely"] placeholder:content-["Name"] bg-tertiary py-4 px-6 text-white rounded-lg outline-none border-none font-medium w-full'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="Please Enter your Email Address"
              className='sm:placeholder:text-[16px] placeholder:text-[12px] sm:placeholder:content-["Please_enter_your_email_address"] placeholder:content-["Email"] bg-tertiary py-4 px-6 text-white rounded-lg outline-none border-none font-medium w-full'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='Please Write your Message here'
              className='sm:placeholder:text-[16px] placeholder:text-[12px] sm:placeholder:content-["Please_write_your_message_clearly"] placeholder:content-["Message"] bg-tertiary py-4 px-6 text-white rounded-lg outline-none border-none font-medium w-full resize-none'
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending Message..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <RobotCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
