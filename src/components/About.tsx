import { Award, MapPin, GraduationCap, Briefcase } from "lucide-react";

const About = () => {
  const achievements = [
    "4Potentials Student of the Year 2024",
    "Nova 111 Student List Sweden 2023",
    "World Championship Sailing (Italy 2016, Spain 2017)",
    "Top 1.3% Swedish University Entrance Exam"
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Photo & Quick Info */}
          <div className="text-center md:text-left">
            <div className="w-48 h-48 mx-auto md:mx-0 mb-6 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white text-6xl font-bold">
              AJ
            </div>

            <div className="space-y-3 text-gray-600 dark:text-gray-400">
              <div className="flex items-center justify-center md:justify-start">
                <MapPin className="h-4 w-4 mr-2" />
                <span>London, UK</span>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <Briefcase className="h-4 w-4 mr-2" />
                <span>Quantitative Trading Analyst @ DRW</span>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <GraduationCap className="h-4 w-4 mr-2" />
                <span>MSc Computer Science (AI) • BSc Mathematics</span>
              </div>
            </div>
          </div>

          {/* About Text & Achievements */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Mathematics meets AI meets Markets
            </h2>

            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
              MSc Computer Science (AI Track) from Delft University with a mathematics background
              from Linköping University. Currently working as a Quantitative Trading Analyst at DRW
              in London, developing algorithmic trading strategies. Research focus on reinforcement
              learning and tree evaluation algorithms. Former World Championship sailor turned AI researcher.
            </p>

            {/* Key Achievements */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <Award className="h-5 w-5 mr-2 text-gold-500" />
                Key Achievements
              </h3>
              <div className="space-y-2">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="flex items-start text-gray-600 dark:text-gray-400"
                  >
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Education Timeline - Compact */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <div className="text-lg font-bold text-blue-600 dark:text-blue-400 mb-2">
              Delft University of Technology
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">2022-2024</div>
            <div className="text-gray-700 dark:text-gray-300">MSc Computer Science (AI Track)</div>
            <div className="text-sm text-gray-500 dark:text-gray-500 mt-2">GPA: 8.60/10 (Cum Laude)</div>
          </div>

          <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <div className="text-lg font-bold text-blue-600 dark:text-blue-400 mb-2">
              Linköping University
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">2018-2022</div>
            <div className="text-gray-700 dark:text-gray-300">BSc Mathematics</div>
            <div className="text-sm text-gray-500 dark:text-gray-500 mt-2">GPA: 4.74/5.0</div>
          </div>

          <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <div className="text-lg font-bold text-blue-600 dark:text-blue-400 mb-2">
              National University of Singapore
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">2022</div>
            <div className="text-gray-700 dark:text-gray-300">Exchange Student</div>
            <div className="text-sm text-gray-500 dark:text-gray-500 mt-2">GPA: 4.50/5.0</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
