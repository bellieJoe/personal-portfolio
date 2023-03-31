import variables from '../../styles/variable.module.scss'
import styles from "./Navbar.module.scss";


export default function Navbar(){
    return (
        <>
        <div className={styles.navbar}>
            <div className={styles.navbarBrand}>
                <h3 >BJ</h3>
            </div>
            <ul>
                <li>
                    <a href="">Sample</a>
                </li>
                <li>
                    <a href="">Sample</a>
                </li>
                <li>
                    <a href="">Sample</a>
                </li>
            </ul>
        </div>
        </>
    )
}