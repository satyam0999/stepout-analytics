import { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import styles from './VectorMap.module.css';

const VectorMap = ({ vectors, width = 450, height = 300 }) => {
  const svgRef = useRef();

  useEffect(() => {
    if (!vectors || vectors.length === 0) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove();

    const margin = { top: 10, right: 10, bottom: 10, left: 10 };
    const gridWidth = width - margin.left - margin.right;
    const gridHeight = height - margin.top - margin.bottom;

    const g = svg.append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    // Soccer field background
    g.append('rect')
      .attr('width', gridWidth)
      .attr('height', gridHeight)
      .attr('fill', '#2563eb')
      .attr('rx', 4);

    // Field borders
    g.append('rect')
      .attr('width', gridWidth)
      .attr('height', gridHeight)
      .attr('fill', 'none')
      .attr('stroke', '#fff')
      .attr('stroke-width', 2)
      .attr('rx', 4);

    // Center line
    g.append('line')
      .attr('x1', gridWidth / 2)
      .attr('y1', 0)
      .attr('x2', gridWidth / 2)
      .attr('y2', gridHeight)
      .attr('stroke', '#fff')
      .attr('stroke-width', 2);

    // Center circle
    const centerCircleRadius = Math.min(gridWidth, gridHeight) * 0.15;
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

    // Define arrowhead markers for success (green)
    svg.append('defs')
      .append('marker')
      .attr('id', 'arrowhead-success')
      .attr('markerWidth', 6)
      .attr('markerHeight', 6)
      .attr('refX', 5)
      .attr('refY', 3)
      .attr('orient', 'auto')
      .append('polygon')
      .attr('points', '0 0, 6 3, 0 6')
      .attr('fill', '#22c55e');

    // Define arrowhead markers for fail (red)
    svg.append('defs')
      .append('marker')
      .attr('id', 'arrowhead-fail')
      .attr('markerWidth', 6)
      .attr('markerHeight', 6)
      .attr('refX', 5)
      .attr('refY', 3)
      .attr('orient', 'auto')
      .append('polygon')
      .attr('points', '0 0, 6 3, 0 6')
      .attr('fill', '#ef4444');

    // Scale vectors to fit field
    const scaleX = d3.scaleLinear()
      .domain([0, 450])
      .range([0, gridWidth]);

    const scaleY = d3.scaleLinear()
      .domain([0, 300])
      .range([0, gridHeight]);

    // Draw arrows
    vectors.forEach(({ x, y, direction, intensity, success }) => {
      const startX = scaleX(x);
      const startY = scaleY(y);
      
      // Arrow length based on intensity (shorter arrows)
      const length = intensity * 40; // Fixed reasonable length
      const radians = (direction * Math.PI) / 180;
      const endX = startX + Math.cos(radians) * length;
      const endY = startY + Math.sin(radians) * length;

      // Determine color based on success flag (if not provided, use intensity)
      const isSuccess = success !== undefined ? success : intensity > 0.6;
      const color = isSuccess ? '#22c55e' : '#ef4444';
      const markerUrl = isSuccess ? 'url(#arrowhead-success)' : 'url(#arrowhead-fail)';

      // Draw arrow line
      g.append('line')
        .attr('x1', startX)
        .attr('y1', startY)
        .attr('x2', endX)
        .attr('y2', endY)
        .attr('stroke', color)
        .attr('stroke-width', 3)
        .attr('marker-end', markerUrl)
        .attr('opacity', 0.9);
    });

  }, [vectors, width, height]);

  return (
    <div className={styles.vectorMapContainer}>
      <svg 
        ref={svgRef} 
        width={width} 
        height={height}
        className={styles.vectorMap}
      />
      <div className={styles.legend}>
        <div className={styles.legendItem}>
          <div className={styles.legendColorSuccess}></div>
          <span className ={styles.legendName}>Success</span>
        </div>
        <div className={styles.legendItem}>
          <div className={styles.legendColorFail}></div>
          <span className ={styles.legendName}>Fail</span>
        </div>
      </div>
    </div>
  );
};

export default VectorMap;