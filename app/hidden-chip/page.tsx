'use client';

import React, { useEffect, useRef, useState } from 'react';

const CPU_PATH = [
  "M 20 20",
  // Top
  "H 30 L 30 10 L 40 10 L 40 20", "H 50 L 50 10 L 60 10 L 60 20", "H 70 L 70 10 L 80 10 L 80 20", "H 90",
  // Right
  "V 30 L 100 30 L 100 40 L 90 40", "V 50 L 100 50 L 100 60 L 90 60", "V 70 L 100 70 L 100 80 L 90 80", "V 90",
  // Bottom
  "H 80 L 80 100 L 70 100 L 70 90", "H 60 L 60 100 L 50 100 L 50 90", "H 40 L 40 100 L 30 100 L 30 90", "H 20",
  // Left
  "V 80 L 10 80 L 10 70 L 20 70", "V 60 L 10 60 L 10 50 L 20 50", "V 40 L 10 40 L 10 30 L 20 30", "V 20",
  // Inner Hole
  "M 35 35 V 75 H 75 V 35 Z"
].join(" ");

const ENCODED_SVG = encodeURIComponent(
  `<svg viewBox="0 0 110 110" xmlns="http://www.w3.org/2000/svg"><path d="${CPU_PATH}"/></svg>`
);

export default function ChipLanding() {
  const [cursor, setCursor] = useState({ x: -9999, y: -9999 });
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setCursor({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };
    window.addEventListener('mousemove', updateCursor);
    return () => window.removeEventListener('mousemove', updateCursor);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const size = 600; 
    const dpr = window.devicePixelRatio || 1;
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    ctx.scale(dpr, dpr);

    const fontSize = 8; 
    const columns = Math.ceil(size / fontSize);
    const drops = new Array(columns).fill(1);

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, size, size);

      ctx.fillStyle = '#FF0000';
      ctx.font = `bold ${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = Math.random() > 0.5 ? '1' : '0';
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > size && Math.random() > 0.95) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 10);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-screen h-screen bg-black flex items-center justify-center overflow-hidden">
      
      <div 
        ref={containerRef}
        className="relative"
        style={{
          width: '600px',
          height: '600px',
          maskImage: `radial-gradient(circle 180px at ${cursor.x}px ${cursor.y}px, black 100%, transparent 0%)`,
          WebkitMaskImage: `radial-gradient(circle 180px at ${cursor.x}px ${cursor.y}px, black 100%, transparent 0%)`,
        }}
      >
        <canvas
          ref={canvasRef}
          className="w-full h-full block"
          style={{
            filter: 'drop-shadow(0 0 4px #ff0000) drop-shadow(0 0 10px #ff0000) brightness(1)',
            WebkitFilter: 'drop-shadow(0 0 4px #ff0000) drop-shadow(0 0 10px #ff0000) brightness(1)',
            maskImage: `url("data:image/svg+xml,${ENCODED_SVG}")`,
            WebkitMaskImage: `url("data:image/svg+xml,${ENCODED_SVG}")`,
            maskSize: 'contain',
            WebkitMaskSize: 'contain',
            maskRepeat: 'no-repeat',
            WebkitMaskRepeat: 'no-repeat',
            maskPosition: 'center',
            WebkitMaskPosition: 'center',
          }}
        />
      </div>
    </div>
  );
}