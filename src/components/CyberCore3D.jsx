import { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment } from '@react-three/drei';
import * as THREE from 'three';

function PrecisionCore({ isMobile }) {
  const groupRef = useRef();
  const outerRingRef = useRef();
  const innerRingRef = useRef();
  const scrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      scrollY.current = window.scrollY || 0;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const particlesGeometry = useMemo(() => {
    const count = isMobile ? 90 : 220;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 2.8 + Math.random() * 4.2;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    return geo;
  }, [isMobile]);

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();
    const scrollFactor = Math.min(scrollY.current / 900, 1.5);

    if (groupRef.current) {
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        t * 0.18 + scrollFactor * 1.4,
        0.06
      );
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        Math.sin(t * 0.25) * 0.15 + scrollFactor * 0.55,
        0.06
      );
      groupRef.current.position.y = THREE.MathUtils.lerp(
        groupRef.current.position.y,
        -scrollFactor * 0.65,
        0.06
      );
    }

    if (outerRingRef.current) {
      outerRingRef.current.rotation.z += delta * 0.22;
      outerRingRef.current.rotation.x = Math.PI / 3 + Math.sin(t * 0.4) * 0.1;
    }

    if (innerRingRef.current) {
      innerRingRef.current.rotation.z -= delta * 0.35;
      innerRingRef.current.rotation.y += delta * 0.2;
    }
  });

  return (
    <group ref={groupRef} scale={isMobile ? 0.78 : 1.08}>
      <Float speed={1.4} rotationIntensity={0.25} floatIntensity={0.45}>
        {/* Fırçalanmış Titanyum Çekirdek */}
        <mesh>
          <icosahedronGeometry args={[1.05, isMobile ? 1 : 2]} />
          <meshStandardMaterial
            color="#1e293b"
            metalness={0.92}
            roughness={0.18}
            flatShading
          />
        </mesh>

        {/* İnce Tel Kafes Katmanı */}
        <mesh scale={1.08}>
          <icosahedronGeometry args={[1.05, 1]} />
          <meshBasicMaterial color="#38bdf8" wireframe transparent opacity={0.22} />
        </mesh>

        {/* Dış Yörünge Halkası */}
        <mesh ref={outerRingRef}>
          <torusGeometry args={[1.9, 0.022, 16, isMobile ? 48 : 96]} />
          <meshStandardMaterial
            color="#cbd5e1"
            metalness={0.95}
            roughness={0.12}
          />
        </mesh>

        {/* İç Hassas Halka */}
        <mesh ref={innerRingRef}>
          <torusGeometry args={[1.48, 0.014, 16, isMobile ? 40 : 80]} />
          <meshStandardMaterial
            color="#38bdf8"
            emissive="#0284c7"
            emissiveIntensity={0.65}
            metalness={0.85}
            roughness={0.2}
          />
        </mesh>
      </Float>

      {/* İnce Veri Parçacıkları */}
      <points geometry={particlesGeometry}>
        <pointsMaterial
          size={isMobile ? 0.032 : 0.026}
          color="#94a3b8"
          transparent
          opacity={0.55}
          sizeAttenuation
        />
      </points>
    </group>
  );
}

export default function CyberCore3D() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 opacity-85"
      aria-hidden="true"
    >
      <Canvas
        dpr={isMobile ? [1, 1.35] : [1, 2]}
        camera={{ position: [0, 0, 5.4], fov: 42 }}
        gl={{ antialias: !isMobile, powerPreference: 'high-performance', alpha: true }}
      >
        <ambientLight intensity={0.45} />
        <directionalLight position={[5, 6, 5]} intensity={1.6} color="#e0f2fe" />
        <pointLight position={[-5, -4, -3]} intensity={1.1} color="#38bdf8" />
        <PrecisionCore isMobile={isMobile} />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}