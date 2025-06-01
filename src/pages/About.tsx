import { GraduationCap, Award, Anchor, MapPin } from "lucide-react";

const About = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Me</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          A passionate quantitative analyst with expertise in AI, mathematics, and algorithmic trading
        </p>
      </div>

      {/* Main Content */}
      <div className="prose prose-lg max-w-none">
        {/* Introduction */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Professional Summary</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            I'm a Quantitative Trading Analyst at DRW in London, where I apply advanced mathematical
            and AI techniques to develop sophisticated trading algorithms. My unique background spans
            mathematics, computer science, and artificial intelligence, enabling me to bridge theoretical
            concepts with practical applications in quantitative finance.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Beyond my professional work, I'm passionate about sharing knowledge through research and
            writing, particularly at the intersection of AI, mathematics, and financial markets.
            I bring a diverse perspective shaped by both academic excellence and competitive sailing
            at the international level.
          </p>
        </section>

        {/* Education */}
        <section className="mb-12">
          <div className="flex items-center mb-6">
            <GraduationCap className="h-6 w-6 text-gray-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">Education</h2>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Master of Science in Computer Science (AI Track)
              </h3>
              <p className="text-gray-600 mb-2">Delft University of Technology, Netherlands</p>
              <p className="text-sm text-gray-500 mb-3">GPA: 8.60/10.0 • Cum Laude (Top 5%)</p>
              <p className="text-gray-700">
                Specialized in artificial intelligence with focus on machine learning,
                reinforcement learning, and their applications to complex systems.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Bachelor of Science in Mathematics
              </h3>
              <p className="text-gray-600 mb-2">Linköping University, Sweden</p>
              <p className="text-sm text-gray-500 mb-3">GPA: 4.74/5.0</p>
              <p className="text-gray-700">
                Strong foundation in mathematical analysis, statistics, and computational mathematics.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Bachelor of Science in Computer Engineering
              </h3>
              <p className="text-gray-600 mb-2">Linköping University, Sweden</p>
              <p className="text-gray-700">
                Comprehensive understanding of software engineering, algorithms, and system design.
              </p>
            </div>
          </div>
        </section>

        {/* Core Expertise */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Core Expertise</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Technical Skills</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Artificial Intelligence & Machine Learning</li>
                <li>• Quantitative Analysis & Modeling</li>
                <li>• Algorithmic Trading Systems</li>
                <li>• Mathematical Optimization</li>
                <li>• Statistical Analysis & Inference</li>
                <li>• Software Engineering & System Design</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Domain Knowledge</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Financial Markets & Trading</li>
                <li>• Risk Management</li>
                <li>• Computational Finance</li>
                <li>• Reinforcement Learning Applications</li>
                <li>• Mathematical Research</li>
                <li>• Academic Writing & Communication</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Awards & Recognition */}
        <section className="mb-12">
          <div className="flex items-center mb-6">
            <Award className="h-6 w-6 text-gray-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">Awards & Recognition</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                4Potentials Student of the Year
              </h3>
              <p className="text-gray-700">
                Recognized for outstanding academic achievement and potential in technology and innovation.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-lg border border-purple-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Nova 111 Student List Winner
              </h3>
              <p className="text-gray-700">
                Computer Science Vertical winner, recognizing excellence in computational sciences.
              </p>
            </div>
          </div>
        </section>

        {/* Sailing Achievements */}
        <section className="mb-12">
          <div className="flex items-center mb-6">
            <Anchor className="h-6 w-6 text-gray-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">International Sailing</h2>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              World Championship Competitor
            </h3>
            <p className="text-gray-700">
              Represented Sweden in two World Championships in dinghy sailing, demonstrating
              dedication, strategic thinking, and performance under pressure. This experience
              has shaped my approach to problem-solving and competitive analysis in professional contexts.
            </p>
          </div>
        </section>

        {/* Current Location */}
        <section>
          <div className="flex items-center mb-4">
            <MapPin className="h-6 w-6 text-gray-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">Current Location</h2>
          </div>
          <p className="text-gray-700">
            Based in London, UK, working at DRW as a Quantitative Trading Analyst.
            Open to collaboration on research projects and professional opportunities
            in AI, quantitative finance, and algorithmic trading.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
