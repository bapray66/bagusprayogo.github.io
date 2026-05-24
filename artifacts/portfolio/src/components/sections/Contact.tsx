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
    <section id="contact" className="py-24 md:py-32 relative" data-testid="section-contact">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-6 text-white">Get in Touch</h2>
          <p className="text-xl text-[#94a3b8] max-w-2xl">
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
              className="w-64 h-64 rounded-full border-4 border-[#0ea5e9]/20 shadow-[0_0_40px_rgba(14,165,233,0.15)] overflow-hidden bg-[#111827] mb-6 relative group"
              data-testid="img-profile-photo"
            >
              <div className="absolute inset-0 bg-[#0ea5e9]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
              <img
                src={profilePhoto}
                alt="Bagus Prayogo"
                className="w-full h-full object-cover object-top filter contrast-125 saturate-110"
              />
            </div>
            <h3 className="text-3xl font-bold font-display text-white mb-2">Bagus Prayogo</h3>
            <p className="text-[#0ea5e9] font-bold font-mono text-sm uppercase tracking-wider mb-2">Project Lead · ByteDance</p>
            <p className="text-[#94a3b8] text-sm">Depok, Indonesia</p>
          </motion.div>

          {/* Contact details */}
          <motion.div
            className="lg:col-span-8"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactItems.map((item, i) => (
                <motion.div
                  key={item.label}
                  className="group flex items-start gap-5 p-6 rounded-2xl bg-[#111827]/80 backdrop-blur-sm border border-white/5 hover:border-[#0ea5e9]/50 hover:shadow-[0_10px_30px_rgba(14,165,233,0.1)] transition-all duration-300"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.08 }}
                  data-testid={`contact-item-${item.label.toLowerCase()}`}
                >
                  <div className="p-3 rounded-xl bg-[#0ea5e9]/10 text-[#0ea5e9] shrink-0 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs font-mono text-[#94a3b8] uppercase tracking-wider mb-1.5">{item.label}</p>
                    {item.href ? (
                      <a
                         href={item.href}
                         target={item.href.startsWith("http") ? "_blank" : undefined}
                         rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                         className="text-lg font-bold text-white hover:text-[#67e8f9] transition-colors break-all"
                         data-testid={`link-contact-${item.label.toLowerCase()}`}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-lg font-bold text-white">{item.value}</span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="mt-8 p-8 rounded-2xl bg-[#0ea5e9]/10 border border-[#0ea5e9]/20 backdrop-blur-sm"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              data-testid="contact-availability"
            >
              <p className="text-sm font-mono text-[#67e8f9] uppercase tracking-widest mb-3 font-bold">Availability</p>
              <p className="text-[#e2e8f0] leading-relaxed text-lg">
                Currently leading the 132-site national expansion at ByteDance. Available for advisory, consulting, or leadership discussions around large-scale infrastructure projects and operational tooling.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
