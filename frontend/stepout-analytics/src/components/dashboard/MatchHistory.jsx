import styles from './MatchHistory.module.css';
import auFlag from '../../assets/australia_flag.png';

const MatchHistory = ({ matches }) => {
  return (
    <aside className={styles.matchHistory}>
      <h3 className={styles.title}>LAST 5 MATCHES PLAYED</h3>
      <ul className={styles.matchList}>
        {matches.map((match) => (
          <li key={match.id} className={styles.matchItem}>
            <div className={styles.flag}>
              <img src={auFlag} alt="timer-icon" aria-hidden="true" className={styles.iconImg} />
            </div>
            <div className={styles.matchInfo}>
              <span className={styles.opponent}>VS {match.opponent}</span>
              <span className={styles.gameTime}>Game Time: {match.gameTime}'</span>
            </div>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default MatchHistory;