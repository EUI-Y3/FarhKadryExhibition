import { useEffect, useRef, useState, useCallback } from "react";

// ─── Palette from brand colors ───────────────────────────────────────────────
const P = {
  navy:  "#1e4976",
  navyD: "#152f4e",
  navyL: "#2a6099",
  red:   "#e04848",
  redD:  "#a83030",
  redL:  "#e87070",
  teal:  "#007e78",
  tealD: "#005450",
  tealL: "#00a89f",
  cream: "#f0ece0",
  bg:    "#007E7A",
  bgD:   "#112735",
};

// ─── Booth data ───────────────────────────────────────────────────────────────
const BOOTHS = [
  { name: "Artisan D'Alexandrie",                      x:75.17, y: 0.99, w:22.68, h:7.38 },
  { name: "جمعيه سكه خير للأعمال اليدوية",             x: 2.11, y: 0.99, w:22.68, h:7.38 },
  { name: "Zomoroda",                                   x: 7.80, y: 9.20, w: 4.16, h:4.44 },
  { name: "Nerosmetics / LoveNDare",                   x: 7.89, y:13.70, w: 4.16, h:4.44 },
  { name: "Soul Tress",                                 x:84.76, y:10.49, w: 4.16, h:4.44 },
  { name: "Protect",                                    x:84.75, y:15.04, w: 4.16, h:4.44 },
  { name: "ahkmem",                                     x:84.74, y:20.98, w: 4.16, h:4.44 },
  { name: "Vanilla",                                    x:84.73, y:25.37, w: 4.16, h:4.44 },
  { name: "هلا بنور الخير",                             x:84.72, y:31.25, w: 4.16, h:4.44 },
  { name: "Beity",                                      x:84.85, y:35.80, w: 4.16, h:4.44 },
  { name: "Mohair Handmade",                            x:84.98, y:41.57, w: 4.16, h:4.44 },
  { name: "Beige",                                      x:84.97, y:45.85, w: 4.16, h:4.44 },
  { name: "فن 4 fun",                                   x:57.15, y:47.21, w: 4.16, h:4.44 },
  { name: "جمعيه مركز الإسكندرية لتجميل المدينة",       x:57.15, y:51.56, w: 4.16, h:4.44 },
  { name: "Effect",                                     x:57.16, y:62.29, w: 4.16, h:4.44 },
  { name: "Niente Gallery",                             x:57.15, y:57.87, w: 4.16, h:4.44 },
  { name: "خياميه ال ياسر",                             x:56.99, y:83.72, w: 4.16, h:4.44 },
  { name: "Ecovia",                                     x:57.04, y:79.29, w: 4.16, h:4.44 },
  { name: "Hand Made",                                  x:57.08, y:73.01, w: 4.16, h:4.44 },
  { name: "Kashmir Handmade",                           x:56.97, y:68.55, w: 4.16, h:4.44 },
  { name: "Sugary by Asmaa yousef",                    x:57.11, y:40.83, w: 4.16, h:4.44 },
  { name: "Mira handmade",                              x:57.10, y:36.45, w: 4.16, h:4.44 },
  { name: "Brushstroke by Yomna Rashed",               x:57.09, y:30.15, w: 4.16, h:4.44 },
  { name: "Hussein Ragab Designs",                     x:57.11, y:25.77, w: 4.16, h:4.44 },
  { name: "Monaya candles handmade",                   x:57.15, y:19.52, w: 4.16, h:4.44 },
  { name: "JOZORIA",                                    x:57.15, y:15.12, w: 4.16, h:4.44 },
  { name: "EL ZEENA",                                   x:51.06, y:11.43, w:12.06, h:1.66 },
  { name: "Shereen Elabd",                              x:39.57, y:11.43, w:12.06, h:1.66 },
  { name: "Siwa soul",                                  x:42.17, y:15.17, w: 4.16, h:4.44 },
  { name: "Evora cakes",                                x:42.17, y:19.56, w: 4.16, h:4.44 },
  { name: "Soul candles",                               x:42.24, y:25.65, w: 4.16, h:4.44 },
  { name: "Mervet",                                     x:42.24, y:30.06, w: 4.16, h:4.44 },
  { name: "needle and Beads",                           x:42.14, y:36.43, w: 4.16, h:4.44 },
  { name: "Cumin & cinnamon",                           x:42.14, y:40.74, w: 4.16, h:4.44 },
  { name: "Bloomin'gallery",                            x:42.34, y:47.14, w: 4.16, h:4.44 },
  { name: "Konooz Store",                               x:42.24, y:51.46, w: 4.16, h:4.44 },
  { name: "Wafaa Corner",                               x:42.18, y:57.93, w: 4.16, h:4.44 },
  { name: "Dr.meem",                                    x:42.18, y:62.23, w: 4.16, h:4.44 },
  { name: "Pistrina Sweet & Healthy",                  x:42.24, y:68.61, w: 4.16, h:4.44 },
  { name: "Enas Ashraf design",                        x:42.23, y:79.33, w: 4.16, h:4.44 },
  { name: "joy of brush",                               x:42.23, y:83.66, w: 4.16, h:4.44 },
  { name: "Arts & Crafts",                              x:42.21, y:72.92, w: 4.11, h:4.38 },
  { name: "The Monkey Business",                        x:35.73, y:88.19, w:16.15, h:3.77 },
  { name: "DzrZoma",                                    x:51.58, y:88.15, w:16.15, h:3.77 },
  { name: "Siwa natura",                                x:84.93, y:87.21, w:12.92, h:6.38 },
  { name: "Nadia",                                      x:84.79, y:80.94, w:12.92, h:6.38 },
  { name: "Dal",                                        x:84.79, y:74.90, w:12.92, h:6.38 },
  { name: "Weeka boutique",                             x:84.79, y:68.58, w:12.92, h:6.38 },
  { name: "Karnak and Gerges",                          x:84.79, y:62.54, w:12.92, h:6.38 },
  { name: "Heritage & more",                            x:84.78, y:56.39, w:12.92, h:6.38 },
  { name: "Ahmed Mekky",                                x:84.78, y:50.23, w:12.92, h:6.38 },
  { name: "Four Corners A",                             x: 2.40, y:84.43, w:15.81, h:7.35 },
  { name: "Four Corners B",                             x: 2.40, y:76.95, w:15.81, h:7.35 },
  { name: "Four Corners C",                             x: 2.26, y:69.80, w:15.81, h:7.35 },
  { name: "Malabs home",                                x: 2.40, y:62.36, w:15.81, h:7.35 },
  { name: "Tawasol",                                    x: 2.55, y:55.04, w:15.81, h:7.35 },
  { name: "جمعية دنيتنا للمكفوفين",                     x: 2.26, y:47.67, w:15.81, h:7.35 },
  { name: "Second Chance",                              x: 2.26, y:40.41, w:15.81, h:7.35 },
  { name: "Leather art",                                x: 2.26, y:33.09, w:15.81, h:7.35 },
  { name: "Fatemina",                                   x: 2.26, y:25.77, w:15.81, h:7.35 },
  { name: "Khan embabi",                                x: 2.26, y:18.23, w:15.81, h:7.35 },
];

