'use client';

import { Canvas, useFrame, useThree } from '@react-three/fiber';
import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type MutableRefObject,
} from 'react';
import * as THREE from 'three';

const PARTICLE_COUNT = 1500;

const vertexShader = `
  uniform float uTime;
  uniform float uPixelRatio;
  uniform float uScroll;
  uniform vec2 uPointer;

  attribute float aSize;
  attribute float aAccent;
  attribute float aPhase;

  varying float vAlpha;
  varying float vAccent;

  void main() {
    vec3 particlePosition = position;
    particlePosition.x += sin(uTime * 0.24 + aPhase) * 0.012;
    particlePosition.y += cos(uTime * 0.2 + aPhase) * 0.012;
    particlePosition *= 1.0 + uScroll * 0.025;

    vec4 viewPosition = modelViewMatrix * vec4(particlePosition, 1.0);
    vec4 projectedPosition = projectionMatrix * viewPosition;
    vec2 screenPosition = projectedPosition.xy / projectedPosition.w;
    vec2 pointerDelta = screenPosition - uPointer;
    float pointerDistance = length(pointerDelta);
    float pointerInfluence = 1.0 - smoothstep(0.0, 0.28, pointerDistance);
    vec2 pushDirection = normalize(pointerDelta + vec2(0.0001));

    projectedPosition.xy += pushDirection * pointerInfluence * 0.035 * projectedPosition.w;
    gl_Position = projectedPosition;
    gl_PointSize = clamp(aSize * uPixelRatio * 5.0 / max(1.0, -viewPosition.z), 2.2, 6.0);

    float light = max(dot(normalize(position), normalize(vec3(-0.4, 0.7, 1.0))), 0.0);
    vAlpha = clamp(0.58 + light * 0.32 + uScroll * 0.06, 0.55, 0.96);
    vAccent = max(aAccent, pointerInfluence * 0.92);
  }
`;

const fragmentShader = `
  uniform vec3 uInkColor;
  uniform vec3 uAccentColor;

  varying float vAlpha;
  varying float vAccent;

  void main() {
    float radius = length(gl_PointCoord - vec2(0.5));
    float edge = 1.0 - smoothstep(0.32, 0.5, radius);
    float core = 1.0 - smoothstep(0.0, 0.34, radius);

    vec3 particleColor = mix(uInkColor, uAccentColor, clamp(vAccent, 0.0, 1.0));
    particleColor = mix(particleColor, vec3(1.0), core * vAccent * 0.14);
    gl_FragColor = vec4(particleColor, edge * vAlpha);

    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }
`;

