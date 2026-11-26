import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export type SceneMode = 'torus' | 'neural' | 'wave';

interface ThreeCanvasProps {
  mode?: SceneMode;
  themeColor?: string;
}

export const ThreeCanvas: React.FC<ThreeCanvasProps> = ({
  mode = 'torus',
  themeColor = '#38bdf8'
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 24;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Color conversion
    const primaryColor = new THREE.Color(themeColor);
    const secondaryColor = new THREE.Color('#a855f7');

    // Group for mouse parallax
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // Objects references for animation
    let torusMesh: THREE.Mesh | null = null;
    let torusWire: THREE.LineSegments | null = null;
    let particleSystem: THREE.Points | null = null;
    let linesMesh: THREE.LineSegments | null = null;
    let waveMesh: THREE.Mesh | null = null;
    let waveGeometry: THREE.PlaneGeometry | null = null;

    // Build Scene by Mode
    if (mode === 'torus') {
      // 1. Torus Knot
      const geometry = new THREE.TorusKnotGeometry(6.5, 1.8, 120, 24, 2, 3);
      const wireframeGeom = new THREE.WireframeGeometry(geometry);
      
      const wireMaterial = new THREE.LineBasicMaterial({
        color: primaryColor,
        transparent: true,
        opacity: 0.35,
        blending: THREE.AdditiveBlending
      });
      torusWire = new THREE.LineSegments(wireframeGeom, wireMaterial);
      mainGroup.add(torusWire);

      const solidMaterial = new THREE.MeshBasicMaterial({
        color: 0x050c18,
        transparent: true,
        opacity: 0.8
      });
      torusMesh = new THREE.Mesh(geometry, solidMaterial);
      mainGroup.add(torusMesh);

      // 2. Surrounding 3D Particle Cloud
      const particleCount = 700;
      const particleGeo = new THREE.BufferGeometry();
      const positions = new Float32Array(particleCount * 3);
      const colors = new Float32Array(particleCount * 3);

      for (let i = 0; i < particleCount; i++) {
        const r = 10 + Math.random() * 18;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(Math.random() * 2 - 1);

        positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
        positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
        positions[i * 3 + 2] = r * Math.cos(phi);

        const mixRatio = Math.random();
        const c = primaryColor.clone().lerp(secondaryColor, mixRatio);
        colors[i * 3] = c.r;
        colors[i * 3 + 1] = c.g;
        colors[i * 3 + 2] = c.b;
      }

      particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      particleGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

      const particleMat = new THREE.PointsMaterial({
        size: 0.18,
        vertexColors: true,
        transparent: true,
        opacity: 0.75,
        blending: THREE.AdditiveBlending
      });

      particleSystem = new THREE.Points(particleGeo, particleMat);
      mainGroup.add(particleSystem);
    } else if (mode === 'neural') {
      // Neural Constellation: Points + Dynamic Connecting Lines
      const nodeCount = 120;
      const positions = new Float32Array(nodeCount * 3);
      const velocities: THREE.Vector3[] = [];

      for (let i = 0; i < nodeCount; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 36;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 26;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 20;

        velocities.push(
          new THREE.Vector3(
            (Math.random() - 0.5) * 0.03,
            (Math.random() - 0.5) * 0.03,
            (Math.random() - 0.5) * 0.03
          )
        );
      }

      const pGeom = new THREE.BufferGeometry();
      pGeom.setAttribute('position', new THREE.BufferAttribute(positions, 3));

      const pMat = new THREE.PointsMaterial({
        color: primaryColor,
        size: 0.35,
        transparent: true,
        opacity: 0.85,
        blending: THREE.AdditiveBlending
      });

      particleSystem = new THREE.Points(pGeom, pMat);
      mainGroup.add(particleSystem);

      // Lines connecting nodes within threshold
      const lineGeom = new THREE.BufferGeometry();
      const lineMat = new THREE.LineBasicMaterial({
        color: primaryColor,
        transparent: true,
        opacity: 0.22,
        blending: THREE.AdditiveBlending
      });

      linesMesh = new THREE.LineSegments(lineGeom, lineMat);
      mainGroup.add(linesMesh);

      // Store velocities for update loop
      (mainGroup as unknown as { velocities: THREE.Vector3[] }).velocities = velocities;
    } else if (mode === 'wave') {
      // Undulating Cyber Wave Grid
      waveGeometry = new THREE.PlaneGeometry(50, 40, 48, 38);
      const waveMaterial = new THREE.MeshBasicMaterial({
        color: primaryColor,
        wireframe: true,
        transparent: true,
        opacity: 0.35
      });
      waveMesh = new THREE.Mesh(waveGeometry, waveMaterial);
      waveMesh.rotation.x = -Math.PI / 2.5;
      waveMesh.position.y = -6;
      mainGroup.add(waveMesh);

      // Floating points above wave
      const sparkCount = 300;
      const sparkGeom = new THREE.BufferGeometry();
      const sparkPos = new Float32Array(sparkCount * 3);
      for (let i = 0; i < sparkCount; i++) {
        sparkPos[i * 3] = (Math.random() - 0.5) * 45;
        sparkPos[i * 3 + 1] = Math.random() * 12 - 4;
        sparkPos[i * 3 + 2] = (Math.random() - 0.5) * 35;
      }
      sparkGeom.setAttribute('position', new THREE.BufferAttribute(sparkPos, 3));
      const sparkMat = new THREE.PointsMaterial({
        color: secondaryColor,
        size: 0.22,
        transparent: true,
        opacity: 0.8
      });
      particleSystem = new THREE.Points(sparkGeom, sparkMat);
      mainGroup.add(particleSystem);
    }

    // Mouse Parallax Interaction
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const onMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      targetX = ((e.clientX / innerWidth) * 2 - 1) * 0.4;
      targetY = (-(e.clientY / innerHeight) * 2 + 1) * 0.4;
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth camera dampening
      currentX += (targetX - currentX) * 0.05;
      currentY += (targetY - currentY) * 0.05;

      mainGroup.rotation.y = currentX * 0.6;
      mainGroup.rotation.x = -currentY * 0.6;

      if (mode === 'torus') {
        if (torusWire && torusMesh) {
          torusWire.rotation.x = elapsedTime * 0.2;
          torusWire.rotation.y = elapsedTime * 0.25;
          torusMesh.rotation.x = elapsedTime * 0.2;
          torusMesh.rotation.y = elapsedTime * 0.25;
        }
        if (particleSystem) {
          particleSystem.rotation.y = -elapsedTime * 0.08;
          particleSystem.rotation.x = elapsedTime * 0.04;
        }
      } else if (mode === 'neural' && particleSystem && linesMesh) {
        // Move neural nodes & update connections
        const positions = particleSystem.geometry.attributes.position.array as Float32Array;
        const velocities = (mainGroup as unknown as { velocities: THREE.Vector3[] }).velocities;
        const count = positions.length / 3;

        for (let i = 0; i < count; i++) {
          positions[i * 3] += velocities[i].x;
          positions[i * 3 + 1] += velocities[i].y;
          positions[i * 3 + 2] += velocities[i].z;

          // Bounce back
          if (Math.abs(positions[i * 3]) > 18) velocities[i].x *= -1;
          if (Math.abs(positions[i * 3 + 1]) > 13) velocities[i].y *= -1;
          if (Math.abs(positions[i * 3 + 2]) > 10) velocities[i].z *= -1;
        }
        particleSystem.geometry.attributes.position.needsUpdate = true;

        // Build connection segments
        const linePositions: number[] = [];
        const maxDist = 5.5;
        for (let i = 0; i < count; i++) {
          for (let j = i + 1; j < count; j++) {
            const dx = positions[i * 3] - positions[j * 3];
            const dy = positions[i * 3 + 1] - positions[j * 3 + 1];
            const dz = positions[i * 3 + 2] - positions[j * 3 + 2];
            const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

            if (dist < maxDist) {
              linePositions.push(
                positions[i * 3], positions[i * 3 + 1], positions[i * 3 + 2],
                positions[j * 3], positions[j * 3 + 1], positions[j * 3 + 2]
              );
            }
          }
        }
        linesMesh.geometry.setAttribute(
          'position',
          new THREE.Float32BufferAttribute(linePositions, 3)
        );
      } else if (mode === 'wave' && waveGeometry) {
        // Undulate wave vertices
        const pos = waveGeometry.attributes.position;
        const vertex = new THREE.Vector3();
        for (let i = 0; i < pos.count; i++) {
          vertex.fromBufferAttribute(pos, i);
          const u = vertex.x * 0.15 + elapsedTime * 1.2;
          const v = vertex.y * 0.15 + elapsedTime * 0.9;
          const z = Math.sin(u) * Math.cos(v) * 2.2;
          pos.setZ(i, z);
        }
        pos.needsUpdate = true;

        if (particleSystem) {
          particleSystem.rotation.y = elapsedTime * 0.05;
        }
      }

      renderer.render(scene, camera);
    };

    animate();

    // Resize handler
    const handleResize = () => {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }

      // Dispose resources
      scene.clear();
      renderer.dispose();
    };
  }, [mode, themeColor]);

  return (
    <div
      ref={containerRef}
      style={{
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        pointerEvents: 'none',
        overflow: 'hidden'
      }}
    />
  );
};
