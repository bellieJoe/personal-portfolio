import { motion } from 'framer-motion';
import variables from '../../styles/variable.module.scss'
import styles from "./Navbar.module.scss";
import { useState } from 'react';
// import { useMediaQuery } from "@mui/material"

export default function Navbar(){
    const [isLinkVisible, setIsLinkVisible] = useState(false)
    return (
        <>
            <div className={styles.navbar}>
                <div className={styles.navbarBrand}>
                    <h3><a href="#hero">BJ</a></h3>
                </div>
                <button onClick={() =>  isLinkVisible ? setIsLinkVisible(false) : setIsLinkVisible(true)}>ok</button>
                <motion.ul 
                animate={{
                    height: isLinkVisible ? 'initial' : 0,
                    padding: isLinkVisible ? '.5rem' : 0
                }}
                initial={{
                    height: 0,
                    padding: 0
                }}>
                    <li>
                        <a href="#interest">Interest</a>
                    </li>
                    <li>
                        <a href="#experiences">Experiences</a>
                    </li>
                    <li>
                        <a href="">Stacks</a>
                    </li>
                </motion.ul>
            </div>
        </>
    )
}