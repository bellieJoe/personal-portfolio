import styles from "./DevStacks.module.scss";
import SectionHeader from "../SectionHeader/SectionHeader";
import { Variants, motion } from "framer-motion";

import { IoLogoIonic } from "react-icons/io";
import { IoLogoAngular, IoLogoJavascript, IoLogoReact, IoLogoCss3 } from "react-icons/io5";
import { FaNode } from "react-icons/fa";
import { SiLaravel, SiMysql, SiPhp, SiPython, SiCss3, SiAdobephotoshop, SiAdobeillustrator } from "react-icons/si";
import { TbBrandCSharp,TbCircleLetterC, TbBrandPython } from "react-icons/tb";
import { FaJava, FaSass, FaHtml5, FaFigma } from "react-icons/fa";
import { CgCPlusPlus } from "react-icons/cg";

export default function DevStacks () {
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
        <div className={styles.DevStacks} id="devstacks">
            <motion.div variants={headerVariant} initial="hidden" whileInView="show">
                <SectionHeader text={<span >Development <span style={{ color: 'rgb(0, 255, 157)' }}>Stacks</span> & <span style={{ color: 'rgb(0, 255, 157)' }}>Tools</span></span>} />
            </motion.div>
            <div className="">
                <div className="">
                    <h4 className={styles.stack_title}>Programming Languages</h4>
                    <div className={styles.logos}>
                        <IoLogoJavascript size="40px" color="#F0DB4F" title="Javascript"  />
                        <SiPhp size="40px" color="#787CB5" title="PHP"  />
                        <TbBrandCSharp size="40px" color="purple" title="CSharp"  />
                        <TbCircleLetterC size="40px" color="yellow" title="C Language"  />
                        <FaJava size="40px" color="#f89820 " title="Java"  />
                        <TbBrandPython size="40px" color="#ffde57 " title="Python"  />
                        <CgCPlusPlus size="40px" color="yellow " title="C++"  />
                    </div>

                    <h4 className={styles.stack_title}>Mobile & Web Development</h4>
                    <div className={styles.logos}>
                        <IoLogoIonic size="40px" color="#498AFF" title="Ionic"  />
                        <IoLogoAngular size="40px" color="#B52E31" title="Angular" />
                        <SiLaravel size="40px" color="#F05340" title="Laravel" />
                        <SiMysql size="45px" color="#00758F" title="MySQL" />
                        <FaNode size="40px" color="#3C873A" title="NodeJS" />
                        <IoLogoReact size="40px" color="#61dbfb" title="React" />
                        <FaSass size="40px" color="#cc6699" title="SASS" />
                        <FaHtml5 size="40px" color="#e34c26" title="HTML5" />
                        <IoLogoCss3 size="40px" color="#039be5" title="CSS3" />
                    </div>

                    <h4 className={styles.stack_title}>UI/UX</h4>
                    <div className={styles.logos}>
                        <FaFigma size="40px" color="white" title="Figma"  />
                        <SiAdobephotoshop size="40px" color="#8BC3FC" title="Photoshop"  />
                        <SiAdobeillustrator size="40px" color="#945c04" title="Illustrator"  />
                    </div>
                    
                </div>
            </div>
        </div>
    )
}