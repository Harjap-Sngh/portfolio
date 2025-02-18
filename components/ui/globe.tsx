"use client";

import createGlobe, { COBEOptions } from "cobe";
import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const GLOBE_CONFIG: COBEOptions = {
  width: 400,
  height: 400,
  onRender: () => {},
  devicePixelRatio: 2,
  phi: 0,
  theta: 0,
  dark: 0.6,
  diffuse: 1.2,
  mapSamples: 16000,
  mapBrightness: 50, // You can increase this value to make the globe brighter
  baseColor: [0.16, 0.24, 0.4], // Set baseColor to white (RGBA: 1, 1, 1)
  markerColor: [251 / 255, 100 / 255, 21 / 255],
  glowColor: [0.16, 0.24, 0.4],
  markers: [
    { location: [51.049999, -114.066666], size: 0.1 },
    { location: [31.1471305, 75.3412179], size: 0.1 },
  ],
  opacity: 1,
};

export function Globe({
  className,
  config = GLOBE_CONFIG,
}: {
  className?: string;
  config?: COBEOptions;
}) {
  let phi = 0;
  let theta = 0.3;
  let width = 0;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef(false); // Track if the user is dragging
  const pointerInteractionMovement = useRef({ x: 0, y: 0 });
  const [r, setR] = useState(0);

  const updatePointerInteraction = (value: boolean) => {
    pointerInteracting.current = value;
    if (canvasRef.current) {
      canvasRef.current.style.cursor = value ? "grabbing" : "grab";
    }
  };

  const updateMovement = (clientX: number, clientY: number) => {
    if (pointerInteracting.current) {
      const deltaX = clientX - pointerInteractionMovement.current.x;
      const deltaY = clientY - pointerInteractionMovement.current.y;
      pointerInteractionMovement.current = { x: clientX, y: clientY };

      setR((prevR) => prevR + deltaX / 200); // Change the value of `r` to make the globe rotate
      theta -= deltaY / 200; // Adjust theta based on Y movement for vertical rotation
    }
  };

  const onRender = useCallback(
    (state: Record<string, any>) => {
      if (!pointerInteracting.current) {
        phi += 0.005; // Rotate on its own when not interacting
      }
      state.phi = phi + r;
      state.theta = theta;
      state.width = width * 2;
      state.height = width * 2;

      // Create custom glow using canvas shadow
      if (canvasRef.current) {
        const ctx = canvasRef.current.getContext("2d");
        if (ctx) {
          ctx.clearRect(0, 0, width * 2, width * 2); // Clear canvas before drawing

          // Apply glow effect by modifying shadow properties
          ctx.shadowColor = `rgba(128, 128, 128, 0.8)`; // Glow color (adjust as necessary)
          ctx.shadowBlur = 30; // Glow width (increase for larger glow)
          ctx.shadowOffsetX = 0; // No horizontal offset
          ctx.shadowOffsetY = 0; // No vertical offset

          // Draw globe with applied glow
          ctx.beginPath();
          ctx.arc(width, width, width, 0, Math.PI * 2); // Draw a circle representing the globe
          ctx.fillStyle = "rgba(0, 0, 0, 0)"; // Globe color set to fully transparent
          ctx.fill();
        }
      }
    },
    [r]
  );

  const onResize = () => {
    if (canvasRef.current) {
      width = canvasRef.current.offsetWidth;
    }
  };

  useEffect(() => {
    window.addEventListener("resize", onResize);
    onResize();

    const globe = createGlobe(canvasRef.current!, {
      ...config,
      width: width * 2,
      height: width * 2,
      onRender,
    });

    setTimeout(() => (canvasRef.current!.style.opacity = "1"));
    return () => globe.destroy();
  }, []);

  return (
    <div
      className={cn(
        "relative inset-0 mx-auto aspect-[1/1] w-full max-w-[400px] ",
        className
      )}
    >
      <canvas
        className={cn(
          "size-full opacity-0 transition-opacity duration-500 [contain:layout_paint_size]",
          "background-transparent" // Ensure canvas background is transparent
        )}
        ref={canvasRef}
        onPointerDown={(e) => {
          updatePointerInteraction(true); // Begin dragging
          pointerInteractionMovement.current = { x: e.clientX, y: e.clientY }; // Capture initial pointer position
        }}
        onPointerUp={() => updatePointerInteraction(false)} // Stop dragging
        onPointerOut={() => updatePointerInteraction(false)} // Stop dragging if pointer leaves canvas
        onPointerMove={(e) => updateMovement(e.clientX, e.clientY)} // Track pointer movement
        onTouchMove={(e) => {
          if (e.touches[0]) {
            updateMovement(e.touches[0].clientX, e.touches[0].clientY); // Handle touch movement
          }
        }}
      />
    </div>
  );
}
