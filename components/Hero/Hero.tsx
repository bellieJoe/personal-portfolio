import Test from "../Test/Test";
import styles from "./Hero.module.scss";
import {motion} from "framer-motion";

export default function Hero(){
    return (
        <>
            <div className={styles.Hero} id="hero">
                <motion.div whileInView={{ y: 0, opacity: 1}} initial={{y:'4rem', opacity: 0}} transition={{duration: .3, ease: "easeOut", delay: .4}}>
                    <div className={styles.headText}>
                        <h1>Building the future, one line of code at a time</h1>
                    </div>
                </motion.div>
            </div>
        </>
    )
}