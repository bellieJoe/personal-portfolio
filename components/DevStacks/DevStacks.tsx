import styles from "./DevStacks.module.scss";
import SectionHeader from "../SectionHeader/SectionHeader";
import { Variants, motion } from "framer-motion";

export default function DevStacks () {
    const headerVariant : Variants = {
        show: {
            opacity: 1,
            x: 0,
            transition: {
                type: "spring",
            }
        },
        hidden: {
            opacity: 0,
            x: "-4rem"
        }
    }
    return (
        <div className={styles.DevStacks} id="devstacks">
            <motion.div variants={headerVariant} initial="hidden" whileInView="show">
                <SectionHeader text={<span >Development <span style={{ color: 'rgb(0, 255, 157)' }}>Stacks</span> & <span style={{ color: 'rgb(0, 255, 157)' }}>Tools</span></span>} />
            </motion.div>
        </div>
    )
}