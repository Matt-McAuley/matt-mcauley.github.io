---
layout: page
permalink: /resume/
title: Resume
description:
nav: true
nav_order: 2
---

<div>
    <div style="background-color: rgba(0,0,0,0.66); display: flex; flex-direction: column; justify-content: center; align-items: center; height: 100vh; margin: 0; padding-bottom: 20px;">
      <canvas id="pdf-canvas" style="border: 2px solid white; box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);"></canvas>
    </div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.3.122/pdf.min.js"></script>
    <script>
      const url = '../assets/pdf/Matthew_McAuley_Resume.pdf';
    
      // Load the PDF
      pdfjsLib.getDocument(url).promise.then(function(pdf) {
        // Fetch the first page
        pdf.getPage(1).then(function(page) {
          const viewport = page.getViewport({ scale: 1.5 });
          const canvas = document.getElementById('pdf-canvas');
          const context = canvas.getContext('2d');
    
          // Adjust canvas size to match the PDF page
          canvas.width = viewport.width;
          canvas.height = viewport.height;
    
          // Render the page onto the canvas
          page.render({ canvasContext: context, viewport: viewport });
        });
      });
    </script>
</div>