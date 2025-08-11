import { Link } from "react-router";
import styles from "./nav-bar.module.css";

export default function NavBar() {
    

    return (
        <>
            <nav className={styles.container_navbar}>
                <ul className={styles.navbar}>
                    <li>
                        <Link to="/" className={styles.link}>Accueil</Link>
                    </li>
                    <li>
                        <Link to="/about" className={styles.link}>About</Link>
                    </li>
                    <li>
                        <Link to="/destination" className={styles.link}>Destinations</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}