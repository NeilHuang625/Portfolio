import { Float, MeshDistortMaterial, MeshWobbleMaterial } from "@react-three/drei";
import {Office} from "./Office"
import {motion} from "framer-motion-3d"
import {Avatar} from "./Avatar"
import { useFrame, useThree } from "@react-three/fiber";
import { animate, useMotionValue } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { framerMotionConfig } from "../config";
import * as THREE from "three"
import { useScroll } from "@react-three/drei";
import { Projects } from "./Projects";
import { Background } from "./Background";

export const Experience = (props)=>{
  const {menuOpened} = props;
  const {viewport} = useThree();
  const data = useScroll();

  const isMobile = window.innerWidth < 768;
  const responsiveRatio = viewport.width / 14 ;
  const officeScaleRatio = Math.max(0.4 , Math.min(0.9 * responsiveRatio,0.9))

  const [section, setSection] = useState(0)

  const cameraPositionX = useMotionValue();
  const cameraLookAtX = useMotionValue();
  useEffect(()=>{
      animate(cameraPositionX, menuOpened ? -5 : 0, {
        ...framerMotionConfig
      })
      animate(cameraLookAtX, menuOpened ? 5 : 0, {
        ...framerMotionConfig,
      })
    }, [menuOpened]
  )

  const characterContainerAboutRef = useRef()
  const [characterAnimation, setCharacterAnimation] = useState("Typing")
  useEffect(()=>{
    setCharacterAnimation("Falling")
    setTimeout(()=>{
      setCharacterAnimation(section===0 ? "Typing" : "Standing")
    },300)
  }, [section]);

  const characterGroup = useRef();

  useFrame((state)=>{

    let curSection = Math.floor(data.scroll.current * data.pages);

    if(curSection >3){
      curSection = 3
    }

    if(curSection !== section){
      setSection(curSection)
    }


    state.camera.position.x = cameraPositionX.get();
    state.camera.lookAt(cameraLookAtX.get(), 0, 0)

    // const position = new THREE.Vector3()
    if(section === 0){
      characterContainerAboutRef.current.getWorldPosition(characterGroup.current.position)
    }
    // // console.log([position.x, position.y, position.z])
  

    // const quaternion = new THREE.Quaternion();
    // characterContainerAboutRef.current.getWorldQuaternion(quaternion)
    // const euler = new THREE.Euler();
    // euler.setFromQuaternion(quaternion,"XYZ")
    // // console.log([euler.x, euler.y, euler.z])

  })

  return (
    <>
    <Background />
     <motion.group 
      ref={characterGroup}
      rotation={[3.141592653589793, 1.1493981633974486, -3.141592653589793]}
      scale={[officeScaleRatio, officeScaleRatio, officeScaleRatio]}
      transition={{
        duration:0.5
      }}
      animate={"" + section}
      variants={{
        0:{
          scaleX:1.6*officeScaleRatio,
          scaleY:1.6*officeScaleRatio,
          scaleZ:1.6*officeScaleRatio
        },
        1:{
          y:-viewport.height +1.5,
          x: isMobile ? 0.3 : 0,
          z:7,
          rotateX:0,
          rotateY: isMobile ? -Math.PI/6 : Math.PI/6,
          rotateZ:0,
          scaleX: isMobile ? 1.2 : 1,
          scaleY: isMobile ? 1.2 : 1,
          scaleZ: isMobile ? 1.2 : 1,
        },
        2:{
          x: isMobile? -1.2 : -2,
          y:-viewport.height * 2 ,
          z:3,
          rotateX:0,
          rotateY:Math.PI /2,
          rotateZ:-0.25,
          scaleX:1,
          scaleY:1,
          scaleZ:1,
        },
        3:{
          x: isMobile ? 0.2 : 0,
          y: isMobile ? -viewport.height * 2.77 : -viewport.height *2.8 ,
          z:7,
          rotateX:0,
          rotateY:-Math.PI/6,
          rotateZ:0,
          scaleX:1,
          scaleY:1,
          scaleZ:1,
        },
      }}
     >
        <Avatar animation={characterAnimation} wireframe={section === 1}/>
     </motion.group>
      <ambientLight intensity={1} />
      <motion.group
        position={ [isMobile ? 0: 1.6 * officeScaleRatio, isMobile? -viewport.height : 2, 3 ] }
        scale={[officeScaleRatio, officeScaleRatio, officeScaleRatio]}
        rotation-y={-Math.PI /4}
        animate={{
          y: isMobile ? -viewport.height /10 : 0 
        }}
      >
        <Office section={section} />
        
        <group 
        
        name="Empty" 
        position={[-0.178, 0.286, 0.474]} 
        rotation={[0, -0.835, 0]} scale={1.643}
        >
          <group name="Armature" 
          ref={characterContainerAboutRef}
          position={[-0.4, -0.069, -0.403]} 
          rotation={[Math.PI, -0.471, Math.PI]}
          >
            
          </group>
        </group>

      </motion.group>
      {/* SKILLS SECTION */}
      <motion.group 
        animate={{
          z: section === 1 ? 0 : -10,
          y: section ===1 ? -viewport.height : -1.5
        }}
        position={[0, -1.5,  -10]}
      >
      <directionalLight position={[-5,3,5]} intensity={0.4} />
      <Float>
        <mesh position={[1, -3, -15]} scale={[2, 2, 2]} >
          <sphereGeometry />
          <MeshDistortMaterial 
            opacity={0.8}
            transparent
            distort={0.4}
            speed={4}
            color={"red"}
          />
        </mesh>
      </Float>
      <Float>
        <mesh scale={[3, 3, 3]} position={[3, 1, -18]} >
          <sphereGeometry />
          <MeshDistortMaterial 
            opacity={0.8}
            transparent
            distort={1}
            speed={5}
            color={"yellow"}
          />
        </mesh>
      </Float>
      <Float>
        <mesh scale={[1.4, 1.4, 1.4]} position={[-3, -1, -11]} >
          <MeshWobbleMaterial
            opacity={0.8}
            transparent
            factor={1}
            speed={5}
            color={"blue"}
          />
        </mesh>
      </Float>
      </motion.group>
      <Projects />
    </>
  );
};