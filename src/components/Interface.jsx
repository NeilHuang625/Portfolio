import { motion } from "framer-motion";
import { useAtom } from "jotai";
import { currentProjectAtom, projects } from "./Projects";
import { useForm, ValidationError } from "@formspree/react";

const Section = (props) => {
  const { children, mobileTop } = props;
  return (
    <motion.section
      className={`
            h-screen w-screen p-8 max-w-screen-2xl mx-auto
            flex flex-col items-start 
            ${mobileTop ? "justify-start md:justify-center" : "justify-center"}

        `}
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 1,
          delay: 0.6,
        },
      }}
    >
      {children}
    </motion.section>
  );
};

export const Interface = (props) => {
  const { setSection } = props;
  return (
    <div className="flex flex-col items-center w-screen">
      <AboutSection setSection={setSection} />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
};

const AboutSection = (props) => {
  const { setSection } = props;
  return (
    <Section mobileTop>
      <h1 className="text-white md:text-black text-4xl md:text-7xl font-extrabold leading-snug mt-8 md:mt-0">
        Hi, I'm
        <br />
        <span className=" bg-black md:bg-white px-1 italic">Neil</span>
      </h1>
      <motion.p
        className="text-2xl px-1 text-white md:text-black mt-4"
        initial={{
          opacity: 0,
          y: 25,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
          delay: 1.2,
        }}
      >
        A Full-Stack Web Dev
        <br />
        Proficient in problem-solving
        <br />
        and derive a sense of
        <br />
        achievement from it
      </motion.p>
      <motion.button
        className={`bg-indigo-600 text-white py-4 px-8 
                            rounded-lg font-bold text-lg mt-4 md:mt-16`}
        initial={{
          opacity: 0,
          y: 25,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
          delay: 1.6,
        }}
        onClick={() => setSection(3)}
      >
        Contact me
      </motion.button>
    </Section>
  );
};

const skills = [
  {
    title: "React",
    level: 95,
  },
  {
    title: "TypeScript",
    level: 95,
  },
  {
    title: "C#",
    level: 90,
  },
  {
    title: "ASP.NET Core",
    level: 90,
  },
  {
    title: "Node.js",
    level: 95,
  },

  {
    title: "MongoDB / MySQL",
    level: 90,
  },

  {
    title: "3D Modelling",
    level: 70,
  },
];

const languages = [
  {
    title: "🇳🇿 English",
    level: 95,
  },
  {
    title: "🇨🇳 Mandarin / Cantonese",
    level: 100,
  },
];

const SkillsSection = () => {
  return (
    <Section>
      <motion.div className="w-full" whileInView={"visible"}>
        <h2 className="text-3xl md:text-5xl font-bold text-white">Skills</h2>
        <div className="mt-8 space-y-4">
          {skills.map((skill, index) => (
            <div className="w-full md:w-64" key={index}>
              <motion.h3
                className="text-lg md:text-xl font-bold text-gray-100"
                initial={{
                  opacity: 0,
                }}
                variants={{
                  visible: {
                    opacity: 1,
                    transition: {
                      duration: 1,
                      delay: 1 + index * 0.2,
                    },
                  },
                }}
              >
                {skill.title}
              </motion.h3>

              <div className="h-2 w-full bg-gray-200 rounded-full mt-2">
                <motion.div
                  className="h-full bg-indigo-500 rounded-full"
                  style={{ width: `${skill.level}%` }}
                  initial={{
                    scaleX: 0,
                    originX: 0,
                  }}
                  variants={{
                    visible: {
                      scaleX: 1,
                      transition: {
                        duration: 1,
                        delay: 1 + index * 0.2,
                      },
                    },
                  }}
                ></motion.div>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-3xl md:text-5xl font-bold mt-10 text-white">
          Languages
        </h2>
        <div className="mt-8 spacy-y-4">
          {languages.map((lng, index) => (
            <div className="w-full md:w-64" key={index}>
              <motion.h3
                className="text-lg md:text-xl font-bold text-gray-100"
                initial={{
                  opacity: 0,
                }}
                variants={{
                  visible: {
                    opacity: 1,
                    transition: {
                      duration: 1,
                      delay: 2 + index * 0.3,
                    },
                  },
                }}
              >
                {lng.title}
              </motion.h3>

              <div className="h-2 w-full bg-gray-200 rounded-full mt-2">
                <motion.div
                  className="h-full bg-indigo-500 rounded-full"
                  style={{ width: `${lng.level}%` }}
                  initial={{
                    scaleX: 0,
                    originX: 0,
                  }}
                  variants={{
                    visible: {
                      scaleX: 1,
                      transition: {
                        duration: 1,
                        delay: 2.5 + index * 0.3,
                      },
                    },
                  }}
                ></motion.div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
};

//space for project section
const ProjectsSection = () => {
  const [currentProject, setCurrentProject] = useAtom(currentProjectAtom);

  const nextProject = () => {
    setCurrentProject((currentProject + 1) % projects.length);
  };

  const previousProject = () => {
    setCurrentProject((currentProject - 1 + projects.length) % projects.length);
  };

  return (
    <Section>
      <div className="flex w-full h-full gap-8 items-center justify-center">
        <button
          className="hover:text-indigo-600 transition-colors text-white"
          onClick={previousProject}
        >
          ← Previous
        </button>
        <h2 className="text-3xl md:text-5xl font-bold text-white">Projects</h2>
        <button
          className="hover:text-indigo-600 transition-colors text-white"
          onClick={nextProject}
        >
          Next →
        </button>
      </div>
    </Section>
  );
};

const ContactSection = () => {
  const [state, handleSubmit] = useForm("xnqkvpyl");
  return (
    <Section>
      <h2 className="text-3xl md:text-5xl font-bold">Contact Me</h2>
      <div className="mt-8 p-8 bg-opacity-50 rounded-md bg-white w-96 max-w-full">
        {state.succeeded ? (
          <p>
            Thank you for your message! Neil is reading it and will get back to
            you soon!
          </p>
        ) : (
          <form onSubmit={handleSubmit}>
            <label
              htmlFor="name"
              className="font-medium text-gray-900 block mb-1"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
            />

            <label
              htmlFor="email"
              className="font-medium text-gray-900 block mb-1 mt-8"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
            />
            <ValidationError field="email" errors={state.errors} />

            <label
              htmlFor="message"
              className="font-medium text-gray-900 block  mb-1 mt-8"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="h-32 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
            />
            <ValidationError field="message" errors={state.errors} />
            <button
              type="submit"
              disabled={state.submitting}
              className="bg-indigo-600 text-white py-4 px-8 rounded-lg font-bold text-lg mt-16"
            >
              Submit
            </button>
          </form>
        )}
      </div>
    </Section>
  );
};
