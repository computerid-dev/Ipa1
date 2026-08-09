import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  radius: number;
  color: string;
  vx: number;
  vy: number;
  type: 'atom' | 'star' | 'circle' | 'molecule';
  alpha: number;
}

interface Props {
  enabled?: boolean;
}

export const ParticleBackground: React.FC<Props> = ({ enabled = true }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!enabled) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    const colors = [
      'rgba(138, 154, 91, 0.35)',  // Sage green #8A9A5B
      'rgba(214, 109, 91, 0.30)',  // Terracotta #D66D5B
      'rgba(180, 160, 120, 0.35)', // Warm Ochre
      'rgba(140, 138, 130, 0.30)', // Muted warm stone
      'rgba(101, 115, 75, 0.35)',  // Olive green
    ];

    const particlesCount = Math.min(35, Math.floor((width * height) / 25000));
    const particles: Particle[] = [];

    for (let i = 0; i < particlesCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 6 + 3,
        color: colors[Math.floor(Math.random() * colors.length)],
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        type: ['atom', 'star', 'circle', 'molecule'][Math.floor(Math.random() * 4)] as Particle['type'],
        alpha: Math.random() * 0.5 + 0.3,
      });
    }

    const drawAtom = (p: Particle) => {
      // Center nucleus
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius * 0.5, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.fill();

      // Electron ring
      ctx.beginPath();
      ctx.ellipse(p.x, p.y, p.radius * 2, p.radius * 0.8, Math.PI / 4, 0, Math.PI * 2);
      ctx.strokeStyle = p.color;
      ctx.lineWidth = 1;
      ctx.stroke();
    };

    const drawMolecule = (p: Particle) => {
      // 2 connected spheres
      ctx.beginPath();
      ctx.arc(p.x - p.radius, p.y, p.radius * 0.6, 0, Math.PI * 2);
      ctx.arc(p.x + p.radius, p.y, p.radius * 0.6, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.fill();

      ctx.beginPath();
      ctx.moveTo(p.x - p.radius, p.y);
      ctx.lineTo(p.x + p.radius, p.y);
      ctx.strokeStyle = p.color;
      ctx.lineWidth = 1.5;
      ctx.stroke();
    };

    const drawStar = (p: Particle) => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius * 0.4, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.fill();
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw faint connections between close particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(224, 221, 213, ${0.4 * (1 - dist / 130)})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      // Update & render particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < -20) p.x = width + 20;
        if (p.x > width + 20) p.x = -20;
        if (p.y < -20) p.y = height + 20;
        if (p.y > height + 20) p.y = -20;

        ctx.save();
        ctx.globalAlpha = p.alpha;
        if (p.type === 'atom') drawAtom(p);
        else if (p.type === 'molecule') drawMolecule(p);
        else drawStar(p);
        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.8 }}
    />
  );
};
