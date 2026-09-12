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

    // Light subtle particle atmosphere (no matrix chars, no admin grid lines)
    const isMobile = width < 768;
    const particleCount = isMobile ? 15 : 35;

    interface Particle {
      x: number;
      y: number;
      size: number;
      vx: number;
      vy: number;
      alpha: number;
      color: string;
    }

    const particles: Particle[] = [];
    const colors = ["rgba(229, 9, 20, ", "rgba(34, 211, 238, ", "rgba(255, 255, 255, "];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 1.8 + 0.8,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25 - 0.1,
        alpha: Math.random() * 0.4 + 0.1,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    let t = 0;

    const render = () => {
      t += 0.005;
      ctx.clearRect(0, 0, width, height);

      // Deep Netflix near-black atmospheric gradient
      const bgGrad = ctx.createRadialGradient(
        width * 0.5, height * 0.2, 50,
        width * 0.5, height * 0.6, Math.max(width, height)
      );
      bgGrad.addColorStop(0, "#0a0a0f");
      bgGrad.addColorStop(0.5, "#050507");
      bgGrad.addColorStop(1, "#030304");
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // Subtle ambient red & cyan glow spots (Netflix cinematic accent)
      const redGlow = ctx.createRadialGradient(
        width * 0.15 + Math.sin(t) * 40,
        height * 0.25 + Math.cos(t * 0.8) * 30,
        0,
        width * 0.15,
        height * 0.25,
        width * 0.35
      );
      redGlow.addColorStop(0, "rgba(229, 9, 20, 0.05)");
      redGlow.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = redGlow;
      ctx.fillRect(0, 0, width, height);

      const cyanGlow = ctx.createRadialGradient(
        width * 0.85 - Math.cos(t * 0.7) * 30,
        height * 0.7 + Math.sin(t) * 40,
        0,
        width * 0.85,
        height * 0.7,
        width * 0.35
      );
      cyanGlow.addColorStop(0, "rgba(34, 211, 238, 0.04)");
      cyanGlow.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = cyanGlow;
      ctx.fillRect(0, 0, width, height);

      // Render Floating Dust Particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color + p.alpha + ")";
        ctx.fill();
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
