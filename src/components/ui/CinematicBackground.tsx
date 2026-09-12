import React, { useEffect, useRef } from "react";

export const CinematicBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    // Particle system configuration
    const isMobile = width < 768;
    const particleCount = isMobile ? 30 : 70;

    interface Particle {
      x: number;
      y: number;
      size: number;
      vx: number;
      vy: number;
      alpha: number;
      targetAlpha: number;
      color: string;
      char?: string;
    }

    const chars = "010101XYzAIBERT";
    const particles: Particle[] = [];

    const colors = [
      "rgba(34, 211, 238, ",  // Cyan
      "rgba(139, 92, 246, ",  // Violet
      "rgba(255, 255, 255, ", // White
    ];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2 + 1,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4 - 0.2, // Subtle upward drift
        alpha: Math.random() * 0.5 + 0.1,
        targetAlpha: Math.random() * 0.6 + 0.2,
        color: colors[Math.floor(Math.random() * colors.length)],
        char: Math.random() > 0.6 ? chars[Math.floor(Math.random() * chars.length)] : undefined,
      });
    }

    let t = 0;

    const render = () => {
      t += 0.01;
      ctx.clearRect(0, 0, width, height);

      // Deep atmospheric gradient
      const bgGrad = ctx.createRadialGradient(
        width * 0.5, height * 0.3, 50,
        width * 0.5, height * 0.5, Math.max(width, height)
      );
      bgGrad.addColorStop(0, "#0a0d18");
      bgGrad.addColorStop(0.5, "#05060b");
      bgGrad.addColorStop(1, "#030305");
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // Draw subtle ambient glow orbs
      const glowGrad1 = ctx.createRadialGradient(
        width * 0.2 + Math.sin(t * 0.5) * 50,
        height * 0.3 + Math.cos(t * 0.3) * 30,
        0,
        width * 0.2,
        height * 0.3,
        width * 0.4
      );
      glowGrad1.addColorStop(0, "rgba(34, 211, 238, 0.05)");
      glowGrad1.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = glowGrad1;
      ctx.fillRect(0, 0, width, height);

      const glowGrad2 = ctx.createRadialGradient(
        width * 0.8 - Math.cos(t * 0.4) * 40,
        height * 0.7 + Math.sin(t * 0.5) * 40,
        0,
        width * 0.8,
        height * 0.7,
        width * 0.45
      );
      glowGrad2.addColorStop(0, "rgba(139, 92, 246, 0.06)");
      glowGrad2.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = glowGrad2;
      ctx.fillRect(0, 0, width, height);

      // Update & Render Particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Pulse alpha
        p.alpha += (p.targetAlpha - p.alpha) * 0.02;
        if (Math.abs(p.targetAlpha - p.alpha) < 0.05) {
          p.targetAlpha = Math.random() * 0.6 + 0.1;
        }

        if (p.char) {
          ctx.font = "10px monospace";
          ctx.fillStyle = p.color + (p.alpha * 0.6) + ")";
          ctx.fillText(p.char, p.x, p.y);
        } else {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = p.color + p.alpha + ")";
          ctx.fill();
        }
      }

      // Draw faint grid lines on desktop
      if (!isMobile) {
        ctx.strokeStyle = "rgba(255, 255, 255, 0.015)";
        ctx.lineWidth = 1;
        const gridSize = 120;
        for (let x = 0; x < width; x += gridSize) {
          ctx.beginPath();
          ctx.moveTo(x, 0);
          ctx.lineTo(x, height);
          ctx.stroke();
        }
        for (let y = 0; y < height; y += gridSize) {
          ctx.beginPath();
          ctx.moveTo(0, y);
          ctx.lineTo(width, y);
          ctx.stroke();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
    />
  );
};
