const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-border/50">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-display font-bold text-xl">
            Siddharth<span className="text-primary">.</span>
          </div>
          
          <nav className="flex items-center gap-8">
            <a href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">
              Projects
            </a>
            <a href="#skills" className="text-muted-foreground hover:text-foreground transition-colors">
              Skills
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </a>
          </nav>
          
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Siddharth Uchhadiya. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
