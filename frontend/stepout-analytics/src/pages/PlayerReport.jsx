import { useParams } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';
import { usePlayerData } from '../hooks/usePlayerData';
import LoadingSpinner from '../components/common/LoadingSpinner';
import PlayerHeader from '../components/dashboard/PlayerHeader';
import SummaryStats from '../components/dashboard/SummaryStats';
import MatchHistory from '../components/dashboard/MatchHistory';
import OverallActivity from '../components/dashboard/OverallActivity';
import PassingStats from '../components/dashboard/PassingStats';
import DefendingStats from '../components/dashboard/DefendingStats';
import ShootingStats from '../components/dashboard/ShootingStats';
import AttributeSummary from '../components/dashboard/AttributeSummary';
import styles from './PlayerReport.module.css';

const PlayerReport = () => {
  const { id } = useParams();
  const { user, isAuthenticated } = useAuthContext();
  const { playerData, loading, error } = usePlayerData(id);

  if (isAuthenticated && user && parseInt(id) !== user.playerId) {
    return <Navigate to={`/player/${user.playerId}`} replace />;
  }

  if (loading) {
    return (
      <div className={styles.loadingContainer}>
        <LoadingSpinner size="large" />
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.errorContainer}>
        <h2>Error Loading Player Data</h2>
        <p>{error}</p>
      </div>
    );
  }

  if (!playerData) {
    return (
      <div className={styles.errorContainer}>
        <h2>Player Not Found</h2>
      </div>
    );
  }


  return (
    <div className={styles.playerReport}>
      <PlayerHeader 
        player={playerData.player}
        circleStats={playerData.circleStats}
      />

      <div className={styles.reportButton}>
        <button className={styles.button}>OVERALL PLAYER REPORT</button>
      </div>

      <div className={styles.summaryRow}>
        <div className={styles.overallLeftSide}>
          <SummaryStats stats={playerData.summary} />
          
          <OverallActivity 
            passingActivity={playerData.overallActivity.passing}
            shootingActivity={playerData.overallActivity.shooting}
            defendingActivity={playerData.overallActivity.defending}
          />
        </div>
        
        <div className={styles.overallRightSide}>
          <MatchHistory matches={playerData.matchHistory} />
        </div>
      </div>

      <div className={styles.statsRow}>
        <div className={styles.statsColumn}>
          <PassingStats data={playerData.passingStats} />
        </div>
        <div className={styles.statsColumn}>
          <DefendingStats data={playerData.defendingStats} />
        </div>
      </div>

      <div className={styles.fullWidth}>
        <ShootingStats data={playerData.shootingStats} />
      </div>

      <div className={styles.fullWidth}>
        <AttributeSummary data={playerData.attributeSummary} />
      </div>

      <footer className={styles.footer}>
        <p>www.stepoutplay.com</p>
      </footer>
    </div>
  );
};

export default PlayerReport;