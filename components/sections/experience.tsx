const experiences = [
  {
    company: "Scope Links LLC.",
    position: "Back End Developer (.NET)",
    period: "2024 - Present",
    description:
      "Built and optimized backend APIs using .NET Core with Clean Architecture. Integrated CI/CD pipelines to automate deployments, leading to a 40% improvement in system performance and deployment reliability.",
  },
  {
    company:
      "Delivered structured lessons on coding and programming concepts to a diverse range of students.",
    position: "Coding Instructor ISchool",
    period: "2025 – Present",
    description:
      "Taught programming fundamentals and project-based learning to students using modern web technologies including JavaScript, React, and Node.js. Mentored learners in building full-stack applications with real-world relevance.",
  },
  {
    company:
      "Mentored students in C++ programming and competitive problem-solving through interactive workshops and hands-on exercises.",
    position: "C++ Mentor and Problem-Solving Trainer",
    period: "2024 ",
    description:
      "Built dynamic frontend applications using React and Next.js, including dashboards and educational platforms. Delivered fully responsive UI/UX designs and guided clients through planning, development, and deployment stages.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-zinc-50 dark:bg-zinc-800/50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Work Experience
        </h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-purple-600"
            >
              <div className="absolute left-0 top-0 w-2 h-2 rounded-full bg-purple-600 -translate-x-[3px]" />
              <h3 className="text-xl font-semibold">{exp.position}</h3>
              <p className="text-purple-600 dark:text-purple-400 mb-2">
                {exp.company}
              </p>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-4">
                {exp.period}
              </p>
              <p className="text-zinc-600 dark:text-zinc-300">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
