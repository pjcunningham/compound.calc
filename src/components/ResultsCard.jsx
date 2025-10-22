import React from 'react';
import { Card, CardContent, Typography, Stack } from '@mui/material';

export default function ResultsCard({ m, b }) {
  return (
    <Card sx={{ borderRadius: 2, boxShadow: 1 }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Calculated Angles
        </Typography>
        <Stack direction={{ xs: 'column', sm: 'row' }} gap={3}>
          <Stack>
            <Typography variant="overline" color="info.main">Mitre (M)</Typography>
            <Typography variant="h4" color="info.main">{m.toFixed(1)}°</Typography>
          </Stack>
          <Stack>
            <Typography variant="overline" color="error.main">Bevel (B)</Typography>
            <Typography variant="h4" color="error.main">{b.toFixed(1)}°</Typography>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}
