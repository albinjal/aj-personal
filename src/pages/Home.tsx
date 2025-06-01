import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Briefcase } from "lucide-react";

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <section className="py-20 md:py-32">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Albin Jaldevik
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Quantitative Trading Analyst specializing in AI, algorithmic development,
            and mathematical modeling
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <div className="flex items-center text-gray-500">
              <Briefcase className="h-5 w-5 mr-2" />
              <span>DRW Trading</span>
            </div>
            <div className="flex items-center text-gray-500">
              <MapPin className="h-5 w-5 mr-2" />
              <span>London, UK</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/about">
                Learn More About Me
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/projects">View My Work</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Highlights */}
      <section className="py-16 bg-gray-50 -mx-4 sm:-mx-6 lg:-mx-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Professional Background
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Education</h3>
                <p className="text-gray-600 mb-2">M.Sc. Computer Science (AI Track)</p>
                <p className="text-sm text-gray-500">Delft University of Technology</p>
                <p className="text-sm text-gray-500">GPA: 8.60/10.0, Cum Laude</p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Expertise</h3>
                <p className="text-gray-600 mb-2">AI & Machine Learning</p>
                <p className="text-sm text-gray-500">Quantitative Trading</p>
                <p className="text-sm text-gray-500">Algorithmic Development</p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Recognition</h3>
                <p className="text-gray-600 mb-2">4Potentials Student of the Year</p>
                <p className="text-sm text-gray-500">Nova 111 Student List Winner</p>
                <p className="text-sm text-gray-500">World Championship Sailor</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Blog Posts Preview */}
      <section className="py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest Insights</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Exploring the intersection of AI, mathematics, and quantitative trading
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              AlphaZero in Trading: Lessons Learned
            </h3>
            <p className="text-gray-600 mb-4">
              Insights from applying reinforcement learning principles to algorithmic trading strategies...
            </p>
            <p className="text-sm text-gray-500">Coming soon</p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Mathematical Foundations of AI
            </h3>
            <p className="text-gray-600 mb-4">
              Breaking down complex mathematical concepts that power modern AI systems...
            </p>
            <p className="text-sm text-gray-500">Coming soon</p>
          </div>
        </div>

        <div className="text-center">
          <Button variant="outline" asChild>
            <Link to="/blog">View All Posts</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
