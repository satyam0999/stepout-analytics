import { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import styles from './HeatmapGrid.module.css';

const HeatmapGrid = ({ data, width =450, height = 300, showLabels = true }) => {
  const svgRef = useRef();

  useEffect(() => {
    if (!data || data.length === 0) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove();

    const gradientBarWidth = 12;  
    const gradientBarGap = 8;
    const labelSpace = 20;
    const margin = { 
      top: labelSpace, 
      right: gradientBarWidth + gradientBarGap + 5, 
      bottom: labelSpace, 
      left: 5 
    };
    const gridWidth = width - margin.left - margin.right - gradientBarWidth - gradientBarGap;
    const gridHeight = height - margin.top - margin.bottom;

    const g = svg.append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    // Soccer field background
    g.append('rect')
      .attr('width', gridWidth)
      .attr('height', gridHeight)
      .attr('fill', '#1e3a8a')
      .attr('stroke', '#fff')
      .attr('stroke-width', 2);

    // Center line (vertical)
    g.append('line')
      .attr('x1', gridWidth / 2)
      .attr('y1', 0)
      .attr('x2', gridWidth / 2)
      .attr('y2', gridHeight)
      .attr('stroke', '#fff')
      .attr('stroke-width', 1);

    // Center circle
    g.append('circle')
      .attr('cx', gridWidth / 2)
      .attr('cy', gridHeight / 2)
      .attr('r', Math.min(gridWidth, gridHeight) * 0.12)
      .attr('fill', 'none')
      .attr('stroke', '#fff')
      .attr('stroke-width', 1);

    // Penalty boxes
    const penaltyBoxWidth = gridWidth * 0.15;
    const penaltyBoxHeight = gridHeight * 0.6;

    // Left penalty box
    g.append('rect')
      .attr('x', 0)
      .attr('y', (gridHeight - penaltyBoxHeight) / 2)
      .attr('width', penaltyBoxWidth)
      .attr('height', penaltyBoxHeight)
      .attr('fill', 'none')
      .attr('stroke', '#fff')
      .attr('stroke-width', 1);

    // Right penalty box
    g.append('rect')
      .attr('x', gridWidth - penaltyBoxWidth)
      .attr('y', (gridHeight - penaltyBoxHeight) / 2)
      .attr('width', penaltyBoxWidth)
      .attr('height', penaltyBoxHeight)
      .attr('fill', 'none')
      .attr('stroke', '#fff')
      .attr('stroke-width', 1);

    // Heatmap cells
    const rows = data.length;
    const cols = data[0].length;
    const cellWidth = gridWidth / cols;
    const cellHeight = gridHeight / rows;

    // Color scale
    const maxValue = Math.max(20, d3.max(data.flat()));
    const colorScale = d3.scaleLinear()
      .domain([0, maxValue * 0.4, maxValue * 0.7, maxValue])
      .range(['#1e3a8a', '#10b981', '#86efac', '#fbbf24']);

    data.forEach((row, rowIndex) => {
      row.forEach((value, colIndex) => {
        if (value === 0) return;

        g.append('rect')
          .attr('x', colIndex * cellWidth)
          .attr('y', rowIndex * cellHeight)
          .attr('width', cellWidth)
          .attr('height', cellHeight)
          .attr('fill', colorScale(value))
          .attr('opacity', 0.75)
          .attr('stroke', 'rgba(255, 255, 255, 0.1)')
          .attr('stroke-width', 0.5);

        if (showLabels && value > 0) {
          g.append('text')
            .attr('x', colIndex * cellWidth + cellWidth / 2)
            .attr('y', rowIndex * cellHeight + cellHeight / 2)
            .attr('text-anchor', 'middle')
            .attr('dominant-baseline', 'middle')
            .attr('fill', '#fff')
            .attr('font-size', Math.min(cellWidth, cellHeight) * 0.5)
            .attr('font-weight', 'bold')
            .text(value < 10 ? `0${value}` : value);
        }
      });
    });

    // Create unique gradient ID (FIX: Store in variable)
    const gradientId = `heatmap-gradient-${Date.now()}`;
    
    // Create gradient definition
    const defs = svg.append('defs');
    const gradient = defs.append('linearGradient')
      .attr('id', gradientId)  
      .attr('x1', '0%')
      .attr('y1', '0%')
      .attr('x2', '0%')
      .attr('y2', '100%');

    gradient.append('stop')
      .attr('offset', '0%')
      .attr('stop-color', '#fbbf24');

    gradient.append('stop')
      .attr('offset', '50%')
      .attr('stop-color', '#10b981');

    gradient.append('stop')
      .attr('offset', '100%')
      .attr('stop-color', '#1e3a8a');

    // Position gradient bar
    const gradientX = gridWidth + gradientBarGap;
    
    // Draw gradient bar (FIX: Use the stored ID)
    g.append('rect')
      .attr('x', gradientX)
      .attr('y', 0)
      .attr('width', gradientBarWidth)
      .attr('height', gridHeight)
      .attr('fill', `url(#${gradientId})`)  // Use the stored ID
      .attr('stroke', '#94a3b8')
      .attr('stroke-width', 1)
      .attr('rx', 2);  // Slightly smaller radius for thinner bar

    // Add "High" label
    g.append('text')
      .attr('x', gradientX + gradientBarWidth / 2)
      .attr('y', -8)
      .attr('text-anchor', 'middle')
      .attr('fill', '#475569')
      .attr('font-size', 9)
      .attr('font-weight', '600')
      .text('High');

    // Add "Low" label
    g.append('text')
      .attr('x', gradientX + gradientBarWidth / 2)
      .attr('y', gridHeight + 12)
      .attr('text-anchor', 'middle')
      .attr('fill', '#475569')
      .attr('font-size', 9)
      .attr('font-weight', '600')
      .text('Low');

  }, [data, width, height, showLabels]);

  return (
    <svg 
      ref={svgRef} 
      width={width} 
      height={height}
      className={styles.heatmapGrid}
    />
  );
};

export default HeatmapGrid;