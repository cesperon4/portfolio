import React from "react";
import * as Three from "three";

const DesktopLights = () => {
  return (
    <>
      <spotLight
        position={[2, 5, 6]}
        intensity={80}
        angle={1}
        penumbra={0.5}
        color="white"
      />

      <primitive
        object={new Three.RectAreaLight("#A259FF", 8, 3, 2)}
        position={[0, 1, 0]}
        intensity={15}
        rotation={[-Math.PI / 4, Math.PI / 4, 0]}
      />

      <pointLight position={[0, 1, 0]} intensity={10} color="#7209b7" />
      <pointLight position={[1, 2, -2]} intensity={10} color="#0d00a4" />
    </>
  );
};

export default DesktopLights;
