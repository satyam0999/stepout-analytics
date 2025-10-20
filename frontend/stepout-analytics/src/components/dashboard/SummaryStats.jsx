import styles from './SummaryStats.module.css';

const SummaryStats = ({ stats }) => {
  return (
    <section className={styles.summaryStats}>
      <h2 className={styles.title}>SUMMARY</h2>
      
      <div className={styles.statsRows}>
        <div className={styles.statsRow}>
          <div className={styles.statItem}>
            <span className={styles.label}>Assist Completed</span>
            <div className={styles.valueCircle}>
              <span className={styles.value}>{stats.assistsCompleted}</span>
            </div>
          </div>

          <div className={styles.statItem}>
            <span className={styles.label}>Chances Created</span>
            <div className={styles.valueCircle}>
              <span className={styles.value}>{stats.chancesCreated}</span>
            </div>
          </div>

          <div className={styles.statItem}>
            <span className={styles.label}>Played Game Time</span>
            <div className={styles.valueCircle}>
              <span className={styles.value}>{stats.playedGameTime}</span>
            </div>
          </div>

          <div className={styles.statItem}>
            <span className={styles.label}>Goal Scored</span>
            <div className={styles.valueCircle}>
              <span className={styles.value}>{stats.goalScored}</span>
            </div>
          </div>

          <div className={styles.statItem}>
            <span className={styles.label}>Attempts On Target</span>
            <div className={styles.valueCircle}>
              <span className={styles.value}>{String(stats.attemptsOnTarget).padStart(2, '0')}</span>
            </div>
          </div>

          <div className={styles.statItem}>
            <span className={styles.label}>Dribbles Completed</span>
            <div className={styles.valueCircle}>
              <span className={styles.value}>{String(stats.dribblesCompleted).padStart(2, '0')}</span>
            </div>
          </div>
        </div>

        <div className={styles.statsRow}>
          <div className={styles.statItem}>
            <span className={styles.label}>Tackles Won</span>
            <div className={styles.valueCircle}>
              <span className={styles.value}>{stats.tacklesWon}</span>
            </div>
          </div>

          <div className={styles.statItem}>
            <span className={styles.label}>Passes Completed In Final Third</span>
            <div className={styles.valueCircle}>
              <span className={styles.value}>{String(stats.passesCompletedInFinalThird).padStart(2, '0')}</span>
            </div>
          </div>

          <div className={styles.statItem}>
            <span className={styles.label}>Possessions Lost</span>
            <div className={styles.valueCircle}>
              <span className={styles.value}>{stats.possessionsLost}</span>
            </div>
          </div>

          <div className={styles.statItem}>
            <span className={styles.label}>Possessions Retained</span>
            <div className={styles.valueCircle}>
              <span className={styles.value}>{stats.possessionsRetained}</span>
            </div>
          </div>

          <div className={styles.statItem}>
            <span className={styles.label}>Duel Win Rate</span>
            <div className={styles.valueCircle}>
              <span className={styles.value}>{stats.duelWinRate}%</span>
            </div>
          </div>

          <div className={styles.statItem}>
            <span className={styles.label}>Interceptions</span>
            <div className={styles.valueCircle}>
              <span className={styles.value}>{stats.interceptions}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SummaryStats;