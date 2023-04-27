import SectionHeader from "../SectionHeader/SectionHeader"
import styles from "./Experience.module.scss"
import {motion, Variants} from "framer-motion";

function PathCard(props : any){
    return (
        <div className={styles.PathCard}>
            <h3 className={styles.role}>{props.role}</h3>
            <p className={styles.companyName}>{props.companyName}</p>
            <p className={styles.desc}>{props.description}</p>
        </div>
    )
}

function Path(props : any){
    return (
        <div className={styles.Path}>
            <div className="">
                <h3 className={styles.scope}>{props.scope}</h3>
            </div>
            <PathCard title={props.title} 
                    companyName={props.companyName}
                    role={props.role} 
                    description={props.description} />
        </div>
    )
}

export default function Experience(){
    const experiences = [
        {
            scope: '2015-2017',
            companyName: 'Polaris Mold Fabrication Corporation',
            role: 'EDM Technician',
            description: 'Working as an EDM Technician, I operated Electrical Discharge Machines to cut and modify metal shapes according to client blueprints. This role demanded precision and attention to detail, as well as the ability to program EDM machines with specialized software. It taught me the importance of teamwork, communication, and technical knowledge. Overall, this experience provided me with a solid foundation for understanding principles and calculations in any field.',
            // description: 'As an EDM Technician, I operated Electrical Discharge Machines to cut and modify metal shapes based on client blueprints. This job required precision and attention to detail to avoid defects. I learned to use precision measurement tools and program EDM machines with specialized software. By applying the knowledge I learned from high school subjects such as Math, Mechanical, and Technical Drafting, I gained a solid foundation for understanding principles and calculations. This job also taught me the importance of communication and teamwork. Overall, my experience as an EDM Technician provided me with a wealth of knowledge and skills, including precision, technical knowledge, communication, and collaboration, which are essential qualities for success in any field.',
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
            role: 'Full Stack Developer',
            description: "After graduating from my alma mater, I was fortunate to land my first job as a Software Developer in the same institution. In this role, I was responsible for designing and developing Information Systems that were beneficial to the institution. It was also an excellent opportunity for me to apply the knowledge I had recently acquired in PHP and Laravel development. Additionally, it was my first time collaborating with other software developers working on similar systems, which helped me develop my teamwork and communication skills.",
            title: '-dscrptn'
        },
    ];
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

    return (
        <div className={styles.Experience} id="experiences">
            <motion.div  variants={headerVariant} initial="hidden" whileInView="show">
                <SectionHeader text={<span>My <span style={{ color: 'rgb(0, 255, 157)' }}>Career</span> Path & Experience</span>} />
            </motion.div>
            
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