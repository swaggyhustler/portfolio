import "./hero.scss";
import {motion} from "framer-motion";

const textVariants={
    initial: {
        x: -500,
        opacity: 0,
    }, 
    animate:{
        x: 0,
        opacity: 1,
        transition:{duration: 1, staggerChildren: 0.1}
    },
    scrollAnimation:{
        y: 10,
        opacity: 0,
        transition: {
            duration: 1.25,
            repeat: Infinity
        }
    }
}
const sliderVariants={
    initial: {x: 0},
    animate: {
        x: "-400%",
        transition:{ 
            repeat: Infinity,
            repeatType: "mirror",
            duration: 20
        }
    }
}
const Hero=()=>{
    return (
        <div className="hero">
            <div className="wrapper">
                <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
                    <motion.h2 variants={textVariants}>GEDAM SUBHASH</motion.h2>
                    <motion.h1 variants={textVariants}>Developer and Tech Enthusiast</motion.h1>
                    <motion.div variants={textVariants} className="buttons">
                        <motion.button className="btn" variants={textVariants}><a href="#Projects">See the Latest Works</a></motion.button>
                        <motion.button className="btn"variants={textVariants}><a href="#Contact" >Contact Me</a></motion.button>
                    </motion.div>
                    <motion.img variants={textVariants} src="./arrow.png" alt="Scroll" animate="scrollAnimation"/>
                </motion.div>
            </div>
            <motion.div variants={sliderVariants} initial="initial" animate="animate" className="slidingTextContainer">
                Developer Designer Content Creator Persistor Swaggy Hustler
            </motion.div>
            <div className="imageContainer">
                <img src="./hero.png" alt="My Image" />
            </div>
        </div>
    )
}
export default Hero;