import { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import styles from './DistributionMap.module.css';

const DistributionMap = ({ distribution, width = 450, height = 300 }) => {
  const svgRef = useRef();

  useEffect(() => {
    if (!distribution) return;

    const { leftThird, centerThird, rightThird } = distribution;
    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove();

    const margin = { top: 10, right: 10, bottom: 10, left: 10 };
    const gridWidth = width - margin.left - margin.right;
    const gridHeight = height - margin.top - margin.bottom;

    const g = svg.append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    // Colors for the three sections
    const colors = {
      left: '#ff6b9d',      // Pink/Red - Final/Attacking
      center: '#fbbf24',     // Yellow - Middle
      right: '#fb923c'       // Orange - Defensive
    };

    const sectionWidth = gridWidth / 3;

    // Background for entire field
    g.append('rect')
      .attr('width', gridWidth)
      .attr('height', gridHeight)
      .attr('fill', '#2563eb')
      .attr('rx', 4);

    // Left section (Final/Attacking third)
    g.append('rect')
      .attr('x', 0)
      .attr('y', 0)
      .attr('width', sectionWidth)
      .attr('height', gridHeight)
      .attr('fill', colors.left)
      .attr('opacity', 0.85);

    // Center section (Middle third)
    g.append('rect')
      .attr('x', sectionWidth)
      .attr('y', 0)
      .attr('width', sectionWidth)
      .attr('height', gridHeight)
      .attr('fill', colors.center)
      .attr('opacity', 0.85);

    // Right section (Defensive third)
    g.append('rect')
      .attr('x', sectionWidth * 2)
      .attr('y', 0)
      .attr('width', sectionWidth)
      .attr('height', gridHeight)
      .attr('fill', colors.right)
      .attr('opacity', 0.85);

    // Field borders
    g.append('rect')
      .attr('width', gridWidth)
      .attr('height', gridHeight)
      .attr('fill', 'none')
      .attr('stroke', '#fff')
      .attr('stroke-width', 2)
      .attr('rx', 4);

    // Vertical dividing lines
    g.append('line')
      .attr('x1', sectionWidth)
      .attr('y1', 0)
      .attr('x2', sectionWidth)
      .attr('y2', gridHeight)
      .attr('stroke', '#fff')
      .attr('stroke-width', 2);

    g.append('line')
      .attr('x1', sectionWidth * 2)
      .attr('y1', 0)
      .attr('x2', sectionWidth * 2)
      .attr('y2', gridHeight)
      .attr('stroke', '#fff')
      .attr('stroke-width', 2);

    // Center circle
    const centerCircleRadius = Math.min(gridWidth, gridHeight) * 0.12;
    g.append('circle')
      .attr('cx', gridWidth / 2)
      .attr('cy', gridHeight / 2)
      .attr('r', centerCircleRadius)
      .attr('fill', 'none')
      .attr('stroke', '#fff')
      .attr('stroke-width', 2);

    // Center dot
    g.append('circle')
      .attr('cx', gridWidth / 2)
      .attr('cy', gridHeight / 2)
      .attr('r', 3)
      .attr('fill', '#fff');

    // Left penalty box
    const penaltyBoxWidth = gridWidth * 0.12;
    const penaltyBoxHeight = gridHeight * 0.55;
    g.append('rect')
      .attr('x', 0)
      .attr('y', (gridHeight - penaltyBoxHeight) / 2)
      .attr('width', penaltyBoxWidth)
      .attr('height', penaltyBoxHeight)
      .attr('fill', 'none')
      .attr('stroke', '#fff')
      .attr('stroke-width', 2);

    // Right penalty box
    g.append('rect')
      .attr('x', gridWidth - penaltyBoxWidth)
      .attr('y', (gridHeight - penaltyBoxHeight) / 2)
      .attr('width', penaltyBoxWidth)
      .attr('height', penaltyBoxHeight)
      .attr('fill', 'none')
      .attr('stroke', '#fff')
      .attr('stroke-width', 2);

    // Left goal box
    const goalBoxWidth = gridWidth * 0.05;
    const goalBoxHeight = gridHeight * 0.28;
    g.append('rect')
      .attr('x', 0)
      .attr('y', (gridHeight - goalBoxHeight) / 2)
      .attr('width', goalBoxWidth)
      .attr('height', goalBoxHeight)
      .attr('fill', 'none')
      .attr('stroke', '#fff')
      .attr('stroke-width', 2);

    // Right goal box
    g.append('rect')
      .attr('x', gridWidth - goalBoxWidth)
      .attr('y', (gridHeight - goalBoxHeight) / 2)
      .attr('width', goalBoxWidth)
      .attr('height', goalBoxHeight)
      .attr('fill', 'none')
      .attr('stroke', '#fff')
      .attr('stroke-width', 2);

    // Add percentage text to each section
    const textY = gridHeight - 30;
    const fontSize = 18;

    // Left text
    g.append('text')
      .attr('x', sectionWidth / 2)
      .attr('y', textY)
      .attr('text-anchor', 'middle')
      .attr('fill', '#1e293b')
      .attr('font-size', fontSize)
      .attr('font-weight', 'bold')
      .text(String(leftThird).padStart(2, '0'));

    // Center text
    g.append('text')
      .attr('x', sectionWidth + sectionWidth / 2)
      .attr('y', textY)
      .attr('text-anchor', 'middle')
      .attr('fill', '#1e293b')
      .attr('font-size', fontSize)
      .attr('font-weight', 'bold')
      .text(String(centerThird).padStart(2, '0'));

    // Right text
    g.append('text')
      .attr('x', sectionWidth * 2 + sectionWidth / 2)
      .attr('y', textY)
      .attr('text-anchor', 'middle')
      .attr('fill', '#1e293b')
      .attr('font-size', fontSize)
      .attr('font-weight', 'bold')
      .text(String(rightThird).padStart(2, '0'));

  }, [distribution, width, height]);

  return (
    <div className={styles.distributionMapContainer}>
      <svg 
        ref={svgRef} 
        width={width} 
        height={height}
        className={styles.distributionMap}
      />
      <div className={styles.legend}>
        <div className={styles.legendItem}>
          <div className={styles.legendColorFinal}></div>
          <span className={styles.legendNames}>Final</span>
        </div>
        <div className={styles.legendItem}>
          <div className={styles.legendColorMiddle}></div>
          <span className={styles.legendNames}>Middle</span>
        </div>
        <div className={styles.legendItem}>
          <div className={styles.legendColorDefensive}></div>
          <span className={styles.legendNames}>Defensive</span>
        </div>
      </div>
    </div>
  );
};

export default DistributionMap;