// Transformations
const math = require('canvas-sketch-util/math');
const random = require('canvas-sketch-util/random');
const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [1080, 1080]
};


const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);

    context.fillStyle = 'black';

    const cx = width * 0.5;
    const cy = height * 0.5;

    const w = width * 0.01;
    const h = height * 0.1;
    let x, y;

    const num = 40;
    const radius = width * 0.3;

    for (let i = 0; i < num; i++) {
      const slice = math.degToRad(360 / num)
      const angle = slice * i

      x = cx + radius * Math.sin(angle);
      y = cy + radius * Math.cos(angle);

      // Draw "clock ticks"
      context.save();
      context.translate(x, y);
      context.rotate(-angle);
      context.scale(random.range(1, 3), 1);

      context.beginPath();
      context.rect(-w * random.range(0.1, 0.5), -h * random.range(0.01, 0.10), w * random.range(0.5, 1), h * random.range(0.5, 2));
      context.fill();
      context.restore();

      // Draw circle
      context.save();
      context.translate(cx, cy);
      context.rotate(-angle);

      context.lineWidth = random.range(5, 20);

      context.beginPath();
      context.arc(0, 0, radius * random.range(0.7, 1.4), slice * random.range(1, -8), slice * random.range(1, 4));
      context.stroke();

      context.restore();
    }
  };
};

// TODO: Make a sunset, add colors
canvasSketch(sketch, settings);
