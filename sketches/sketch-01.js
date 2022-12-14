// created using `canvas-sketch sketch-01.js --new`
// save files to output dir using command `canvas-sketch sketch-01.js --output=output/01`
const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [1080, 1080]
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);
    context.lineWidth = width * 0.01;

    // Make a grid of rectangles with some outlined
    const w = width * 0.10;
    const h = height * 0.10;
    const gap = width * 0.03;
    const init_x = width * 0.17;
    const init_y = height * 0.17;

    const offset = width * 0.02;

    let x, y;
    let grid = 5;

    for (let i = 0; i < grid; i++) {
      for (let j = 0; j < grid; j++) {
        x = init_x + (w + gap) * i;
        y = init_y + (h + gap) * j;

        context.beginPath();
        context.rect(x, y, w, h);
        context.stroke();

        if (Math.random() < 0.5) {
          context.beginPath();
          context.rect(x + offset / 2, y + offset / 2, w - offset, h - offset);
          context.stroke();
        }
      }
    }
  };
};

// TODO: change background color & line color
// TODO: See what else is available with the package: https://github.com/mattdesl/canvas-sketch
canvasSketch(sketch, settings);
