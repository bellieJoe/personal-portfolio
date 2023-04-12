import SectionHeader from "../SectionHeader/SectionHeader";
import styles from "./Interest.module.scss";

export default function Interest(){
    const contents = [
        {
            title: "UI/UX Design",
            content: "I have a passion for designing user interfaces and experiences that are both visually appealing and user-friendly. It brings me joy to create designs that make people's lives easier and more enjoyable."
        },
        {
            title: "Full Strack Web Dev.",
            content: "I love the process of full-stack development, from server-side programming to front-end user interface design. Being able to create a seamless user experience through the development stack is what truly excites me about this field."
        },
        {
            title: "Mobile Application Dev.",
            content: "itae ultricies leo integer malesuada nunc vel risus commodo viverra maecenas "
        },
        {
            title: "Graphics Art/Design",
            content: "itae ultricies leo integer malesuada nunc vel risus commodo viverra maecenas "
        }
    ]

    return (
        <>
            <div className={styles.Interest} id="interest">
                <SectionHeader text="Interest" />
                {
                    contents.map(content => (
                        <div className={styles.card}>
                            <h3 className={styles.card_header}>{content.title}</h3>
                            <div className={styles.card_content}>
                                <p>{content.content}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}