const MAP_W = 520;
const MAP_H = 900;
const WALL_H = 44;
const FOV_H = Math.PI * 0.62;

// ─── Color hash → brand palette ──────────────────────────────────────────────
function hashColor(name) {
  let h = 0;
  for (let i = 0; i < name.length; i++) h = (h * 31 + name.charCodeAt(i)) & 0xffff;
  // Cycle through navy / red / teal variants
  const variants = [
    { top: P.navy,  side: P.navyD,  dark: P.navyD,  text: P.cream },
    { top: P.red,   side: P.redD,   dark: P.redD,   text: P.cream },
    { top: P.teal,  side: P.tealD,  dark: P.tealD,  text: P.cream },
    { top: P.navyL, side: P.navy,   dark: P.navyD,  text: P.cream },
    { top: P.redL,  side: P.red,    dark: P.redD,   text: P.cream },
    { top: P.tealL, side: P.teal,   dark: P.tealD,  text: P.cream },
    { top: P.navy,  side: P.tealD,  dark: P.navyD,  text: P.cream },
  ];
  return variants[h % variants.length];
}

// ─── Text wrapping ────────────────────────────────────────────────────────────
function wrapText(text, maxPx, fs) {
  const chW = fs * 0.56;
  const maxChars = Math.max(4, Math.floor(maxPx / chW));
  const words = text.split(" ");
  const lines = [];
  let cur = "";
  for (const w of words) {
    const test = cur ? cur + " " + w : w;
    if (test.length > maxChars && cur) { lines.push(cur); cur = w; } else cur = test;
  }
  if (cur) lines.push(cur);
  return lines.slice(0, 3);
}

// ─── Fog blend (brand bg colour instead of purple) ───────────────────────────
function fogHex(hex, depth) {
  const t = Math.min(1, depth / 650) * 0.5;
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  const br = 14, bg2 = 24, bb = 38; // P.bg rgb
  return `rgb(${Math.round(r + (br - r) * t)},${Math.round(g + (bg2 - g) * t)},${Math.round(b + (bb - b) * t)})`;
}

// ─── Draw a filled quad ───────────────────────────────────────────────────────
function drawPoly(ctx, pts, fill, stroke, lw = 0.6) {
  ctx.beginPath();
  ctx.moveTo(pts[0][0], pts[0][1]);
  for (let i = 1; i < pts.length; i++) ctx.lineTo(pts[i][0], pts[i][1]);
  ctx.closePath();
  ctx.fillStyle = fill;
  ctx.fill();
  if (stroke) { ctx.strokeStyle = stroke; ctx.lineWidth = lw; ctx.stroke(); }
}

