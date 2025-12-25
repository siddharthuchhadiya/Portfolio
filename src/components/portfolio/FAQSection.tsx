import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What services do you offer?",
    answer: "I offer a comprehensive range of web services including custom website design, frontend development with React/Next.js, WordPress development, Shopify store creation, and full-stack web application development.",
  },
  {
    question: "What is your typical project timeline?",
    answer: "Project timelines vary based on complexity. A simple landing page might take 1-2 weeks, while a full e-commerce site or web application could take 4-8 weeks. I'll provide a detailed timeline after understanding your requirements.",
  },
  {
    question: "Do you provide ongoing support and maintenance?",
    answer: "Yes! I offer ongoing support and maintenance packages to keep your website secure, updated, and performing optimally. This includes regular updates, security monitoring, and technical support.",
  },
  {
    question: "What is your pricing structure?",
    answer: "I offer both fixed-price projects and hourly rates depending on the project scope. After our initial consultation, I'll provide a detailed proposal with transparent pricing based on your specific needs.",
  },
  {
    question: "Can you help with an existing website?",
    answer: "Absolutely! Whether you need a redesign, new features, performance optimization, or bug fixes, I can help improve and enhance your existing website or web application.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-24 px-4 md:px-8 lg:px-16 bg-card/50" id="faq">
      <div className="container mx-auto max-w-3xl">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary text-sm uppercase tracking-widest mb-4">
            FAQ
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Common Questions
          </h2>
          <p className="text-muted-foreground">
            Got questions? Here are some answers to help you out.
          </p>
        </div>

        {/* Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card border border-border/50 rounded-xl px-6 data-[state=open]:border-primary/30"
            >
              <AccordionTrigger className="text-left font-display font-medium hover:text-primary hover:no-underline py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
