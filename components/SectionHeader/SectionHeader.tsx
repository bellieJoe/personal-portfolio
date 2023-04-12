import styles from "./SectionHeader.module.scss"

export default function SectionHeader(props) {
    return (
        <h1 className={styles.SectionHeader}>
                {props.text}
        </h1>
    )
}