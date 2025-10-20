import { useState } from 'react';
import { useAuthContext } from '../../context/AuthContext';
import Button from '../common/Button';
import Input from '../common/Input';
import LoadingSpinner from '../common/LoadingSpinner';
import styles from './LoginForm.module.css';
import EnvelopeIcon from '../../assets/envelope.svg';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const { login, loading, error } = useAuthContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
  };

  return (
    <div className={styles.loginForm}>
      <h2 className={styles.title}>Login</h2>
      
      <form onSubmit={handleSubmit}>
        <div className={styles.inputGroup}>
          <label htmlFor="email">Your email id</label>
          <Input
            id="email"
            type="email"
            placeholder="player1@stepout.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            customIcon={EnvelopeIcon}
            required
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="password">Password</label>
          <Input
            id="password"
            type="password"
            placeholder="••••••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className={styles.options}>
          <label className={styles.checkbox}>
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <span>Remember me</span>
          </label>
          <a href="#" className={styles.forgotPassword}>
            Forgot Password?
          </a>
        </div>

        {error && <div className={styles.error}>{error}</div>}

        <Button type="submit" fullWidth disabled={loading}>
          {loading ? <LoadingSpinner size="small" /> : 'Login'}
        </Button>

        <p className={styles.register}>
          Not registered? <a href="#">Create account</a>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;