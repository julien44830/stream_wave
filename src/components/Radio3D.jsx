import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";

function Radio3DModel({ gltf }) {
  const ref = useRef();

  useFrame(() => {
    if (ref.current) {
      ref.current.position.set(0, 0, 0);
      ref.current.rotation.y += 0.01;
      ref.current.scale.set(0.02, 0.02, 0.02);
    }
  });

  return <primitive object={gltf.scene} ref={ref} className="3D" />;
}

function Radio3D() {
  const gltf = useLoader(GLTFLoader, "src/assets/radio3/scene.gltf");

  return (
    <Canvas className="canvas-3D">
      <ambientLight intensity={3} color={"#ffffff"} />
      <Radio3DModel gltf={gltf} 
      />
    </Canvas>
  );
}

export default Radio3D;