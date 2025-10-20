import StatCircle from '../visualizations/StatCircle';
import styles from './PlayerHeader.module.css';
import timerIcon from '../../assets/timer.svg';
import footballerIcon from '../../assets/footballerIcon.svg';

const PlayerHeader = ({ player, circleStats }) => {
  return (
    <header className={styles.playerHeader}>
      <div className={styles.playerInfo}>
        <div className={styles.profileImage}>
          {player.profileImage ? (
            <img src={player.profileImage} alt={player.name} />
          ) : (
            <div className={styles.placeholder}></div>
          )}
        </div>
        
        <div className={styles.details}>
          <h1 className={styles.name}>{player.name}</h1>
          <div className={styles.meta}>
            <div className={styles.metaItem}>
                <div className={styles.labelRow}>
                    <img src={timerIcon} alt="timer-icon" aria-hidden="true" className={styles.iconImg} />
                    <span className={styles.label}>Game Time(min)</span>
                </div>
                <span className={styles.value}>{player.gameTime}</span>
            </div>
            <div className={styles.metaItem}>
                <div className={styles.labelRow}>
                        <img src={footballerIcon} alt="" aria-hidden="true" className={styles.iconImg} />
                        <span className={styles.label}>Position</span>
                </div>
                <span className={styles.value}>{player.position}</span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.statsCircles}>
        <StatCircle 
          label="Passing"
          current={circleStats.passing.current}
          total={circleStats.passing.total}
          color="#8B5CF6"
        />
        <StatCircle 
          label="Dribbling"
          current={circleStats.dribbling.current}
          total={circleStats.dribbling.total}
          color="#3B82F6"
        />
        <StatCircle 
          label="Shooting"
          current={circleStats.shooting.current}
          total={circleStats.shooting.total}
          color="#06B6D4"
        />
        <StatCircle 
          label="Defending"
          current={circleStats.defending.current}
          total={circleStats.defending.total}
          color="#FBBF24"
        />
        <StatCircle 
          label="Physical"
          current={circleStats.physical.current}
          total={circleStats.physical.total}
          color="#FB923C"
        />
      </div>
    </header>
  );
};

export default PlayerHeader;