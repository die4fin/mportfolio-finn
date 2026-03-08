'use client';
import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";

export default function ParticlesBg() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      options={{
        background: { color: "transparent" },
        fpsLimit: 120,
        particles: {
          color: { value: ["#B57EDC", "#7EDC86", "#ffffff"] },
          move: {
            enable: true,
            speed: 1,
            direction: "none",
            outModes: { default: "out" },
            spin: {
              enable: true,
              acceleration: 0.5,
            },
            attract: {
              enable: true,
              rotate: {
                x: 600,
                y: 1200
              }
            },
            random: true,
            straight: false,
          },
          number: { 
            density: { 
              enable: true, 
              // Di versi terbaru, 'area' diganti menjadi 'width'
              width: 800 
            }, 
            value: 100 
          },
          opacity: {
            value: { min: 0.1, max: 0.5 },
            animation: { enable: true, speed: 1, sync: false }
          },
          size: {
            value: { min: 1, max: 2 },
            animation: { enable: true, speed: 2, sync: false }
          }
        },
        detectRetina: true,
        interactivity: {
          events: {
            onHover: { enable: false },
            onClick: { enable: false },
          },
        },
      }}
    />
  );
}