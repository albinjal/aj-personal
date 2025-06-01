import { Briefcase, GraduationCap, Calendar, MapPin } from "lucide-react";

interface ExperienceItem {
  id: string;
  type: "work" | "education";
  title: string;
  organization: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
  highlights?: string[];
  gpa?: string;
  honors?: string[];
}

const Experience = () => {
  const experiences: ExperienceItem[] = [
    {
      id: "drw-trading",
      type: "work",
      title: "Quantitative Trading Analyst",
      organization: "DRW Trading",
      location: "London, UK",
      startDate: "2023",
      endDate: "Present",
      description: [
        "Develop and implement sophisticated algorithmic trading strategies using AI and mathematical modeling",
        "Apply machine learning techniques to market data analysis and prediction",
        "Collaborate with cross-functional teams to optimize trading performance and risk management",
        "Research and implement cutting-edge quantitative finance methodologies"
      ],
      highlights: [
        "Specialized in AI-driven trading algorithms",
        "Focus on quantitative research and modeling",
        "Integration of academic research with practical applications"
      ]
    },
    {
      id: "msc-delft",
      type: "education",
      title: "Master of Science in Computer Science (AI Track)",
      organization: "Delft University of Technology",
      location: "Delft, Netherlands",
      startDate: "2021",
      endDate: "2023",
      gpa: "8.60/10.0",
      honors: ["Cum Laude (Top 5%)"],
      description: [
        "Specialized in artificial intelligence with focus on machine learning and reinforcement learning",
        "Completed advanced coursework in neural networks, optimization, and computational intelligence",
        "Conducted research on AlphaZero applications to complex multi-agent systems",
        "Developed expertise in deep learning frameworks and mathematical optimization"
      ],
      highlights: [
        "Master's thesis on AlphaZero research",
        "Advanced AI and machine learning specialization",
        "Research in reinforcement learning applications"
      ]
    },
    {
      id: "bsc-math",
      type: "education",
      title: "Bachelor of Science in Mathematics",
      organization: "Linköping University",
      location: "Linköping, Sweden",
      startDate: "2018",
      endDate: "2021",
      gpa: "4.74/5.0",
      description: [
        "Strong foundation in mathematical analysis, linear algebra, and statistics",
        "Specialized in computational mathematics and optimization theory",
        "Completed bachelor's thesis on mathematical optimization in computational systems",
        "Developed proficiency in mathematical modeling and statistical analysis"
      ],
      highlights: [
        "High academic achievement (GPA: 4.74/5.0)",
        "Specialization in computational mathematics",
        "Research in optimization theory"
      ]
    },
    {
      id: "bsc-cs",
      type: "education",
      title: "Bachelor of Science in Computer Engineering",
      organization: "Linköping University",
      location: "Linköping, Sweden",
      startDate: "2018",
      endDate: "2021",
      description: [
        "Comprehensive understanding of software engineering principles and system design",
        "Developed expertise in algorithms, data structures, and programming languages",
        "Gained experience in software development methodologies and project management",
        "Built foundation in computer systems architecture and distributed computing"
      ],
      highlights: [
        "Dual degree program with Mathematics",
        "Strong software engineering foundation",
        "Focus on algorithms and system design"
      ]
    }
  ];

  const TimelineItem = ({ experience, isLast }: { experience: ExperienceItem; isLast: boolean }) => (
    <div className="flex">
      {/* Timeline line and icon */}
      <div className="flex flex-col items-center mr-6">
        <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
          experience.type === 'work'
            ? 'bg-blue-100 text-blue-600'
            : 'bg-green-100 text-green-600'
        }`}>
          {experience.type === 'work' ? (
            <Briefcase className="h-6 w-6" />
          ) : (
            <GraduationCap className="h-6 w-6" />
          )}
        </div>
        {!isLast && <div className="w-0.5 bg-gray-300 flex-1 mt-2" style={{ minHeight: '200px' }}></div>}
      </div>

      {/* Content */}
      <div className="flex-1 pb-12">
        <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-900 mb-1">
                {experience.title}
              </h3>
              <p className="text-lg text-blue-600 font-medium mb-2">
                {experience.organization}
              </p>
            </div>
            <div className="text-sm text-gray-500 space-y-1">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                <span>{experience.startDate} - {experience.endDate}</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-1" />
                <span>{experience.location}</span>
              </div>
            </div>
          </div>

          {/* GPA and Honors for education */}
          {experience.type === 'education' && (experience.gpa || experience.honors) && (
            <div className="mb-4 p-3 bg-gray-50 rounded-md">
              {experience.gpa && (
                <p className="text-sm font-medium text-gray-700">
                  GPA: {experience.gpa}
                </p>
              )}
              {experience.honors && experience.honors.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {experience.honors.map((honor, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs font-medium rounded-full"
                    >
                      {honor}
                    </span>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Description */}
          <div className="mb-4">
            <ul className="space-y-2 text-gray-700">
              {experience.description.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1.5">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Highlights */}
          {experience.highlights && experience.highlights.length > 0 && (
            <div>
              <h4 className="text-sm font-medium text-gray-900 mb-2">Key Highlights:</h4>
              <div className="flex flex-wrap gap-2">
                {experience.highlights.map((highlight, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-md"
                  >
                    {highlight}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Experience</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          My professional journey through education and career in AI, mathematics, and quantitative trading
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {experiences.map((experience, index) => (
          <TimelineItem
            key={experience.id}
            experience={experience}
            isLast={index === experiences.length - 1}
          />
        ))}
      </div>

      {/* Awards Section */}
      <section className="mt-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Awards & Recognition</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              4Potentials Student of the Year
            </h3>
            <p className="text-gray-700 mb-3">
              Recognized for outstanding academic achievement and potential in technology and innovation.
            </p>
            <p className="text-sm text-gray-500">Sweden • 2023</p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-lg border border-purple-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Nova 111 Student List Winner
            </h3>
            <p className="text-gray-700 mb-3">
              Computer Science Vertical winner, recognizing excellence in computational sciences.
            </p>
            <p className="text-sm text-gray-500">Sweden • 2023</p>
          </div>

          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-6 rounded-lg border border-cyan-100 md:col-span-2">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              World Championship Competitor - Dinghy Sailing
            </h3>
            <p className="text-gray-700 mb-3">
              Represented Sweden in two World Championships, demonstrating excellence in competitive sailing
              and strategic thinking under pressure.
            </p>
            <p className="text-sm text-gray-500">International • Multiple Years</p>
          </div>
        </div>
      </section>

      {/* Skills Summary */}
      <section className="mt-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Core Competencies</h2>
        <div className="bg-gray-50 rounded-lg p-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Technical Skills</h3>
              <ul className="space-y-1 text-gray-700 text-sm">
                <li>• Machine Learning & AI</li>
                <li>• Quantitative Analysis</li>
                <li>• Algorithmic Trading</li>
                <li>• Mathematical Modeling</li>
                <li>• Statistical Analysis</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Programming</h3>
              <ul className="space-y-1 text-gray-700 text-sm">
                <li>• Python, C++, MATLAB</li>
                <li>• PyTorch, TensorFlow</li>
                <li>• SQL, PostgreSQL</li>
                <li>• React, TypeScript</li>
                <li>• AWS, Cloud Computing</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Domain Expertise</h3>
              <ul className="space-y-1 text-gray-700 text-sm">
                <li>• Financial Markets</li>
                <li>• Risk Management</li>
                <li>• Optimization Theory</li>
                <li>• Reinforcement Learning</li>
                <li>• Academic Research</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experience;
