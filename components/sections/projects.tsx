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
    title: "Social Development Bank – Saudi Arabia",
    description:
      "Maintained and optimized integration with Lean for customer data aggregation. Enhanced financial data processing and improved system reliability through performance fixes.",
    highlights: [
      "Service discovery with Consul for dynamic service registration",
      "Decoupled communication via RabbitMQ messaging",
      "Adopted Clean Architecture for maintainable codebase",
      "CQRS pattern implemented using MediatR for clear separation",
      "Containerization of services using Docker for deployment scalability",
    ],
    technologies: [
      ".NET 6",
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
      "ASP.NET Core",
      "IdentityServer",
      "Entity Framework Core",
      "SQL Server",
      "Redis",
      "OAuth2",
      "OpenID Connect",
    ],
  },
  {
    title: "E-Commerce Platform (Bustan Mall)",
    description:
      "Full-featured e-commerce backend for a mall ecosystem enabling product listings, store discovery, and customer engagement through a cross-platform frontend (React/Flutter).",
    highlights: [
      "Real-time updates using SignalR for product and order status",
      "Comprehensive unit and integration tests",
      "Interactive API docs via Swagger/OpenAPI",
      "Redis caching layer for performance optimization",
      "Background processing with Hangfire for order notifications and reports",
    ],
    technologies: [
      ".NET Core",
      "SignalR",
      "xUnit",
      "Redis",
      "Hangfire",
      "Swagger",
      "EF Core",
    ],
  },
  {
    title: "Gym Management System",
    description:
      "A modular web application for managing gym operations, member subscriptions, and class schedules with real-time updates and a responsive UI.",
    highlights: [
      "Real-time class status and attendance with SignalR",
      "Entity Framework Code First for schema generation",
      "Interactive Swagger API documentation",
      "Caching layers using Redis for quick data access",
      "Job scheduling for automated notifications using Hangfire",
    ],
    technologies: [
      ".NET Core MVC",
      "Entity Framework",
      "SignalR",
      "Redis",
      "Hangfire",
      "Swagger",
    ],
  },
  {
    title: "Articles Management Platform",
    description:
      "Content management platform for publishing and organizing articles, built with clean architecture principles and a focus on scalability.",
    highlights: [
      "Integrated SignalR for live article updates",
      "Domain-driven design using Clean Architecture",
      "End-to-end testing using xUnit",
      "Structured caching via Redis",
      "Robust background tasks with Hangfire",
    ],
    technologies: [
      ".NET Core MVC",
      "SignalR",
      "xUnit",
      "Redis",
      "Hangfire",
      "Clean Architecture",
    ],
  },
  {
    title: "Sales System",
    description:
      "Revamped legacy VB.NET sales platform into a modern RESTful system with better scalability, fault tolerance, and user experience.",
    highlights: [
      "Real-time updates for stock and sales using SignalR",
      "API documentation with Swagger",
      "Layered caching strategy using Redis",
      "Task automation with Hangfire (invoices, reports)",
      "Migration from legacy VB.NET architecture",
    ],
    technologies: [
      ".NET Core Web API",
      "SignalR",
      "Swagger",
      "Redis",
      "Hangfire",
      "AutoMapper",
    ],
  },
  {
    title: "School Management System",
    description:
      "A comprehensive education platform with authentication, email confirmation, and secure access for students, teachers, and admins.",
    highlights: [
      "JWT authentication with secure refresh tokens",
      "FluentValidation with custom error middleware",
      "Identity-based user and role system",
      "AutoMapper for DTO transformation",
      "Dependency Injection for testability and modularity",
    ],
    technologies: [
      ".NET Core Web API",
      "FluentValidation",
      "Identity",
      "JWT",
      "AutoMapper",
      "SignalR",
      "Redis",
      "Hangfire",
    ],
  },
  {
    title: "JavaScript E-Commerce (Frontend)",
    description:
      "Built a simple CRUD-based e-commerce frontend using vanilla JavaScript with clean and responsive UI.",
    highlights: [
      "Dynamic DOM manipulation with plain JavaScript",
      "Reusable components and modular design",
      "Fully responsive design using pure CSS",
      "Manual form validation and error handling",
      "Product list filtering and cart management",
    ],
    technologies: ["JavaScript", "HTML5", "CSS3"],
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
