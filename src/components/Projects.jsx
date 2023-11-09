import { useFrame, useThree } from "@react-three/fiber";
import { motion } from "framer-motion-3d";
import { Image, Text } from "@react-three/drei";
import { atom, useAtom } from "jotai";
import { useEffect, useRef } from "react";
import { animate, useMotionValue } from "framer-motion";
import { Cursor } from "./Cursor";

export const projects = [
  {
    title: "Linkedin",
    url: "https://www.linkedin.com/in/neil-huang-31169b1b5/",
    image: "../projects/linkedin.jpeg",
    description:
      "Here I post the activities in which I shared and exchanged ideas in IT field with like-minded friends within various groups.",
  },

  {
    title: "Ninja Runner",
    url: "http://feihuang.azurewebsites.net/",
    image: "../projects/ninjarunner.jpg",
    description:
      "Fueled by a strong sense of curiosity, I joined an MSA study group and developed my very first web game",
  },
  {
    title: "usePopcorn",
    url: "https://master.dt45xp8hm490s.amplifyapp.com/",
    image: "../projects/usePopcorn.jpg",
    description:
      "React web app involved in API, built-in hooks and custom hooks",
  },
  {
    title: "YelpCamp",
    url: "https://13.210.117.53/",
    image: "../projects/yelpcamp.jpg",
    description:
      "A web project involving both frontend and backend development using JavaScript",
  },
  {
    title: "Portfolio",
    url: "https://main.d16f2lz3jizcpm.amplifyapp.com/",
    image: "../projects/portfolio.jpg",
    description:
      "A fancy 3D Portfolio showcasing a brief overview of my personal profile",
  },
  {
    title: "GitHub",
    url: "https://github.com/NeilHuang625/",
    image: "../projects/github.jpg",
    description: "Wanna see how my Repo look like? Click it",
  },
];

const Project = (props) => {
  const { project, highlighted } = props;
  const background = useRef();
  const bgOpacity = useMotionValue(0.4);

  useEffect(() => {
    animate(bgOpacity, highlighted ? 0.7 : 0.4);
  }, [highlighted]);

  useFrame(() => {
    background.current.material.opacity = bgOpacity.get();
  });

  return (
    <group {...props}>
      <mesh position-z={-0.001} ref={background}>
        <planeGeometry args={[2.2, 3.0]} />
        <meshBasicMaterial color="black" transparent opacity={0.4} />
      </mesh>
      <Image
        hover="pointer"
        scale={[2, 1.2, 1]}
        url={project.image}
        toneMapped={false}
        position-y={0.8}
        onClick={() => {
          window.open(project.url, "_blank");
        }}
      />
      <Text
        maxWidth={2}
        anchorX={"left"}
        anchorY={"top"}
        fontSize={0.2}
        position={[-1, 0, 0]}
      >
        {project.title.toUpperCase()}
      </Text>
      <Text
        maxWidth={2}
        anchorX={"left"}
        anchorY={"top"}
        fontSize={0.15}
        position={[-1, -0.3, 0]}
      >
        {project.description}
      </Text>
    </group>
  );
};

export const currentProjectAtom = atom(Math.floor(projects.length / 2));

export const Projects = () => {
  const { viewport } = useThree();
  const [currentProject] = useAtom(currentProjectAtom);

  return (
    <group position-y={-viewport.height * 2}>
      {projects.map((project, index) => (
        <motion.group
          key={"project" + index}
          position={[index * 2.5, 0, -3]}
          animate={{
            x: 0 + (index - currentProject) * 2.5,
            y: currentProject === index ? 0 : -0.1,
            z: currentProject === index ? -2 : -3,
            rotateX: currentProject === index ? 0 : -Math.PI / 3,
            rotateZ: currentProject === index ? 0 : -Math.PI * 0.05,
          }}
        >
          <Project project={project} highlighted={index === currentProject} />
        </motion.group>
      ))}
    </group>
  );
};
