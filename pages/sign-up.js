import styles from '../styles/css/sign-up.module.css'

export default function SignUp() {
    return (
        <div className={styles.container}>
            <div className={styles.graphicSide}></div>

            <div className={styles.signUpCont}>
                <img className={styles.bgLogo} src='/images/right-aligned-logo.svg' alt='logo' />
                <div className={styles.signUp}>
                    <h2>Sign Up</h2>
                    <h6>Create your Hope UI account</h6>
                    <div className={styles.inputs}>
                        <div className={styles.inputCont}>
                            <label>First Name</label>
                            <input type='text' />
                        </div>
                        <div className={styles.inputCont}>
                            <label>Last Name</label>
                            <input type='text' />
                        </div>
                    </div>
                    <div className={styles.inputs}>
                        <div className={styles.inputCont}>
                            <label>Email</label>
                            <input type='email' />
                        </div>
                        <div className={styles.inputCont}>
                            <label>Phone No.</label>
                            <input type='text' />
                        </div>
                    </div>
                    <div className={styles.inputs}>
                        <div className={styles.inputCont}>
                            <label>Password</label>
                            <input type='password' />
                        </div>
                        <div className={styles.inputCont}>
                            <label>Confirm password</label>
                            <input type='password' />
                        </div>
                    </div>
                    <div className={styles.TOS}>
                        <input id='check' type='checkbox'/>
                        <label htmlFor='check'>I agree with the terms of use</label>
                    </div>
                    <button className={styles.btn}>Sign up</button>
                    <p className={styles.or}>or sign up with other accounts?</p>
                    <div className={styles.socials}>
                        <img src='/images/Gmail.svg' alt='gmail' />
                        <img src='/images/Facebook.svg' alt='facebook' />
                        <img src='/images/Instagram.svg' alt='instagram' />
                        <img src='/images/Linkedin.svg' alt='linkedIn' />
                    </div>
                    <p>Already have an account? <span style={{color:'#3A57E8', cursor:'pointer'}}>Sign in</span>.</p>
                </div>
            </div>
        </div>
    )
}
