import HeatmapGrid from '../visualizations/HeatmapGrid';
import VectorMap from '../visualizations/VectorMap';
import DistributionMap from '../visualizations/DistributionMap';
import styles from './ShootingStats.module.css';

const ShootingStats = ({ data }) => {
  return (
    <section className={styles.shootingStats}>
      
      <div className={styles.shootingStatsButton}>
        <button className={styles.button}>SHOOTING STATS</button>
      </div>
      
      <div className={styles.statsGrid}>
        <div className={styles.vizCard}>
          <h4 className={styles.vizTitle}>LONG SHOT ACTIVITY</h4>
          <HeatmapGrid 
            data={data.longShot.activity} 
            width={200}
            height={140}
            showLabels={true}
          />
        </div>

        <div className={styles.vizCard}>
          <h4 className={styles.vizTitle}>LONG SHOT VECTOR MAP</h4>
          <VectorMap 
            vectors={data.longShot.vector} 
            width={200}
            height={140}
          />
        </div>

        <div className={styles.vizCard}>
          <h4 className={styles.vizTitle}>LONG SHOT THIRD DISTRIBUTION MAP</h4>
          <DistributionMap 
            distribution={data.longShot.distribution} 
            width={200}
            height={140}
          />
        </div>

        <div className={styles.vizCard}>
          <h4 className={styles.vizTitle}>CLOSE SHOT VECTOR MAP</h4>
          <VectorMap 
            vectors={data.closeShot.vector} 
            width={200}
            height={140}
          />
        </div>

        <div className={styles.vizCard}>
          <h4 className={styles.vizTitle}>CLOSE SHOT THIRD DISTRIBUTION MAP</h4>
          <DistributionMap 
            distribution={data.closeShot.distribution} 
            width={200}
            height={140}
          />
        </div>

        <div className={styles.vizCard}>
          <h4 className={styles.vizTitle}>CLOSE SHOT ACTIVITY</h4>
          <HeatmapGrid 
            data={data.closeShot.activity} 
            width={200}
            height={140}
            showLabels={true}
          />
        </div>
      </div>
    </section>
  );
};

export default ShootingStats;