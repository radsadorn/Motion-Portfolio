import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const services = [
  {
    name: "UX/UI Design",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo sed expedita, eos nisi officiis, nobis culpa",
    link: "learn more!",
  },
  {
    name: "Developer",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo sed expedita, eos nisi officiis, nobis culpa",
    link: "learn more!",
  },
  {
    name: "Youtuber",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo sed expedita, eos nisi officiis, nobis culpa",
    link: "learn more!",
  },
  {
    name: "Database",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo sed expedita, eos nisi officiis, nobis culpa",
    link: "learn more!",
  },
];

function Services() {
  return (
    <section className="section" id="service">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0"
          >
            <h2 className="h2 text-accent mb-6 ">What I Do.</h2>
            <h3 className="h3 max-w-[455px] mb-16">
              I'm a 4-year student at King Mongkrut's Institute of Technology
              Latkrabang
            </h3>
            <button className="btn btn-sm">See my work</button>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <div>
              {services.map((service, index) => {
                const { name, description, link } = service;
                return (
                  <div
                    key={index}
                    className="flex border-b border-white/20 h-[146px] mb-[38px]"
                  >
                    <div className="max-w-[476px]">
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold text-accent mb-6 ">
                        {name}
                      </h4>
                      <p className="font-secondary leading-left">
                        {description}
                      </p>
                    </div>
                    <div className="flex flex-col flex-1 items-end">
                      <a
                        href="#"
                        className="btn w-9 h-9 mb-[42px] flex justify-center items-center"
                      >
                        <BsArrowUpRight />
                      </a>
                      <a href="#" className="text-gradient text-sm">
                        {link}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Services;
