import styles from '../styles/css/confirm.module.css'

export default function Confirm() {
    return (
        <div className={styles.container}>
            <div className={styles.confirmCont}>
                <img className={styles.bgLogo} src='/images/left-aligned-logo.svg' alt='logo' />
                <div className={styles.confirm}>
                    <h2>Reset Password</h2>
                    <p>Enter your email address and we’ll send you an email with instructions to reset your password</p>
                    <div className={styles.inputCont}>
                        <label>Email</label>
                        <input type='email' />
                    </div>
                    
                    <button className={styles.btn}>Reset</button>
                </div>
            </div>

            <div className={styles.graphicSide}></div>
        </div>
    )
}
