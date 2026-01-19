'use client';

import React, { useState, useEffect, useRef } from 'react';

const BLOCK_SIZE = 200; 
const SPEED_MS = 1000; 

const MagicSquareScanner = () => {
  const [gridSize, setGridSize] = useState({ rows: 0, cols: 0 });
  const [activeSquare, setActiveSquare] = useState<{
    startRow: number;
    startCol: number;
    size: number;
  } | null>(null);

  const isMounted = useRef(true);

  useEffect(() => {
    isMounted.current = true;
    
    document.body.style.overflow = 'hidden';
    document.body.style.margin = '0';
    document.body.style.backgroundColor = 'black'; 

    const handleResize = () => {
      const cols = Math.floor(window.innerWidth / BLOCK_SIZE);
      const rows = Math.floor(window.innerHeight / BLOCK_SIZE);
      setGridSize({ rows, cols });
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      document.body.style.overflow = ''; 
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    if (gridSize.rows === 0 || gridSize.cols === 0) return;

    const runLeetCodeLogic = async () => {
      for (let rowI = 0; rowI < gridSize.rows; rowI++) {
        if (!isMounted.current) return;
        for (let colI = 0; colI < gridSize.cols; colI++) {
          
          let size = 1;
          let endRow = rowI + size;
          let endCol = colI + size;

          while (endRow <= gridSize.rows && endCol <= gridSize.cols) {
            if (!isMounted.current) return;

            setActiveSquare({ startRow: rowI, startCol: colI, size });
            await new Promise((resolve) => setTimeout(resolve, SPEED_MS));

            size++;
            endRow++;
            endCol++;
          }
        }
      }
      setActiveSquare(null);
    };

    runLeetCodeLogic();
  }, [gridSize]);

  const isLit = (r: number, c: number) => {
    if (!activeSquare) return false;
    const { startRow, startCol, size } = activeSquare;
    return (
      r >= startRow &&
      r < startRow + size &&
      c >= startCol &&
      c < startCol + size
    );
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'black',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        zIndex: -1,
      }}
    >
      {/* The Grid Itself */}
      <div
        style={{
          display: 'grid',
          width: `${gridSize.cols * BLOCK_SIZE}px`,
          height: `${gridSize.rows * BLOCK_SIZE}px`,
          gridTemplateColumns: `repeat(${gridSize.cols}, ${BLOCK_SIZE}px)`,
          gridTemplateRows: `repeat(${gridSize.rows}, ${BLOCK_SIZE}px)`,
        }}
      >
        {Array.from({ length: gridSize.rows }).map((_, rIndex) =>
          Array.from({ length: gridSize.cols }).map((_, cIndex) => {
            const lit = isLit(rIndex, cIndex);
            return (
              <div
                key={`${rIndex}-${cIndex}`}
                style={{
                  width: `${BLOCK_SIZE}px`,
                  height: `${BLOCK_SIZE}px`,
                  
                  // Faint Red
                  backgroundColor: lit ? 'rgba(255, 0, 50, 0.15)' : 'transparent',
                  
                  // Blurred Glow
                  boxShadow: lit 
                    ? '0 0 60px 20px rgba(255, 0, 50, 0.3)' 
                    : 'none',
                  
                  // Filter Blur
                  filter: lit ? 'blur(4px)' : 'none',
                  
                  transition: 'all 0.4s ease-out',
                }}
              />
            );
          })
        )}
      </div>
    </div>
  );
};

export default MagicSquareScanner;