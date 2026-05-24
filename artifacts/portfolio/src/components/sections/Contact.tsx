import { motion } from "framer-motion";
import { Mail, Linkedin, MapPin, Phone } from "lucide-react";
import profilePhoto from "@assets/bagus_profile.jpg";

const contactItems = [
  {
    icon: <Mail className="h-5 w-5" />,
    label: "Email",
    value: "bapray66@gmail.com",
    href: "mailto:bapray66@gmail.com",
  },
  {
    icon: <Linkedin className="h-5 w-5" />,
    label: "LinkedIn",
    value: "linkedin.com/in/baguspray",
    href: "https://linkedin.com/in/baguspray",
  },
  {
    icon: <Phone className="h-5 w-5" />,
    label: "Phone",
    value: "0814 - 1052 - 9619",
    href: "tel:081410529619",
  },
  {
    icon: <MapPin className="h-5 w-5" />,
    label: "Location",
    value: "Depok, Indonesia",
    href: null,
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-card/60" data-testid="section-contact">
      <div className="container mx-auto px-6">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">Get in Touch</h2>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Open to collaborations, consulting opportunities, and new challenges. Feel free to reach out.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Profile photo */}
          <motion.div
            className="lg:col-span-4 flex flex-col items-center text-center"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <div
              className="w-56 h-56 rounded-full border-4 border-primary/20 shadow-xl overflow-hidden bg-secondary"
              data-testid="img-profile-photo"
            >
              <img
                src={profilePhoto}
                alt="Bagus Prayogo"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <h3 className="text-2xl font-bold font-display text-foreground mb-1">Bagus Prayogo</h3>
            <p className="text-primary font-semibold font-mono text-sm uppercase tracking-wider">Project Lead · ByteDance</p>
            <p className="text-muted-foreground text-sm mt-2">Depok, Indonesia</p>
          </motion.div>

          {/* Contact details */}
          <motion.div
            className="lg:col-span-8"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {contactItems.map((item, i) => (
                <motion.div
                  key={item.label}
                  className="group flex items-start gap-4 p-5 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-md transition-all duration-200"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.08 }}
                  data-testid={`contact-item-${item.label.toLowerCase()}`}
                >
                  <div className="p-2.5 rounded-xl bg-primary/10 text-primary shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-1">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="font-semibold text-foreground hover:text-primary transition-colors break-all"
                        data-testid={`link-contact-${item.label.toLowerCase()}`}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="font-semibold text-foreground">{item.value}</span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="mt-8 p-6 rounded-2xl bg-primary/5 border border-primary/20"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              data-testid="contact-availability"
            >
              <p className="text-sm font-mono text-primary uppercase tracking-wider mb-1 font-semibold">Availability</p>
              <p className="text-muted-foreground leading-relaxed">
                Currently leading the 132-site national expansion at ByteDance. Available for advisory, consulting, or leadership discussions around large-scale infrastructure projects and operational tooling.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
