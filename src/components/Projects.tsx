import { useState } from "react";
import { Github, ExternalLink, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      title: "GeneralAlphaZero",
      description: "MSc thesis extending AlphaZero to general tree evaluation problems",
      longDescription: "Research implementation extending the AlphaZero algorithm to handle general tree evaluation scenarios beyond traditional game settings. Includes novel tree search optimizations and mathematical proofs of convergence properties.",
      technologies: ["Python", "PyTorch", "Reinforcement Learning", "Game Theory"],
      github: "https://github.com/albinjal/GeneralAlphaZero",
      featured: true,
    },
    {
      title: "Deep Hedging Implementation",
      description: "PyTorch implementation of neural network-based financial hedging strategies",
      longDescription: "Complete implementation of deep reinforcement learning for financial hedging using neural networks. Includes risk management algorithms and backtesting framework for quantitative trading applications.",
      technologies: ["Python", "PyTorch", "Finance", "Neural Networks"],
      github: "https://github.com/appie-mathematics/Deep-Hedging",
      featured: true,
    },
    {
      title: "QrDesign E-commerce Platform",
      description: "Full-stack e-commerce platform for custom QR code artwork",
      longDescription: "Complete e-commerce solution built from scratch for selling custom QR code designs. Features include payment processing, user management, and automated design generation algorithms.",
      technologies: ["TypeScript", "Angular", "Node.js", "E-commerce"],
      github: "https://github.com/albinjal/QrDesign-Public",
      demo: "https://qrdesign.com",
      featured: true,
    },
    {
      title: "Bayesian Car Counting",
      description: "Computer vision system for vehicle counting using Bayesian methods",
      longDescription: "Advanced computer vision application combining Bayesian inference with deep learning for accurate vehicle counting in traffic scenarios. Includes uncertainty quantification and real-time processing capabilities.",
      technologies: ["Python", "Computer Vision", "Bayesian Methods", "Deep Learning"],
      github: "https://github.com/albinjal/Bayesian-Car-Counting",
      featured: false,
    },
    {
      title: "Taming Transformers Reproduction",
      description: "High-resolution image synthesis using transformer architectures",
      longDescription: "Academic reproduction of cutting-edge image synthesis research. Implementation of transformer-based models for high-quality image generation with detailed analysis of architectural choices.",
      technologies: ["Python", "Transformers", "Computer Vision", "Research"],
      github: "https://github.com/albinjal/CS4240-Reproduction-Project",
      featured: false,
    },
    {
      title: "Russable",
      description: "Creative web application inspired by Silicon Valley TV series",
      longDescription: "Fun project inspired by the Silicon Valley TV show, demonstrating creative web development skills and humor while implementing modern web technologies.",
      technologies: ["TypeScript", "React", "Web Development"],
      github: "https://github.com/albinjal/Russable",
      featured: false,
    },
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A selection of research projects, implementations, and applications spanning
            AI research, quantitative finance, and software development.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden cursor-pointer"
              onClick={() => setSelectedProject(selectedProject === index ? null : index)}
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  <ChevronRight
                    className={`h-5 w-5 text-gray-400 transition-transform ${
                      selectedProject === index ? 'rotate-90' : ''
                    }`}
                  />
                </div>

                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {selectedProject === index && (
                  <div className="mb-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                      {project.longDescription}
                    </p>
                  </div>
                )}

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex space-x-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(project.github, '_blank');
                    }}
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                  {project.demo && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex items-center"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.demo, '_blank');
                      }}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects - Compact Grid */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Additional Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-4"
              >
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1 mb-3">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge variant="secondary" className="text-xs">
                      +{project.technologies.length - 3}
                    </Badge>
                  )}
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="p-0 h-auto text-blue-600 dark:text-blue-400"
                  onClick={() => window.open(project.github, '_blank')}
                >
                  <Github className="h-4 w-4 mr-1" />
                  View Code
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
