"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const skillsByCategory = {
  backend: [
    { name: "C#", category: "Programming Language" },
    { name: "Asp.Net Core (MVC,API)", category: "Web Framework" },
    { name: "Dependency Injection", category: "Design Pattern" },
    { name: "JWT Tokens", category: "Authentication" },
    { name: "Identity", category: "Authentication" },
    { name: "Fluent Validation", category: "Validation" },
    { name: "Fluent API", category: "Data Modeling" },
    { name: "Repository pattern", category: "Design Pattern" },
  ],
  database: [
    { name: "SQL Server", category: "Relational Database" },
    { name: "Entity Framework", category: "ORM Framework" },
    { name: "LINQ", category: "Query Language" },
    { name: "PostgreSQL", category: "Relational Database" },
  ],
  frontend: [
    { name: "HTML5", category: "Markup Language" },
    { name: "CSS3", category: "Styling Language" },
    { name: "JavaScript", category: "Programming Language" },
    { name: "TypeScript", category: "Programming Language" },
    { name: "JSON", category: "Data Format" },
    { name: "Bootstrap", category: "CSS Framework" },
  ],
};

const ITEMS_PER_PAGE = 5;

export default function Skills() {
  const [activeTab, setActiveTab] = useState<
    "backend" | "database" | "frontend"
  >("backend");
  const [currentPage, setCurrentPage] = useState(1);

  const currentSkills = skillsByCategory[activeTab];
  const totalPages = Math.ceil(currentSkills.length / ITEMS_PER_PAGE);

  const paginatedSkills = currentSkills.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <section id="skills" className="py-20">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Technical Skills
        </h2>

        {/* Tabs */}
        <div className="flex justify-center space-x-4 mb-12">
          {(["backend", "database", "frontend"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                setCurrentPage(1);
              }}
              className={`px-6 py-2 rounded-lg font-medium transition-colors
                ${
                  activeTab === tab
                    ? "bg-blue-500 text-white"
                    : "bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700"
                }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        <div className="space-y-6">
          {paginatedSkills.map((skill) => (
            <div
              key={skill.name}
              className="flex items-center group border-b border-gray-200 dark:border-gray-700 pb-4 hover:border-blue-500 dark:hover:border-blue-400 transition-colors"
            >
              <div className="flex-1">
                <h3 className="text-xl font-medium text-gray-800 dark:text-gray-100 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">
                  {skill.name}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  {skill.category}
                </p>
              </div>
              <span className="text-gray-400 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">
                →
              </span>
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center space-x-4 mt-12">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="text-gray-500 dark:text-gray-400 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <span className="text-sm text-gray-600 dark:text-gray-300">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="text-gray-500 dark:text-gray-400 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
