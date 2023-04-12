import styles from "./SectionHeader.module.scss"

export default function SectionHeader(props) {
    return (
        <div className={styles.SectionHeader}>
            <h1 >
                    {props.text}
            </h1>
        </div>
    )
}