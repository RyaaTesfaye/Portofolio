import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/Aditiya-hero.jpg";

const HeroSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="block text-foreground">Hi, I'm</span>
              <span className="block bg-gradient-primary bg-clip-text text-transparent">
                Aditiya Rifky Arya Putra
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-4">
              Informatics Student
            </p>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0">
              Passionate 3rd semester Informatics student at Universitas Jember, 
              specializing in web development and software engineering. 
              Always eager to learn new technologies and build innovative solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button
                onClick={() => scrollToSection("#projects")}
                className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
              >
                View My Work
              </Button>
              <Button
                variant="outline"
                onClick={() => scrollToSection("#contact")}
                className="border-glass"
              >
                Get In Touch
              </Button>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              <Button variant="ghost" size="sm" className="p-2">
                <Github size={20} />
              </Button>
              <Button variant="ghost" size="sm" className="p-2">
                <Linkedin size={20} />
              </Button>
              <Button variant="ghost" size="sm" className="p-2">
                <Mail size={20} />
              </Button>
            </div>
          </div>
          
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-glass shadow-glow">
                <img
                  src={heroImage}
                  alt="Aditiya - Informatics Student"
                  className="w-full h-full object-cover translate-y-[8px]"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-20"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => scrollToSection("#about")}
          className="p-2"
        >
          <ArrowDown size={24} />
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;