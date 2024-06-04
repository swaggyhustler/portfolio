import "./navbar.scss";
import {motion} from "framer-motion";
import Sidebar from "../sidebar/Sidebar.jsx";

const Navbar=()=>{
    const variants={
        visible:{
            opacity: 1, 
            scale: 1,
            y : 1,
            transition: {type: "spring", stiffness: 400, damping: 10, staggerChildren: 0.1}
        },
        hidden: {
            opacity: 0, scale: 0.5, y: -20
        },
    };
    return (
        <div className="navbar">
            <Sidebar />
            <div className="wrapper">
                <motion.span 
                    initial={{opacity: 0, y: -20}}
                    animate={{opacity: 1, y: 1}}
                    transition= {{ duration: 0.75, delay: 0.25, type: "spring", bounce: 0.5}}
                >
                    SwaggyHustler
                </motion.span>
                <motion.div className="socials" initial="hidden" animate="visible" variants={variants}>
                        <motion.a variants={variants} whileHover={{scale: 1.1}} href="https://www.instagram.com/swaggyhustler/"><img src="/instagram.png" alt="instagram" /></motion.a>
                        <motion.a variants={variants} whileHover={{scale: 1.1}} href="https://www.linkedin.com/in/subhash-gedam/"><img src="/linkedin.png" alt="linkedin" /></motion.a>
                        <motion.a variants={variants} whileHover={{scale: 1.1}} href="https://github.com/swaggyhustler"><img src="/github.png" alt="discord" /></motion.a>
                        <motion.a variants={variants} whileHover={{scale: 1.1}} href="https://www.youtube.com/@subhashnaseer"><img src="/youtube.png" alt="youtube" /></motion.a>
                </motion.div>
            </div>
        </div>
    )
}

export default Navbar;