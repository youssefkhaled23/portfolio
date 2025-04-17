import { ArrowDown } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="h-screen flex items-center justify-center relative">
      <div className="text-center space-y-4 px-4">
        <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
        Nada Amer
        </h1>
        <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-300">
          .NET Backend Developer with 2+ Years of Experience
        </p>
        <p className="max-w-2xl mx-auto text-zinc-500 dark:text-zinc-400">
          Crafting robust APIs, scalable backend systems, and enterprise-grade
          solutions using ASP.NET Core, C#, and SQL Server.
        </p>
      </div>
      <Link
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ArrowDown className="h-6 w-6 text-zinc-600 dark:text-zinc-300" />
      </Link>
    </section>
  );
}
