import { useEffect, useRef, useCallback } from "react";

const SHAPES = [
  { id: "g0", ox: 440, oy: 116 },
  { id: "g1", ox: 13,  oy: 112 },
  { id: "g2", ox: 125, oy: 132 },
  { id: "g3", ox: 289, oy: 214 },
  { id: "g4", ox: 207, oy: 16  },
];

const TRAIL_LENGTH = 22;
const MAX_CENTER_DIST = 10;
const LERP_FACTOR = 0.22;

export default function MouseTrailSVG() {
  const stageRef = useRef(null);
  const groupRefs = useRef([]);
  const rafRef = useRef(null);

  const trailRef  = useRef([]);
  const mouseRef  = useRef({ x: 0, y: 0 });
  const insideRef = useRef(false);
  const tRef      = useRef(0);

  const stateRef = useRef(
    SHAPES.map((s) => ({ cx: s.ox, cy: s.oy, vx: 0, vy: 0 }))
  );

  const jitterRef = useRef(
    SHAPES.map((_, i) => ({
      phase:  Math.random() * Math.PI * 2,
      phase2: Math.random() * Math.PI * 2,
      freqX:  0.031 + i * 0.009,
      freqY:  0.027 + i * 0.007,
      freqX2: 0.051 + i * 0.011,
      freqY2: 0.043 + i * 0.013,
      ampX:   1.4 + i * 0.5,
      ampY:   1.2 + i * 0.4,
      ampX2:  0.7 + i * 0.2,
      ampY2:  0.8 + i * 0.25,
    }))
  );

  const noiseRef = useRef(
    Array.from({ length: 5 }, () => ({
      px: Math.random() * 1000,
      py: Math.random() * 1000,
      speedX: (Math.random() - 0.5) * 1.2,
      speedY: (Math.random() - 0.5) * 1.2,
    }))
  );

  function lerp(a, b, f) { return a + (b - a) * f; }

  function pseudoNoise(x, y) {
    const s = Math.sin(x * 127.1 + y * 311.7) * 43758.5453;
    return s - Math.floor(s);
  }

  function smoothNoise(x, y) {
    const ix = Math.floor(x), iy = Math.floor(y);
    const fx = x - ix, fy = y - iy;
    const ux = fx * fx * (3 - 2 * fx);
    const uy = fy * fy * (3 - 2 * fy);
    return lerp(
      lerp(pseudoNoise(ix,   iy),   pseudoNoise(ix+1, iy),   ux),
      lerp(pseudoNoise(ix,   iy+1), pseudoNoise(ix+1, iy+1), ux),
      uy
    ) * 2 - 1;
  }

  const tick = useCallback(() => {
    tRef.current++;
    const t = tRef.current;

    const stage = stageRef.current;
    if (!stage) { rafRef.current = requestAnimationFrame(tick); return; }

    const SVG_W = 456;
    const SVG_H = 225;
    const cx = SVG_W / 2;
    const cy = SVG_H / 2;

    const mouse  = mouseRef.current;
    const inside = insideRef.current;
    const trail  = trailRef.current;
    const state  = stateRef.current;
    const jitter = jitterRef.current;
    const noise  = noiseRef.current;

    if (inside) {
      trail.push({ x: mouse.x, y: mouse.y });
      if (trail.length > TRAIL_LENGTH) trail.shift();
    }

    SHAPES.forEach((shape, idx) => {
      const trailIdx = trail.length - 1 - idx * 2;
      let tx = shape.ox;
      let ty = shape.oy;

      if (trailIdx >= 0) {
        const pt   = trail[Math.max(0, trailIdx)];
        const dx   = pt.x - cx;
        const dy   = pt.y - cy;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const pull = Math.pow(Math.min(dist / MAX_CENTER_DIST, 1), 1.4);

        let moveX = (dx / MAX_CENTER_DIST) * (60 - idx * 7) * pull;
        let moveY = (dy / MAX_CENTER_DIST) * (60 - idx * 7) * pull;

        const limit = 26 - idx * 5;
        moveX = Math.max(-limit, Math.min(limit, moveX));
        moveY = Math.max(-limit, Math.min(limit, moveY));

        tx = shape.ox + moveX;
        ty = shape.oy + moveY;
      }

      const j = jitter[idx];
      const n = noise[idx];
      n.px += n.speedX;
      n.py += n.speedY;

      const noisePush = inside ? 2.2 : 1.0;
      const jitterAmp = inside ? 1.8 : 1.0;

      const jx = (
        Math.sin(t * j.freqX  + j.phase)        * j.ampX  +
        Math.sin(t * j.freqX2 + j.phase2 + 1.3) * j.ampX2
      ) * jitterAmp;

      const jy = (
        Math.cos(t * j.freqY  + j.phase  + 0.5) * j.ampY  +
        Math.cos(t * j.freqY2 + j.phase2 + 2.1) * j.ampY2
      ) * jitterAmp;

      const nx = smoothNoise(n.px * 0.015, n.py * 0.015) * 3.0 * noisePush;
      const ny = smoothNoise(n.px * 0.015 + 5.3, n.py * 0.015 + 2.7) * 3.0 * noisePush;

      tx += jx + nx;
      ty += jy + ny;

      const st  = state[idx];
      st.cx = lerp(st.cx, tx, LERP_FACTOR);
      st.cy = lerp(st.cy, ty, LERP_FACTOR);

      const ddx   = st.cx - shape.ox;
      const ddy   = st.cy - shape.oy;
      const speed = Math.sqrt(ddx * ddx + ddy * ddy);

      const skewX  = (ddx * 0.01).toFixed(3);
      const scaleX = (1 + speed * 0.004).toFixed(3);
      const scaleY = (1 - speed * 0.002).toFixed(3);

      const el = groupRefs.current[idx];
      if (el) {
        el.setAttribute(
          "transform",
          `translate(${ddx.toFixed(2)} ${ddy.toFixed(2)}) skewX(${skewX}) scale(${scaleX},${scaleY})`
        );
      }
    });

    rafRef.current = requestAnimationFrame(tick);
  }, []);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    const SVG_W = 456;
    const SVG_H = 225;

    const onEnter = () => { insideRef.current = true; };
    const onLeave = () => { insideRef.current = false; };

    const onMove = (e) => {
      const rect = stage.getBoundingClientRect();
      const scaleX = SVG_W / rect.width;
      const scaleY = SVG_H / rect.height;
      mouseRef.current = {
        x: (e.clientX - rect.left) * scaleX,
        y: (e.clientY - rect.top)  * scaleY,
      };
    };

    stage.addEventListener("mouseenter", onEnter);
    stage.addEventListener("mouseleave", onLeave);
    stage.addEventListener("mousemove",  onMove);

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      stage.removeEventListener("mouseenter", onEnter);
      stage.removeEventListener("mouseleave", onLeave);
      stage.removeEventListener("mousemove",  onMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, [tick]);

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "2rem 0",
      gap: "1rem",
      transition: "none",
       position: "absolute",
      top: "0",
      width: "100%",
      zIndex: "4"
    }}>


      <div
        ref={stageRef}
        style={{
          position: "relative",
          width: "500px",
          height: "225px",
          cursor: "pointer",
          overflow: "visible",
          transition: "none",
        }}
      >
        <svg
          width="456"
          height="225"
          viewBox="0 0 456 225"
          xmlns="http://www.w3.org/2000/svg"
          style={{ display: "block", transition: "none", position: "static" , overflow: "visible"}}
        >
          <g ref={(el) => (groupRefs.current[0] = el)} style={{ transition: "none" }}>
            <path d="M440.994 104.835C444.405 105.691 452.83 113.405 455.24 116.149C452.108 121.075 447.681 125.327 443.128 128.933C439.306 129.025 430.913 119.384 429.189 116.145C432.876 111.966 436.766 108.439 440.994 104.835Z" fill="#1E3656"/>
            <path d="M441.251 107.064C443.254 107.497 449.572 113.867 451.467 115.682C448.286 119.674 446.169 122.056 442.329 125.35C439.292 122.938 435.06 118.785 432.077 116.054C435.272 112.659 437.799 110.197 441.251 107.064Z" fill="#C33E3F"/>
          </g>

          <g ref={(el) => (groupRefs.current[1] = el)} style={{ transition: "none" }}>
            <path d="M11.8046 100.511C15.216 101.367 23.6407 109.081 26.0503 111.825C22.9187 116.751 18.492 121.003 13.939 124.609C10.1169 124.701 1.72375 115.06 0 111.82C3.68667 107.641 7.57641 104.115 11.8046 100.511Z" fill="#1E3656"/>
            <path d="M12.0617 102.74C14.0652 103.173 20.3827 109.543 22.2779 111.357C19.0966 115.35 16.9803 117.731 13.1402 121.026C10.1033 118.614 5.87067 114.461 2.88794 111.73C6.08275 108.335 8.6097 105.873 12.0617 102.74Z" fill="#C33E3F"/>
          </g>

          <g ref={(el) => (groupRefs.current[2] = el)} style={{ transition: "none" }}>
            <path d="M125.85 122.133L127.141 122.476C129.592 124.551 137.353 137.057 136.211 140.008C133.687 141.307 127.148 141.307 124.157 141.42C121.713 141.646 115.999 142.679 114.595 140.608C115.141 137.323 123.47 125.891 125.85 122.133Z" fill="#1E3656"/>
            <path d="M126.028 125.905C127.091 126.708 132.179 136.236 133.515 138.411C130.961 138.677 127.685 138.767 125.066 138.912L117.527 138.966C120.437 134.662 123.271 130.308 126.028 125.905Z" fill="#209996"/>
          </g>

          <g ref={(el) => (groupRefs.current[3] = el)} style={{ transition: "none" }}>
            <path d="M289.093 204.295L290.384 204.638C292.835 206.713 300.596 219.219 299.454 222.17C296.93 223.469 290.391 223.469 287.401 223.582C284.956 223.808 279.243 224.841 277.838 222.77C278.384 219.485 286.713 208.053 289.093 204.295Z" fill="#1E3656"/>
            <path d="M289.271 208.067C290.334 208.87 295.423 218.398 296.758 220.573C294.204 220.839 290.928 220.93 288.309 221.074L280.77 221.128C283.68 216.824 286.514 212.47 289.271 208.067Z" fill="#209996"/>
          </g>

          <g ref={(el) => (groupRefs.current[4] = el)} style={{ transition: "none" }}>
            <path d="M197.606 5.69826L198.876 5.28371C202.061 5.69179 215.377 11.9639 216.024 15.061C214.612 17.5244 209.126 21.0811 206.678 22.8027C204.749 24.3219 200.517 28.2966 198.212 27.3231C196.884 24.2698 197.653 10.1463 197.606 5.69826Z" fill="#1E3656"/>
            <path d="M199.807 8.76637C201.136 8.86217 210.589 14.0895 212.892 15.1879C210.894 16.8004 208.195 18.6582 206.076 20.204L199.779 24.3503C199.879 19.156 199.889 13.961 199.807 8.76637Z" fill="#209996"/>
          </g>
        </svg>
      </div>
    </div>
  );
}