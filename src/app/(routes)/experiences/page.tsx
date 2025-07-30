"use client";
import { motion } from "framer-motion";

const experiences = [
//   {
//     id: "1",
//     title: "Project Engineer at Wipro",
//     href: "https://www.wipro.com/",
//     date: "July 2025 - Present",
//   },
  {
    id: "2",
    title: "project athena",
    href: "https://x.com/AthenaF0SS",
    date: "June 2025 - Present",
  },
  {
    id: "3",
    title: "Frontend Intern at mythyaverse",
    href: "https://mythyaverse.com/",
    date: "Oct 2024 - Dec 2024",
  },
];

export default function Experience() {
  return (
    <section className="mb-16">
      <div className="space-y-4">
        {experiences.map((experience, index) => (
          <motion.a
            key={experience.id}
            href={experience.href}
            target="_blank"
            rel="noreferrer"
            className="relative z-10 -mx-1 flex cursor-pointer flex-col gap-1 rounded-lg border border-secondary-foreground bg-secondary p-4 hover:shadow-lg"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ 
              duration: 0.3
            }}
          >
            <div className="flex items-center justify-between">
              <span className="text-sm font-sm text-secondary-foreground/70">
                {experience.date}
              </span>
              <h3 className="text-sm font-sm">
                {experience.id === "3" ? (
                  <>
                    Frontend Intern at{" "}
                    <span className="underline decoration-dashed underline-offset-[5px]">
                      MythyaVerse
                    </span>
                  </>
                ) : experience.id === "2" ? (
                  <>
                    Member at{" "}
                    <span className="underline decoration-dashed underline-offset-[5px]">
                      Project Athena
                    </span>
                  </>
                
                ) : (
                  experience.title
                )}
              </h3>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}