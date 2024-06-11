/**
 * https://sketchfab.com/3d-models/foxs-islands-163b68e09fcc47618450150be7785907 - This is the sketchfab site where 3d models can be present for free
 * IMPORTANT: Loading glTF models into a Three.js scene is a lot of work.
 * Before we can configure or animate our model’s meshes, we need to iterate through
 * each part of our model’s meshes and save them separately.
 *
 * But luckily there is an app that turns gltf or glb files into jsx components
 * For this model, visit https://gltf.pmnd.rs/
 * And get the code. And then add the rest of the things.
 * YOU DON'T HAVE TO WRITE EVERYTHING FROM SCRATCH
 */


// It's the whole 3d model which is island and which get's incorporated in canvas. Go to Fox glb file which is inside 3d model and pass through th gltf website which provides with it's jsx comnponents
import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

import scene from "../assets/3d/fox.glb";

// 3D Model from: https://sketchfab.com/3d-models/fox-f372c04de44640fbb6a4f9e4e5845c78
// ...props - It'a a spread operator which provides additional props
export function Fox({ currentAnimation, ...props }) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(scene);
  const { actions } = useAnimations(animations, group);

  // This effect will run whenever the currentAnimation prop changes
  useEffect(() => {

    // This provides the function to calla each actions then make it stop
    Object.values(actions).forEach((action) => action.stop());

    // if animation is there then actions of that animation will play
    if (actions[currentAnimation]) {
      actions[currentAnimation].play();
    }
  }, [actions, currentAnimation]);

  return (

    // This is container to group fox meshes. The ref assigns reference to the fox so we can manipulate the DOM.
    <group ref={group} {...props} dispose={null}>

      {/* Orgainize the different parts of the fox model */}
      <group name='Sketchfab_Scene'>

        {/* nodes is obtained from useGLTF hook which contains skelteons and meshes */}
        <primitive object={nodes.GLTF_created_0_rootJoint} />

        {/* It makes different parts of the body */}
        <skinnedMesh
          name='Object_7'
          geometry={nodes.Object_7.geometry}
          material={materials.PaletteMaterial001}
          skeleton={nodes.Object_7.skeleton}
        />
        <skinnedMesh
          name='Object_8'
          geometry={nodes.Object_8.geometry}
          material={materials.PaletteMaterial001}
          skeleton={nodes.Object_8.skeleton}
        />
        <skinnedMesh
          name='Object_9'
          geometry={nodes.Object_9.geometry}
          material={materials.PaletteMaterial001}
          skeleton={nodes.Object_9.skeleton}
        />
        <skinnedMesh
          name='Object_10'
          geometry={nodes.Object_10.geometry}
          material={materials.PaletteMaterial001}
          skeleton={nodes.Object_10.skeleton}
        />
        <skinnedMesh
          name='Object_11'
          geometry={nodes.Object_11.geometry}
          material={materials.PaletteMaterial001}
          skeleton={nodes.Object_11.skeleton}
        />
      </group>
    </group>
  );
}

useGLTF.preload(scene);

// useGLTF.preload('/fox.glb') - Remove this and export the fox. This hook is used to load and manage the 3d model. This load the models asynchronously in the background thus prevents any delays while loading the model and preloaded to enhance the user experience.