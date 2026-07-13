import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';

/*
 * Brand hexes duplicated here intentionally: Three.js materials can't read
 * CSS custom properties. These mirror --color-navy-800 / --color-gold-500 /
 * --color-gold-400 in src/styles/global.css — keep in sync.
 */
const NAVY = '#0f2a4a';
const GOLD = '#c9a24b';
const GOLD_BRIGHT = '#d4af37';

function FacetedGem() {
  const groupRef = useRef();

  // Slow auto-rotate + mouse parallax. Pointer is read inside useFrame
  // (not React state) — zero re-renders, the loop runs on the GL clock.
  useFrame((state, delta) => {
    const g = groupRef.current;
    if (!g) return;
    g.rotation.y += delta * 0.15; // ~24s per revolution — deliberate, not busy
    // Damped lerp toward pointer for parallax; small factor = subtle drift
    g.rotation.x += (state.pointer.y * 0.25 - g.rotation.x) * 0.04;
    g.position.x += (state.pointer.x * 0.35 - g.position.x) * 0.04;
  });

  return (
    <group ref={groupRef}>
      {/* Detail 0 keeps the icosahedron's 20 flat facets — flatShading gives
          each face a distinct catch of the gold rim light */}
      <mesh>
        <icosahedronGeometry args={[1.6, 0]} />
        <meshStandardMaterial color={NAVY} metalness={0.85} roughness={0.25} flatShading />
      </mesh>
      {/* Slightly inflated gold wireframe overlay — reads as a hairline
          gold edge treatment, matching the site's divider language */}
      <mesh scale={1.004}>
        <icosahedronGeometry args={[1.6, 0]} />
        <meshBasicMaterial color={GOLD} wireframe transparent opacity={0.35} />
      </mesh>
    </group>
  );
}

/**
 * Default-exported so Hero can React.lazy() it — three/fiber/drei stay out
 * of the initial bundle (see manualChunks in vite.config.js).
 */
export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5.5], fov: 42 }}
      dpr={[1, 1.75]} // cap DPR: retina-sharp without melting mobile GPUs
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      aria-hidden="true" // decorative — screen readers skip it
    >
      {/* Low ambient keeps the navy body dark; the two gold-tinted lights
          create the rim-light effect from opposite back angles */}
      <ambientLight intensity={0.25} />
      <directionalLight position={[4, 3, -2]} color={GOLD_BRIGHT} intensity={2.2} />
      <pointLight position={[-4, -2, 3]} color={GOLD} intensity={0.6} />
      <Float speed={1.2} rotationIntensity={0.3} floatIntensity={0.6}>
        <FacetedGem />
      </Float>
    </Canvas>
  );
}
