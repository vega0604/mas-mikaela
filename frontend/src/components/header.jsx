import styles from '@styles/header.module.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    const [toggled, setToggled] = useState(false);

    return (
        <nav id={styles.nav_container}>
            <div id={styles.nav} data-toggled={toggled} className='glass_bg'>
                <Link id={styles.logo_container} to="/">
                    <img id={styles.logo} src="assets/logo.svg" alt="Mikaela Olarte logo" />
                </Link>
                <ul className={styles.list}>
                    <li className={styles.list_item}>
                        <Link to="/about">ABOUT ME</Link>
                    </li>
                    <li className={styles.list_item}>
                        <Link to="/projects">PROJECTS</Link>
                    </li>
                    <li className={styles.list_item}>
                        <Link to="/mikaela_olarte_resume.pdf" target="_blank" rel="noopener noreferrer">
                            RESUMÉ
                        </Link>
                    </li>
                </ul>
                <div className={styles.burger} onClick={() => setToggled(!toggled)}>
                    <div />
                    <div />
                    <div />
                </div>
                <div className={`${styles.overlay} ${toggled && styles.active}`} onClick={() => setToggled(!toggled)}></div>
            </div>
        </nav>
    )
}

export default Navbar;