// ─── Draw label onto a perspective quad (never flipped) ──────────────────────
// p0=top-left, p1=top-right, p2=bottom-right, p3=bottom-left  (screen coords)
function drawLabelOnQuad(ctx, text, p0, p1, p2, p3, color) {
  const cx = (p0[0] + p1[0] + p2[0] + p3[0]) / 4;
  const cy = (p0[1] + p1[1] + p2[1] + p3[1]) / 4;

  // Dominant horizontal axis of the quad (top edge average)
  const axX = (p1[0] - p0[0] + p2[0] - p3[0]) / 2;
  const axY = (p1[1] - p0[1] + p2[1] - p3[1]) / 2;
  const axH = (p3[0] - p0[0] + p2[0] - p1[0]) / 2; // depth axis
  const axHY = (p3[1] - p0[1] + p2[1] - p1[1]) / 2;

  const quadW = Math.sqrt(axX * axX + axY * axY);
  const quadH = Math.sqrt(axH * axH + axHY * axHY);
  if (quadW < 8 || quadH < 4) return;

  // Angle of the horizontal axis
  let angle = Math.atan2(axY, axX);

  // ── KEY FIX: ensure text is never upside-down ──
  // If the angle points "left" (past ±90°), rotate 180° to flip it right
  if (angle > Math.PI / 2 || angle < -Math.PI / 2) angle += Math.PI;

  const fs = Math.max(5, Math.min(13, Math.min(quadW * 0.9, quadH * 1.8) / 4.2));

  ctx.save();
  ctx.translate(cx, cy);
  ctx.rotate(angle);
  // Vertical perspective squeeze (depth axis foreshortened)
  const squeeze = Math.max(0.18, Math.min(1, (quadH / quadW) * 1.7));
  ctx.scale(1, squeeze);
  ctx.fillStyle = color;
  ctx.font = `700 ${fs}px 'Segoe UI', system-ui, sans-serif`;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  const lines = wrapText(text, quadW - 4, fs);
  const lineH = fs + 1.8;
  lines.forEach((l, i) => ctx.fillText(l, 0, (i - (lines.length - 1) / 2) * lineH));
  ctx.restore();
}

// ─── Wall label (also never flipped) ─────────────────────────────────────────
function drawWallLabel(ctx, text, wa, wb, wc, wd, color) {
  const faceW = Math.hypot(wb[0] - wa[0], wb[1] - wa[1]);
  const faceH = Math.hypot(wd[0] - wa[0], wd[1] - wa[1]);
  if (faceW < 12 || faceH < 8) return;

  const cx = (wa[0] + wb[0] + wc[0] + wd[0]) / 4;
  const cy = (wa[1] + wb[1] + wc[1] + wd[1]) / 4;
  let angle = Math.atan2(wb[1] - wa[1], wb[0] - wa[0]);
  if (angle > Math.PI / 2 || angle < -Math.PI / 2) angle += Math.PI;

  const fs = Math.max(5, Math.min(12, Math.min(faceW * 0.85, faceH * 2.2) / 4));
  const squeeze = Math.max(0.22, Math.min(1, faceH / Math.max(1, faceW) * 2.2));

  ctx.save();
  ctx.translate(cx, cy);
  ctx.rotate(angle);
  ctx.scale(1, squeeze);
  ctx.fillStyle = color;
  ctx.font = `700 ${fs}px 'Segoe UI', system-ui, sans-serif`;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  const lines = wrapText(text, faceW - 6, fs);
  const lineH = fs + 2;
  lines.forEach((l, i) => ctx.fillText(l, 0, (i - (lines.length - 1) / 2) * lineH));
  ctx.restore();
}

