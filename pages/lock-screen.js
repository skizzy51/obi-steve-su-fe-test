import styles from "../styles/css/lock-screen.module.css";

export default function LockScreen() {
  return (
    <div className={styles.container}>
        <div className={styles.lockScreenCont}>
            <img className={styles.bgLogo} src='/images/left-aligned-logo.svg' alt='logo' />
            <div className={styles.lockScreen}>
                <img src="/images/lock-screen-pic.png" alt="profile-pic" />
                <h2>Hi ! Austin Robertson</h2>
                <p>Enter your password to access the admin.</p>
                <div className={styles.inputCont}>
                    <label>Password</label>
                    <input type='password' />
                </div>
                <button className={styles.btn}>Login</button>
            </div>
        </div>

        <div className={styles.graphicSide}></div>
    </div>
  )
}
