import SectionHeader from "../SectionHeader/SectionHeader"
import styles from "./Experience.module.scss"

function PathCard(props : any){
    return (
        <div className={styles.PathCard}>
            <h4>{props.title}</h4>
            <p>{props.description}</p>
        </div>
    )
}

function Path(props : any){
    return (
        <div className={styles.Path}>
            <div className="">
                <h3 className={styles.scope}>{props.scope}</h3>
                <p className={styles.companyName}>{props.companyName}</p>
                <p className={styles.role}>{props.role}</p>
            </div>
            <PathCard title={props.title} description={props.description} />
        </div>
    )
}

export default function Experience(){
    const experiences = [
        {
            scope: '2015-2017',
            companyName: 'Polaris Mold Fabrication Corporation',
            role: 'EDM Technician',
            description: 'As an EDM Technician, I operated Electrical Discharge Machines to cut and modify metal shapes based on client blueprints. This job required precision and attention to detail to avoid defects. I learned to use precision measurement tools and program EDM machines with specialized software. By applying the knowledge I learned from high school subjects such as Math, Mechanical, and Technical Drafting, I gained a solid foundation for understanding principles and calculations. This job also taught me the importance of communication and teamwork. Overall, my experience as an EDM Technician provided me with a wealth of knowledge and skills, including precision, technical knowledge, communication, and collaboration, which are essential qualities for success in any field.',
            title: '-dscrptn'
        },
        {
            scope: '2017-2022',
            companyName: 'Marinduque State College - Boac Campus',
            role: 'IT Student',
            description: 'College was a turning point in my career journey, as I pursued my passion for IT by taking a 4-year bachelor\'s course in MSC. Throughout the program, I gained extensive knowledge and skills in software development and engineering, which was the career path I had always envisioned for myself. Thanks to my hard work and dedication, I successfully completed the course with excellent performance and earned valuable credentials that helped me kickstart my IT career.',
            title: '-dscrptn'
        },
        {
            scope: '2022-Present',
            companyName: 'Marinduque State College - ICTSC',
            role: 'Computer Programmer',
            description: "After graduating from my alma mater, I was fortunate to land my first job as a Software Developer in the same institution. In this role, I was responsible for designing and developing Information Systems that were beneficial to the institution. It was also an excellent opportunity for me to apply the knowledge I had recently acquired in PHP and Laravel development. Additionally, it was my first time collaborating with other software developers working on similar systems, which helped me develop my teamwork and communication skills.",
            title: '-dscrptn'
        },
    ]

    return (
        <div className={styles.Experience} id="experiences">
            <SectionHeader text="My Career Paths..." />
            {
                experiences.map(exp => (
                    <Path key={exp.scope} scope={exp.scope}
                    companyName={exp.companyName}
                    role={exp.role}
                    description={exp.description}
                    title={exp.title}
                    />
                ))
            }
        </div>
    )
}