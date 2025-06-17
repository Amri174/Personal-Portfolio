import React, { useRef, useEffect } from 'react';

const ROWS = 200;
const COLS = 400;
const NUM_PARTICLES = ROWS * COLS;
const THICKNESS = Math.pow(180, 2);
const SPACING = 10;
const MARGIN = -50;
const COLOR = 220;
const DRAG = 0.8;
const EASE = 0.5;

export const ParticlesBackground = () => {
  const canvasRef = useRef(null);
  const particles = useRef(
    Array.from({ length: NUM_PARTICLES }, () => ({
      vx: 0,
      vy: 0,
      x: 0,
      y: 0,
      ox: 0,
      oy: 0
    }))
  );

  const mouse = useRef({ x: 0, y: 0 });
  const mouseActive = useRef(false);
  const animationFrameId = useRef();
  const lastTime = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let w, h;

    const init = () => {
      w = canvas.width = COLS * SPACING + MARGIN * 2;
      h = canvas.height = ROWS * SPACING + MARGIN * 2;
      
      particles.current.forEach((p, i) => {
        p.x = p.ox = MARGIN + SPACING * (i % COLS);
        p.y = p.oy = MARGIN + SPACING * Math.floor(i / COLS);
      });
    };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.current.x = e.clientX - rect.left;
      mouse.current.y = e.clientY - rect.top;
      mouseActive.current = true;
    };

    const step = (timestamp) => {
      const delta = (timestamp - lastTime.current) / 16.67;
      lastTime.current = timestamp;

      // Update physics
      if (!mouseActive.current) {
        const t = timestamp * 0.001;
        mouse.current.x = w/2 + (Math.cos(t*2.1) * Math.cos(t*0.9) * w*0.45);
        mouse.current.y = h/2 + (Math.sin(t*3.2) * Math.tan(Math.sin(t*0.8)) * h*0.45);
      }

      particles.current.forEach(p => {
        const dx = mouse.current.x - p.x;
        const dy = mouse.current.y - p.y;
        const distSq = dx * dx + dy * dy;

        if (distSq < THICKNESS && distSq > 0) {
          const force = THICKNESS / (distSq + 1);
          const angle = Math.atan2(dy, dx);
          p.vx += force * Math.cos(angle) * delta;
          p.vy += force * Math.sin(angle) * delta;
        }

        p.vx *= Math.pow(DRAG, delta);
        p.vy *= Math.pow(DRAG, delta);
        p.x += p.vx + (p.ox - p.x) * EASE * delta;
        p.y += p.vy + (p.oy - p.y) * EASE * delta;
      });

      // Render
      const imageData = ctx.createImageData(w, h);
      const data = imageData.data;
      data.fill(0);

      particles.current.forEach(p => {
        const x = Math.round(p.x);
        const y = Math.round(p.y);
        
        if (x >= 0 && x < w && y >= 0 && y < h) {
          const n = (x + y * w) * 4;
          if(n < data.length - 4) {
            data[n] = COLOR;
            data[n+1] = COLOR;
            data[n+2] = COLOR;
            data[n+3] = 255;
          }
        }
      });

      ctx.putImageData(imageData, 0, 0);
      animationFrameId.current = requestAnimationFrame(step);
    };

    init();
    canvas.addEventListener('mousemove', handleMouseMove);
    animationFrameId.current = requestAnimationFrame(step);

    return () => {
      canvas.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId.current);
    };
  }, []);

  return (
    <canvas ref={canvasRef} style={{
      position: 'absolute',
      top: 0,
      left: 0,
      zIndex: 0,
      pointerEvents: 'none'
    }} />
  );
};
