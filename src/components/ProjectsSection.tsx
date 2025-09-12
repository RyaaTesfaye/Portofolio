import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Calendar } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "EduTask - Student Task Manager",
      description: "A comprehensive web application for students to manage their assignments, deadlines, and study schedules. Features include task categorization, priority levels, and progress tracking.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Supabase", "Vite"],
      image: "/placeholder.svg?height=300&width=500",
      githubUrl: "#",
      liveUrl: "#",
      status: "Completed",
      date: "Nov 2024"
    },
    {
      title: "Campus Connect API",
      description: "RESTful API service for university social networking platform. Handles user authentication, posts, messaging, and event management with real-time capabilities.",
      technologies: ["Node.js", "Express", "MongoDB", "Socket.io", "JWT"],
      image: "/placeholder.svg?height=300&width=500",
      githubUrl: "#",
      liveUrl: "#",
      status: "In Progress",
      date: "Dec 2024"
    },
    {
      title: "Smart Library System",
      description: "Digital library management system with book recommendation engine, QR code integration, and automated fine calculation. Built for university library.",
      technologies: ["Python", "Django", "PostgreSQL", "React", "TensorFlow"],
      image: "/placeholder.svg?height=300&width=500",
      githubUrl: "#",
      liveUrl: "#",
      status: "Completed",
      date: "Oct 2024"
    },
    {
      title: "Weather Dashboard",
      description: "Real-time weather monitoring dashboard with location-based forecasts, interactive maps, and weather alerts. Responsive design for all devices.",
      technologies: ["Vue.js", "JavaScript", "Weather API", "Chart.js", "CSS3"],
      image: "/placeholder.svg?height=300&width=500",
      githubUrl: "#",
      liveUrl: "#",
      status: "Completed",
      date: "Sep 2024"
    },
    {
      title: "AI Code Reviewer",
      description: "Machine learning tool that analyzes code quality, suggests improvements, and detects potential bugs. Supports multiple programming languages.",
      technologies: ["Python", "FastAPI", "OpenAI API", "React", "Docker"],
      image: "/placeholder.svg?height=300&width=500",
      githubUrl: "#",
      liveUrl: "#",
      status: "In Progress",
      date: "Jan 2025"
    },
    {
      title: "Expense Tracker Mobile",
      description: "Cross-platform mobile app for personal finance management with category tracking, budget goals, and spending insights with beautiful charts.",
      technologies: ["React Native", "Expo", "Firebase", "Chart.js", "AsyncStorage"],
      image: "/placeholder.svg?height=300&width=500",
      githubUrl: "#",
      liveUrl: "#",
      status: "Completed",
      date: "Aug 2024"
    }
  ];

  const getStatusColor = (status: string) => {
    return status === "Completed" ? "bg-accent" : "bg-primary";
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some of the projects I've worked on during my journey as a Computer Science student
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-glass border-glass shadow-card backdrop-blur-sm hover:shadow-glow transition-all duration-300 group">
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <Badge className={`${getStatusColor(project.status)} text-white`}>
                    {project.status}
                  </Badge>
                </div>
              </div>
              
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar size={14} className="mr-1" />
                    {project.date}
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button size="sm" variant="outline" className="flex-1">
                    <Github size={16} className="mr-2" />
                    Code
                  </Button>
                  <Button size="sm" className="flex-1 bg-gradient-primary hover:shadow-glow">
                    <ExternalLink size={16} className="mr-2" />
                    Live
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="border-glass">
            <Github size={20} className="mr-2" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;