import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Calendar, MapPin, User } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get to know more about my background, education, and passion for technology
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* About Text */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Who I Am ?</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I'm Adit, a passionate Informatics student in my 3rd semester at Universitas Jember. 
                My journey into programming began during high school, and since then, I've been fascinated 
                by the endless possibilities that technology offers.
              </p>
              <p>
                I specialize in web development with a focus on modern JavaScript frameworks and backend 
                technologies. I'm constantly learning new technologies and love working on projects that 
                challenge me to grow as a developer.
              </p>
              <p>
                When I'm not coding, I enjoy contributing to open-source projects, reading about the latest 
                tech trends, and collaborating with fellow students on innovative solutions to real-world problems.
              </p>
            </div>
          </div>

          {/* Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Card className="bg-glass border-glass shadow-card backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <GraduationCap className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h4 className="font-semibold mb-2">Education</h4>
                <p className="text-sm text-muted-foreground">
                  Informatics<br />
                  Universitas Jember<br />
                  Semester 3
                </p>
              </CardContent>
            </Card>

            <Card className="bg-glass border-glass shadow-card backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <Calendar className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h4 className="font-semibold mb-2">Experience</h4>
                <p className="text-sm text-muted-foreground">
                  1+ Years<br />
                  Programming<br />
                  & Development
                </p>
              </CardContent>
            </Card>

            <Card className="bg-glass border-glass shadow-card backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <MapPin className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h4 className="font-semibold mb-2">Location</h4>
                <p className="text-sm text-muted-foreground">
                  Jember<br />
                  Indonesia
                </p>
              </CardContent>
            </Card>

            <Card className="bg-glass border-glass shadow-card backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <User className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h4 className="font-semibold mb-2">Age</h4>
                <p className="text-sm text-muted-foreground">
                  19 Years Old<br />
                  Born 2006
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;