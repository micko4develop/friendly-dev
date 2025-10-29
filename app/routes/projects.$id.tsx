import React from "react";
import type { Route } from "./+types/projects.$id";
import { Link, useParams } from "react-router-dom";

export async function loader({ params }: Route.LoaderArgs) {
  const response = await fetch(`http://localhost:3001/projects/${params.id}`);
  
  if (!response.ok) {
    throw new Response("Project not found", { status: 404 });
  }
  
  const project = await response.json();
  return { project };
}

function ProjectDetailPage({ loaderData }: Route.ComponentProps) {
  const { project } = loaderData;
  
  return (
    <div className="max-w-4xl mx-auto">
      {/* Back Button */}
      <Link 
        to="/projects" 
        className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6"
      >
        ← Back to Projects
      </Link>
      
      {/* Project Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-4xl font-bold text-gray-900">{project.title}</h1>
          <span className={`px-3 py-1 text-sm font-medium rounded-full ${
            project.featured 
              ? 'bg-yellow-100 text-yellow-800' 
              : 'bg-gray-100 text-gray-800'
          }`}>
            {project.featured ? 'Featured' : project.category}
          </span>
        </div>
        <p className="text-gray-600 text-lg">{project.description}</p>
        <div className="flex items-center gap-4 mt-4 text-sm text-gray-500">
          <span>Created: {new Date(project.date).toLocaleDateString()}</span>
          <span>•</span>
          <span>Category: {project.category}</span>
        </div>
      </div>
      
      {/* Project Image */}
      <div className="mb-8">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-96 object-cover rounded-lg shadow-lg"
        />
      </div>
      
      {/* Project Details */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-semibold mb-4">About This Project</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            {project.description}
          </p>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-3">Project Details</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="font-medium">Category:</span>
                <span>{project.category}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Created:</span>
                <span>{new Date(project.date).toLocaleDateString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Status:</span>
                <span className={project.featured ? 'text-yellow-600' : 'text-gray-600'}>
                  {project.featured ? 'Featured Project' : 'Standard Project'}
                </span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Sidebar */}
        <div className="space-y-6">
          {/* Visit Project Button */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Visit Project</h3>
            <a 
              href={project.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg text-center block transition-colors duration-200"
            >
              View Live Demo
            </a>
          </div>
          
          {/* Project Info */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Project Info</h3>
            <div className="space-y-3">
              <div>
                <span className="text-sm font-medium text-gray-500">Project ID</span>
                <p className="text-gray-900">#{project.id}</p>
              </div>
              <div>
                <span className="text-sm font-medium text-gray-500">Category</span>
                <p className="text-gray-900">{project.category}</p>
              </div>
              <div>
                <span className="text-sm font-medium text-gray-500">Created</span>
                <p className="text-gray-900">{new Date(project.date).toLocaleDateString()}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetailPage;
