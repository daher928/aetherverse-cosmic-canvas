
import * as THREE from 'three'
import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { Stars, Sphere } from '@react-three/drei'
import { useIsMobile } from '@/hooks/use-mobile'

function Planet({ position, color, size, speed, offset }) {
  const ref = useRef<THREE.Mesh>(null!)
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * speed + offset
    ref.current.position.x = position[0] + Math.cos(t) * 3
    ref.current.position.y = position[1] + Math.sin(t) * 3
  })
  return (
    <Sphere ref={ref} args={[size, 32, 32]} position={position}>
      <meshStandardMaterial color={color} roughness={0.7} />
    </Sphere>
  )
}

export function Cosmos() {
  const isMobile = useIsMobile()
  const particleCount = isMobile ? 2500 : 5000;

  return (
    <>
      {/* Central Star */}
      <pointLight color="#f0f" intensity={150} distance={100} position={[0, 0, 0]} />
      <Sphere args={[0.5, 32, 32]}>
        <meshBasicMaterial color="#f0f" toneMapped={false} />
      </Sphere>

      {/* Orbiting Planets */}
      <Planet position={[0, 0, 0]} color="#00ffff" size={0.2} speed={0.5} offset={0} />
      <Planet position={[0, 0, 0]} color="#ff4500" size={0.15} speed={0.3} offset={2} />
      <Planet position={[0, 0, 0]} color="#ffffff" size={0.1} speed={0.8} offset={4} />

      {/* Distant Stars/Particles */}
      <Stars radius={100} depth={50} count={particleCount} factor={4} saturation={0} fade speed={1} />
    </>
  )
}
