import Test from "../Test/Test";
import styles from "./Hero.module.scss";
import {motion} from "framer-motion";

export default function Hero(){
    console.log(styles)
    return (
        <>
            <div className={styles.Hero} id="hero">
                <motion.div animate={{ x: 0, opacity: '100%'}} initial={{x:'-100%', opacity: 0}} transition={{duration: .3, ease: "easeOut"}}>
                    {/* <Test /> */}
                    <div className={styles.headText}>
                        <h1><pre>Hi I'm BELLIE JOE</pre></h1>
                    </div>
                    <h5>I build software that solves real-world problems.</h5>
                </motion.div>
                <div className="">
                    
                </div>
            </div>
        </>
    )
}