import SectionHeader from "../SectionHeader/SectionHeader";
import styles from "./Interest.module.scss";
import ui_ux_bg from "../../assets/image/ui_ux_bg.jpg";
import web_dev_bg from "../../assets/image/web_dev_bg.jpg";

export default function Interest(){
    const contents = [
        {
            title: "UI/UX Design",
            content: "I have a passion for designing user interfaces and experiences that are both visually appealing and user-friendly. It brings me joy to create designs that make people's lives easier and more enjoyable.",
            img: ui_ux_bg
        },
        {
            title: "Full Strack Web Dev.",
            content: "I love the process of full-stack development, from server-side programming to front-end user interface design. Being able to create a seamless user experience through the development stack is what truly excites me about this field.",
            img: web_dev_bg
        },
        {
            title: "Mobile Application Dev.",
            content: "itae ultricies leo integer malesuada nunc vel risus commodo viverra maecenas ",
            img: '../../assets/image/ui_ux_bg.jpg'
        },
        {
            title: "Graphics Art/Design",
            content: "itae ultricies leo integer malesuada nunc vel risus commodo viverra maecenas ",
            img: '../../assets/image/ui_ux_bg.jpg'
        }
    ]

    return (
        <>
            <div className={styles.Interest} id="interest">
                <SectionHeader text="Interest" />
                {
                    contents.map(content => (
                        <div className="">
                            <div className={styles.card}>
                                    <div className={styles.card_content}>
                                        <h3 className={styles.card_header}>{content.title}</h3>
                                        <p>{content.content}</p>
                                    </div>
                                    <div className={styles.card_img}>
                                        <div className={styles.img_container}>

                                        <img src={content.img.src} alt="My Image" />
                                        </div>
                                    </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}