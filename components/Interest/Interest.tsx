import SectionHeader from "../SectionHeader/SectionHeader";
import styles from "./Interest.module.scss";
import ui_ux_bg from "../../assets/image/ui_ux_bg.jpg";
import web_dev_bg from "../../assets/image/web_dev_bg.jpg";
import mob_dev_bg from "../../assets/image/mob_dev_bg.jpg";
import grap_des_bg from "../../assets/image/grap_des_bg.jpg";

export default function Interest(){
    const contents = [
        {
            title: "UI/UX Design",
            content: "My talent for art and education in Information Technology have come together to allow me to create stunning UI/UX designs. I have honed my skills during my college years, and now I am able to apply them in real-world projects. With a deep understanding of both art and technology, I can create designs that are not only visually appealing but also intuitive and functional.",
            img: ui_ux_bg
        },
        {
            title: "Full Strack Web Dev.",
            content: "I love the process of full-stack development, from server-side programming to front-end user interface design. Being able to create a seamless user experience through the development stack is what truly excites me about this field.",
            img: web_dev_bg
        },
        {
            title: "Mobile Application Dev.",
            content: "During college, I was introduced to mobile app development and quickly became fascinated by the possibilities it offered. My passion grew as we worked on our Capstone project and I realized how much I loved developing mobile apps. Since then, I've been on a continuous journey to improve my skills and knowledge in the field. The Ionic Framework has been a valuable tool in this process, enabling me to build powerful and engaging mobile applications. I'm excited to keep exploring and growing in this dynamic field.",
            img: mob_dev_bg
        },
        {
            title: "Graphics Art/Design",
            content: "Creating visually appealing art has been a passion of mine since I was young. As I grew older, my interest in graphics art and design grew, especially when I purchased my first graphics tablet. It quickly became my go-to tool whenever I wanted to unleash my creativity or feel productive during bouts of boredom. Over the years, this hobby has continued to bring me joy and satisfaction, and I'm always eager to explore new techniques and mediums to push the boundaries of what's possible.",
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
                        <div className="">
                            <div className={styles.card}>
                                <div className={styles.card_content}>
                                    <h3 className={styles.card_header}>{content.title}</h3>
                                    <p>{content.content}</p>
                                </div>
                                    {/* <div className={styles.card_img}>
                                        <div className={styles.img_container}>

                                        <img src={content.img.src} alt="My Image" />
                                        </div>
                                    </div> */}
                            </div>
                        </div>
                    ))
                }
                </div>
            </div>
        </>
    )
}