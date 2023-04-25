import Test from "../Test/Test";
import styles from "./Hero.module.scss";
import {motion} from "framer-motion";

export default function Hero(){
    console.log(styles)
    return (
        <>
            <div className={styles.Hero} id="hero">
                <div className="">
                    {/* <Test /> */}
                    <h1 >Hi Im Bellie Joe</h1>
                    <h5>A Full Stack Developer</h5>
                </div>
                <div className="">
                    
                </div>
            </div>
        </>
    )
}