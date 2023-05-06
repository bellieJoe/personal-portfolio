import styles from "./Footer.module.scss";
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { IconButton, Button, Icon } from "@mui/material";

export default function Footer () {
    return (
        <div className={styles.Footer}>
            <h6>Created By Bellie Joe Jandusay</h6>
            <div className={styles.social_links}>
                <a href="https://web.facebook.com/belliejoe.jandusay/" target="_blank" className={styles.social_icon} title="Facebook">
                    <FacebookIcon fontSize="large" />
                </a>
                <a href="https://www.linkedin.com/in/bellie-joe-jandusay-8023161a8/" target="_blank" className={styles.social_icon} title="LinkedIn">
                    <LinkedInIcon fontSize="large" />
                </a>
                <a href="https://github.com/bellieJoe" target="_blank" className={styles.social_icon} title="Github">
                    <GitHubIcon fontSize="large" />
                </a>
            </div>
        </div>
    )
}