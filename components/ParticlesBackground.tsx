'use client';

import { useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import type { ISourceOptions } from '@tsparticles/engine';

const particlesConfig: ISourceOptions = {
  fullScreen: { enable: false },
  fpsLimit: 60,
  particles: {
    number: {
      value: 60,
      density: {
        enable: true,
      },
    },
    color: {
      value: '#FF6B00',
    },
    links: {
      enable: true,
      color: '#FF6B00',
      opacity: 0.12,
      distance: 150,
      width: 1,
    },
    move: {
      enable: true,
      speed: 0.8,
      direction: 'none',
      random: true,
      straight: false,
      outModes: {
        default: 'out',
      },
    },
    opacity: {
      value: { min: 0.08, max: 0.25 },
      animation: {
        enable: true,
        speed: 0.5,
        sync: false,
      },
    },
    size: {
      value: { min: 1, max: 3 },
    },
    shape: {
      type: 'circle',
    },
  },
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: 'grab',
      },
      onClick: {
        enable: true,
        mode: 'push',
      },
    },
    modes: {
      grab: {
        distance: 180,
        links: {
          opacity: 0.3,
          color: '#FF6B00',
        },
      },
      push: {
        quantity: 3,
      },
    },
  },
  detectRetina: true,
};

export default function ParticlesBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (!init) return null;

  return (
    <Particles
      id="hero-particles"
      className="absolute inset-0 z-[1]"
      options={particlesConfig}
    />
  );
}
