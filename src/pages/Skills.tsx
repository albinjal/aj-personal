import { Code, Brain, Calculator, Database, Cloud, Users } from "lucide-react";

interface SkillCategory {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  skills: string[];
  color: string;
}

const Skills = () => {
  const skillCategories: SkillCategory[] = [
    {
      id: "programming",
      title: "Programming Languages",
      icon: <Code className="h-6 w-6" />,
      description: "Core programming languages and frameworks for development and research",
      skills: [
        "Python (Advanced)",
        "C++ (Intermediate)",
        "MATLAB (Advanced)",
        "R (Intermediate)",
        "SQL (Advanced)",
        "JavaScript/TypeScript (Intermediate)",
        "Java (Basic)",
        "Bash/Shell Scripting"
      ],
      color: "blue"
    },
    {
      id: "ai-ml",
      title: "AI & Machine Learning",
      icon: <Brain className="h-6 w-6" />,
      description: "Artificial intelligence, machine learning, and deep learning technologies",
      skills: [
        "PyTorch (Advanced)",
        "TensorFlow (Intermediate)",
        "Scikit-learn (Advanced)",
        "Reinforcement Learning",
        "Deep Neural Networks",
        "Computer Vision",
        "Natural Language Processing",
        "MLOps & Model Deployment",
        "AutoML",
        "Ensemble Methods"
      ],
      color: "purple"
    },
    {
      id: "mathematics",
      title: "Mathematical & Statistical",
      icon: <Calculator className="h-6 w-6" />,
      description: "Mathematical foundations and statistical analysis techniques",
      skills: [
        "Linear Algebra",
        "Calculus & Analysis",
        "Probability Theory",
        "Statistical Inference",
        "Optimization Theory",
        "Numerical Methods",
        "Time Series Analysis",
        "Stochastic Processes",
        "Monte Carlo Methods",
        "Bayesian Statistics"
      ],
      color: "green"
    },
    {
      id: "finance",
      title: "Quantitative Finance",
      icon: <Database className="h-6 w-6" />,
      description: "Financial modeling, trading, and risk management expertise",
      skills: [
        "Algorithmic Trading",
        "Risk Management",
        "Portfolio Optimization",
        "Derivatives Pricing",
        "Market Microstructure",
        "Backtesting Frameworks",
        "Financial Modeling",
        "High-Frequency Trading",
        "Alternative Data Analysis",
        "Regulatory Compliance"
      ],
      color: "yellow"
    },
    {
      id: "tools",
      title: "Tools & Technologies",
      icon: <Cloud className="h-6 w-6" />,
      description: "Development tools, platforms, and infrastructure technologies",
      skills: [
        "Git & Version Control",
        "Docker & Containerization",
        "AWS Cloud Services",
        "Linux/Unix Systems",
        "Jupyter Notebooks",
        "PostgreSQL/MySQL",
        "Redis & Caching",
        "Apache Kafka",
        "Kubernetes (Basic)",
        "CI/CD Pipelines"
      ],
      color: "indigo"
    },
    {
      id: "research",
      title: "Research & Communication",
      icon: <Users className="h-6 w-6" />,
      description: "Academic research, writing, and collaborative skills",
      skills: [
        "Academic Writing",
        "Research Methodology",
        "Peer Review Process",
        "Data Visualization",
        "Technical Presentations",
        "Cross-functional Collaboration",
        "Project Management",
        "Mentoring & Teaching",
        "Scientific Computing",
        "Literature Review"
      ],
      color: "red"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: "bg-blue-50 border-blue-200 text-blue-900",
      purple: "bg-purple-50 border-purple-200 text-purple-900",
      green: "bg-green-50 border-green-200 text-green-900",
      yellow: "bg-yellow-50 border-yellow-200 text-yellow-900",
      indigo: "bg-indigo-50 border-indigo-200 text-indigo-900",
      red: "bg-red-50 border-red-200 text-red-900"
    };
    return colorMap[color as keyof typeof colorMap] || "bg-gray-50 border-gray-200 text-gray-900";
  };

  const getIconColorClasses = (color: string) => {
    const colorMap = {
      blue: "text-blue-600",
      purple: "text-purple-600",
      green: "text-green-600",
      yellow: "text-yellow-600",
      indigo: "text-indigo-600",
      red: "text-red-600"
    };
    return colorMap[color as keyof typeof colorMap] || "text-gray-600";
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Skills & Expertise</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          A comprehensive overview of my technical skills, domain knowledge, and professional competencies
        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid lg:grid-cols-2 gap-8 mb-16">
        {skillCategories.map((category) => (
          <div
            key={category.id}
            className={`border rounded-lg p-6 hover:shadow-lg transition-shadow ${getColorClasses(category.color)}`}
          >
            <div className="flex items-center mb-4">
              <div className={`${getIconColorClasses(category.color)} mr-3`}>
                {category.icon}
              </div>
              <h2 className="text-2xl font-bold">{category.title}</h2>
            </div>

            <p className="text-gray-700 mb-6 leading-relaxed">
              {category.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {category.skills.map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center py-1"
                >
                  <span className={`w-1.5 h-1.5 rounded-full mr-3 ${getIconColorClasses(category.color).replace('text-', 'bg-')}`}></span>
                  <span className="text-sm text-gray-700">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Proficiency Levels */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Proficiency Levels</h2>
        <div className="bg-gray-50 rounded-lg p-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">A</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Advanced</h3>
              <p className="text-sm text-gray-600">
                Extensive experience with deep understanding and ability to teach others
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">I</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Intermediate</h3>
              <p className="text-sm text-gray-600">
                Solid working knowledge with ability to work independently
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">B</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Basic</h3>
              <p className="text-sm text-gray-600">
                Fundamental understanding with guided experience
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Learning & Development */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Continuous Learning</h2>
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-8 border border-blue-200">
          <div className="text-center mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Currently Exploring
            </h3>
            <p className="text-gray-700 max-w-2xl mx-auto">
              I'm committed to staying at the forefront of technology and continuously expanding my knowledge base.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-4 rounded-lg border border-blue-100">
              <h4 className="font-semibold text-gray-900 mb-2">Advanced AI</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Large Language Models</li>
                <li>• Multimodal AI Systems</li>
                <li>• AI Safety & Alignment</li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded-lg border border-blue-100">
              <h4 className="font-semibold text-gray-900 mb-2">Emerging Finance</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• DeFi Protocols</li>
                <li>• Crypto Market Making</li>
                <li>• ESG Quantitative Models</li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded-lg border border-blue-100">
              <h4 className="font-semibold text-gray-900 mb-2">Infrastructure</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Edge Computing</li>
                <li>• Real-time Systems</li>
                <li>• Distributed Computing</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
