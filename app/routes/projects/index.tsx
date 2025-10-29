import React from "react";
import type { Route } from "./+types/index";
import { Link } from "react-router-dom";

export async function loader({ request }: Route.LoaderArgs) {
  const response = await fetch("http://localhost:3001/projects");
  const projects = await response.json();
  return { projects };
}

function ProjectsPage({ loaderData }: Route.ComponentProps) {
  const { projects } = loaderData;
  
  return (
    <section>
      <h2 className="text-3xl font-bold mb-8">My Projects</h2>
      <p className="text-gray-600 mb-8">
        Here are some of the projects I've been working on recently.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project: any) => (
          <Link 
            to={`/projects/${project.id}`} 
            key={project.id}
            className="block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
          >
            <div className="aspect-w-16 aspect-h-9">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                  project.featured 
                    ? 'bg-yellow-100 text-yellow-800' 
                    : 'bg-gray-100 text-gray-800'
                }`}>
                  {project.featured ? 'Featured' : project.category}
                </span>
              </div>
              <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                {project.description}
              </p>
              <div className="flex items-center justify-between text-sm text-gray-500">
                <span>{new Date(project.date).toLocaleDateString()}</span>
                <span className="text-blue-600 hover:text-blue-800">View Details →</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default ProjectsPage;
