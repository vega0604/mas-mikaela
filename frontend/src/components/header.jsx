import { Link } from "react-router-dom";
import styles from "@styles/header.module.css";
// import logo from "@assets/logo.svg";

function Header() {
    return (
        <header id={styles.header} aria-label="Main navigation">
            <nav id={styles.navbar} className="glass_bg">
                <Link to="/" id={styles.logo_link}>
                    <img src="/assets/logo.svg" alt="Mas Mikaela Logo" />
                </Link>

                <ul id={styles.nav_list} aria-label="Primary">
                    <li className={styles.nav_item}><Link to="/about">ABOUT ME</Link></li>
                    <li className={styles.nav_item}><Link to="/projects">PROJECTS</Link></li>
                    <li className={styles.nav_item}><Link to="/mikaela_olarte_resume.pdf" target="_blank" rel="noopener noreferrer">RESUMÉ</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;