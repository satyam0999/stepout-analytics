import HeatmapGrid from '../visualizations/HeatmapGrid';
import VectorMap from '../visualizations/VectorMap';
import DistributionMap from '../visualizations/DistributionMap';
import styles from './PassingStats.module.css';

const PassingStats = ({ data }) => {
  const statTypes = [
    { key: 'shortPass', label: 'SHORT PASS' },
    { key: 'longPass', label: 'LONG PASS' },
    { key: 'throughBall', label: 'THROUGH BALL' },
    { key: 'cross', label: 'CROSS' }
  ];

  return (
    <section className={styles.passingStats}>
      
      <div className={styles.passingStatsButton}>
        <button className={styles.button}>PASSING STATS</button>
      </div>
      
      <div className={styles.mainCard}>
        {statTypes.map(({ key, label }) => (
        <div key={key} className={styles.statRow}>
          <div className={styles.vizCard}>
            <h4 className={styles.vizTitle}>{label} ACTIVITY</h4>
            <HeatmapGrid 
              data={data[key].activity} 
              width={200}
              height={120}
              showLabels={true}
            />
          </div>

          <div className={styles.vizCard}>
            <h4 className={styles.vizTitle}>{label} VECTOR MAP</h4>
            <VectorMap 
              vectors={data[key].vector} 
              width={200}
              height={120}
            />
          </div>

          <div className={styles.vizCard}>
            <h4 className={styles.vizTitle}>{label} THIRD DISTRIBUTION MAP</h4>
            <DistributionMap 
              distribution={data[key].distribution} 
              width={200}
              height={120}
            />
          </div>
        </div>
        ))}
      </div>
      
    </section>
  );
};

export default PassingStats;