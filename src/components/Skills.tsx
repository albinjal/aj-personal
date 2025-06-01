import { useState } from "react";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  const skillCategories = [
    {
      category: "Programming Languages",
      icon: "💻",
      skills: [
        { name: "Python", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "R", level: 85 },
        { name: "JavaScript", level: 85 },
        { name: "Java", level: 80 },
        { name: "SQL", level: 85 },
        { name: "MATLAB", level: 75 },
      ]
    },
    {
      category: "AI & Machine Learning",
      icon: "🧠",
      skills: [
        { name: "PyTorch", level: 95 },
        { name: "Deep Learning", level: 90 },
        { name: "Reinforcement Learning", level: 95 },
        { name: "Computer Vision", level: 80 },
        { name: "Neural Networks", level: 90 },
        { name: "TensorFlow", level: 75 },
        { name: "Transformers", level: 85 },
      ]
    },
    {
      category: "Mathematics & Statistics",
      icon: "📊",
      skills: [
        { name: "Probability Theory", level: 95 },
        { name: "Statistics", level: 90 },
        { name: "Linear Algebra", level: 95 },
        { name: "Calculus", level: 90 },
        { name: "Game Theory", level: 85 },
        { name: "Optimization", level: 80 },
        { name: "Bayesian Methods", level: 85 },
      ]
    },
    {
      category: "Finance & Trading",
      icon: "📈",
      skills: [
        { name: "Quantitative Trading", level: 85 },
        { name: "Algorithmic Trading", level: 80 },
        { name: "Risk Management", level: 75 },
        { name: "Financial Modeling", level: 80 },
        { name: "Options Pricing", level: 75 },
        { name: "Portfolio Optimization", level: 80 },
      ]
    },
    {
      category: "Development & Tools",
      icon: "🛠️",
      skills: [
        { name: "React", level: 85 },
        { name: "Angular", level: 80 },
        { name: "Node.js", level: 80 },
        { name: "Git", level: 90 },
        { name: "Docker", level: 70 },
        { name: "AWS", level: 65 },
        { name: "Google Cloud", level: 70 },
      ]
    },
    {
      category: "Data Science",
      icon: "📈",
      skills: [
        { name: "Pandas", level: 95 },
        { name: "NumPy", level: 95 },
        { name: "Matplotlib", level: 85 },
        { name: "Data Visualization", level: 85 },
        { name: "D3.js", level: 75 },
        { name: "Jupyter", level: 90 },
      ]
    }
  ];

  const getSkillColor = (level: number) => {
    if (level >= 90) return "bg-green-500";
    if (level >= 80) return "bg-blue-500";
    if (level >= 70) return "bg-yellow-500";
    return "bg-gray-500";
  };

  const getSkillSize = (level: number) => {
    if (level >= 90) return "text-lg px-4 py-2";
    if (level >= 80) return "text-base px-3 py-2";
    return "text-sm px-3 py-1";
  };

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Technical Expertise
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A comprehensive toolkit spanning mathematics, artificial intelligence,
            and quantitative finance, built through academic research and industry experience.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className={`bg-gray-50 dark:bg-gray-800 rounded-xl p-6 transition-all duration-300 ${
                hoveredCategory === category.category
                  ? 'transform scale-105 shadow-xl'
                  : 'hover:shadow-lg'
              }`}
              onMouseEnter={() => setHoveredCategory(category.category)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              <div className="flex items-center mb-6">
                <span className="text-3xl mr-3">{category.icon}</span>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {category.category}
                </h3>
              </div>

              {/* Skills as floating bubbles */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center justify-between">
                    <span className="text-gray-700 dark:text-gray-300 font-medium">
                      {skill.name}
                    </span>
                    <div className="flex items-center space-x-2">
                      <div className="w-20 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full transition-all duration-500 ${getSkillColor(skill.level)}`}
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                      <span className="text-xs text-gray-500 dark:text-gray-400 w-8">
                        {skill.level}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Skill Level Legend for this category */}
              <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                  <span>Beginner</span>
                  <span>Intermediate</span>
                  <span>Advanced</span>
                  <span>Expert</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Overall Summary */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-blue-900 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Core Competencies
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  Mathematical Foundations
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  Strong theoretical background in probability, statistics, and optimization
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  AI Research & Development
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  Deep expertise in machine learning, reinforcement learning, and neural networks
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  Quantitative Applications
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  Practical experience applying mathematical models to financial markets
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
