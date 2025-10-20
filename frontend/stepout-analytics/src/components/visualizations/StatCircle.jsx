import { PieChart, Pie, Cell } from 'recharts';
import styles from './StatCircle.module.css';

const StatCircle = ({ label, current, total, color }) => {
  const percentage = Math.round((current / total) * 100);

  const data = [
    { value: current, name: 'completed' },
    { value: total - current, name: 'remaining' }
  ];

  return (
    <div className={styles.statCircle}>
      <div className={styles.chartContainer}>
        <PieChart width={100} height={100}>
          <Pie
            data={data}
            cx={50}
            cy={50}
            startAngle={90}
            endAngle={-270}
            innerRadius={34}
            outerRadius={44}
            paddingAngle={0}
            dataKey="value"
          >
            <Cell fill={color} />
            <Cell fill="rgba(255, 255, 255, 0.1)" />
          </Pie>
        </PieChart>
        <div className={styles.centerText}>
          <span className={styles.fraction}>{current}/{total}</span>
        </div>
      </div>
      <p className={styles.label}>{label}</p>
    </div>
  );
};

export default StatCircle;