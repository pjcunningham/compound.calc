import React, { useRef } from 'react';
import { Container, Grid2 as Grid, Typography, Box, Stack } from '@mui/material';
import useCalculator from '../hooks/useCalculator.js';
import ControlsPanel from '../components/ControlsPanel.jsx';
import ResultsCard from '../components/ResultsCard.jsx';
import DiagramTabs from '../components/DiagramTabs.jsx';
import DiagramGeometry from '../components/DiagramGeometry.jsx';
import DiagramSaw from '../components/DiagramSaw.jsx';
import PdfButton from '../components/PdfButton.jsx';

export default function App() {
  const { slope, setSlope, m, b, isOutOfRange } = useCalculator(18);
  const captureRef = useRef(null);

  return (
    <Box sx={{ minHeight: '100%', backgroundColor: 'background.default', py: { xs: 2, md: 4 } }}>
      <Container maxWidth="lg">
        <Typography variant="h3" gutterBottom color="text.primary">
          Compound Angle Calculator
        </Typography>

        <Grid container spacing={2}>
          {/* Left column: inputs and results */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Stack gap={2}>
              <ControlsPanel slope={slope} setSlope={setSlope} isOutOfRange={isOutOfRange} />
              <ResultsCard m={m} b={b} />
              <Box>
                <PdfButton targetRef={captureRef} slope={slope} m={m} b={b} />
              </Box>
            </Stack>
          </Grid>

          {/* Right column: diagrams (UI) and hidden capture area for PDF */}
          <Grid size={{ xs: 12, md: 7 }}>
            <DiagramTabs slope={slope} m={m} b={b} />
            {/* Hidden off-screen container that includes both diagrams for PDF capture */}
            <Box ref={captureRef} aria-hidden sx={{ position: 'absolute', left: -10000, top: 0, width: 760 }}>
              <Box sx={{ backgroundColor: 'white', borderRadius: 2, boxShadow: 1, p: 2 }}>
                <Typography variant="h6" gutterBottom>Results & Diagrams</Typography>
                <Typography variant="body2" sx={{ mb: 1 }}>
                  S = {slope.toFixed(1)}°, M = {m.toFixed(1)}°, B = {b.toFixed(1)}°
                </Typography>
                <Box sx={{ display: 'grid', gridTemplateColumns: '1fr', gap: 12 }}>
                  {/* Include both diagrams explicitly for PDF */}
                  {/** Using components directly ensures both are captured */}
                  <Box>
                    <Typography variant="subtitle1" gutterBottom>Geometry View</Typography>
                    <DiagramGeometry slope={slope} />
                  </Box>
                  <Box>
                    <Typography variant="subtitle1" gutterBottom>Saw Setup View</Typography>
                    <DiagramSaw m={m} b={b} />
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
