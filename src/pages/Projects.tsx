import { ExternalLink, Github, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  category: string;
  date: string;
  status: "completed" | "in-progress" | "published";
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

const Projects = () => {
  const projects: Project[] = [
    {
      id: "alphazero-research",
      title: "AlphaZero Research - Master's Thesis",
      description: "Advanced research on applying AlphaZero principles to complex decision-making systems",
      longDescription: "My master's thesis explored the application of AlphaZero's reinforcement learning approach to complex multi-agent systems. This research investigated how self-play and deep neural networks can be optimized for domains beyond traditional games, with implications for algorithmic trading and resource optimization.",
      technologies: ["Python", "PyTorch", "Reinforcement Learning", "Neural Networks", "MCTS"],
      category: "Research",
      date: "2023",
      status: "completed",
      featured: true
    },
    {
      id: "mathematical-studies",
      title: "Mathematical Studies - Bachelor's Thesis",
      description: "Comprehensive analysis of mathematical optimization in computational systems",
      longDescription: "My bachelor's thesis in mathematics focused on optimization theory and its applications to computational problems. The research involved developing novel approaches to solving complex optimization challenges with applications in machine learning and algorithmic efficiency.",
      technologies: ["MATLAB", "Mathematical Modeling", "Optimization Theory", "Statistical Analysis"],
      category: "Research",
      date: "2021",
      status: "completed",
      featured: true
    },
    {
      id: "trading-algorithms",
      title: "Trading Algorithm Development",
      description: "Development of sophisticated algorithmic trading systems using AI and mathematical modeling",
      longDescription: "Ongoing development of quantitative trading algorithms that leverage machine learning and statistical modeling. These systems incorporate risk management, market microstructure analysis, and adaptive learning mechanisms to navigate complex financial markets.",
      technologies: ["Python", "C++", "Machine Learning", "Statistical Modeling", "Risk Management"],
      category: "Professional",
      date: "2023-Present",
      status: "in-progress",
      featured: true
    },
    {
      id: "ecommerce-platform",
      title: "E-Commerce Platform Development",
      description: "Full-stack e-commerce solution with advanced analytics and machine learning integration",
      longDescription: "Designed and implemented a scalable e-commerce platform featuring recommendation systems, inventory optimization, and customer behavior analytics. The platform uses machine learning for personalization and predictive analytics for business intelligence.",
      technologies: ["React", "Node.js", "PostgreSQL", "Machine Learning", "AWS"],
      category: "Development",
      date: "2022",
      status: "completed",
      featured: false
    },
    {
      id: "mathematical-blog",
      title: "Mathematical Concepts Blog",
      description: "Educational content simplifying complex mathematical and AI concepts",
      longDescription: "A collection of articles and interactive content aimed at making advanced mathematical concepts accessible to a broader audience. Topics include machine learning mathematics, statistical theory, and quantitative finance principles.",
      technologies: ["React", "D3.js", "Mathematical Visualization", "Content Creation"],
      category: "Educational",
      date: "2023-Present",
      status: "in-progress",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800";
      case "in-progress":
        return "bg-blue-100 text-blue-800";
      case "published":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "completed":
        return "Completed";
      case "in-progress":
        return "In Progress";
      case "published":
        return "Published";
      default:
        return "Unknown";
    }
  };

  const ProjectCard = ({ project, featured = false }: { project: Project; featured?: boolean }) => (
    <div className={`bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow ${featured ? 'md:col-span-2 lg:col-span-1' : ''}`}>
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className={`font-semibold text-gray-900 mb-2 ${featured ? 'text-xl' : 'text-lg'}`}>
              {project.title}
            </h3>
            <div className="flex items-center gap-4 mb-3">
              <div className="flex items-center text-sm text-gray-500">
                <Calendar className="h-4 w-4 mr-1" />
                {project.date}
              </div>
              <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(project.status)}`}>
                {getStatusText(project.status)}
              </span>
            </div>
          </div>
        </div>

        <p className="text-gray-600 mb-4">
          {featured ? project.longDescription : project.description}
        </p>

        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex gap-2">
          {project.githubUrl && (
            <Button variant="outline" size="sm" asChild>
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 mr-2" />
                Code
              </a>
            </Button>
          )}
          {project.liveUrl && (
            <Button variant="outline" size="sm" asChild>
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-2" />
                Live Demo
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Projects</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          A showcase of research, development, and professional work in AI, mathematics, and quantitative trading
        </p>
      </div>

      {/* Featured Projects */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Work</h2>
        <div className="grid lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} featured />
          ))}
        </div>
      </section>

      {/* Other Projects */}
      {otherProjects.length > 0 && (
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Additional Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {otherProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>
      )}

      {/* Call to Action */}
      <section className="mt-16 text-center">
        <div className="bg-gray-50 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Interested in Collaboration?</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            I'm always open to discussing new projects, research opportunities,
            and collaborations in AI, quantitative finance, and mathematical modeling.
          </p>
          <Button size="lg" asChild>
            <a href="/contact">Get In Touch</a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Projects;
