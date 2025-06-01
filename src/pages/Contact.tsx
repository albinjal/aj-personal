import { Mail, MapPin, Linkedin, Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const contactInfo = {
    email: "albin.jaldevik@example.com", // Replace with actual email
    location: "London, UK",
    linkedin: "https://linkedin.com/in/albinjaldevik", // Replace with actual LinkedIn
    github: "https://github.com/albinjaldevik", // Replace with actual GitHub
  };

  const collaborationAreas = [
    "AI & Machine Learning Research",
    "Quantitative Trading Strategies",
    "Mathematical Modeling Projects",
    "Academic Collaborations",
    "Speaking Engagements",
    "Consulting Opportunities"
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Get In Touch</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          I'm always interested in connecting with fellow researchers, industry professionals,
          and anyone passionate about AI, mathematics, and quantitative finance
        </p>
      </div>

      {/* Contact Information */}
      <section className="mb-16">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Direct Contact */}
          <div className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>

            <div className="space-y-6">
              <div className="flex items-center">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <Mail className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Email</p>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="text-lg text-gray-900 hover:text-blue-600 transition-colors"
                  >
                    {contactInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <MapPin className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Location</p>
                  <p className="text-lg text-gray-900">{contactInfo.location}</p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-600 mb-4">
                Feel free to reach out via email for any inquiries, collaboration opportunities,
                or if you'd like to discuss research ideas.
              </p>
              <Button asChild className="w-full">
                <a href={`mailto:${contactInfo.email}`}>
                  Send Email
                  <Mail className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>

          {/* Professional Networks */}
          <div className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Professional Networks</h2>

            <div className="space-y-4 mb-8">
              <a
                href={contactInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors group"
              >
                <div className="bg-blue-600 p-2 rounded-lg mr-4">
                  <Linkedin className="h-5 w-5 text-white" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-gray-900">LinkedIn</p>
                  <p className="text-sm text-gray-600">Professional networking & updates</p>
                </div>
                <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-blue-600" />
              </a>

              <a
                href={contactInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group"
              >
                <div className="bg-gray-800 p-2 rounded-lg mr-4">
                  <Github className="h-5 w-5 text-white" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-gray-900">GitHub</p>
                  <p className="text-sm text-gray-600">Code repositories & projects</p>
                </div>
                <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-gray-600" />
              </a>
            </div>

            <div className="pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-600">
                Connect with me on professional platforms to stay updated on my work
                and explore potential collaborations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Collaboration Areas */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Areas of Interest</h2>
        <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-lg p-8 border border-gray-200">
          <p className="text-center text-gray-700 mb-8 max-w-2xl mx-auto">
            I'm particularly interested in collaborating on projects and discussions in these areas:
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {collaborationAreas.map((area, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg border border-gray-200 text-center hover:shadow-md transition-shadow"
              >
                <p className="text-sm font-medium text-gray-900">{area}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Response Time */}
      <section className="mb-16">
        <div className="bg-blue-50 rounded-lg p-8 border border-blue-200 text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Response Time</h3>
          <p className="text-gray-700 max-w-2xl mx-auto">
            I typically respond to emails within 2-3 business days. For urgent matters
            or time-sensitive opportunities, please mention it in your subject line.
          </p>
        </div>
      </section>

      {/* Current Status */}
      <section>
        <div className="bg-green-50 rounded-lg p-8 border border-green-200 text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Current Availability</h3>
          <p className="text-gray-700 mb-4 max-w-2xl mx-auto">
            I'm currently employed full-time at DRW Trading but remain open to:
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">
              Research Collaborations
            </span>
            <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">
              Consulting Projects
            </span>
            <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">
              Speaking Engagements
            </span>
            <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">
              Academic Partnerships
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
