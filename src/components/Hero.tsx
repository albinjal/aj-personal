import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);

  const roles = [
    "Mathematics",
    "Artificial Intelligence",
    "Quantitative Trading",
    "Machine Learning"
  ];

  const equations = [
    "∇f(x) = lim_{h→0} [f(x+h) - f(x)]/h",
    "E[X] = ∫ x·f(x)dx",
    "∂L/∂θ = ∇_θ J(θ)",
    "P(A|B) = P(B|A)·P(A)/P(B)",
    "σ(z) = 1/(1+e^{-z})",
    "max E[U(W)] s.t. budget",
    "∇²f = H_f (Hessian)",
    "Cov(X,Y) = E[XY] - E[X]E[Y]"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-900 dark:to-blue-900">
      {/* Animated Mathematical Background */}
      <div className="absolute inset-0 overflow-hidden">
        {equations.map((equation, index) => (
          <div
            key={index}
            className="absolute text-gray-300/20 dark:text-gray-600/30 text-sm font-mono select-none animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${index * 0.5}s`,
              animationDuration: `${8 + Math.random() * 4}s`,
            }}
          >
            {equation}
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
          Albin Jaldevik
        </h1>

        <div className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 h-8">
          <span className="inline-block transition-all duration-500 ease-in-out">
            {roles[currentRole]}
          </span>
        </div>

        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
          MSc Computer Science (AI Track) • Quantitative Trading Analyst @ DRW London
          <br />
          <span className="text-base text-gray-500 dark:text-gray-400">
            Bridging pure mathematics with practical AI applications
          </span>
        </p>

        {/* Key Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">8.60/10</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">GPA Cum Laude</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">Top 5%</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">MSc Class</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">2x</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">World Champ</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">DRW</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">Quant Analyst</div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={() => scrollToSection("#about")}
          className="inline-flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors animate-bounce"
        >
          <ChevronDown className="h-6 w-6" />
        </button>
      </div>


    </section>
  );
};

export default Hero;
