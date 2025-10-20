import styles from './AttributeSummary.module.css';

const AttributeSummary = ({ data }) => {
  return (
    <section className={styles.attributeSummary}>
      
      <div className={styles.summaryByAttributeButton}>
        <button className={styles.button}>STATS SUMMARY BY ATTRIBUTE</button>
      </div>
      
      <div className={styles.container}>
        <div className={styles.grid}>
          
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>PASSING</h3>
            <div className={styles.statsGrid}>
              <div className={styles.statPair}>
                <span className={styles.label}>SHORT PASS</span>
                <span className={styles.value}>{data.passing.shortPass}</span>
              </div>
              <div className={styles.statPair}>
                <span className={styles.label}>LONG PASS</span>
                <span className={styles.value}>{data.passing.longPass}</span>
              </div>
              <div className={styles.statPair}>
                <span className={styles.label}>THROUGH BALL</span>
                <span className={styles.value}>{data.passing.throughBall}</span>
              </div>
              <div className={styles.statPair}>
                <span className={styles.label}>CROSS</span>
                <span className={styles.value}>{data.passing.cross}</span>
              </div>
            </div>
          </div>

          <div className={styles.column}>
            <h3 className={styles.columnTitle}>SHOOTING</h3>
            <div className={styles.statsGrid}>
              <div className={styles.statPair}>
                <span className={styles.label}>CLOSE SHOT</span>
                <span className={styles.value}>{data.shooting.closeShot}</span>
              </div>
              <div className={styles.statPair}>
                <span className={styles.label}>LONG SHOT</span>
                <span className={styles.value}>{data.shooting.longShot}</span>
              </div>
            </div>
          </div>

          <div className={styles.column}>
            <h3 className={styles.columnTitle}>DEFENDING</h3>
            <div className={styles.statsGrid}>
              <div className={styles.statPair}>
                <span className={styles.label}>STANDING TACKLE</span>
                <span className={styles.value}>{data.defending.standingTackle}</span>
              </div>
              <div className={styles.statPair}>
                <span className={styles.label}>INTERCEPTION</span>
                <span className={styles.value}>{data.defending.interception}</span>
              </div>
              <div className={styles.statPair}>
                <span className={styles.label}>SLIDING TACKLE</span>
                <span className={styles.value}>{data.defending.slidingTackle}</span>
              </div>
              <div className={styles.statPair}>
                <span className={styles.label}>CLEARANCE</span>
                <span className={styles.value}>{data.defending.clearance}</span>
              </div>
            </div>
          </div>

          <div className={styles.column}>
            <h3 className={styles.columnTitle}>SPECIAL ACTIONS</h3>
            <div className={styles.statsGrid}>
              <div className={styles.statPair}>
                <span className={styles.label}>HAND BALL</span>
                <span className={styles.value}>{data.specialActions.handBall}</span>
              </div>
              <div className={styles.statPair}>
                <span className={styles.label}>OFF SIDE</span>
                <span className={styles.value}>{data.specialActions.offSide}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AttributeSummary;