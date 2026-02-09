import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import { Computer } from "./Computer";
// import { Phone } from "./Phone";

/* 90s computer room palette */
const WALL_COLOR = "#c4b8a8"; /* classic beige cubicle */
const FLOOR_COLOR = "#5c5a57"; /* gray office carpet */

const ContactExperience = () => {
  return (
    <Canvas shadows camera={{ position: [0, 2.3, 5.8], fov: 43 }} gl={{ alpha: false }}>
      <ambientLight intensity={0.6} color="#e2dfd6" />
      <directionalLight position={[5, 5, 3]} intensity={2} color="#e8e6e0" />
      <directionalLight
        position={[5, 9, 1]}
        castShadow
        intensity={2}
        color="#e0ddd4"
      />
      <directionalLight position={[-3, 4, 2]} intensity={0.4} color="#d8d4c8" />

      <OrbitControls
        enableZoom={false}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
      />

      {/* Back wall */}
      <mesh receiveShadow position={[0, 1.5, -4]} rotation={[0, 0, 0]}>
        <planeGeometry args={[30, 12]} />
        <meshStandardMaterial color={WALL_COLOR} />
      </mesh>

      {/* Left wall */}
      <mesh receiveShadow position={[-6, 1.5, -2]} rotation={[0, Math.PI / 2, 0]}>
        <planeGeometry args={[12, 12]} />
        <meshStandardMaterial color={WALL_COLOR} />
      </mesh>

      {/* Right wall */}
      <mesh receiveShadow position={[6, 1.5, -2]} rotation={[0, -Math.PI / 2, 0]}>
        <planeGeometry args={[12, 12]} />
        <meshStandardMaterial color={WALL_COLOR} />
      </mesh>

      {/* Floor – gray carpet */}
      <mesh
        receiveShadow
        position={[0, -1.5, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <planeGeometry args={[30, 30]} />
        <meshStandardMaterial color={FLOOR_COLOR} />
      </mesh>

      <group scale={0.03} position={[0, -1.49, -2]} castShadow>
        <Computer />
      </group>
    </Canvas>
  );
};

export default ContactExperience;
