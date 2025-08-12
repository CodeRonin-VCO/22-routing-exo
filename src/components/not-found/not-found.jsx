import styles from "./not-found.module.css";

export default function NotFound() {
    
    return (
        <div className={styles.container}>
            <h1>404 - Page not found</h1>
            <p>The page you are looking for does not currently exist.</p>
        </div>
    )
}