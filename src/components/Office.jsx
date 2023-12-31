/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.11 public/models/scene.gltf 
*/

import React, { useRef } from 'react'
import { useGLTF, useTexture } from '@react-three/drei'
import * as THREE from "three"
import {motion} from "framer-motion-3d"
import { useMotionValue } from 'framer-motion'

export function Office(props) {
  const {section} = props
  const { nodes, materials } = useGLTF('../models/scene.gltf')
  const texture = useTexture("textures/baked.jpg")
  texture.flipY = false;
  texture.colorSpace = THREE.SRGBColorSpace;
  const textureMaterial = new THREE.MeshStandardMaterial({
    map:texture,
    transparent: true,
    opacity:1,
  })

  return (
    <group {...props} dispose={null}>
      <motion.group 
        scale={[0,0,0]}
        animate={{
          scale: section === 0 ? 1 : 0
        }} name="monitor" position={[0.595, 1.695, -1.944]} rotation={[0, -0.25, 0]}>
        <group name="Monitor1" position={[-0.147, -0.082, -0.108]} rotation={[-Math.PI / 2, 0, 0]}>
          <mesh name="Monitor1_1" geometry={nodes.Monitor1_1.geometry} material={textureMaterial} />
          <mesh name="Monitor1_2" geometry={nodes.Monitor1_2.geometry} material={textureMaterial} />
        </group>
      </motion.group>
      <motion.mesh 
        scale={[0,0,0]}
        animate={{
          scale: section === 0 ? 1 : 0
        }} name="CoconutPalmTree_mesh" geometry={nodes.CoconutPalmTree_mesh.geometry} material={textureMaterial} position={[1.814, -0.031, -1.786]} />
      <motion.group 
        scale={[0,0,0]}
        animate={{
          scale: section === 0 ? 1 : 0
        }} name="plant" position={[-2.124, 0.535, -2.116]}>
        <mesh name="mesh31856083" geometry={nodes.mesh31856083.geometry} material={textureMaterial} />
        <mesh name="mesh31856083_1" geometry={nodes.mesh31856083_1.geometry} material={textureMaterial} />
        <mesh name="mesh31856083_2" geometry={nodes.mesh31856083_2.geometry} material={textureMaterial} />
      </motion.group>
      <motion.group 
        scale={[0,0,0]}
        animate={{
          scale: section === 0 ? 1 : 0
        }} name="pokeman" position={[-0.085, 3.135, -2.479]} rotation={[-Math.PI, 0.063, -Math.PI]}>
        <mesh name="mesh434900071" geometry={nodes.mesh434900071.geometry} material={textureMaterial} />
        <mesh name="mesh434900071_1" geometry={nodes.mesh434900071_1.geometry} material={textureMaterial} />
        <mesh name="mesh434900071_2" geometry={nodes.mesh434900071_2.geometry} material={textureMaterial} />
        <mesh name="mesh434900071_3" geometry={nodes.mesh434900071_3.geometry} material={textureMaterial} />
        <mesh name="mesh434900071_4" geometry={nodes.mesh434900071_4.geometry} material={textureMaterial} />
        <mesh name="mesh434900071_5" geometry={nodes.mesh434900071_5.geometry} material={textureMaterial} />
      </motion.group>
      <motion.group 
        scale={[0,0,0]}
        animate={{
          scale: section === 0 ? 1 : 0
        }} 
        name="SM_ShelfSM_Shelf1"
        position={[-0.632, 2.654, -2.633]}
      >
        <mesh name="SM_ShelfSM_Shelf1_1" geometry={nodes.SM_ShelfSM_Shelf1_1.geometry} material={textureMaterial} />
        <mesh name="SM_ShelfSM_Shelf1_1_1" geometry={nodes.SM_ShelfSM_Shelf1_1_1.geometry} material={textureMaterial} />
      </motion.group>
      <motion.group 
        scale={[0,0,0]}
        animate={{
          scale: section === 0 ? 1 : 0
        }} name="Node" position={[-1.304, 3.108, -2.578]}>
        <mesh name="Node-Mesh" geometry={nodes['Node-Mesh'].geometry} material={textureMaterial} />
        <mesh name="Node-Mesh_1" geometry={nodes['Node-Mesh_1'].geometry} material={textureMaterial} />
        <mesh name="Node-Mesh_2" geometry={nodes['Node-Mesh_2'].geometry} material={textureMaterial} />
      </motion.group>
      <motion.group 
        scale={[0,0,0]}
        animate={{
          scale: section === 0 ? 1 : 0
        }} name="keyboard" position={[-0.028, 1.364, -1.519]} rotation={[0.11, -0.351, 0]}>
        <mesh name="mesh34220672" geometry={nodes.mesh34220672.geometry} material={textureMaterial} />
        <mesh name="mesh34220672_1" geometry={nodes.mesh34220672_1.geometry} material={textureMaterial} />
        <mesh name="mesh34220672_2" geometry={nodes.mesh34220672_2.geometry} material={textureMaterial} />
        <mesh name="mesh34220672_3" geometry={nodes.mesh34220672_3.geometry} material={textureMaterial} />
      </motion.group>
      <mesh name="Comp_Mouse" geometry={nodes.Comp_Mouse.geometry} material={textureMaterial} position={[0.589, 1.323, -1.1934]} rotation={[-Math.PI, 0.514, -Math.PI]} />
      <motion.group 
        scale={[0,0,0]}
        animate={{
          scale: section === 0 ? 1 : 0
        }} name="rugRounded" position={[1.276, 0.017, -1.281]} rotation={[0, 0.034, 0]}>
        <mesh name="rugRounded_2" geometry={nodes.rugRounded_2.geometry} material={textureMaterial} />
        <mesh name="rugRounded_2_1" geometry={nodes.rugRounded_2_1.geometry} material={textureMaterial} />
      </motion.group>
      <motion.group 
        scale={[0,0,0]}
        animate={{
          scale: section === 0 ? 1 : 0
        }} name="desk" position={[0, 0, -1.835]} rotation={[1.573, -0.011, 1.565]}>
        <mesh name="Plane001_Plane002" geometry={nodes.Plane001_Plane002.geometry} material={textureMaterial} />
        <mesh name="Plane001_Plane002_1" geometry={nodes.Plane001_Plane002_1.geometry} material={textureMaterial} />
        <mesh name="Plane001_Plane002_2" geometry={nodes.Plane001_Plane002_2.geometry} material={textureMaterial} />
        <mesh name="Plane001_Plane002_3" geometry={nodes.Plane001_Plane002_3.geometry} material={textureMaterial} />
        <mesh name="Plane001_Plane002_4" geometry={nodes.Plane001_Plane002_4.geometry} material={textureMaterial} />
      </motion.group>
      <motion.group 
        scale={[0,0,0]}
        animate={{
          scale: section === 0 ? 1 : 0
        }} name="OfficeChair" position={[-0.229, 0.039, -0.554]} rotation={[-Math.PI / 2, 0, 2.786]}>
        <mesh name="OfficeChair_1" geometry={nodes.OfficeChair_1.geometry} material={textureMaterial} />
        <mesh name="OfficeChair_2" geometry={nodes.OfficeChair_2.geometry} material={textureMaterial} />
        <mesh name="OfficeChair_3" geometry={nodes.OfficeChair_3.geometry} material={textureMaterial} />
      </motion.group>
      <mesh name="Plane001" geometry={nodes.Plane001.geometry} material={textureMaterial} />
      <mesh name="Plane001_1" geometry={nodes.Plane001_1.geometry} material={textureMaterial} />
      <mesh name="Plane001_2" geometry={nodes.Plane001_2.geometry} material={textureMaterial} />
    </group>
  )
}

useGLTF.preload('models/scene.gltf')
useTexture.preload("textures/baked.jpg")
