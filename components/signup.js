import styles from '../styles/signup.module.css';

export default function signupForm() {

    const handleSubmit = (e) => {
        e.preventDefault();
        let email = e.target[0].value;
        let password = e.target[1].value;
        // console.log(e.target[0].value);
        console.log(email, password);
    }

    return (
        <>
            <h1 className={`${styles.title}`}>
                Signup
            </h1>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className={`${styles.formContainer}`}>
                    <div className={`${styles.radius}`}>
                        <div className={`${styles.formItem}`}>
                            <label className={`${styles.textColor}`}>
                                Email<input className={`${styles.input}`} />
                            </label>
                        </div>
                        <div className={`${styles.formItem}`}>
                            <label className={`${styles.textColor}`}>
                                Password<input type={`password`} className={`${styles.input}`} />
                            </label>
                        </div>

                        <div className={`${styles.formItem}`}>
                            <button className={`${styles.btn}`} type='Submit'>
                                Login
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}