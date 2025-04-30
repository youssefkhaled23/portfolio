import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="aspect-square rounded-2xl overflow-hidden">
            <Image
              src="/assets/photo_2025-04-17_21-28-55.jpg"
              alt="Profile"
              width={500}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-4">
            <p className="text-zinc-600 dark:text-zinc-300">
              Hi! I'm a dedicated .NET Backend Developer with one year of experience building scalable, secure, and high-performance applications using ASP.NET Core, C#, and SQL Server.
            </p>
            <p className="text-zinc-600 dark:text-zinc-300">
specializing in building robust APIs, scalable backend systems, and enterprise-grade solutions using ASP.NET Core, C#, and SQL Server. I have gained a strong understanding of Clean Architecture principles, ensuring maintainable and modular code. I focus on writing efficient, testable, and scalable code while adhering to best practices in design patterns and development methodologies.            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
