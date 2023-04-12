import variables from '../../styles/variable.module.scss'
import styles from "./Navbar.module.scss";


export default function Navbar(){
    return (
        <>
        <div className={styles.navbar}>
            <div className={styles.navbarBrand}>
                <h3 ><a href="#hero">BJ</a></h3>
            </div>
            <ul>
                <li>
                    <a href="#interest">Interest</a>
                </li>
                <li>
                    <a href="#experiences">Experiences</a>
                </li>
                <li>
                    <a href="">Stacks</a>
                </li>
            </ul>
        </div>
        </>
    )
}