import React from 'react';
import { Button } from '@mui/material';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export default function PdfButton({ targetRef, slope, m, b }) {
  const downloadPdf = async () => {
    if (!targetRef?.current) return;
    const node = targetRef.current;

    // Use html2canvas to render the node to a canvas
    const canvas = await html2canvas(node, { scale: 2, backgroundColor: '#ffffff' });
    const imgData = canvas.toDataURL('image/png');

    const pdf = new jsPDF({ orientation: 'portrait', unit: 'pt', format: 'a4' });

    // Title and text
    pdf.setFont('helvetica', 'bold');
    pdf.setFontSize(18);
    pdf.text('Compound Mitre Calculator – Results', 40, 50);

    pdf.setFont('helvetica', 'normal');
    pdf.setFontSize(12);
    pdf.text(`Slope (S) = ${slope.toFixed(1)}°`, 40, 80);
    pdf.text(`Mitre (M) = ${m.toFixed(1)}°`, 40, 100);
    pdf.text(`Bevel (B) = ${b.toFixed(1)}°`, 40, 120);

    pdf.text('Formulas:', 40, 150);
    pdf.text('M = atan( sin(C/2) / tan(S) )', 40, 168);
    pdf.text('B = asin( cos(C/2) * cos(S) )', 40, 186);
    pdf.text('C = 90°', 40, 204);

    // Add snapshot of diagrams/results container below
    const pageWidth = pdf.internal.pageSize.getWidth();
    const margin = 40;
    const maxWidth = pageWidth - margin * 2;

    const imgWidth = maxWidth;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    pdf.addImage(imgData, 'PNG', margin, 230, imgWidth, imgHeight);

    const filename = `compound_angle_S${Math.round(slope)}.pdf`;
    pdf.save(filename);
  };

  return (
    <Button variant="contained" color="primary" onClick={downloadPdf} sx={{ borderRadius: 2 }}>
      Download PDF
    </Button>
  );
}
