import ProfileImage from "../components/ProfileImage";
import { motion } from 'framer-motion';

export default function About() {
  const experiences = [
    {
      title: "Software Engineer",
      organization: "TechCorp Inc.",
      duration: "Jan 2022 - Present",
      description:
        "Developed and maintained web applications using React, TypeScript, and Node.js.",
    },
    {
      title: "Junior Developer",
      organization: "CodeWorks",
      duration: "Jun 2020 - Dec 2021",
      description:
        "Assisted in building e-commerce platforms and optimized APIs for better performance.",
    },
    {
      title: "Frontend Developer Intern",
      organization: "Innovate Labs",
      duration: "May 2019 - Aug 2019",
      description:
        "Designed and implemented responsive UI components using React and TailwindCSS.",
    },
    {
      title: "Winner - HackTech 2023",
      organization: "HackTech Global",
      duration: "March 2023",
      description:
        "Built an AI-powered chatbot to help students with learning disabilities.",
    },
    {
      title: "Finalist - CodeSprint 2022",
      organization: "CodeSprint",
      duration: "July 2022",
      description:
        "Developed a real-time collaborative whiteboard application.",
    },
  ];

  const skills = ["HTML", "CSS", "JAVASCRIPT", "REACT JS", "NODEJS", "EXPRESSJS", "MONGODB"];

  return (
    <div className="xl:w-screen max-w-7xl h-fit mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-slate-50">
      <div className="md:flex md:items-center justify-center">
        <div className="flex items-center justify-center">
          <ProfileImage />
        </div>
        <div className="max-w-3xl mx-auto mt-6">
          <div className="text-center md:text-left flex items-start justify-center md:justify-start mb-6 gap-8">
            <h1 className="text-4xl font-bold text-gray-900">About Me</h1>
          </div>
          <p className="text-lg text-gray-600 mb-5">
            I am passionate about creating exceptional digital experiences that
            combine beautiful design with seamless functionality.
          </p>
          <div className="prose prose-indigo">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, consequuntur.
            </p>
            <p>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full bg-gray-700 h-[1px] my-10"></div>

      <section className="mx-auto max-w-6xl px-6 py-8">
        <motion.h2
          className="text-4xl font-bold text-gray-800"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Experiences
        </motion.h2>
        <motion.p
          className="mt-4 text-lg text-gray-600"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          A collection of my professional journey, internships, and hackathon
          achievements.
        </motion.p>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {experiences.map((item, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-lg border border-gray-300 bg-white p-6 shadow-md transition-transform hover:-translate-y-2 hover:shadow-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 },
              }}
            >
              <div className="absolute inset-0 bg-indigo-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              <div className="relative z-10">
                <h4 className="text-lg font-medium text-gray-800 group-hover:text-white">
                  {item.title}
                </h4>
                <p className="text-sm text-gray-500 group-hover:text-gray-200">
                  {item.organization}
                </p>
                <p className="text-sm text-gray-400 group-hover:text-gray-300">
                  {item.duration}
                </p>
                <p className="mt-2 text-gray-600 group-hover:text-gray-100">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <div className="w-full bg-gray-700 h-[1px] my-10"></div>

      <section id="tech-stack">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Technical <span className="text-primary">Expertise</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg md:text-xl text-muted-foreground"
            >
              A showcase of my technical skills and proficiencies
            </motion.p>
          </motion.div>

          <div
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 p-4"
            id="skills"
          >
            {skills.map((skill, index) => (
              <div
                key={index}
                className="h-16 w-full flex items-center justify-center rounded-lg border border-white/30 cursor-pointer relative group bg-gray-100"
              >
                <span className="absolute top-0 left-0 w-full h-full bg-black/10 rounded-lg transition-all duration-300 scale-100 group-hover:scale-50 group-hover:opacity-0"></span>
                <span className="absolute top-0 left-0 w-full h-full opacity-0 transition-all duration-300 scale-125 border border-white/50 rounded-lg group-hover:scale-100 group-hover:opacity-100"></span>
                <h2 className="text-black font-poppins tracking-widest font-semibold z-10">
                  {skill}
                </h2>
              </div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
}
