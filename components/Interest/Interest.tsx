import SectionHeader from "../SectionHeader/SectionHeader";
import styles from "./Interest.module.scss";
import varStyles from "../../styles/variable.module.scss";
import {motion, AnimatePresence, Variants, useScroll} from "framer-motion"
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import interestData from "./InterestData";

export default function Interest(){
    const contents = interestData;

    const cardsVariant : Variants = {
        hidden : {
            
        },
        show: {
            transition: {
                type: "spring",
                staggerChildren: .2
            }
        }
    };
    const cardVariant : Variants = {
        hidden: { opacity: 0,  y: "4rem"},
        show: { opacity: 1, y: 0, }
    };
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
    const workslinkVariant : Variants = {
        show: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
            }
        },
        hidden: {
            opacity: 0,
            y: "4rem"
        },
        focus: {
            scale: 0.9
        }
    }

    return (
        <>
            <div className={styles.Interest} id="interest" >
                <motion.div variants={headerVariant} initial="hidden" whileInView="show">
                    <SectionHeader text={<span >Things that caught my <span style={{ color: 'rgb(0, 255, 157)' }}>Interest</span></span>} />
                </motion.div>
                <motion.div className={styles.cards} variants={cardsVariant} initial="hidden" whileInView="show" viewport={{margin: "-150px"}}>
                {
                    contents.map(content => (
                        <motion.div key={content.title}  variants={cardVariant} >
                            <motion.div className={styles.card}
                            >
                                <div className={styles.card_content} >
                                    <h3 className={styles.card_header}>{content.title}</h3>
                                    <p>{content.content}</p>
                                    {/* <motion.a initial={{ scale: 0.6 }} whileHover={{ padding: 0 }} href="#">See My Works</motion.a> */}
                                </div>
                            </motion.div>
                        </motion.div>
                    ))
                }
                </motion.div>
                <motion.a variants={workslinkVariant} whileInView="show" initial="hidden" whileHover="focus"  className={styles.works} href="#">See all my Works <KeyboardReturnIcon/></motion.a>
            </div>
        </>
    )
}