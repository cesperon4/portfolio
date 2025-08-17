"use client";

import React, { useEffect } from "react";
import { useGLTF, Environment, Float, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Euler, EulerOrder } from "three";
import * as THREE from "three";

function Model({
  modelPath,
  modelName,
}: {
  modelPath: string;
  modelName: string;
}) {
  const scene = useGLTF(modelPath);

  useEffect(() => {
    if (modelName === "Interactive Developer") {
      scene.scene.traverse((child) => {
        if ((child as THREE.Mesh).isMesh && child.name === "Object_5") {
          (child as THREE.Mesh).material = new THREE.MeshStandardMaterial({
            color: "white",
          });
        }
      });
    }
  });

  return (
    <Float>
      <primitive object={scene.scene} />
    </Float>
  );
}

interface TechIconProps {
  model: {
    name: string;
    modelPath: string;
    scale: number;
    rotation:
      | number
      | Euler
      | [x: number, y: number, z: number, order?: EulerOrder | undefined];
  };
}

export default function TechIcon({ model }: TechIconProps) {
  return (
    <Canvas>
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <Environment preset="city" />

      <OrbitControls enableZoom={false} />
      <Float speed={5.5} rotationIntensity={0.5} floatIntensity={0.9}>
        <group scale={model.scale} rotation={model.rotation}>
          <Model modelPath={model.modelPath} modelName={model.name} />
        </group>
      </Float>
    </Canvas>
  );
}
