import SectionHeader from "../SectionHeader/SectionHeader";
import styles from "./Interest.module.scss";
import ui_ux_bg from "../../assets/image/ui_ux_bg.jpg";
import web_dev_bg from "../../assets/image/web_dev_bg.jpg";
import mob_dev_bg from "../../assets/image/mob_dev_bg.jpg";
import grap_des_bg from "../../assets/image/grap_des_bg.jpg";
import {motion} from "framer-motion"

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
    ]

    return (
        <>
            <div className={styles.Interest} id="interest">
                <SectionHeader text="Interest" />
                <div className={styles.cards}>
                {
                    contents.map(content => (
                        <motion.div key={content.title} className="" whileHover={
                            {
                                // width: '400px'
                                scale: 1.1
                            }
                            }>
                            <div className={styles.card}>
                                <div className={styles.card_content}>
                                    <h3 className={styles.card_header}>{content.title}</h3>
                                    <p>{content.content}</p>
                                    <a href="">See My Works</a>
                                </div>
                            </div>
                        </motion.div>
                    ))
                }
                </div>
            </div>
        </>
    )
}