"use client";

import * as React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface Project {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  category: string;
  link: string;
}

const projects: Project[] = [
  {
    id: "1",
    name: "AI Chatbot",
    description: "A conversational AI assistant built with Next.js and OpenAI API.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "OpenAI API"],
    category: "Web Development",
    link: "#",
  },
  {
    id: "2",
    name: "E-commerce Platform",
    description: "Full-stack e-commerce solution with Stripe integration.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
    category: "Web Development",
    link: "#",
  },
  {
    id: "3",
    name: "Mobile Game",
    description: "A 2D puzzle game developed for iOS and Android.",
    technologies: ["Unity", "C#", "Firebase"],
    category: "Mobile Development",
    link: "#",
  },
  {
    id: "4",
    name: "Data Visualization Tool",
    description: "Interactive dashboards for analyzing large datasets.",
    technologies: ["Python", "Dash", "Plotly", "Pandas"],
    category: "Data Science",
    link: "#",
  },
];

export function ProjectDashboard() {
  const [activeCategory, setActiveCategory] = React.useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  const categories = ["All", ...new Set(projects.map((project) => project.category))];

  return (
    <section id="projects" className="py-16 px-4 md:px-8 lg:px-16">
      <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
      <Tabs defaultValue="All" className="w-full max-w-5xl mx-auto">
        <TabsList className="grid w-full grid-cols-3 md:w-auto mx-auto mb-8">
          {categories.map((category) => (
            <TabsTrigger
              key={category}
              value={category}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </TabsTrigger>
          ))}
        </TabsList>
        {categories.map((category) => (
          <TabsContent key={category} value={category}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <Card key={project.id} className="flex flex-col justify-between">
                  <CardHeader>
                    <CardTitle>{project.name}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <Link href={project.link} passHref>
                      <Button className="w-full">View Project</Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
}