import { AnimatePresence, motion, useScroll } from 'framer-motion';
import variables from '../../styles/variable.module.scss'
import styles from "./Navbar.module.scss";
import { useState } from 'react';
import { Button, IconButton, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Image from 'next/image';
import logo from '../../assets/image/icons/android-chrome-192x192.png';


export default function Navbar(){
    const isMedium  = useMediaQuery('(min-width:700px)');
    const [isLinkVisible, setIsLinkVisible] = useState(true);
    const linkVariant = {
        initial: !isMedium ? {
                x: isLinkVisible ? 0 : '-100vw'
            } : {},
        animate: !isMedium ? {
                x: isLinkVisible ? 0 : '-100vw',
                transition: {
                    ease : 'linear'
                } 
            } : {},
    }
    const backdropvariant = {
        initial: !isMedium ? {
                display: isLinkVisible ? 'none' : 'block'
            } : {},
        animate: !isMedium ? {
                display: isLinkVisible ? 'block' : 'none',
                transition: {
                    ease : 'linear'
                } 
            } : {},
    }
    const { scrollY } = useScroll()


    return (
        <>
            <motion.div className={styles.navbar} initial={{y:"-5rem", opacity: 0}} animate={{y: 0, opacity: 1}} transition={{type: "spring", bounce: .2}} >
                <div className={styles.navbarBrand}>
                    <h3>
                        {
                            !isMedium && (
                                <IconButton className={styles.burger_menu} size="large" onClick={()=>setIsLinkVisible(!isLinkVisible)} >
                                    <AnimatePresence >
                                        <motion.div whileHover={{ 
                                            rotateY: 90
                                         }}
                                        >
                                        {
                                            !isLinkVisible ? (<MenuIcon />) : (<ArrowBackIcon />)
                                        }
                                        </motion.div>
                                    </AnimatePresence>
                                </IconButton>
                            )
                        }
                        <a href="#hero"><Image src={logo} width={60} height={60} alt="Logo" quality={100} /></a> 
                    </h3>
                </div>
                <motion.ul variants={linkVariant} initial="initial" animate="animate">
                    <li>
                        <a href="#interest" onClick={()=>setIsLinkVisible(false)}>Interest</a>
                    </li>
                    <li>
                        <a href="#experiences" onClick={()=>setIsLinkVisible(false)}>Experiences</a>
                    </li>
                    <li>
                        <a href="#devstacks" onClick={()=>setIsLinkVisible(false)}>Dev. Stacks</a>
                    </li>
                    {/* <li>
                        <a href="#">Stacks</a>
                    </li> */}
                </motion.ul>
                <motion.div onClick={()=>setIsLinkVisible(false)} className={styles.backdrop} variants={backdropvariant}  initial="initial" animate="animate"></motion.div>
            </motion.div>
        </>
    )
}