# Compound Angle Calculator (React + MUI)

A responsive Single Page Application that computes and visualizes compound mitre and bevel angles for woodworking and joinery tasks. Enter a wall slope (S) and the app instantly calculates the saw settings and renders two helpful diagrams. You can also export a workshop-ready PDF containing your inputs, results, and diagrams.


## What it does
- Input the wall slope S (in degrees, measured from vertical) using a slider or numeric field.
- See the calculated angles:
  - Mitre (M): saw turntable rotation
  - Bevel (B): saw blade tilt
- View two dynamic SVG diagrams:
  - Geometry View: shows the wall slope vs. vertical reference
  - Saw Setup View: shows mitre rotation and blade tilt
- Export a PDF report with values, formulas, and both diagrams.


## Formulas
- Constants: C = 90° (right-angle corner)
- Mitre (M): M = atan( sin(C/2) / tan(S) )
- Bevel (B): B = asin( cos(C/2) * cos(S) )
- All displayed values are rounded to one decimal place.

Example for S = 18°:
- M ≈ 65.4°
- B ≈ 42.4°


## Tech stack
- React 18 (Vite SPA)
- MUI (Material UI)
- jsPDF + html2canvas for PDF export
- pnpm as the package manager


## Getting started
1) Install dependencies

   pnpm install

2) Run the dev server

   pnpm dev

   Then open the printed localhost URL.

3) Build for production (optional)

   pnpm build


## Project structure (key files)
- /.docs/PRD.md – Product Requirements Document
- /src/app/App.jsx – Main page composition
- /src/hooks/useCalculator.js – State, validation, and live calculations
- /src/utils/math.js – Core trigonometry
- /src/components/* – Controls, results, diagrams, and PDF button


## PDF export
- Click "Download PDF" to generate a report that includes:
  - Input S and computed M, B
  - Both diagrams (Geometry + Saw Setup)
  - The formulas listed above
- Files are named like: compound_angle_S18.pdf


## Notes
- Input range: 0°–45°. Values outside will be clamped/flagged by the UI.
- Designed with a workshop-friendly theme (clear colors, high contrast).


## Troubleshooting
- If the dev server fails to start with a plugin error, run:

  pnpm install

  The project uses Vite with @vitejs/plugin-react; ensure dependencies are installed.


## License
This project is provided as-is for demonstration and educational purposes.
