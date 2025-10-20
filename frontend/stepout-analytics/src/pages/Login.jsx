import LoginForm from '../components/auth/LoginForm';
import styles from './Login.module.css';
import stepOutLogo from '../assets/stepout_logo.svg';

const Login = () => {
  return (
    <div className={styles.loginPage}>
      <div className={styles.leftSection}>
        <div className={styles.logo}>
          <img src={stepOutLogo} alt="stepout-logo" aria-hidden="true" />
        </div>
        <LoginForm />
        <footer className={styles.footer}>
          ©StepOut 2021. All Rights Reserved | <a href="#">Privacy Policy</a>
        </footer>
      </div>

      <div className={styles.rightSection}>
        <div className={styles.content}>
            <h2 className={styles.title}>Total Management</h2>
            <h2 className={styles.title}>System</h2>
          <p>
            Manage your team efficiently, monitor player stats, and leverage
            data-driven insights to elevate your game.
          </p>
          <button className={styles.learnMore}>Learn more</button>
        </div>
      </div>
    </div>
  );
};

export default Login;