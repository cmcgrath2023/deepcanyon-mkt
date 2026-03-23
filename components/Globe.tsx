"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

const GLOBE_RADIUS = 1.8;
const WIRE_COLOR = 0x408a71; // Canyon Bright
const WIRE_BRIGHT = 0x6ab89a; // Canyon Light
const ACCENT_LIME = 0xbcfd49; // Lime accent

// 4 major trading centers
const CENTERS: { name: string; lat: number; lng: number; color: number }[] = [
  { name: "New York", lat: 40.7128, lng: -74.006, color: 0xd4a843 },
  { name: "London", lat: 51.5074, lng: -0.1278, color: 0x5b8fa8 },
  { name: "Tokyo", lat: 35.6762, lng: 139.6503, color: 0xc47a6e },
  { name: "Sydney", lat: -33.8688, lng: 151.2093, color: 0x8b7eaf },
];

// All connections between the 4 centers
const CONNECTIONS = [
  [0, 1], // NY - London
  [1, 2], // London - Tokyo
  [2, 3], // Tokyo - Sydney
  [0, 2], // NY - Tokyo
  [1, 3], // London - Sydney
  [0, 3], // NY - Sydney
];

function latLngToVec3(lat: number, lng: number, r: number): THREE.Vector3 {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);
  return new THREE.Vector3(
    -r * Math.sin(phi) * Math.cos(theta),
    r * Math.cos(phi),
    r * Math.sin(phi) * Math.sin(theta)
  );
}

/** Build a ring of points for a latitude line */
function latitudeRing(lat: number, r: number, segments: number): THREE.Vector3[] {
  const points: THREE.Vector3[] = [];
  const phi = (90 - lat) * (Math.PI / 180);
  const ringR = r * Math.sin(phi);
  const y = r * Math.cos(phi);
  for (let i = 0; i <= segments; i++) {
    const theta = (i / segments) * Math.PI * 2;
    points.push(new THREE.Vector3(ringR * Math.cos(theta), y, ringR * Math.sin(theta)));
  }
  return points;
}

/** Build a great circle (longitude line) at a given angle */
function longitudeRing(lng: number, r: number, segments: number): THREE.Vector3[] {
  const points: THREE.Vector3[] = [];
  const theta = (lng + 180) * (Math.PI / 180);
  for (let i = 0; i <= segments; i++) {
    const phi = (i / segments) * Math.PI;
    points.push(
      new THREE.Vector3(
        -r * Math.sin(phi) * Math.cos(theta),
        r * Math.cos(phi),
        r * Math.sin(phi) * Math.sin(theta)
      )
    );
  }
  return points;
}

/** Build a tilted great circle */
function tiltedGreatCircle(
  tiltAxis: THREE.Vector3,
  tiltAngle: number,
  r: number,
  segments: number
): THREE.Vector3[] {
  const points: THREE.Vector3[] = [];
  const quat = new THREE.Quaternion().setFromAxisAngle(tiltAxis, tiltAngle);
  for (let i = 0; i <= segments; i++) {
    const phi = (i / segments) * Math.PI * 2;
    const p = new THREE.Vector3(r * Math.cos(phi), 0, r * Math.sin(phi));
    p.applyQuaternion(quat);
    points.push(p);
  }
  return points;
}

