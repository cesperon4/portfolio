import React from "react";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import { Desktop } from "./Desktop.jsx";
import { Room } from "./Room.jsx";
import DesktopLights from "./DesktopLights";
import HeroLights from "./HeroLights.jsx";
import Particles from "./Particles.jsx";

const HeroExperience = () => {
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
      {/* allows us to move around our object */}
      <OrbitControls
        enablePan={false}
        enableZoom={!isTablet}
        maxDistance={20}
        minDistance={5}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
      />
      {/* <HeroLights /> */}
      <DesktopLights />
      <Particles count={100} />
      <group
        scale={isMobile ? 0.4 : 0.7}
        position={[0, -2, 0]}
        rotation={[0, -Math.PI / 2.2, 0]}
      >
        {/* <Room /> */}
        <Desktop />
      </group>
    </Canvas>
  );
};

export default HeroExperience;
