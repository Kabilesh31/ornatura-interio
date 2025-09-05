"use client";
import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const innerRef = useRef<HTMLDivElement>(null);
  const outerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(hover: none), (pointer: coarse)").matches) {
      return; // disable on touch devices
    }

    let mouseX = 0,
      mouseY = 0;
    let outerX = 0,
      outerY = 0;

    const inner = innerRef.current;
    const outer = outerRef.current;

    const moveCursor = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (inner) {
        inner.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
      }
    };

    const animateOuter = () => {
      if (!outer) return;

      // Outer cursor follows faster
      outerX += (mouseX - outerX) * 0.3; // increased speed
      outerY += (mouseY - outerY) * 0.3;

      outer.style.transform = `translate3d(${outerX}px, ${outerY}px, 0) translate(-50%, -50%) rotate(45deg)`;

      requestAnimationFrame(animateOuter);
    };

    window.addEventListener("mousemove", moveCursor);
    animateOuter();

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <>
      <style jsx global>{`
        html,
        body {
          cursor: auto;
        }
        .custom-cursor-inner,
        .custom-cursor-outer {
          position: fixed;
          top: 0;
          left: 0;
          pointer-events: none;
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .custom-cursor-inner {
          width: 8px;
          height: 8px;
          background: #999;
          transform: rotate(45deg);
        }
        .custom-cursor-outer {
          width: 40px;
          height: 40px;
          border: 1.5px solid #999;
          background: transparent;
        }
        @media (hover: none), (pointer: coarse) {
          .custom-cursor-inner,
          .custom-cursor-outer {
            display: none !important;
          }
        }
      `}</style>

      <div ref={outerRef} className="custom-cursor-outer"></div>
      <div ref={innerRef} className="custom-cursor-inner"></div>
    </>
  );
}
