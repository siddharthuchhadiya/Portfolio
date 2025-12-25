const skills = [
  {
    category: "Frontend",
    items: [
      { name: "HTML5", icon: "/icons/html-5.png" },
      { name: "CSS3", icon: "/icons/css-3.png" },
      { name: "JavaScript", icon: "/icons/js.png" },
      { name: "React", icon: "/icons/physics.png" },
      { name: "Tailwind CSS", icon: "/icons/css.png" },
      { name: "Next.js", icon: "  /icons/next js.png" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: "/icons/nodejs.png" },
      { name: "MongoDB", icon: "/icons/database-storage.png" },
      { name: "REST APIs", icon: "/icons/api.png" },
      { name: "Express.js", icon: "/icons/programing.png" },
    ],
  },
  {
    category: "CMS & E-Commerce",
    items: [
      { name: "WordPress", icon: "/icons/wordpress.png" },
      { name: "Shopify", icon: "/icons/shopify.png" },
      { name: "WooCommerce", icon: "/icons/woocommerce.png" },
      { name: "Elementor", icon: "/icons/elementor.png" },
    ],
  },
  {
    category: "Tools & Design",
    items: [
      { name: "Git", icon: "/icons/github.jpeg" },
      { name: "Figma", icon: "/icons/figma.png" },
      { name: "Photoshop", icon: "/icons/photoshop.png" },
    ],
  },
];


const SkillsSection = () => {
  return (
    <section
      id="skills"
      className="py-24 px-4 md:px-8 lg:px-16 bg-card/50"
    >
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary text-sm uppercase tracking-widest mb-4">
            Expertise
          </p>

          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Skills & Technologies
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            A powerful set of modern technologies I use to build fast,
            scalable, and visually stunning web applications.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {skills.map((group) => (
            <div
              key={group.category}
              className="bg-card border border-border/50 rounded-2xl p-6 hover:border-primary/30 transition-all"
            >
              <h3 className="text-lg font-display font-semibold mb-6 text-primary">
                {group.category}
              </h3>

              <div className="space-y-4">
                {group.items.map((skill) => (
                  <div
                    key={skill.name}
                    className="group flex items-center gap-4 p-3 rounded-xl bg-secondary/50 hover:bg-secondary transition-all"
                  >
                    {/* Icon */}
                    <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-background border border-border/50">
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="w-6 h-6 object-contain group-hover:scale-110 transition-transform"
                      />
                    </div>

                    {/* Name */}
                    <span className="font-medium group-hover:text-primary transition-colors">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
