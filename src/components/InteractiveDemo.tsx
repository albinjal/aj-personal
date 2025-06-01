import { useState, useEffect, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const InteractiveDemo = () => {
  const [selectedDistribution, setSelectedDistribution] = useState("normal");
  const [param1, setParam1] = useState([0]);
  const [param2, setParam2] = useState([1]);
  const [isAnimating, setIsAnimating] = useState(false);

  const distributions = {
    normal: {
      name: "Normal Distribution",
      description: "Bell curve fundamental to statistics and machine learning",
      param1Name: "Mean (μ)",
      param2Name: "Standard Deviation (σ)",
      param1Range: [-5, 5],
      param2Range: [0.1, 3],
      formula: "f(x) = (1/√(2πσ²)) × e^(-(x-μ)²/(2σ²))",
      color: "bg-blue-500"
    },
    exponential: {
      name: "Exponential Distribution",
      description: "Models time between events in Poisson processes",
      param1Name: "Rate (λ)",
      param2Name: "Shift",
      param1Range: [0.1, 3],
      param2Range: [0, 2],
      formula: "f(x) = λe^(-λx) for x ≥ 0",
      color: "bg-green-500"
    },
    beta: {
      name: "Beta Distribution",
      description: "Flexible distribution for probabilities and proportions",
      param1Name: "Alpha (α)",
      param2Name: "Beta (β)",
      param1Range: [0.5, 5],
      param2Range: [0.5, 5],
      formula: "f(x) = (x^(α-1)(1-x)^(β-1))/B(α,β)",
      color: "bg-purple-500"
    }
  };

  // Generate probability density function points
  const generatePoints = useMemo(() => {
    const points = [];
    const currentDist = distributions[selectedDistribution];
    const mu = param1[0];
    const sigma = param2[0];

    for (let x = -6; x <= 6; x += 0.1) {
      let y = 0;

      if (selectedDistribution === "normal") {
        y = (1 / (sigma * Math.sqrt(2 * Math.PI))) *
            Math.exp(-0.5 * Math.pow((x - mu) / sigma, 2));
      } else if (selectedDistribution === "exponential" && x >= 0) {
        y = mu * Math.exp(-mu * x);
      } else if (selectedDistribution === "beta" && x >= 0 && x <= 1) {
        // Simplified beta function approximation
        if (x > 0 && x < 1) {
          y = Math.pow(x, mu - 1) * Math.pow(1 - x, sigma - 1);
        }
      }

      points.push({ x, y });
    }

    return points;
  }, [selectedDistribution, param1, param2]);

  // Animation effect
  useEffect(() => {
    if (isAnimating) {
      const interval = setInterval(() => {
        setParam1([Math.random() * (distributions[selectedDistribution].param1Range[1] - distributions[selectedDistribution].param1Range[0]) + distributions[selectedDistribution].param1Range[0]]);
        setParam2([Math.random() * (distributions[selectedDistribution].param2Range[1] - distributions[selectedDistribution].param2Range[0]) + distributions[selectedDistribution].param2Range[0]]);
      }, 1000);

      const timeout = setTimeout(() => {
        setIsAnimating(false);
        clearInterval(interval);
      }, 5000);

      return () => {
        clearInterval(interval);
        clearTimeout(timeout);
      };
    }
  }, [isAnimating, selectedDistribution]);

  // Create SVG path from points
  const createPath = (points) => {
    if (points.length === 0) return "";

    const maxY = Math.max(...points.map(p => p.y));
    const normalizedPoints = points.map(p => ({
      x: ((p.x + 6) / 12) * 400, // Scale to 400px width
      y: 200 - (p.y / maxY) * 180 // Scale to 200px height, invert Y
    }));

    const pathData = normalizedPoints.reduce((path, point, index) => {
      const command = index === 0 ? 'M' : 'L';
      return `${path} ${command} ${point.x} ${point.y}`;
    }, '');

    return pathData;
  };

  return (
    <section id="demo" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Interactive Mathematics
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Explore probability distributions - fundamental tools in statistics, machine learning, and quantitative finance.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Controls */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Distribution Type
                  <Badge variant="secondary">Interactive Demo</Badge>
                </CardTitle>
                <CardDescription>
                  Select a probability distribution to explore its properties
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-3">
                  {Object.entries(distributions).map(([key, dist]) => (
                    <Button
                      key={key}
                      variant={selectedDistribution === key ? "default" : "outline"}
                      className="h-auto p-4 text-left"
                      onClick={() => {
                        setSelectedDistribution(key);
                        setParam1([dist.param1Range[0]]);
                        setParam2([dist.param2Range[0]]);
                      }}
                    >
                      <div>
                        <div className="font-semibold">{dist.name}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                          {dist.description}
                        </div>
                      </div>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Parameters</CardTitle>
                <CardDescription>
                  Adjust parameters to see how they affect the distribution shape
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    {distributions[selectedDistribution].param1Name}: {param1[0].toFixed(2)}
                  </label>
                  <Slider
                    value={param1}
                    onValueChange={setParam1}
                    min={distributions[selectedDistribution].param1Range[0]}
                    max={distributions[selectedDistribution].param1Range[1]}
                    step={0.1}
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    {distributions[selectedDistribution].param2Name}: {param2[0].toFixed(2)}
                  </label>
                  <Slider
                    value={param2}
                    onValueChange={setParam2}
                    min={distributions[selectedDistribution].param2Range[0]}
                    max={distributions[selectedDistribution].param2Range[1]}
                    step={0.1}
                    className="w-full"
                  />
                </div>

                <Button
                  onClick={() => setIsAnimating(true)}
                  disabled={isAnimating}
                  className="w-full"
                >
                  {isAnimating ? "Animating..." : "Animate Random Walk"}
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Mathematical Formula</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg font-mono text-sm">
                  {distributions[selectedDistribution].formula}
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-3">
                  This distribution appears throughout statistics, machine learning algorithms,
                  and financial modeling. Understanding its properties is essential for
                  quantitative analysis.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Visualization */}
          <div className="lg:sticky lg:top-24">
            <Card>
              <CardHeader>
                <CardTitle>Probability Density Function</CardTitle>
                <CardDescription>
                  Real-time visualization of the {distributions[selectedDistribution].name.toLowerCase()}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="w-full h-64 bg-white dark:bg-gray-900 rounded-lg border-2 border-gray-200 dark:border-gray-700 p-4">
                  <svg width="100%" height="100%" viewBox="0 0 400 240">
                    {/* Grid lines */}
                    <defs>
                      <pattern id="grid" width="40" height="20" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 20" fill="none" stroke="#e5e7eb" strokeWidth="1"/>
                      </pattern>
                    </defs>
                    <rect width="400" height="200" fill="url(#grid)" />

                    {/* Axes */}
                    <line x1="0" y1="200" x2="400" y2="200" stroke="#374151" strokeWidth="2"/>
                    <line x1="200" y1="0" x2="200" y2="200" stroke="#374151" strokeWidth="1"/>

                    {/* Distribution curve */}
                    <path
                      d={createPath(generatePoints)}
                      fill="none"
                      stroke="#3b82f6"
                      strokeWidth="3"
                      className="transition-all duration-500"
                    />

                    {/* Fill under curve */}
                    <path
                      d={`${createPath(generatePoints)} L 400 200 L 0 200 Z`}
                      fill="#3b82f6"
                      fillOpacity="0.2"
                      className="transition-all duration-500"
                    />

                    {/* Axis labels */}
                    <text x="200" y="230" textAnchor="middle" className="text-xs fill-gray-600">x</text>
                    <text x="10" y="15" className="text-xs fill-gray-600">f(x)</text>
                  </svg>
                </div>

                <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                  <p>
                    <strong>Current parameters:</strong> {distributions[selectedDistribution].param1Name} = {param1[0].toFixed(2)},
                    {" "}{distributions[selectedDistribution].param2Name} = {param2[0].toFixed(2)}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveDemo;
