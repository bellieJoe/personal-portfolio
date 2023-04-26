import SectionHeader from "../SectionHeader/SectionHeader";
import styles from "./Interest.module.scss";
import varStyles from "../../styles/variable.module.scss";
import ui_ux_bg from "../../assets/image/ui_ux_bg.jpg";
import web_dev_bg from "../../assets/image/web_dev_bg.jpg";
import mob_dev_bg from "../../assets/image/mob_dev_bg.jpg";
import grap_des_bg from "../../assets/image/grap_des_bg.jpg";
import {motion, AnimatePresence, Variants, useScroll} from "framer-motion"
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';

export default function Interest(){
    const contents = [
        {
            title: "UI/UX Design",
            content: "As a software developer, I'm passionate about exploring new ideas and designs for web and mobile applications. In addition to my technical skills, I also enjoy using my artistic abilities to create beautiful and stunning user interfaces based on my clients' preferences.",
            img: ui_ux_bg
        },
        {
            title: "Full Stack Web Dev.",
            content: "I love the process of full-stack development, from server-side programming to front-end user interface design. Being able to create a seamless user experience through the development stack is what truly excites me about this field.",
            img: web_dev_bg
        },
        {
            title: "Mobile App Dev.",
            content: "I've always been passionate about mobile application development and creating tools that people can use in their daily lives. However, I also aspire to explore the world of game development in the near future.",
            img: mob_dev_bg
        },
        {
            title: "Graphics Art/Design",
            content: "Prior to software development, I had a strong interest in graphic design and art. Through my passion for art, I discovered my talent for design and I now use this skill to elevate my career as a software developer.",
            img: grap_des_bg
        }
    ];
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