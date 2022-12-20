import styles from '../styles/css/success.module.css'

export default function Success() {
    return (
        <div className={styles.container}>
            <div className={styles.successCont}>
                <img className={styles.bgLogo} src='/images/right-aligned-logo.svg' />
                <div className={styles.success}>
                    <img src='/images/email-success.svg' alt='success' />
                    <h1>Success !</h1>
                    <p>A email has been send to your email@domain.com. Please check for an email from company and click on the included link to reset your password.</p>
                    <button className={styles.btn}>Back to home</button>
                </div>
            </div>

            <div className={styles.graphicSide}></div>
        </div>
    )
}
