import { Mail, Github, Linkedin, MessageCircle, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";


const socialLinks = [
  {
    name: "Email",
    href: "mailto:siddharthuchhadiya@gmail.com",
    icon: Mail,
    label: "Siddharth Uchhadiya",
  },
  // {
  //   name: "GitHub",
  //   href: "https://github.com/siddharthuchhadiya",
  //   icon: Github,
  //   label: "@siddharth",
  // },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/siddharth-uchhadiya-b179ab31b/",
    icon: Linkedin,
    label: "Siddharth Uchhadiya",
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/916351071730",
    icon: MessageCircle,
    label: "+91 63510 71730",
  },
];


const ContactSection = () => {
  return (
    <section className="py-24 px-4 md:px-8 lg:px-16" id="contact">
      <div className="container mx-auto">
        {/* Main CTA Card */}
        <div className="bg-card rounded-3xl p-12 md:p-16 text-center border border-border/50 relative overflow-hidden">
          {/* Background Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5" />
          
          <div className="relative z-10">
            <p className="text-primary text-sm uppercase tracking-widest mb-4">
              Get In Touch
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              Let's Work <span className="text-gradient">Together</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-10 text-lg">
              Have a project in mind? I'd love to hear about it. Let's create something amazing together.
            </p>

            {/* Email Button */}
            <Button
              size="lg"
              className="rounded-full px-8 text-lg group"
              asChild
            >
              <a href="mailto:siddharthuchhadiya@gmail.com">
                Say Hello
                <ArrowUpRight className="w-5 h-5 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </Button>
          </div>                                      
        </div>

        {/* Social Links */}
<div className="flex justify-center items-center">
  <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center max-w-6xl w-full">
    {socialLinks.map((link) => (
      <a
        key={link.name}
        href={link.href}
        target={link.name !== "Email" ? "_blank" : undefined}
        rel={link.name !== "Email" ? "noopener noreferrer" : undefined}
        className="
          flex flex-col items-center text-center gap-3
          p-6 w-full max-w-[260px]
          bg-card rounded-xl border border-border/50
          hover:border-primary/50
          transition-all duration-300 group
        "
      >
        <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
          <link.icon className="w-5 h-5" />
        </div>

        <div>
          <div className="text-sm text-muted-foreground">{link.name}</div>
          <div className="font-medium group-hover:text-primary transition-colors">
            {link.label}
          </div>
        </div>
      </a>
    ))}
  </div>
</div>
      </div>
    </section>
  );
};

export default ContactSection;
