const experiences = [
  {
    company: "Scope Links LLC.",
    position: "Back End Developer (.NET)",
    period: "2024 - Present",
    description:
      "Developed and optimized backend APIs using .NET Core, applying Clean Architecture principles for scalable and maintainable code",
  },
  {
    company:
      "Delivered structured lessons on coding and programming concepts to a diverse range of students.",
    position: "Coding Instructor ISchool",
    period: "2025 – Present",
    description:
      "Taught programming fundamentals and coding concepts to students, covering a variety of languages including Python.",
  },
  {
    company:
      "Mentored students in C++ programming and competitive problem-solving through interactive workshops and hands-on exercises.",
    position: "C++ Mentor and Problem-Solving Trainer",
    period: "2024 ",
    description:
      "Mentored students in C++ programming and competitive problem-solving, focusing on problem-solving techniques and algorithm optimization.",
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
