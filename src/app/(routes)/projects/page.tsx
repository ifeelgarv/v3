"use client";
import { motion } from "framer-motion";

const projects = [
  {
    // id: "glim",
    title: "", // Empty title to trigger "Coming Soon..."
    // description: "a screenshot design tool",
    // href: "https://github.com/deewakar-k/glim",
  },
  // {
  //   id: "readme",
  //   title: "Coming Soon...",
  //   description: "Coming Soon...",
  //   href: "",
  // },
];

const AnimatedDots = () => {
  return (
    <span className="inline-flex">
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          delay: 0,
        }}
      >
        .
      </motion.span>
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          delay: 0.2,
        }}
      >
        .
      </motion.span>
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          delay: 0.4,
        }}
      >
        .
      </motion.span>
    </span>
  );
};

export default function Projects() {
  return (
    <motion.div className="relative flex flex-col gap-4">
      {projects.map((project, index) => (
        <motion.div
          key={index}
          className="relative z-10 -mx-1 flex cursor-pointer flex-col gap-1 rounded-lg border border-secondary-foreground bg-secondary p-4 text-secondary-foreground hover:bg-secondary/80 hover:shadow-lg"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          <h1 className="relative z-10 text-sm font-sm">
            {project.title || (
              <>
                Coming soon
                <AnimatedDots />
              </>
            )}
          </h1>
          <p className="text-sm text-secondary-foreground relative z-10">
            {/* {project.description} */}
          </p>
        </motion.div>
      ))}
    </motion.div>
  );
}