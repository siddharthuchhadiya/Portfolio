import { MapPin, Mail, Github, Linkedin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center py-20 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Profile Card */}
          <div className="order-2 lg:order-1">
            <div className="bg-card rounded-3xl p-8 card-shadow border border-border/50 max-w-md mx-auto lg:mx-0">
              {/* Profile Image */}
              <div className="h-200 mx-auto mb-6 rounded-2xl overflow-hidden bg-secondary">
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  <img
                    src="/icons/Siddharth Portfolio.png"
                    alt="Siddharth Portfolio Logo"
                    className="w-100 object-contain"
                  />
                </div>
              </div>



              {/* Name & Title */}
              <h2 className="text-2xl font-display font-bold text-center mb-2">
                Siddharth Uchhadiya
              </h2>
              <p className="text-muted-foreground text-center mb-4">
                Web Designer & Web Developer
              </p>

              {/* Location */}
              <div className="flex items-center justify-center gap-2 text-muted-foreground mb-6">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Rajkot | Guj | Ind</span>
              </div>

              {/* Social Links */}
              <div className="flex items-center justify-center gap-4 mb-6">
                <a
                  href="mailto:siddharthuchhadiya@gmail.com"
                  className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label="Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
                {/* <a
                  href="https://github.com/siddharthuchhadiya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Github className="w-4 h-4" />
                </a> */}
                <a
                  href="https://www.linkedin.com/in/siddharth-uchhadiya-b179ab31b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="https://wa.me/916351071730"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label="Whatsapp"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>
              </div>

              {/* CTA Button */}
              <Button className="w-full rounded-full font-medium" size="lg">
                View My Work
              </Button>
            </div>
          </div>

          {/* Right - Main Content */}
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <p className="text-muted-foreground mb-4 animate-fade-in-up opacity-0">
              Hi, I'm Siddharth 👋
            </p>

            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold leading-tight mb-6 animate-fade-in-up opacity-0 animation-delay-200">
              Web Development  {" "}
              <span className="text-gradient">Focused on Growth</span> & Performance
            </h1>

            <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto lg:mx-0 animate-fade-in-up opacity-0 animation-delay-400">
              I design and develop beautiful, functional websites that help businesses
              grow and connect with their audience.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-10 animate-fade-in-up opacity-0 animation-delay-600">
              <div className="text-center lg:text-left">
                <div className="text-3xl md:text-4xl font-display font-bold text-primary">7+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl md:text-4xl font-display font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Projects Done</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl md:text-4xl font-display font-bold text-primary">30+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
            </div>

            {/* CTA Buttons */}
            {/* <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up opacity-0 animation-delay-600">
              <Button size="lg" className="rounded-full px-8">
                View My Work
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8">
                Download CV
              </Button>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
