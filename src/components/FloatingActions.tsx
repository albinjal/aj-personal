import { useState } from "react";
import { Mail, Github, Linkedin, FileText, Calendar, Plus, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

const FloatingActions = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const actions = [
    {
      icon: Mail,
      label: "Email",
      href: "mailto:albin@jaldevik.com",
      color: "bg-blue-500 hover:bg-blue-600",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/albin-jaldevik",
      color: "bg-blue-700 hover:bg-blue-800",
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/albinjal",
      color: "bg-gray-800 hover:bg-gray-900",
    },
    {
      icon: FileText,
      label: "Resume",
      href: "#", // Would link to resume PDF
      color: "bg-green-600 hover:bg-green-700",
    },
    {
      icon: Calendar,
      label: "Schedule a Chat",
      href: "#", // Would link to calendar booking
      color: "bg-purple-600 hover:bg-purple-700",
    },
  ];

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const handleActionClick = (href: string, label: string) => {
    if (href === "#") {
      // Handle special cases like resume download or calendar booking
      if (label === "Resume") {
        // In a real implementation, this would download the resume
        alert("Resume download would start here");
      } else if (label === "Schedule a Chat") {
        // In a real implementation, this would open a calendar booking
        alert("Calendar booking would open here");
      }
    } else {
      window.open(href, '_blank');
    }
    setIsExpanded(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Expanded Actions */}
      <div className={`flex flex-col-reverse space-y-reverse space-y-3 mb-4 transition-all duration-300 ${
        isExpanded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}>
        {actions.map((action, index) => (
          <Tooltip key={index}>
            <TooltipTrigger asChild>
              <Button
                size="lg"
                className={`w-14 h-14 rounded-full shadow-lg transition-all duration-300 delay-${index * 50} ${action.color} ${
                  isExpanded ? 'scale-100' : 'scale-0'
                }`}
                onClick={() => handleActionClick(action.href, action.label)}
              >
                <action.icon className="h-6 w-6 text-white" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="left">
              <p>{action.label}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </div>

      {/* Main Toggle Button */}
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            size="lg"
            className={`w-16 h-16 rounded-full shadow-xl transition-all duration-300 ${
              isExpanded
                ? 'bg-red-500 hover:bg-red-600 rotate-45'
                : 'bg-blue-600 hover:bg-blue-700 rotate-0'
            }`}
            onClick={toggleExpanded}
          >
            {isExpanded ? (
              <X className="h-8 w-8 text-white" />
            ) : (
              <Plus className="h-8 w-8 text-white" />
            )}
          </Button>
        </TooltipTrigger>
        <TooltipContent side="left">
          <p>{isExpanded ? 'Close' : 'Get in Touch'}</p>
        </TooltipContent>
      </Tooltip>

      {/* Background overlay when expanded */}
      {isExpanded && (
        <div
          className="fixed inset-0 bg-black bg-opacity-20 -z-10"
          onClick={() => setIsExpanded(false)}
        />
      )}
    </div>
  );
};

export default FloatingActions;
