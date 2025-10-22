import React from 'react';
import { Box, Slider, TextField, Typography, Tooltip } from '@mui/material';

export default function ControlsPanel({ slope, setSlope, isOutOfRange }) {
  const handleSlider = (_, val) => setSlope(val);
  const handleInput = (e) => setSlope(e.target.value);

  return (
    <Box p={2} sx={{ backgroundColor: 'white', borderRadius: 2, boxShadow: 1 }}>
      <Typography variant="h5" gutterBottom>Input</Typography>
      <Box display="flex" alignItems="center" gap={2}>
        <Box flex={1}>
          <Slider
            value={Number(slope)}
            min={0}
            max={45}
            step={0.1}
            onChange={handleSlider}
            aria-label="Slope (S)"
            valueLabelDisplay="auto"
          />
        </Box>
        <Tooltip title={isOutOfRange ? 'Slope must be between 0° and 45°' : ''} open={isOutOfRange}>
          <TextField
            label="Slope (S°)"
            type="number"
            value={slope}
            inputProps={{ min: 0, max: 45, step: 0.1 }}
            onChange={handleInput}
            error={isOutOfRange}
            helperText={isOutOfRange ? '0°–45°' : ' '}
            sx={{ width: 140 }}
          />
        </Tooltip>
      </Box>
    </Box>
  );
}