export default function Globe() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 1000);
    camera.position.set(0, 0, 5.2);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    const world = new THREE.Group();
    world.rotation.x = 0.15;
    world.rotation.y = -0.5;
    scene.add(world);

    const wireMat = new THREE.LineBasicMaterial({
      color: WIRE_COLOR,
      transparent: true,
      opacity: 0.35,
    });

    const wireBrightMat = new THREE.LineBasicMaterial({
      color: WIRE_BRIGHT,
      transparent: true,
      opacity: 0.15,
    });

    const segments = 80;

    // --- Latitude lines ---
    for (let lat = -75; lat <= 75; lat += 15) {
      const pts = latitudeRing(lat, GLOBE_RADIUS, segments);
      const geo = new THREE.BufferGeometry().setFromPoints(pts);
      world.add(new THREE.Line(geo, wireMat));
    }

    // --- Longitude lines ---
    for (let lng = -180; lng < 180; lng += 15) {
      const pts = longitudeRing(lng, GLOBE_RADIUS, segments);
      const geo = new THREE.BufferGeometry().setFromPoints(pts);
      world.add(new THREE.Line(geo, wireMat));
    }

    // --- Tilted great circles for the geodesic criss-cross pattern ---
    const xAxis = new THREE.Vector3(1, 0, 0);
    const zAxis = new THREE.Vector3(0, 0, 1);
    const diagAxis1 = new THREE.Vector3(1, 0, 1).normalize();
    const diagAxis2 = new THREE.Vector3(1, 0, -1).normalize();

    for (let angle = -60; angle <= 60; angle += 20) {
      const rad = (angle * Math.PI) / 180;
      world.add(
        new THREE.Line(
          new THREE.BufferGeometry().setFromPoints(
            tiltedGreatCircle(xAxis, rad, GLOBE_RADIUS, segments)
          ),
          wireBrightMat
        )
      );
      world.add(
        new THREE.Line(
          new THREE.BufferGeometry().setFromPoints(
            tiltedGreatCircle(zAxis, rad, GLOBE_RADIUS, segments)
          ),
          wireBrightMat
        )
      );
      world.add(
        new THREE.Line(
          new THREE.BufferGeometry().setFromPoints(
            tiltedGreatCircle(diagAxis1, rad, GLOBE_RADIUS, segments)
          ),
          wireBrightMat
        )
      );
      world.add(
        new THREE.Line(
          new THREE.BufferGeometry().setFromPoints(
            tiltedGreatCircle(diagAxis2, rad, GLOBE_RADIUS, segments)
          ),
          wireBrightMat
        )
      );
    }

    // --- Lime accent dots at lat/lng intersections ---
    const intersectionPositions: number[] = [];
    for (let lat = -60; lat <= 60; lat += 30) {
      for (let lng = -180; lng < 180; lng += 30) {
        const v = latLngToVec3(lat, lng, GLOBE_RADIUS * 1.005);
        intersectionPositions.push(v.x, v.y, v.z);
      }
    }
    const accentGeo = new THREE.BufferGeometry();
    accentGeo.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(intersectionPositions, 3)
    );
    world.add(
      new THREE.Points(
        accentGeo,
        new THREE.PointsMaterial({
          color: ACCENT_LIME,
          size: 0.025,
          sizeAttenuation: true,
          transparent: true,
          opacity: 0.4,
        })
      )
    );

    // --- Atmosphere glow ---
    world.add(
      new THREE.Mesh(
        new THREE.SphereGeometry(GLOBE_RADIUS * 1.06, 64, 64),
        new THREE.MeshBasicMaterial({
          color: WIRE_COLOR,
          transparent: true,
          opacity: 0.06,
          side: THREE.BackSide,
        })
      )
    );

    // --- Trading center points ---
    const cityVecs = CENTERS.map((c) =>
      latLngToVec3(c.lat, c.lng, GLOBE_RADIUS)
    );

    CENTERS.forEach((c, i) => {
      const dot = new THREE.Mesh(
        new THREE.SphereGeometry(0.035, 12, 12),
        new THREE.MeshBasicMaterial({ color: c.color })
      );
      dot.position.copy(cityVecs[i]);
      world.add(dot);

      const glow = new THREE.Mesh(
        new THREE.SphereGeometry(0.07, 12, 12),
        new THREE.MeshBasicMaterial({
          color: c.color,
          transparent: true,
          opacity: 0.15,
        })
      );
      glow.position.copy(cityVecs[i]);
      world.add(glow);

      const ring = new THREE.Mesh(
        new THREE.RingGeometry(0.06, 0.08, 24),
        new THREE.MeshBasicMaterial({
          color: c.color,
          transparent: true,
          opacity: 0.3,
          side: THREE.DoubleSide,
        })
      );
      ring.position.copy(cityVecs[i]);
      ring.lookAt(new THREE.Vector3(0, 0, 0));
      world.add(ring);
    });

    // --- Trade arc lines with animated pulses ---
    interface ArcMeta {
      curve: THREE.QuadraticBezierCurve3;
      progress: number;
      speed: number;
      color: number;
      trail: THREE.Line;
    }
    const arcs: ArcMeta[] = [];
    const pulseDots: THREE.Mesh[] = [];

    CONNECTIONS.forEach(([i, j]) => {
      const a = cityVecs[i];
      const b = cityVecs[j];
      const mid = new THREE.Vector3().addVectors(a, b).multiplyScalar(0.5);
      const dist = a.distanceTo(b);
      mid.normalize().multiplyScalar(GLOBE_RADIUS + dist * 0.4);
      const curve = new THREE.QuadraticBezierCurve3(a, mid, b);

      const pts = curve.getPoints(64);
      const lineGeo = new THREE.BufferGeometry().setFromPoints(pts);
      const line = new THREE.Line(
        lineGeo,
        new THREE.LineBasicMaterial({
          color: 0x408a71,
          transparent: true,
          opacity: 0.2,
        })
      );
      world.add(line);

      const trailPts = curve.getPoints(64);
      const trailGeo = new THREE.BufferGeometry().setFromPoints(trailPts);
      const trail = new THREE.Line(
        trailGeo,
        new THREE.LineBasicMaterial({
          color: CENTERS[i].color,
          transparent: true,
          opacity: 0.6,
        })
      );
      world.add(trail);

      const color = CENTERS[i].color;
      const pulse = new THREE.Mesh(
        new THREE.SphereGeometry(0.02, 8, 8),
        new THREE.MeshBasicMaterial({
          color,
          transparent: true,
          opacity: 0.9,
        })
      );
      world.add(pulse);
      pulseDots.push(pulse);

      arcs.push({
        curve,
        progress: Math.random(),
        speed: 0.003 + Math.random() * 0.004,
        color,
        trail,
      });
    });

    // --- Resize ---
    function resize() {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    }
    resize();
    window.addEventListener("resize", resize);

    // --- Mouse ---
    let targetRotX = 0.15;
    let targetRotY = -0.5;
    function onMouseMove(e: MouseEvent) {
      const rect = container!.getBoundingClientRect();
      const mx = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      const my = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
      targetRotX = 0.15 + my * 0.3;
      targetRotY = -0.5 + mx * 0.5;
    }
    container.addEventListener("mousemove", onMouseMove);

    // --- Animate ---
    let animId: number;
    let autoRot = 0;

    function animate() {
      animId = requestAnimationFrame(animate);

      autoRot += 0.003;
      world.rotation.x += (targetRotX - world.rotation.x) * 0.02;
      world.rotation.y += (targetRotY + autoRot - world.rotation.y) * 0.02;

      arcs.forEach((arc, idx) => {
        arc.progress = (arc.progress + arc.speed) % 1;
        const pos = arc.curve.getPoint(arc.progress);
        pulseDots[idx].position.copy(pos);

        const fade = Math.sin(arc.progress * Math.PI);
        (pulseDots[idx].material as THREE.MeshBasicMaterial).opacity =
          fade * 0.9;

        const trailLen = 0.15;
        const start = Math.max(0, arc.progress - trailLen);
        const end = arc.progress;
        const trailPts: THREE.Vector3[] = [];
        const steps = 20;
        for (let s = 0; s <= steps; s++) {
          const t = start + (s / steps) * (end - start);
          trailPts.push(arc.curve.getPoint(Math.min(1, Math.max(0, t))));
        }
        arc.trail.geometry.dispose();
        arc.trail.geometry = new THREE.BufferGeometry().setFromPoints(trailPts);
        (arc.trail.material as THREE.LineBasicMaterial).opacity = fade * 0.5;
      });

      renderer.render(scene, camera);
    }
    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      container.removeEventListener("mousemove", onMouseMove);
      renderer.dispose();
      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-full"
      aria-hidden="true"
    />
  );
}
