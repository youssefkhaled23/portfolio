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

const projects: Project[] = [
  {
    title: "E-commerce (API)",
    description:
      "Maintained and optimized integration with Lean for customer data aggregation. Enhanced financial data processing and improved system reliability through performance fixes.",
    highlights: [
      "Service discovery with Consul for dynamic service registration",
      "Decoupled communication via RabbitMQ messaging",
      "Adopted Clean Architecture for a maintainable codebase",
      "CQRS pattern implemented using MediatR for separation of concerns",
      "Containerization of services using Docker for scalable deployment",
    ],
    technologies: [
      ".NET 6", // Backend Technology
      "SQL Server",
      "Redis",
      "RabbitMQ",
      "Docker",
      "Azure",
      "Consul",
      "MediatR",
    ],
  },
  {
    title: "Project Management System",
    description:
      "Developed a robust project tracking platform with secure authentication and advanced access control mechanisms to streamline team productivity.",
    highlights: [
      "Integrated OAuth 2.0 and OpenID Connect for secure SSO",
      "Role-Based Access Control (RBAC) to manage permissions",
      "Two-Factor Authentication (2FA) for account protection",
      "Enforced strong password policy standards",
      "Implemented centralized audit logging system",
    ],
    technologies: [
      "ASP.NET Core", // Backend Technology
      "IdentityServer",
      "Entity Framework Core",
      "SQL Server",
      "Redis",
      "OAuth2",
      "OpenID Connect",
    ],
  },
  {
    title: "Your Services (Graduation Project – A+ Grade, 2024)",
    description:
      "Full-featured e-commerce backend for a mall ecosystem enabling product listings, store discovery, and customer engagement via cross-platform frontend (React/Flutter).",
    highlights: [
      "Real-time updates using SignalR",
      "Comprehensive unit & integration tests using xUnit",
      "Interactive API documentation via Swagger/OpenAPI",
      "Redis caching layer for performance",
      "Background tasks with Hangfire for notifications & reports",
    ],
    technologies: [
      ".NET Core", // Backend Technology
      "SignalR",
      "xUnit",
      "Redis",
      "Hangfire",
      "Swagger",
      "EF Core",
    ],
  },
  {
    title: "E-commerce (MVC)",
    description:
      "A modular web application for managing gym operations, member subscriptions, and class schedules with real-time updates and a responsive UI.",
    highlights: [
      "Real-time class status and attendance via SignalR",
      "Schema generation using Entity Framework Code First",
      "Interactive API docs with Swagger",
      "High-speed data access using Redis caching",
      "Automated task scheduling with Hangfire",
    ],
    technologies: [
      ".NET Core MVC", // Backend Technology
      "Entity Framework",
      "SignalR",
      "Redis",
      "Hangfire",
      "Swagger",
    ],
  },
];


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
