import styles from '../styles/homePage.module.css';

export default function homePage() {
    return (
        <>
            <h1 className={`${styles.contentTitle}`}>No Database</h1>
            <div className={`${styles.contentGrid}`}>
                <a className={`${styles.contentItem}`} href='/page'><h2>Single Page App</h2></a>
                <a className={`${styles.contentItem}`} href='/design'><h2>One Page Design</h2></a>
                <a className={`${styles.contentItem}`} href='/multipageapp'><h2>Multi Page App</h2></a>
            </div>
            <h1 className={`${styles.contentTitle}`}>With Database</h1>
            <div className={`${styles.contentGrid}`}>
                <a className={`${styles.contentItem}`} href='/ecommercewebapp'><h2>Ecommerce Web App</h2></a>
                <a className={`${styles.contentItem}`} href='/blogwebapp'><h2>Blog Web App</h2></a>
                <a className={`${styles.contentItem}`} href='/communityhub'><h2>Community Hub</h2></a>
            </div>
        </>
    )
}