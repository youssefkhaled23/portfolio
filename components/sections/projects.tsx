"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

interface Project {
  title: string;
  description: string;
  highlights: string[];
  technologies: string[];
  link?: string; // Optional link property
}

const projects: Project[] =[
  {
    "title": "E-commerce (API)",
    "description": "Developed a robust e-commerce API solution using Clean Architecture, CQRS, and Mediator patterns for a modular and maintainable codebase.",
    "highlights": [
      "Implemented JWT authentication with role-based identity management",
      "Added email confirmation and password reset functionalities",
      "Used Fluent Validation for ensuring data integrity",
    ],
    "technologies": [
    ".NET 6",
    "Clean Architecture",
    "SQL Server",
    "MediatR (CQRS)",
    "Fluent Validation",
    "JWT Authentication"
    ]
  },
  {
    "title": "Project Management System",
    "description": "Developed a scalable project management system with secure authentication and advanced access control mechanisms.",
    "highlights": [
      "Implemented JWT and role-based access control (RBAC)",
      "Designed database using PostgreSQL with polymorphic designs",
      "Implemented centralized audit logging system"
    ],
    "technologies": [
      "ASP.NET Core",
      "IdentityServer",
      "Entity Framework Core",
      "PostgreSQL",
      "OpenID Connect"
    ]
  },
  {
    "title": "Your Services (Graduation Project – A+ Grade, 2024)",
    "description": "A comprehensive service marketplace platform connecting users with verified providers across multiple sectors including healthcare, food services, and home maintenance.",
    "highlights": [
    "Developed secure authentication using ASP.NET Identity with JWT token authorization",
    "Implemented repository pattern with Entity Framework Core for optimized data access",
    "Built admin dashboard for service provider management and analytics",
    ],
    "technologies": [
      ".NET Core",
      "SQL Server",
      "Entity Framework Core",
    ]
  },
  {
    "title": "SiSi Travel - Tourism Management System",
    "description": "Developed a tourism management system with multi-language support and responsive UI.",
    "highlights": [
      "Implemented multi-language support (English/Arabic)",
      "Used Repository Pattern for data access abstraction",
      "Created responsive UI for seamless tour bookings",
      "Schema generation using Entity Framework Code First",
      "Automated task scheduling with Hangfire"
    ],
    "technologies": [
      "ASP.NET Core MVC",
      "SQL Server",
      "Entity Framework Core",
      "JavaScript",
      "Bootstrap"
    ]
  },
  {
    "title": "E-commerce (MVC)",
    "description": "Developed a handmade e-commerce website with shopping cart and role-based access control.",
    "highlights": [
      "Implemented Identity for authentication and authorization",
      "Role-based access for users and admins",
      "Shopping cart functionality for purchases",
      "Category filtering system",
      "Interactive API docs with Swagger"
    ],
    "technologies": [
      "ASP.NET Core MVC",
      "Entity Framework",
      "SQL Server",
      "JavaScript",
      "Bootstrap",
      "Swagger"
    ]
  }
]


const PROJECTS_PER_PAGE = 3;

export default function Projects() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(projects.length / PROJECTS_PER_PAGE);

  const paginatedProjects = projects.slice(
    (currentPage - 1) * PROJECTS_PER_PAGE,
    currentPage * PROJECTS_PER_PAGE
  );

  return (
    <section id="projects" className="py-20">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2 text-center">
          Backend Projects
        </h2>
        <p className="text-xl text-center text-zinc-600 dark:text-zinc-300 mb-12">
          Showcasing scalable and robust backend solutions
        </p>

        <div className="space-y-12">
          {paginatedProjects.map((project) => (
            <div
              key={project.title}
              className="border border-zinc-200 dark:border-zinc-700 rounded-lg p-6 hover:border-blue-500 dark:hover:border-blue-400 transition-colors"
            >
              <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
              <p className="text-zinc-600 dark:text-zinc-300 mb-4">
                {project.description}
              </p>

              <div className="mb-4">
                <h4 className="text-lg font-semibold mb-2">Key Highlights:</h4>
                <ul className="list-disc list-inside space-y-1 text-zinc-600 dark:text-zinc-300">
                  {project.highlights.map((highlight, index) => (
                    <li key={index}>{highlight}</li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-blue-500 hover:text-blue-600"
                >
                  <span>View Repository</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
              )}
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
