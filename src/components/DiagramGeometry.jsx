import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

export default function DiagramGeometry({ slope }) {
  const width = 360;
  const height = 220;

  // Draw vertical line and a sloped line representing S from vertical
  const centerX = 80;
  const baseY = height - 30;
  const length = 150;
  const rad = (slope * Math.PI) / 180;
  // S is measured from vertical; vertical line up, sloped line leaning right by S
  const vertX = centerX;
  const vertY2 = baseY - length;
  const slopeEndX = centerX + Math.sin(rad) * length;
  const slopeEndY = baseY - Math.cos(rad) * length;

  return (
    <Card sx={{ borderRadius: 2, boxShadow: 1 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Geometry View
        </Typography>
        <svg width="100%" height={height} viewBox={`0 0 ${width} ${height}`}>
          <defs>
            <marker id="arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
              <polygon points="0 0, 6 3, 0 6" fill="#1d3557" />
            </marker>
          </defs>
          <rect x="0" y="0" width={width} height={height} fill="#ffffff" rx="8" />

          {/* Base line */}
          <line x1="20" y1={baseY} x2={width - 20} y2={baseY} stroke="#ccc" strokeWidth="2" />

          {/* Vertical reference */}
          <line x1={vertX} y1={baseY} x2={vertX} y2={vertY2} stroke="#1d3557" strokeWidth="4" />
          <text x={vertX - 10} y={vertY2 - 6} className="svg-label">Vertical</text>

          {/* Sloped wall */}
          <line x1={centerX} y1={baseY} x2={slopeEndX} y2={slopeEndY} stroke="#e63946" strokeWidth="4" />
          <text x={slopeEndX + 5} y={slopeEndY} className="svg-label">Slope</text>

          {/* Angle arc S (from vertical to slope) */}
          <path
            d={`M ${centerX} ${baseY - 50} A 50 50 0 0 1 ${centerX + Math.sin(rad) * 50} ${baseY - Math.cos(rad) * 50}`}
            fill="none"
            stroke="#0066cc"
            strokeWidth="2"
            markerEnd="url(#arrow)"
          />
          <text x={centerX + 8} y={baseY - 28} className="svg-label">S = {slope.toFixed(1)}°</text>
        </svg>
      </CardContent>
    </Card>
  );
}
