import { useMemo, useState } from 'react';
import { clampSlope, computeMitreBevel } from '../utils/math.js';

export default function useCalculator(initialS = 18) {
  const [slope, setSlope] = useState(clampSlope(initialS));

  const { m, b } = useMemo(() => computeMitreBevel(slope || 0.0001), [slope]);

  const setSlopeSafe = (val) => {
    const n = Number(val);
    if (Number.isNaN(n)) {
      setSlope(0);
      return;
    }
    setSlope(clampSlope(n));
  };

  const isOutOfRange = slope < 0 || slope > 45;

  return { slope, setSlope: setSlopeSafe, m, b, isOutOfRange };
}
