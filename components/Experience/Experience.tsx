import { useRef } from "react";
import SectionHeader from "../SectionHeader/SectionHeader"
import styles from "./Experience.module.scss"
import {motion, useScroll, Variants} from "framer-motion";
import path from "path";
import zIndex from "@mui/material/styles/zIndex";
import experienceData from "./ExperienceData";

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
    const pathVariant : Variants = {
        show: {
            opacity: 1,
            // x: 0,
            transition: {
                staggerChildren: 0.2
            }
        },
        hidden: {
            opacity: 0,
            // x: "-2rem"
        }
    }
    const scopeVariant : Variants = {
        show: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
            }
        },
        hidden: {
            opacity: 0,
            y: "-2rem"
        }
    }
    const cardVariant : Variants = {
        show: {
            opacity: 1,
            x: 0,
            transition: {
                type: "spring",
            }
        },
        hidden: {
            opacity: 0,
            x: "-2rem"
        }
    }

    return (
        <motion.div variants={pathVariant} initial="hidden" whileInView="show" viewport={{ margin: "-10%" }}  className={styles.Path}>
            <motion.div className="" variants={scopeVariant}>
                <h3 className={styles.scope}> <br />
                {props.scope}
                </h3>
            </motion.div>
            <motion.div variants={cardVariant}>
                <PathCard title={props.title} 
                        companyName={props.companyName}
                        role={props.role} 
                        description={props.description} />
            </motion.div>
        </motion.div>
    )
}

export default function Experience(){
    const experiences = experienceData;
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

    // const scroll = useScroll({
    //     target: expScrollRef
    // });
    const scroll2 = useScroll();

    return (
        <div className={styles.Experience}  id="experiences" >
            <motion.div  variants={headerVariant} initial="hidden" whileInView="show">
                <SectionHeader text={<span>My <span style={{ color: 'rgb(0, 255, 157)' }}>Career</span> Path & Experience</span>} />
            </motion.div>
            
            {/* <svg height="1000" style={{
                position: "absolute",
                marginTop: "15rem",
                zIndex: 0,
            }}>
                <polyline points="40,15 40,410 " style={{fill: "none", stroke: "gray", strokeWidth: 4, strokeLinecap:"round"}} />
                <polyline points="40,473 40,900 " style={{fill: "none", stroke: "gray", strokeWidth: 4, strokeLinecap:"round"}} />
            </svg> */}
            <div className="">
                {
                    experiences.map((exp, i) => (
                        <Path  key={exp.scope} scope={exp.scope}
                        companyName={exp.companyName}
                        role={exp.role}
                        description={exp.description}
                        title={exp.title}
                        />
                    ))
                }
            </div>
        </div>
    )
}