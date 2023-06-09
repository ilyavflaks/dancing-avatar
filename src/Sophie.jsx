/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 ./public/sophie.glb
*/

import React, { useRef, useEffect } from "react"; /* highlight-line */
import { useGLTF, useAnimations } from "@react-three/drei"; /* highlight-line */

function Model({ ...props }) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/sophie.glb");
  const { actions } = useAnimations(animations, group); /* highlight-line */

  // useEffect(() => {
  //   /* BREAKS PAGE */
  //   actions["Armature|mixamo.com|Layer0"].play(); /* highlight-line */
  // });

  return (
    <group ref={group} {...props} dispose={null}>
      <primitive object={nodes.Hips} />
      <skinnedMesh
        name="Wolf3D_Avatar"
        geometry={nodes.Wolf3D_Avatar.geometry}
        material={materials.Wolf3D_Avatar}
        skeleton={nodes.Wolf3D_Avatar.skeleton}
        morphTargetDictionary={nodes.Wolf3D_Avatar.morphTargetDictionary}
        morphTargetInfluences={nodes.Wolf3D_Avatar.morphTargetInfluences}
      />
    </group>
  );
}

useGLTF.preload("/sophie.glb");
export default Model;
