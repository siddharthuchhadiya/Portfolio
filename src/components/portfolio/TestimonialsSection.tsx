import { Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Jay Kakaiya",
    role: "CEO, Wealthbridgedistribution",
    content: "Siddharth delivered an exceptional website that exceeded our expectations. His attention to detail and understanding of our brand was impressive.",
    avatar: "J",
  },
  {
    id: 2,
    name: "Sahil Patel",
    role: "Founder, ",
    content: "Working with Siddharth was a fantastic experience. He transformed our Shopify store and significantly improved our conversion rates.",
    avatar: "S",
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "Marketing Director, GrowthCo",
    content: "Professional, creative, and incredibly skilled. Siddharth built us a beautiful WordPress site that's easy to manage and performs flawlessly.",
    avatar: "M",
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "Marketing Director, GrowthCo",
    content: "Professional, creative, and incredibly skilled. Siddharth built us a beautiful WordPress site that's easy to manage and performs flawlessly.",
    avatar: "M",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 px-4 md:px-8 lg:px-16" id="testimonials">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary text-sm uppercase tracking-widest mb-4">
            Testimonials
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            What Clients Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hear from some of the amazing people I've had the pleasure of working with.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-card rounded-2xl p-8 border border-border/50 hover:border-primary/30 transition-all duration-300 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Quote className="w-5 h-5 text-primary" />
              </div>

              {/* Content */}
              <p className="text-muted-foreground mb-8 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-display font-bold">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-display font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
