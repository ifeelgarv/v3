"use client";
import { motion } from "framer-motion";

const blogs = [
  {
    title: "", // Empty to trigger "Coming Soon..."
  },
];

const AnimatedDots = () => {
  return (
    <span className="inline-flex">
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, delay: 0 }}
      >
        .
      </motion.span>
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
      >
        .
      </motion.span>
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
      >
        .
      </motion.span>
    </span>
  );
};

export default function BlogPage() {
  return (
    <motion.div className="relative flex flex-col gap-4">
      {blogs.map((blog, index) => (
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
            {blog.title || (
              <>
                Coming soon
                <AnimatedDots />
              </>
            )}
          </h1>
        </motion.div>
      ))}
    </motion.div>
  );
}
