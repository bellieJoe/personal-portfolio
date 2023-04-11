import styles from "./Experience.module.scss"

function Path(props){
    return (
        <>
        <div className="">
            <h3>
                {props.scope}
            </h3>
            <p>{props.companyName}</p>
            <p>{props.role}</p>
        </div>
        </>
    )
}

export default function Experience(){
    return (
        <>
            <div className={styles.Experience}>
                <h1 className={styles.section_header}>
                    Experience
                </h1>
                <Path scope="2015-2017" 
                companyName="Polaris Mold Fabrication Corporation" 
                role="EDM Technician"
                />
            </div>
        </>
    )
}