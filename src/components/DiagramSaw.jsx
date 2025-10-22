import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

export default function DiagramSaw({ m, b }) {
  const width = 360;
  const height = 220;

  // Saw table as horizontal, mitre rotation M, blade tilt B
  const baseY = height - 40;
  const tableX1 = 20;
  const tableX2 = width - 20;

  const mRad = (m * Math.PI) / 180;
  const bRad = (b * Math.PI) / 180;

  // Mitre rotation shown as an angled fence/guide from center
  const centerX = width / 2;
  const guideLen = 80;
  const guideX = centerX + Math.cos(mRad) * guideLen;
  const guideY = baseY - Math.sin(mRad) * guideLen;

  // Blade tilt drawn as a line leaning by B from vertical near right side
  const bladeBaseX = width - 80;
  const bladeLen = 110;
  const bladeTopX = bladeBaseX + Math.sin(bRad) * bladeLen;
  const bladeTopY = baseY - Math.cos(bRad) * bladeLen;

  return (
    <Card sx={{ borderRadius: 2, boxShadow: 1 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Saw Setup View
        </Typography>
        <svg width="100%" height={height} viewBox={`0 0 ${width} ${height}`}>
          <rect x="0" y="0" width={width} height={height} fill="#ffffff" rx="8" />

          {/* Table */}
          <line x1={tableX1} y1={baseY} x2={tableX2} y2={baseY} stroke="#777" strokeWidth="4" />

          {/* Mitre guide */}
          <line x1={centerX} y1={baseY} x2={guideX} y2={guideY} stroke="#1d3557" strokeWidth="4" />
          <text x={centerX + 6} y={baseY - 10} className="svg-label">M = {m.toFixed(1)}°</text>

          {/* Blade tilt */}
          <line x1={bladeBaseX} y1={baseY} x2={bladeTopX} y2={bladeTopY} stroke="#e63946" strokeWidth="4" />
          <text x={bladeTopX + 6} y={bladeTopY} className="svg-label">B = {b.toFixed(1)}°</text>
        </svg>
      </CardContent>
    </Card>
  );
}
