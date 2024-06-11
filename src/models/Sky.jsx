import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

import skyScene from "../assets/3d/sky.glb";

// 3D Model from: https://sketchfab.com/3d-models/phoenix-bird-844ba0cf144a413ea92c779f18912042
export function Sky({ isRotating }) {

  //Helps  to load and display the 3d model format
  const sky = useGLTF(skyScene);

  // Creates the reference object which contain mutable data(for here) and add the object to the mesh element
  const skyRef = useRef();

  // Note: Animation names can be found on the Sketchfab website where the 3D model is hosted.
  // It ensures smooth animations by making the rotation frame rate-independent.
  // 'delta' represents the time in seconds since the last frame.

  // Add animation in different way
  useFrame((_, delta) => {
    if (isRotating) {
      skyRef.current.rotation.y += 0.25 * delta; // Adjust the rotation speed as needed
    }
  });

  return (
    <mesh ref={skyRef}>
      {/* use the primitive element when you want to directly embed a complex 3D
      model or scene or it renders the 3d element*/}
      <primitive object={sky.scene} />
    </mesh>
  );
}