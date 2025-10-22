const toRad = d => (d * Math.PI) / 180;
const toDeg = r => (r * 180) / Math.PI;

export function computeMitreBevel(Sdeg) {
  const C = 90;
  const S = toRad(Sdeg);
  const halfC = toRad(C / 2);

  const M = Math.atan(Math.sin(halfC) / Math.tan(S));
  const B = Math.asin(Math.cos(halfC) * Math.cos(S));

  const round1 = x => Math.round(x * 10) / 10;

  return { m: round1(toDeg(M)), b: round1(toDeg(B)) };
}

export function clampSlope(s) {
  if (Number.isNaN(s)) return 0;
  if (s < 0) return 0;
  if (s > 45) return 45;
  return s;
}