function ParticleCloud({
  pointer,
}: {
  pointer: MutableRefObject<THREE.Vector2>;
}) {
  const pointsRef = useRef<THREE.Group>(null);
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  const { viewport } = useThree();

  const geometry = useMemo(() => {
    const positions = new Float32Array(PARTICLE_COUNT * 3);
    const sizes = new Float32Array(PARTICLE_COUNT);
    const accents = new Float32Array(PARTICLE_COUNT);
    const phases = new Float32Array(PARTICLE_COUNT);
    const goldenAngle = Math.PI * (3 - Math.sqrt(5));

    for (let index = 0; index < PARTICLE_COUNT; index += 1) {
      const vertical = 1 - (index / (PARTICLE_COUNT - 1)) * 2;
      const ringRadius = Math.sqrt(1 - vertical * vertical);
      const angle = goldenAngle * index;
      const radius = 1.15 + Math.random() * 0.22;

      positions[index * 3] = Math.cos(angle) * ringRadius * radius;
      positions[index * 3 + 1] = vertical * radius;
      positions[index * 3 + 2] = Math.sin(angle) * ringRadius * radius;
      sizes[index] = 1.8 + Math.random() * 1.8;
      accents[index] = Math.random() > 0.94 ? 0.82 + Math.random() * 0.18 : 0;
      phases[index] = Math.random() * Math.PI * 2;
    }

    const bufferGeometry = new THREE.BufferGeometry();
    bufferGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(positions, 3),
    );
    bufferGeometry.setAttribute('aSize', new THREE.BufferAttribute(sizes, 1));
    bufferGeometry.setAttribute(
      'aAccent',
      new THREE.BufferAttribute(accents, 1),
    );
    bufferGeometry.setAttribute(
      'aPhase',
      new THREE.BufferAttribute(phases, 1),
    );
    bufferGeometry.computeBoundingSphere();

    return bufferGeometry;
  }, []);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uPixelRatio: { value: 1 },
      uScroll: { value: 0 },
      uPointer: { value: new THREE.Vector2(10, 10) },
      // #0D9488 -> sRGB vec3(0.051, 0.580, 0.533); THREE.Color converts it for the shader.
      uInkColor: { value: new THREE.Color('#0D9488') },
      // #EAB308 -> sRGB vec3(0.918, 0.702, 0.031); darker gold holds contrast on white.
      uAccentColor: { value: new THREE.Color('#EAB308') },
    }),
    [],
  );

  useFrame(({ clock, gl }, delta) => {
    const material = materialRef.current;
    if (!material) return;

    material.uniforms.uTime.value = clock.elapsedTime;
    material.uniforms.uPixelRatio.value = gl.getPixelRatio();
    material.uniforms.uPointer.value.lerp(
      pointer.current,
      1 - Math.exp(-delta * 7),
    );

    const scrollRange = Math.max(
      1,
      document.documentElement.scrollHeight - window.innerHeight,
    );
    const scrollProgress = window.scrollY / scrollRange;
    material.uniforms.uScroll.value = scrollProgress;

    if (pointsRef.current) {
      pointsRef.current.position.x = Math.min(2.35, viewport.width * 0.55);
      pointsRef.current.position.y = viewport.width < 5 ? -1.15 : 0;
      pointsRef.current.rotation.y = clock.elapsedTime * 0.055 + scrollProgress * 0.6;
      pointsRef.current.rotation.x =
        Math.sin(clock.elapsedTime * 0.12) * 0.06 + scrollProgress * 0.2;
    }
  });

  return (
    <group ref={pointsRef}>
      <points geometry={geometry}>
        <shaderMaterial
          ref={materialRef}
          uniforms={uniforms}
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          transparent
          depthWrite={false}
          blending={THREE.NormalBlending}
          toneMapped={false}
        />
      </points>
    </group>
  );
}

export default function ParticleField() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pointer = useRef(new THREE.Vector2(10, 10));
  const [isVisible, setIsVisible] = useState(false);
  const [motionAllowed, setMotionAllowed] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const motionPreference = window.matchMedia(
      '(prefers-reduced-motion: no-preference)',
    );
    const updateMotionPreference = () => {
      setMotionAllowed(motionPreference.matches);
    };

    updateMotionPreference();
    motionPreference.addEventListener('change', updateMotionPreference);

    const observer =
      'IntersectionObserver' in window
        ? new IntersectionObserver(
            ([entry]) => setIsVisible(entry.isIntersecting),
            { rootMargin: '120px' },
          )
        : null;

    if (observer) {
      observer.observe(container);
    } else {
      setIsVisible(true);
    }

    const resetPointer = () => pointer.current.set(10, 10);
    const updatePointer = (event: PointerEvent) => {
      const bounds = container.getBoundingClientRect();
      const inside =
        event.clientX >= bounds.left &&
        event.clientX <= bounds.right &&
        event.clientY >= bounds.top &&
        event.clientY <= bounds.bottom;

      if (!inside) {
        resetPointer();
        return;
      }

      pointer.current.set(
        ((event.clientX - bounds.left) / bounds.width) * 2 - 1,
        1 - ((event.clientY - bounds.top) / bounds.height) * 2,
      );
    };

    window.addEventListener('pointermove', updatePointer, { passive: true });
    window.addEventListener('blur', resetPointer);

    return () => {
      observer?.disconnect();
      motionPreference.removeEventListener('change', updateMotionPreference);
      window.removeEventListener('pointermove', updatePointer);
      window.removeEventListener('blur', resetPointer);
    };
  }, []);

  return (
    <div
      className="hero-particle-backdrop"
      ref={containerRef}
      aria-hidden="true"
    >
      <Canvas
        camera={{ position: [0, 0, 5], fov: 42 }}
        dpr={[1, 1.5]}
        frameloop={isVisible && motionAllowed ? 'always' : 'demand'}
        gl={{ alpha: true, antialias: true, powerPreference: 'low-power' }}
      >
        <ParticleCloud pointer={pointer} />
      </Canvas>
    </div>
  );
}
