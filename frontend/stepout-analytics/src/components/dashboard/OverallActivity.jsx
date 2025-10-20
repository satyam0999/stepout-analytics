import HeatmapGrid from '../visualizations/HeatmapGrid';
import styles from './OverallActivity.module.css';

const OverallActivity = ({ passingActivity, shootingActivity, defendingActivity }) => {
  return (
    <section className={styles.overallActivity}>
      <div className={styles.activityGroup}>
        <h3 className={styles.title}>OVERALL PASSING ACTIVITY</h3>
        <div className={styles.vizContainer}>
          <HeatmapGrid data={passingActivity.heatmapData} width={300} height={180} />
        </div>
      </div>

      <div className={styles.activityGroup}>
        <h3 className={styles.title}>OVERALL SHOOTING ACTIVITY</h3>
        <div className={styles.vizContainer}>
          <HeatmapGrid data={shootingActivity.heatmapData} width={300} height={180} />
        </div>
      </div>

      <div className={styles.activityGroup}>
        <h3 className={styles.title}>OVERALL DEFENDING ACTIVITY</h3>
        <div className={styles.vizContainer}>
          <HeatmapGrid data={defendingActivity.heatmapData} width={300} height={180} />
        </div>
      </div>
    </section>
  );
};

export default OverallActivity;