import styles from "./SectionHeader.module.scss"

export default function SectionHeader(props : any) {
    return (
        <div className={styles.SectionHeader}>
            <h1 >
                    {props.text}
            </h1>
        </div>
    )
}