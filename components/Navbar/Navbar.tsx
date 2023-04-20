import { motion } from 'framer-motion';
import variables from '../../styles/variable.module.scss'
import styles from "./Navbar.module.scss";
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Button, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
// import { useMediaQuery } from "@mui/material"

export default function Navbar(){
    const [isLinkVisible, setIsLinkVisible] = useState(false)
    return (
        <>
            <div className={styles.navbar}>
                <div className={styles.navbarBrand}>
                    <h3>
                        <IconButton className={styles.burger_menu} size="large">
                            <MenuIcon />
                        </IconButton>
                        {/* <button className={styles.burger_menu} onClick={() =>  isLinkVisible ? setIsLinkVisible(false) : setIsLinkVisible(true)}>
                            
                        </button> */}
                        <a href="#hero">BJ</a>
                    </h3>
                </div>
                <motion.ul>
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