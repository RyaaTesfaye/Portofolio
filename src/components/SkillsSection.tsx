import { Card, CardContent } from "@/components/ui/card";
import { Code, Database, Globe, Smartphone, Server, Palette } from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Globe,
      title: "Frontend Development",
      skills: ["React", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Next.js", "Vue.js"]
    },
    {
      icon: Server,
      title: "Backend Development",
      skills: ["Node.js", "Express.js", "Python", "FastAPI", "REST APIs", "GraphQL"]
    },
    {
      icon: Database,
      title: "Database & Cloud",
      skills: ["MySQL", "PostgreSQL", "MongoDB", "Firebase", "Supabase", "AWS", "Vercel"]
    },
    {
      icon: Code,
      title: "Programming Languages",
      skills: ["JavaScript", "TypeScript", "Python", "Java", "C++", "PHP", "Go"]
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      skills: ["React Native", "Flutter", "Expo", "Mobile UI/UX", "Progressive Web Apps"]
    },
    {
      icon: Palette,
      title: "Design & Tools",
      skills: ["Figma", "Git", "GitHub", "VS Code", "Docker", "Linux", "Photoshop"]
    }
  ];

  const getSkillLevel = (skill: string): number => {
    const skillLevels: { [key: string]: number } = {
      "React": 90,
      "TypeScript": 85,
      "JavaScript": 95,
      "Python": 80,
      "Node.js": 85,
      "HTML5": 95,
      "CSS3": 90,
      "Tailwind CSS": 88,
      "Git": 85,
      "MySQL": 75,
      "MongoDB": 70
    };
    return skillLevels[skill] || Math.floor(Math.random() * 30) + 60;
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="bg-gradient-primary bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card key={index} className="bg-glass border-glass shadow-card backdrop-blur-sm hover:shadow-glow transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <IconComponent className="w-8 h-8 text-primary mr-3" />
                    <h3 className="text-xl font-semibold">{category.title}</h3>
                  </div>
                  <div className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">{skill}</span>
                        <div className="flex space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <div
                              key={i}
                              className={`w-2 h-2 rounded-full ${
                                i < Math.floor(getSkillLevel(skill) / 20)
                                  ? "bg-primary"
                                  : "bg-muted"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Progress Bars for Main Skills */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8">Core Technologies</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {["JavaScript", "React", "TypeScript", "Node.js", "Python", "CSS3"].map((skill) => {
              const level = getSkillLevel(skill);
              return (
                <div key={skill} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">{skill}</span>
                    <span className="text-sm text-muted-foreground">{level}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className="bg-gradient-primary h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${level}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;