
import * as THREE from 'three'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Stars, Sphere } from '@react-three/drei'
import { useIsMobile } from '@/hooks/use-mobile'

function Planet({ orbitRadius, color, size, speed, offset }: { orbitRadius: number; color: string; size: number; speed: number; offset: number; }) {
  const groupRef = useRef<THREE.Group>(null!)
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * speed + offset
    if (groupRef.current) {
      groupRef.current.position.x = Math.cos(t) * orbitRadius
      groupRef.current.position.z = Math.sin(t) * orbitRadius
    }
  })
  return (
    <group ref={groupRef}>
      <Sphere args={[size, 32, 32]}>
        <meshStandardMaterial color={color} roughness={0.7} emissive={color} emissiveIntensity={2} />
      </Sphere>
    </group>
  )
}

export function Cosmos() {
    const isMobile = useIsMobile()
    const particleCount = isMobile ? 2500 : 5000;

    return (
      <>
        <pointLight color="#f0f" intensity={250} distance={100} position={[0, 0, 0]} />
        <Sphere args={[0.5, 32, 32]}>
          <meshBasicMaterial color="#f0f" toneMapped={false} />
        </Sphere>

        <Planet orbitRadius={3} color="#00ffff" size={0.2} speed={0.5} offset={0} />
        <Planet orbitRadius={4.5} color="#ff4500" size={0.15} speed={0.3} offset={2} />
        <Planet orbitRadius={6} color="#ffffff" size={0.1} speed={0.8} offset={4} />

        <Stars radius={100} depth={50} count={particleCount} factor={4} saturation={0} fade speed={1} />
      </>
    )
}
