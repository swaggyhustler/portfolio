/* eslint-disable react/prop-types */
import {useRef} from "react";
import "./portfolio.scss";
import {motion, useScroll, useSpring, useTransform} from "framer-motion";

const items=[
    {
        id: 1,
        img: "https://images.pexels.com/photos/386009/pexels-photo-386009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        title: "Travel Tracker",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa ea ipsam aspernatur voluptatibus, earum ipsa impedit suscipit eaque provident cupiditate id animi veritatis, harum illum esse odit unde pariatur repudiandae?"
    },
    {
        id: 2,
        img: "https://images.pexels.com/photos/936611/pexels-photo-936611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        title: "Healthy Diet",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio in sit nam iste doloribus inventore quod? Optio beatae commodi repellendus vero, suscipit ex ratione reprehenderit quibusdam animi, tempora in ducimus."
    },
    {
        id: 3,
        img: "https://images.pexels.com/photos/733856/pexels-photo-733856.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        title: "Blogging Application",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores alias dolore ullam aut sint sequi natus illo neque quas architecto tempora veniam laboriosam, vitae dolor minus! Corporis eveniet quo repudiandae!"
    },
    {
        id: 4,
        img: "https://images.pexels.com/photos/5849577/pexels-photo-5849577.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        title: "Wallet Watch",
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat repellendus sapiente error dolorum atque voluptatum veniam nihil illo animi. Ut, iure. Eaque recusandae cum modi, minima magnam at optio dignissimos."
    }
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" id="Projects" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;