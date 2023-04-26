import Test from "../Test/Test";
import styles from "./Hero.module.scss";
import {motion} from "framer-motion";

export default function Hero(){
    console.log(styles)
    return (
        <>
            <div className={styles.Hero} id="hero">
                <motion.div animate={{ y: 0, opacity: 1}} initial={{y:'-2rem', opacity: 0}} transition={{duration: .3, ease: "easeOut"}}>
                    <div className={styles.headText}>
                        <h1>Building the future, one code at a time</h1>
                    </div>
                </motion.div>
            </div>
        </>
    )
}