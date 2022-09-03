// created using `canvas-sketch sketch-01.js --new`
// save files to output dir using command `canvas-sketch sketch-01.js --output=output/01`
const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [600, 600]
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);

    // Make a grid of rectangles with some outlined
    const w = 60;
    const h = 60;
    const gap = 20;
    let x, y;
    let grid = 5;

    for (let i = 0; i < grid; i++) {
      for (let j = 0; j < grid; j++) {
        x = 100 + (w + gap) * i;
        y = 100 + (h + gap) * j;

        context.beginPath();
        context.rect(x, y, w, h);
        context.stroke();

        if (Math.random() < 0.5) {
          context.beginPath();
          context.rect(x + 8, y + 8, w - 16, h - 16);
          context.stroke();
        }
      }
    }
  };
};

canvasSketch(sketch, settings);
