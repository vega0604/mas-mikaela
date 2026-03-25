import styles from "@styles/footer.module.css";
import { Link } from "react-router-dom";
import linkedinIcon from "@assets/linkedin_icon.svg";
import instagramIcon from "@assets/instagram_icon.svg";
import youtubeIcon from "@assets/youtube_icon.svg";
import emailIcon from "@assets/email_icon.svg";

function Footer() {
    return (
        <footer id={styles.footer} className="glass_bg" aria-label="Footer">
            <nav id={styles.footer_nav}>
                <Link to="/" id={styles.logo_link}>
                    <img src="/assets/logo.svg" alt="Mas Mikaela Logo" />
                    <p>Designed by Mikaela Olarte</p>
                </Link>

                <ul id={styles.nav_list} aria-label="Primary">
                    <li className={styles.nav_item}>
                        <Link to="/about"><img src={linkedinIcon} alt="LinkedIn" /></Link>
                    </li>
                    <li className={styles.nav_item}>
                        <Link to="/projects"><img src={instagramIcon} alt="Instagram" /></Link>
                    </li>
                    <li className={styles.nav_item}>
                        <Link to="/projects"><img src={youtubeIcon} alt="YouTube" /></Link>
                    </li>
                    <li className={styles.nav_item}>
                        <Link
                            to="/mikaela_olarte_resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={emailIcon} alt="Email" />
                        </Link>
                    </li>
                </ul>
            </nav>
        </footer>
    );
}

export default Footer;
