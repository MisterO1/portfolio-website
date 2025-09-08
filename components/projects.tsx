"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Leaf } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      title: "Hospital Appointment System API",
      description:
        "Django REST API for booking appointments between patients and doctors with role-based access, JWT authentication, and PostgreSQL backend.",
      techStack: ["Django", "DRF", "PostgreSQL", "JWT", "Docker"],
      github: "#",
      demo: "#",
      blog: null,
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      title: "Task Manager API",
      description:
        "A comprehensive task management API with user authentication, task categories, priorities, and deadline notifications.",
      techStack: ["Django", "DRF", "PostgreSQL", "Celery", "Redis"],
      github: "#",
      demo: "#",
      blog: null,
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      title: "Dockerized API + CI/CD Example",
      description:
        "A template project demonstrating best practices for containerizing Django APIs and setting up continuous integration/deployment.",
      techStack: ["Docker", "GitHub Actions", "Django", "AWS"],
      github: "#",
      demo: null,
      blog: "#",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      title: "Real-time Collaboration Tool",
      description:
        "API backend for a collaborative workspace with real-time updates, document sharing, and team management.",
      techStack: ["Django", "Channels", "WebSockets", "PostgreSQL"],
      github: "#",
      demo: "#",
      blog: null,
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      title: "LiveStatusAPI with OpenAPI Docs",
      description:
        "A service status monitoring API with comprehensive OpenAPI documentation and interactive testing interface.",
      techStack: ["Django", "DRF", "Swagger", "Redis"],
      github: "#",
      demo: "#",
      blog: "#",
      image: "/placeholder.svg?height=200&width=400",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-slate-50 dark:bg-sky-900/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4 flex items-center justify-center gap-2">
            <Leaf className="h-6 w-6 text-sky-500 dark:text-sky-400" />
            Projects
            <Leaf className="h-6 w-6 text-sky-500 dark:text-sky-400" />
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            A showcase of my backend development work, featuring Django REST APIs and related technologies.
          </p>
          <div className="h-1 w-20 bg-sky-500 mx-auto mt-4"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full flex flex-col overflow-hidden border-slate-200 dark:border-sky-800 hover:shadow-lg transition-shadow duration-300 dark:bg-sky-800/30">
                <div className="aspect-video w-full overflow-hidden bg-slate-100 dark:bg-sky-800 relative group">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-sky-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-slate-800 dark:text-white">{project.title}</CardTitle>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.techStack.map((tech, i) => (
                      <Badge
                        key={i}
                        variant="secondary"
                        className="bg-sky-100 dark:bg-sky-700/50 text-sky-800 dark:text-sky-200"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription className="text-slate-600 dark:text-slate-300 text-base">
                    {project.description}
                  </CardDescription>
                </CardContent>
                <CardFooter className="flex gap-2 pt-2">
                  <Button variant="outline" size="sm" asChild className="border-sky-200 dark:border-sky-700">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-1" /> GitHub
                    </a>
                  </Button>
                  {project.demo && (
                    <Button variant="outline" size="sm" asChild className="border-sky-200 dark:border-sky-700">
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-1" /> Demo
                      </a>
                    </Button>
                  )}
                  {project.blog && (
                    <Button variant="outline" size="sm" asChild className="border-sky-200 dark:border-sky-700">
                      <a href={project.blog} target="_blank" rel="noopener noreferrer">
                        Blog
                      </a>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
