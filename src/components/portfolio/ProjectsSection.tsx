import { link } from "fs";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Mutual Funds Website",
    category: "WordPress",
    description: "Bridge between clients & financial growth.",
    image: "/public/icons/wealthbridge.png",
    tags: ["WordPress", "Custom Theme"],
    link: "https://wealthbridgedistribution.com/",
  },
  {
    id: 2,
    title: "Calculator Dashboard",
    category: "Full Stack",
    description: "Quick price and profit calculator for Meesho & Flipkart sellers.",
    image: "/public/icons/dashboard.jpeg",
    tags: ["React", "Tailwind"],
    link: "https://price-navigator-main.vercel.app",
  },
  {
    id: 3,
    title: "Beauty E-Commerce Store",
    category: "Shopify",
    description: "Take time out for Self Love with soulful ritual rooted in nature.",
    image: "/public/icons/meraki.png",
    link: "https://www.merakibeauty.in/",
    tags: ["Shopify", "CSS"],
  },
  {
    id: 4,
    title: "Agrolla Impex",
    category: "Web Development",
    description: "Agrolla Impex is a distinguished One Star Export House and a trusted manufacturer and exporter of peanuts, oilseeds, grains, and pulses.",
    image: "/public/icons/agro.png",
    link: "https://www.agrollaimpex.com/",
    tags: ["Next.js", "Node.js", "ui/ux"],
  },
  {
    id: 5,
    title: "Honest Infotech",
    category: "Website Design",
    description: "We are committed to blend insights and strategy to create digital products for your business.",
    image: "/public/icons/infitech.png",
    link: "https://honestinfotech.in/",
    tags: ["Next.js", "ui/ux"],
  },
  {
    id: 6,
    title: "Car Rental Platform",
    category: "Web Development",
    description: "A modern e-commerce solution built with React and Node.js",
    image: "/public/icons/car 1.jpeg",
    // link: "https://wealthbridgedistribution.com/",
    tags: ["React", "Node.js", "Mern"],
  },
];

const ProjectsSection = () => {
  return (
    <section className="x-4 md:px-8 lg:px-16" id="projects">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary text-sm uppercase tracking-widest mb-4">
            Portfolio
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of my recent work across web design, development, and e-commerce solutions.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group bg-card rounded-2xl overflow-hidden border border-border/50 hover:border-primary/50 transition-all duration-300 card-shadow"
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Hover Icon */}
                {project.link && (
  <a
    href={project.link}
    target="_blank"
    rel="noopener noreferrer"
    className="absolute bottom-4 right-4 w-12 h-12 rounded-full bg-primary text-primary-foreground 
               flex items-center justify-center opacity-0 group-hover:opacity-100 
               transform translate-y-4 group-hover:translate-y-0 
               transition-all duration-300 hover:scale-105"
  >
    <ArrowUpRight className="w-5 h-5" />
  </a>
)}
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-primary text-sm mb-2">{project.category}</p>
                <h3 className="text-xl font-display font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
