import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../redux/userReducer'
import styles from '../styles/css/sign-in.module.css'

export default function SignIn() {
    const router = useRouter()
    const dispatch = useDispatch()
    const { loggedIn } = useSelector(state => state.user)

    function handleSignIn () {
        console.log('run')
        dispatch(login())
    }

    useEffect(() => {
        if (loggedIn) router.push('/')
    }, [loggedIn])

    return (
        <div className={styles.container}>
            <div className={styles.signInCont}>
                <img className={styles.bgLogo} src='/images/left-aligned-logo.svg' alt='logo' />
                <div className={styles.signIn}>
                    <h2>Sign In</h2>
                    <h6>Sign in to stay connected</h6>
                    <div className={styles.inputCont}>
                        <label>Email</label>
                        <input type='email' />
                    </div>
                    <div className={styles.inputCont}>
                        <label>Password</label>
                        <input type='password' />
                    </div>
                    <div className={styles.rememberMe}>
                        <div>
                            <input id='check' type='checkbox'/>
                            <label htmlFor='check'>Remember me</label>
                        </div>
                        <span>Forgot password</span>
                    </div>
                    <button onClick={handleSignIn} className={styles.btn}>Sign in</button>
                    <p className={styles.or}>or sign in with other accounts?</p>
                    <div className={styles.socials}>
                        <img src='/images/Gmail.svg' alt='gmail'/>
                        <img src='/images/Facebook.svg' alt='facebook'/>
                        <img src='/images/Instagram.svg' alt='instagram'/>
                        <img src='/images/Linkedin.svg' alt='linkedIn'/>
                    </div>
                    <p>Don't have an account? <span style={{color:'#3A57E8', cursor:'pointer'}}>Click here to sign up</span>.</p>
                </div>
            </div>

            <div className={styles.graphicSide}></div>
        </div>
    )
}
