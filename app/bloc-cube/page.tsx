'use client'

import { useRef, useState, Suspense } from 'react'
import { Canvas, useFrame, ThreeEvent } from '@react-three/fiber'
import { useGLTF, OrbitControls } from '@react-three/drei'
import * as THREE from 'three'


function BlocCube() {
  const gltf = useGLTF('/BLOC.glb') as any
  const meshRef = useRef<THREE.Mesh>(null)
  const [isInteracting, setIsInteracting] = useState(false)

  // Auto-rotate when user isn't interacting
  useFrame((state, delta) => {
    if (meshRef.current && !isInteracting) {
      meshRef.current.rotation.y += delta * 0.3
      meshRef.current.rotation.x += delta * 0.1
    }
  })

  const meshNode = gltf.nodes.Cube || Object.values(gltf.nodes).find((n: any) => n.isMesh)

  if (meshNode && meshNode.geometry) {
    return (
      <mesh
        ref={meshRef}
        geometry={meshNode.geometry}
        scale={0.5}
        onPointerDown={() => setIsInteracting(true)}
        onPointerUp={() => setIsInteracting(false)}
        onPointerLeave={() => setIsInteracting(false)}
        castShadow
        receiveShadow
      />
    )
  } else {
    return (
      <primitive
        ref={meshRef}
        object={gltf.scene}
        scale={1}
        onPointerDown={() => setIsInteracting(true)}
        onPointerUp={() => setIsInteracting(false)}
        onPointerLeave={() => setIsInteracting(false)}
      />
    )
  }
}

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  materialInfo: { index: number, name: string } | null
}

function Modal({ isOpen, onClose, materialInfo }: ModalProps) {
  if (!isOpen || !materialInfo) return null

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-lg shadow-2xl max-w-lg w-full mx-4 p-8 transform transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-3xl font-bold text-gray-900">Material Clicked</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Close modal"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <p className="text-xl text-gray-700 mb-4 font-medium">
          <span className="font-bold">Name:</span> {materialInfo.name}
        </p>
        <p className="text-gray-600 leading-relaxed">
          <span className="font-bold">Index:</span> {materialInfo.index}
        </p>
        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}

export default function BlocCubePage() {
  return (
    <main className="min-h-screen bg-black">
      <div className="container mx-auto px-4 py-12">
        <div className="w-full h-screen">
          <Canvas
            camera={{ position: [8, 8, 8], fov: 75 }}
            shadows
          >
            {/* Improved lighting setup */}
            <ambientLight intensity={0.8} />
            <directionalLight 
              position={[10, 10, 10]} 
              intensity={2.5}
              castShadow
              shadow-mapSize-width={2048}
              shadow-mapSize-height={2048}
            />
            <directionalLight 
              position={[-10, -10, -10]} 
              intensity={1.5}
            />
            <pointLight position={[0, 10, 0]} intensity={1.2} />
            <pointLight position={[0, -10, 0]} intensity={0.8} />
            <Suspense fallback={null}>
              <BlocCube />
            </Suspense>
            <OrbitControls 
              enableZoom={false}
              enablePan={false}
            />
          </Canvas>
        </div>
      </div>
    </main>
  )
}

// Preload the GLTF model
useGLTF.preload('/BLOC.glb')
