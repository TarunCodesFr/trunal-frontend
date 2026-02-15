'use client';

import React, { useEffect, useRef } from 'react';

export default function AnimatedBackground({ children }) {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let time = 0;

        // Set canvas size
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // Grid parameters
        const gridSpacing = 60;
        const dotSize = 1.5;
        const waveSpeed = 0.0008;
        const waveAmplitude = 30;

        // Render function
        const render = () => {
            time += 1;

            // Clear canvas with fade effect
            ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Draw moving grid
            for (let x = 0; x < canvas.width + gridSpacing; x += gridSpacing) {
                for (
                    let y = 0;
                    y < canvas.height + gridSpacing;
                    y += gridSpacing
                ) {
                    // Calculate wave offset
                    const distance = Math.sqrt(
                        Math.pow(x - canvas.width / 2, 2) +
                            Math.pow(y - canvas.height / 2, 2)
                    );
                    const wave =
                        Math.sin(distance * 0.01 + time * waveSpeed) *
                        waveAmplitude;

                    // Calculate position with wave
                    const xPos =
                        x +
                        Math.sin(time * 0.0005 + y * 0.01) * 20 +
                        wave * 0.3;
                    const yPos =
                        y +
                        Math.cos(time * 0.0005 + x * 0.01) * 20 +
                        wave * 0.3;

                    // Calculate opacity based on distance from center
                    const centerDistance = Math.sqrt(
                        Math.pow(xPos - canvas.width / 2, 2) +
                            Math.pow(yPos - canvas.height / 2, 2)
                    );
                    const maxDistance = Math.sqrt(
                        Math.pow(canvas.width / 2, 2) +
                            Math.pow(canvas.height / 2, 2)
                    );
                    const opacity = Math.max(
                        0.1,
                        1 - (centerDistance / maxDistance) * 0.7
                    );

                    // Pulsing effect
                    const pulse =
                        Math.sin(time * 0.002 + x * 0.01 + y * 0.01) * 0.3 +
                        0.7;

                    // Draw dot with gradient
                    const gradient = ctx.createRadialGradient(
                        xPos,
                        yPos,
                        0,
                        xPos,
                        yPos,
                        dotSize * 3
                    );
                    gradient.addColorStop(
                        0,
                        `rgba(120, 120, 255, ${opacity * pulse * 0.8})`
                    );
                    gradient.addColorStop(
                        0.5,
                        `rgba(150, 120, 255, ${opacity * pulse * 0.4})`
                    );
                    gradient.addColorStop(1, 'rgba(100, 100, 200, 0)');

                    ctx.fillStyle = gradient;
                    ctx.beginPath();
                    ctx.arc(xPos, yPos, dotSize * 2, 0, Math.PI * 2);
                    ctx.fill();
                }
            }

            animationFrameId = requestAnimationFrame(render);
        };

        render();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <>
            <style>{`
        @keyframes meshGradient {
          0%, 100% {
            transform: translate(0%, 0%) rotate(0deg);
          }
          33% {
            transform: translate(5%, -5%) rotate(120deg);
          }
          66% {
            transform: translate(-5%, 5%) rotate(240deg);
          }
        }

        @keyframes orbitGlow {
          0%, 100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.4;
          }
          50% {
            transform: translate(50px, -50px) scale(1.2);
            opacity: 0.6;
          }
        }

        @keyframes float1 {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg);
          }
          25% {
            transform: translate(100px, -50px) rotate(90deg);
          }
          50% {
            transform: translate(150px, 50px) rotate(180deg);
          }
          75% {
            transform: translate(50px, 100px) rotate(270deg);
          }
        }

        @keyframes float2 {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg);
          }
          25% {
            transform: translate(-80px, 60px) rotate(-90deg);
          }
          50% {
            transform: translate(-120px, -40px) rotate(-180deg);
          }
          75% {
            transform: translate(-40px, -80px) rotate(-270deg);
          }
        }

        body, html {
          margin: 0;
          padding: 0;
          overflow-x: hidden;
        }

        .prisma-bg-wrapper {
          position: relative;
          min-height: 100vh;
          background: #000000;
          overflow: hidden;
        }

        .prisma-bg-fixed {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
          pointer-events: none;
        }

        .canvas-layer {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .mesh-gradient {
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: 
            radial-gradient(ellipse at 20% 30%, rgba(80, 80, 255, 0.15) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 70%, rgba(150, 80, 255, 0.15) 0%, transparent 50%),
            radial-gradient(ellipse at 40% 80%, rgba(80, 150, 255, 0.1) 0%, transparent 50%);
          animation: meshGradient 25s ease-in-out infinite;
          filter: blur(60px);
        }

        .glow-sphere {
          position: absolute;
          border-radius: 50%;
          filter: blur(70px);
          mix-blend-mode: screen;
        }

        .glow-1 {
          top: 15%;
          left: 25%;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(100, 100, 255, 0.3), transparent 70%);
          animation: float1 30s ease-in-out infinite;
        }

        .glow-2 {
          bottom: 15%;
          right: 20%;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(150, 80, 255, 0.25), transparent 70%);
          animation: float2 35s ease-in-out infinite;
        }

        .glow-3 {
          top: 50%;
          left: 50%;
          width: 400px;
          height: 400px;
          margin: -200px 0 0 -200px;
          background: radial-gradient(circle, rgba(80, 150, 255, 0.2), transparent 70%);
          animation: orbitGlow 20s ease-in-out infinite;
        }

        .radial-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(
            ellipse at 50% 0%,
            rgba(0, 0, 20, 0.3) 0%,
            rgba(0, 0, 0, 0.7) 50%,
            rgba(0, 0, 0, 0.95) 100%
          );
          pointer-events: none;
        }

        .noise-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
          opacity: 0.03;
          mix-blend-mode: overlay;
          pointer-events: none;
        }

        .prisma-content {
          position: relative;
          z-index: 1;
        }

        @media (max-width: 768px) {
          .glow-sphere {
            filter: blur(50px);
          }
          
          .glow-1, .glow-2, .glow-3 {
            width: 300px;
            height: 300px;
          }
        }
      `}</style>
            <div className="prisma-bg-wrapper">
                <div className="prisma-bg-fixed">
                    {/* Animated canvas layer */}
                    <canvas ref={canvasRef} className="canvas-layer" />

                    {/* Mesh gradient */}
                    <div className="mesh-gradient" />

                    {/* Glowing spheres */}
                    <div className="glow-sphere glow-1" />
                    <div className="glow-sphere glow-2" />
                    <div className="glow-sphere glow-3" />

                    {/* Overlays */}
                    <div className="radial-overlay" />
                    <div className="noise-overlay" />
                </div>

                <div className="prisma-content">{children}</div>
            </div>
        </>
    );
}
