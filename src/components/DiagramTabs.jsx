import React, { useState } from 'react';
import { Box, Tabs, Tab } from '@mui/material';
import DiagramGeometry from './DiagramGeometry.jsx';
import DiagramSaw from './DiagramSaw.jsx';

export default function DiagramTabs({ slope, m, b }) {
  const [tab, setTab] = useState(0);

  return (
    <Box sx={{ backgroundColor: 'white', borderRadius: 2, boxShadow: 1 }}>
      <Tabs value={tab} onChange={(_, v) => setTab(v)} aria-label="Diagram Tabs" variant="fullWidth">
        <Tab label="Geometry View" />
        <Tab label="Saw Setup View" />
      </Tabs>
      <Box p={2}>
        {tab === 0 ? <DiagramGeometry slope={slope} /> : <DiagramSaw m={m} b={b} />}
      </Box>
    </Box>
  );
}