// ─── Main component ───────────────────────────────────────────────────────────
export default function ExhibitionMap() {
  const canvasRef = useRef(null);
  const stateRef = useRef({
    tilt: 0, targetTilt: 0,
    panX: 0, panY: 0, scale: 1,
    dragging: false, lastX: 0, lastY: 0,
    hovered: null,
    animFrame: null,
    is3d: false,
  });
  const camRef = useRef({
    x: MAP_W * 0.5, y: -MAP_H * 0.2, z: 200,
    yaw: 0, pitch: Math.PI * 0.38,
  });

  const [is3d, setIs3d] = useState(false);
  const [hovered, setHovered] = useState(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });
  const tooltipRef = useRef({ x: 0, y: 0 });

  // ── projection ──────────────────────────────────────────────────────────────
  const project3D = useCallback((wx, wy, wz, cw, ch) => {
    const cam = camRef.current;
    const dx = wx - cam.x, dy = wy - cam.y, dz = wz - cam.z;
    const cosY = Math.cos(-cam.yaw), sinY = Math.sin(-cam.yaw);
    const rx = dx * cosY - dy * sinY;
    const ry = dx * sinY + dy * cosY;
    const cp = Math.cos(cam.pitch - Math.PI / 2), sp = Math.sin(cam.pitch - Math.PI / 2);
    const fwd = ry * cp - dz * sp;
    const up  = ry * sp + dz * cp;
    if (fwd <= 1) return null;
    const f = (cw / 2) / Math.tan(FOV_H / 2);
    return [(rx / fwd) * f + cw / 2, (-up / fwd) * f + ch / 2, fwd];
  }, []);

  const project = useCallback((wx, wy, wz, cw, ch) => {
    const st = stateRef.current;
    if (st.tilt < 0.02) return [wx * st.scale + st.panX, wy * st.scale + st.panY, 1];
    const p3 = project3D(wx, wy, wz, cw, ch);
    if (!p3) return null;
    if (st.tilt > 0.98) return p3;
    const t = st.tilt;
    return [
      wx * st.scale + st.panX + (p3[0] - wx * st.scale - st.panX) * t,
      wy * st.scale + st.panY + (p3[1] - wy * st.scale - st.panY) * t,
      p3[2],
    ];
  }, [project3D]);

  // ── fit map ─────────────────────────────────────────────────────────────────
  const fitMap = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const st = stateRef.current;
    const scl = Math.min(canvas.width / MAP_W, canvas.height / MAP_H) * 0.88;
    st.scale = scl;
    st.panX = (canvas.width - MAP_W * scl) / 2;
    st.panY = (canvas.height - MAP_H * scl) / 2;
  }, []);

  // ── draw ────────────────────────────────────────────────────────────────────
  const drawScene = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const cw = canvas.width, ch = canvas.height;
    const st = stateRef.current;
    const cam = camRef.current;

    ctx.clearRect(0, 0, cw, ch);

    // Background
    if (st.tilt > 0.05) {
      const horizonY = ch / 2 - (cam.pitch - Math.PI / 2) * ch / FOV_H * st.tilt;
      // Sky
      const sky = ctx.createLinearGradient(0, 0, 0, horizonY);
      sky.addColorStop(0, "#06111a"); sky.addColorStop(1, "#0e2233");
      ctx.fillStyle = sky; ctx.fillRect(0, 0, cw, Math.max(0, horizonY));
      // Floor
      const floor = ctx.createLinearGradient(0, horizonY, 0, ch);
      floor.addColorStop(0, "#0e2030"); floor.addColorStop(1, "#060d16");
      ctx.fillStyle = floor; ctx.fillRect(0, horizonY, cw, ch - horizonY);

      // Perspective grid (teal tint, subtle)
      const vpX = cw / 2, vpY = horizonY;
      for (let i = 0; i <= 22; i++) {
        const bx = (i / 22) * cw;
        ctx.strokeStyle = `rgba(0,126,120,${0.04 + st.tilt * 0.05})`;
        ctx.lineWidth = 0.6;
        ctx.beginPath(); ctx.moveTo(bx, ch); ctx.lineTo(vpX + (bx - vpX) * 0.04, vpY); ctx.stroke();
      }
      for (let i = 1; i <= 18; i++) {
        const t = Math.pow(i / 18, 2.4);
        const y = horizonY + (ch - horizonY) * (1 - t);
        ctx.strokeStyle = `rgba(0,126,120,${(1 - t) * 0.08 * st.tilt})`;
        ctx.lineWidth = 0.5;
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(cw, y); ctx.stroke();
      }
      // Horizon line (thin teal)
      ctx.strokeStyle = `rgba(0,168,159,${st.tilt * 0.35})`;
      ctx.lineWidth = 1;
      ctx.beginPath(); ctx.moveTo(0, horizonY); ctx.lineTo(cw, horizonY); ctx.stroke();
    } else {
      ctx.fillStyle = P.bg; ctx.fillRect(0, 0, cw, ch);
    }

    // Flat floor rectangle
    if (st.tilt < 0.1) {
      const fx = st.panX, fy = st.panY, fw = MAP_W * st.scale, fh = MAP_H * st.scale;
      ctx.fillStyle = "#122030";
      ctx.strokeStyle = "rgba(0,126,120,0.15)";
      ctx.lineWidth = 1;
      ctx.beginPath(); ctx.roundRect(fx, fy, fw, fh, 4); ctx.fill(); ctx.stroke();
      ctx.strokeStyle = "rgba(255,255,255,0.03)"; ctx.lineWidth = 0.5;
      const gs = 40 * st.scale;
      for (let gx = fx; gx < fx + fw; gx += gs) { ctx.beginPath(); ctx.moveTo(gx, fy); ctx.lineTo(gx, fy + fh); ctx.stroke(); }
      for (let gy = fy; gy < fy + fh; gy += gs) { ctx.beginPath(); ctx.moveTo(fx, gy); ctx.lineTo(fx + fw, gy); ctx.stroke(); }
    }

    // Sort far → near
    const sorted = [...BOOTHS].sort((a, b) => {
      const ax = (a.x + a.w / 2) / 100 * MAP_W - cam.x, ay = (a.y + a.h / 2) / 100 * MAP_H - cam.y;
      const bx = (b.x + b.w / 2) / 100 * MAP_W - cam.x, by = (b.y + b.h / 2) / 100 * MAP_H - cam.y;
      return (bx * bx + by * by) - (ax * ax + ay * ay);
    });

    sorted.forEach((booth) => {
      const isHov = st.hovered === booth.name;
      const col = hashColor(booth.name);
      const wx0 = (booth.x / 100) * MAP_W, wy0 = (booth.y / 100) * MAP_H;
      const wx1 = wx0 + (booth.w / 100) * MAP_W, wy1 = wy0 + (booth.h / 100) * MAP_H;

      // ── Flat 2D ──
      if (st.tilt < 0.05) {
        const bx = wx0 * st.scale + st.panX, by = wy0 * st.scale + st.panY;
        const bw = (booth.w / 100) * MAP_W * st.scale, bh = (booth.h / 100) * MAP_H * st.scale;
        ctx.fillStyle = isHov ? col.top + "cc" : col.top;
        ctx.strokeStyle = isHov ? P.cream : "rgba(255,255,255,0.15)";
        ctx.lineWidth = isHov ? 1.5 : 0.6;
        ctx.beginPath(); ctx.roundRect(bx, by, bw, bh, 2); ctx.fill(); ctx.stroke();
        const fs = Math.max(4.5, Math.min(9, bw / 8));
        ctx.fillStyle = P.cream;
        ctx.font = `700 ${fs}px 'Segoe UI', system-ui, sans-serif`;
        ctx.textAlign = "center"; ctx.textBaseline = "middle";
        wrapText(booth.name, bw - 4, fs).forEach((l, i, arr) =>
          ctx.fillText(l, bx + bw / 2, by + bh / 2 + (i - (arr.length - 1) / 2) * (fs + 1.5))
        );
        return;
      }

      // ── 3D box ──
      const pts = [
        [wx0, wy0, 0], [wx1, wy0, 0], [wx1, wy1, 0], [wx0, wy1, 0],
        [wx0, wy0, WALL_H], [wx1, wy0, WALL_H], [wx1, wy1, WALL_H], [wx0, wy1, WALL_H],
      ].map(([x, y, z]) => project(x, y, z, cw, ch));

      if (pts.every((p) => !p)) return;
      const [fl0, fl1, fl2, fl3, rf0, rf1, rf2, rf3] = pts;

      const avgDepth = pts.filter(Boolean).reduce((s, p) => s + p[2], 0) / pts.filter(Boolean).length;
      const topC  = fogHex(isHov ? col.top  : col.top,  avgDepth);
      const sideC = fogHex(isHov ? col.side : col.side, avgDepth);
      const darkC = fogHex(col.dark, avgDepth);
      const edge  = isHov ? `rgba(240,236,224,0.7)` : "rgba(255,255,255,0.18)";
      const edgeLW = isHov ? 1.2 : 0.5;

      const boothCX = (wx0 + wx1) / 2, boothCY = (wy0 + wy1) / 2;
      const relX = cam.x - boothCX, relY = cam.y - boothCY;

      function face(a, b, c, d, fill) {
        if (!a || !b || !c || !d) return;
        drawPoly(ctx, [a, b, c, d], fill, edge, edgeLW);
      }

      // Floor
      face(fl0, fl1, fl2, fl3, darkC + "33");

      // Back walls (draw first, behind)
      if (relY < 0) face(fl0, fl1, rf1, rf0, darkC);
      else          face(fl2, fl3, rf3, rf2, darkC);
      if (relX < 0) face(fl0, fl3, rf3, rf0, sideC);
      else          face(fl1, fl2, rf2, rf1, sideC);

      // Front walls (draw after, on top)
      if (relY >= 0) face(fl0, fl1, rf1, rf0, darkC);
      else           face(fl2, fl3, rf3, rf2, darkC);
      if (relX >= 0) face(fl0, fl3, rf3, rf0, sideC);
      else           face(fl1, fl2, rf2, rf1, sideC);

      // Roof — always last (highest)
      face(rf0, rf1, rf2, rf3, topC);

      // ── Roof label — perspective-correct, never flipped ──
      if (rf0 && rf1 && rf2 && rf3) {
        const topEdgeLen = Math.hypot(rf1[0] - rf0[0], rf1[1] - rf0[1]);
        const sideEdgeLen = Math.hypot(rf3[0] - rf0[0], rf3[1] - rf0[1]);
        if (topEdgeLen * sideEdgeLen > 50) {
          // Orient quad so "near" edge is p2/p3, "far" edge is p0/p1
          const p0 = cam.y < boothCY ? rf0 : rf3;
          const p1 = cam.y < boothCY ? rf1 : rf2;
          const p2 = cam.y < boothCY ? rf2 : rf1;
          const p3 = cam.y < boothCY ? rf3 : rf0;
          drawLabelOnQuad(ctx, booth.name, p0, p1, p2, p3, P.cream);
        }
      }

      // ── Most-visible wall label ──
      const wallFaces = [
        { pts: [fl0, fl1, rf1, rf0], nx: 0,  ny: -1 },
        { pts: [fl2, fl3, rf3, rf2], nx: 0,  ny:  1 },
        { pts: [fl0, fl3, rf3, rf0], nx: -1, ny:  0 },
        { pts: [fl1, fl2, rf2, rf1], nx:  1, ny:  0 },
      ];
      const camDirX = boothCX - cam.x, camDirY = boothCY - cam.y;
      const camLen = Math.hypot(camDirX, camDirY) || 1;
      let bestFace = null, bestDot = 0.2;
      wallFaces.forEach((f) => {
        const dot = (f.nx * camDirX + f.ny * camDirY) / camLen;
        if (dot > bestDot && f.pts.every(Boolean)) { bestDot = dot; bestFace = f; }
      });
      if (bestFace) {
        const [wa, wb, wc, wd] = bestFace.pts;
        drawWallLabel(ctx, booth.name, wa, wb, wc, wd, P.cream);
      }
    });
  }, [project, fitMap]);

  // ── animation loop ──────────────────────────────────────────────────────────
  const startAnim = useCallback(() => {
    const st = stateRef.current;
    cancelAnimationFrame(st.animFrame);
    const tick = () => {
      const changed = Math.abs(st.tilt - st.targetTilt) > 0.0005;
      if (changed) st.tilt += (st.targetTilt - st.tilt) * 0.08;
      else st.tilt = st.targetTilt;
      drawScene();
      if (changed) st.animFrame = requestAnimationFrame(tick);
      else st.animFrame = null;
    };
    st.animFrame = requestAnimationFrame(tick);
  }, [drawScene]);

  // ── hit test ────────────────────────────────────────────────────────────────
  const hitTest = useCallback((mx, my) => {
    const canvas = canvasRef.current;
    if (!canvas) return null;
    const cw = canvas.width, ch = canvas.height;
    const st = stateRef.current;

    function ptInPoly(px, py, pts) {
      let inside = false;
      for (let i = 0, j = pts.length - 1; i < pts.length; j = i++) {
        const xi = pts[i][0], yi = pts[i][1], xj = pts[j][0], yj = pts[j][1];
        if ((yi > py) !== (yj > py) && px < ((xj - xi) * (py - yi)) / (yj - yi) + xi) inside = !inside;
      }
      return inside;
    }

    if (st.tilt < 0.05) {
      for (let i = BOOTHS.length - 1; i >= 0; i--) {
        const b = BOOTHS[i];
        const bx = (b.x / 100) * MAP_W * st.scale + st.panX;
        const by = (b.y / 100) * MAP_H * st.scale + st.panY;
        const bw = (b.w / 100) * MAP_W * st.scale;
        const bh = (b.h / 100) * MAP_H * st.scale;
        if (mx >= bx && mx <= bx + bw && my >= by && my <= by + bh) return b;
      }
    } else {
      for (let i = BOOTHS.length - 1; i >= 0; i--) {
        const b = BOOTHS[i];
        const wx0 = (b.x / 100) * MAP_W, wy0 = (b.y / 100) * MAP_H;
        const wx1 = wx0 + (b.w / 100) * MAP_W, wy1 = wy0 + (b.h / 100) * MAP_H;
        // Roof
        const rp = [[wx0,wy0,WALL_H],[wx1,wy0,WALL_H],[wx1,wy1,WALL_H],[wx0,wy1,WALL_H]]
          .map(([x,y,z]) => project(x,y,z,cw,ch)).filter(Boolean);
        if (rp.length === 4 && ptInPoly(mx, my, rp.map(p => [p[0],p[1]]))) return b;
        // Walls
        const walls = [
          [[wx0,wy0,0],[wx1,wy0,0],[wx1,wy0,WALL_H],[wx0,wy0,WALL_H]],
          [[wx0,wy1,0],[wx1,wy1,0],[wx1,wy1,WALL_H],[wx0,wy1,WALL_H]],
          [[wx0,wy0,0],[wx0,wy1,0],[wx0,wy1,WALL_H],[wx0,wy0,WALL_H]],
          [[wx1,wy0,0],[wx1,wy1,0],[wx1,wy1,WALL_H],[wx1,wy0,WALL_H]],
        ];
        for (const wg of walls) {
          const wp = wg.map(([x,y,z]) => project(x,y,z,cw,ch)).filter(Boolean);
          if (wp.length === 4 && ptInPoly(mx, my, wp.map(p => [p[0],p[1]]))) return b;
        }
      }
    }
    return null;
  }, [project]);

  // ── canvas resize ────────────────────────────────────────────────────────────
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ro = new ResizeObserver(() => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      fitMap();
      drawScene();
    });
    ro.observe(canvas);
    canvas.width = canvas.offsetWidth || 600;
    canvas.height = canvas.offsetHeight || 520;
    fitMap();
    drawScene();
    return () => ro.disconnect();
  }, [fitMap, drawScene]);

  // ── mouse events ─────────────────────────────────────────────────────────────
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const st = stateRef.current;

    const onDown = (e) => {
      st.dragging = true;
      st.lastX = e.clientX; st.lastY = e.clientY;
      canvas.style.cursor = "grabbing";
    };
    const onUp = () => { st.dragging = false; canvas.style.cursor = "grab"; };
    const onMove = (e) => {
      const r = canvas.getBoundingClientRect();
      const mx = e.clientX - r.left, my = e.clientY - r.top;
      if (st.dragging) {
        const dx = e.clientX - st.lastX, dy = e.clientY - st.lastY;
        if (st.tilt > 0.5) { camRef.current.x -= dx * 1.4; camRef.current.y -= dy * 1.8; }
        else { st.panX += dx; st.panY += dy; }
        st.lastX = e.clientX; st.lastY = e.clientY;
        drawScene(); return;
      }
      const hit = hitTest(mx, my);
      const name = hit ? hit.name : null;
      if (name !== st.hovered) {
        st.hovered = name;
        setHovered(name);
        drawScene();
      }
      if (hit) {
        const ttx = Math.min(mx + 14, canvas.offsetWidth - 210);
        const tty = Math.max(my - 50, 8);
        if (tooltipRef.current.x !== ttx || tooltipRef.current.y !== tty) {
          tooltipRef.current = { x: ttx, y: tty };
          setTooltipPos({ x: ttx, y: tty });
        }
      }
    };
    const onLeave = () => {
      st.hovered = null; setHovered(null); drawScene();
    };
    const onWheel = (e) => {
      e.preventDefault();
      if (st.tilt > 0.5) {
        camRef.current.y = Math.max(-MAP_H * 0.5, Math.min(MAP_H * 1.5, camRef.current.y + e.deltaY * 1.1));
      } else {
        st.scale = Math.min(Math.max(0.25, st.scale + (e.deltaY > 0 ? -0.07 : 0.07)), 4);
      }
      drawScene();
    };

    canvas.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    window.addEventListener("mousemove", onMove);
    canvas.addEventListener("mouseleave", onLeave);
    canvas.addEventListener("wheel", onWheel, { passive: false });
    return () => {
      canvas.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("mousemove", onMove);
      canvas.removeEventListener("mouseleave", onLeave);
      canvas.removeEventListener("wheel", onWheel);
    };
  }, [drawScene, hitTest]);

  // ── touch events ─────────────────────────────────────────────────────────────
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const st = stateRef.current;
    let pinchDist = 0;

    const onTouchStart = (e) => {
      if (e.touches.length === 1) {
        st.dragging = true; st.lastX = e.touches[0].clientX; st.lastY = e.touches[0].clientY;
      } else if (e.touches.length === 2) {
        st.dragging = false;
        pinchDist = Math.hypot(e.touches[0].clientX - e.touches[1].clientX, e.touches[0].clientY - e.touches[1].clientY);
      }
    };
    const onTouchEnd = () => { st.dragging = false; pinchDist = 0; };
    const onTouchMove = (e) => {
      e.preventDefault();
      if (e.touches.length === 1 && st.dragging) {
        const dx = e.touches[0].clientX - st.lastX, dy = e.touches[0].clientY - st.lastY;
        if (st.tilt > 0.5) { camRef.current.x -= dx * 1.4; camRef.current.y -= dy * 1.8; }
        else { st.panX += dx; st.panY += dy; }
        st.lastX = e.touches[0].clientX; st.lastY = e.touches[0].clientY; drawScene();
      } else if (e.touches.length === 2 && pinchDist > 0) {
        const d = Math.hypot(e.touches[0].clientX - e.touches[1].clientX, e.touches[0].clientY - e.touches[1].clientY);
        if (st.tilt > 0.5) camRef.current.pitch = Math.max(0.08, Math.min(Math.PI * 0.52, camRef.current.pitch + (pinchDist - d) * 0.004));
        else st.scale = Math.min(Math.max(0.25, st.scale * d / pinchDist), 4);
        pinchDist = d; drawScene();
      }
    };

    canvas.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchend", onTouchEnd);
    canvas.addEventListener("touchmove", onTouchMove, { passive: false });
    return () => {
      canvas.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend", onTouchEnd);
      canvas.removeEventListener("touchmove", onTouchMove);
    };
  }, [drawScene]);

  // ── 3D / Flat toggle handlers ────────────────────────────────────────────────
  const enter3D = () => {
    const st = stateRef.current;
    st.targetTilt = 1; st.is3d = true;
    camRef.current = { x: MAP_W * 0.5, y: -MAP_H * 0.2, z: 200, yaw: 0, pitch: Math.PI * 0.38 };
    setIs3d(true);
    startAnim();
  };
  const exit3D = () => {
    const st = stateRef.current;
    st.targetTilt = 0; st.is3d = false; st.hovered = null;
    setIs3d(false); setHovered(null);
    fitMap(); startAnim();
  };
  const cam = (fn) => { fn(camRef.current); drawScene(); };

  // ── Styles ──────────────────────────────────────────────────────────────────
  const btnBase = {
    background: "rgba(30,73,118,0.55)",
    backdropFilter: "blur(8px)",
    border: `1px solid rgba(0,126,120,0.4)`,
    color: P.cream,
    borderRadius: 24,
    cursor: "pointer",
    fontWeight: 700,
    fontSize: 12,
    padding: "7px 15px",
    display: "flex",
    alignItems: "center",
    gap: 5,
    transition: "background 0.15s",
    whiteSpace: "nowrap",
    fontFamily: "'Segoe UI', system-ui, sans-serif",
  };
  const btnHov = { background: "rgba(0,126,120,0.55)" };
  const BtnEl = ({ children, onClick, style = {} }) => {
    const [over, setOver] = useState(false);
    return (
      <button
        onClick={onClick}
        onMouseEnter={() => setOver(true)}
        onMouseLeave={() => setOver(false)}
        style={{ ...btnBase, ...(over ? btnHov : {}), ...style }}
      >
        {children}
      </button>
    );
  };

  return (
    <div style={{ width: "100%", height: 520, position: "relative", background: P.bg, borderRadius: 8, overflow: "hidden" }}>
      {/* Canvas */}
      <canvas
        ref={canvasRef}
        style={{ width: "100%", height: "100%", display: "block", cursor: "grab" }}
      />

      {/* Controls */}
      <div style={{ position: "absolute", bottom: 16, left: "50%", transform: "translateX(-50%)", display: "flex", gap: 8, zIndex: 20, alignItems: "center" }}>
        {!is3d ? (
          <BtnEl onClick={enter3D} style={{ background: "rgba(30,73,118,0.8)", border: "1px solid rgba(0,168,159,0.55)", fontSize: 13 }}>
            ⬛ 3D View
          </BtnEl>
        ) : (
          <>
            <BtnEl onClick={() => cam(c => c.yaw -= 0.15)} style={{ padding: "7px 12px" }}>◀</BtnEl>
            <BtnEl onClick={() => cam(c => c.y -= 30)} style={{ padding: "7px 12px" }}>▲</BtnEl>
            <BtnEl onClick={() => cam(c => c.pitch = Math.max(0.08, c.pitch - 0.07))} style={{ fontSize: 11 }}>↑ tilt</BtnEl>
            <BtnEl onClick={exit3D} style={{ background: "rgba(224,72,72,0.3)", border: "1px solid rgba(224,72,72,0.55)" }}>✕ Exit 3D</BtnEl>
            <BtnEl onClick={() => cam(c => c.pitch = Math.min(Math.PI * 0.52, c.pitch + 0.07))} style={{ fontSize: 11 }}>↓ tilt</BtnEl>
            <BtnEl onClick={() => cam(c => c.y += 30)} style={{ padding: "7px 12px" }}>▼</BtnEl>
            <BtnEl onClick={() => cam(c => c.yaw += 0.15)} style={{ padding: "7px 12px" }}>▶</BtnEl>
          </>
        )}
      </div>

      {/* Hover tooltip */}
      {hovered && (
        <div
          style={{
            position: "absolute",
            left: tooltipPos.x,
            top: tooltipPos.y,
            background: "rgba(67, 138, 209, 0.97)",
            border: `1px solid ${P.teal}`,
            borderRadius: 8,
            padding: "7px 13px",
            color: P.cream,
            fontSize: 12,
            fontWeight: 700,
            maxWidth: 200,
            pointerEvents: "none",
            zIndex: 50,
            textAlign: "center",
            wordBreak: "break-word",
            boxShadow: `0 2px 12px rgba(0,126,120,0.3)`,
          }}
        >
          {hovered}
        </div>
      )}
    </div>
  );
}
