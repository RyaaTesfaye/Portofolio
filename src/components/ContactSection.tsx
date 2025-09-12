import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Github, Linkedin, Instagram, Send } from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "aditiya45@gmail.com",
      link: "mailto:Adit.informatika@ui.ac.id"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+62 856-0725-3375",
      link: "tel:+6281234567890"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Jember, Indonesia",
      link: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      platform: "GitHub",
      username: "@Ragaluf",
      url: "https://github.com/Adit-dev"
    },
    {
      icon: Linkedin,
      platform: "LinkedIn",
      username: "Aditiya Rifky",
      url: "https://linkedin.com/in/Adit-informatika"
    },
    {
      icon: Instagram,
      platform: "Instagram",
      username: "@Aditya_rfky",
      url: "https://instagram.com/Adit.codes"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In <span className="bg-gradient-primary bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Let's connect and discuss opportunities, projects, or just have a chat about technology
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-glass border-glass shadow-card backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl">Send me a message</CardTitle>
                <p className="text-muted-foreground">
                  I'm always open to discussing new opportunities and interesting projects
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Name</label>
                    <Input placeholder="Your name" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Email</label>
                    <Input type="email" placeholder="your.email@example.com" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Subject</label>
                  <Input placeholder="What's this about?" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Message</label>
                  <Textarea 
                    placeholder="Your message here..." 
                    rows={6}
                    className="resize-none"
                  />
                </div>
                <Button className="w-full bg-gradient-primary hover:shadow-glow">
                  <Send size={18} className="mr-2" />
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info & Social */}
          <div className="space-y-6">
            
            {/* Contact Information */}
            <Card className="bg-glass border-glass shadow-card backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((contact, index) => {
                  const IconComponent = contact.icon;
                  return (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="flex-shrink-0">
                        <IconComponent className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">{contact.title}</p>
                        <a
                          href={contact.link}
                          className="text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                          {contact.value}
                        </a>
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className="bg-glass border-glass shadow-card backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Follow Me</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 p-3 rounded-lg hover:bg-primary/10 transition-colors group"
                    >
                      <IconComponent className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                      <div>
                        <p className="text-sm font-medium">{social.platform}</p>
                        <p className="text-sm text-muted-foreground">{social.username}</p>
                      </div>
                    </a>
                  );
                })}
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="bg-glass border-glass shadow-card backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Quick Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">10+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">3.75</div>
                  <div className="text-sm text-muted-foreground">Current GPA</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">1+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;