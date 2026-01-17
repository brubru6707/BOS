"use client";

import { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, useGLTF } from "@react-three/drei";
import * as THREE from "three";

function Model() {
  const meshRef = useRef<THREE.Group>(null);
  
  // Load the GLB model
  const { scene } = useGLTF("/BOS_LOGO.glb");

  // Rotate the model slowly
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = 0.5
      meshRef.current.rotation.y += delta * 0.33;
    }
  });

  // Enable shadows on the cloned scene
  const clonedScene = scene.clone();
  clonedScene.traverse((child) => {
    if ((child as THREE.Mesh).isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });

  return (
    <primitive 
      ref={meshRef} 
      object={clonedScene} 
      scale={0.5}
      position={[0, 0, 0]}
    />
  );
}

function Loader() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="text-brown-red animate-pulse">Loading 3D Model...</div>
    </div>
  );
}

export default function Scene() {
  return (
    <div className="w-full h-[500px] md:h-[600px]">
      <Canvas shadows>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <ambientLight intensity={0.15} />
        <directionalLight
          position={[5, 8, 5]}
          intensity={10}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
          shadow-camera-left={-5}
          shadow-camera-right={5}
          shadow-camera-top={5}
          shadow-camera-bottom={-5}
        />
        <spotLight 
          position={[10, 10, 10]} 
          angle={0.15} 
          penumbra={1} 
          intensity={2} 
          castShadow 
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />
        <pointLight position={[-10, -10, -10]} intensity={0.2} />
        
        {/* Shadow receiving plane */}
        <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]}>
          <planeGeometry args={[10, 10]} />
          <shadowMaterial opacity={0.7} />
        </mesh>
        
        <Suspense fallback={null}>
          <Model />
        </Suspense>
        <OrbitControls 
          enableZoom={false} 
          autoRotate={false}
          enablePan={false}
        />
      </Canvas>
    </div>
  );
}

// Preload the model
useGLTF.preload("/BOS_LOGO.glb");
