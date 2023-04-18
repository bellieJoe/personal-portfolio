import styles from "./Test.module.scss"
import { animate, motion } from "framer-motion"
import img_bg from "../../assets/image/grap_des_bg.jpg"
import { useCurrentState } from "@nextui-org/react"
export default function Test(){
    return (
        <div className={styles.Test}>
            <motion.div className={styles.box} >
                <img src={img_bg.src} alt="" width={300} />
            </motion.div>
            <button>Click</button>
        </div>
    )
}