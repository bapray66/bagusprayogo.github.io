import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-card/50" data-testid="section-about">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          <motion.div 
            className="lg:col-span-5"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">
              Engineering <br />
              <span className="text-primary">Meets Strategy</span>
            </h2>
            <div className="w-full aspect-square rounded-2xl bg-secondary overflow-hidden border border-border relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-overlay z-10" />
              <div className="absolute inset-0 bg-noise opacity-20 z-0" />
              <div className="w-full h-full flex items-center justify-center text-muted-foreground text-sm font-mono z-20 relative">
                [ Profile Portrait ]
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:col-span-7 flex flex-col justify-center space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p>
              With over a decade of experience bridging the gap between deep technical implementation and high-level product strategy, I specialize in leading cross-functional teams to deliver robust, scalable solutions.
            </p>
            <p>
              As a <strong className="text-foreground">Project Lead at ByteDance</strong>, I orchestrate complex initiatives that impact millions of users. My approach is rooted in clear communication, rigorous system design, and a relentless focus on execution. I don't just manage timelines; I architect the processes that enable teams to ship faster and safer.
            </p>
            <p>
              I believe that the best products are built when engineering and product management share a unified vision. My role is to maintain that alignment, removing friction and providing the clarity teams need to do their best work.
            </p>
            
            <div className="grid grid-cols-2 gap-8 pt-8 mt-8 border-t border-border">
              <div>
                <div className="text-4xl font-bold font-display text-foreground mb-2">10+</div>
                <div className="text-sm font-mono text-muted-foreground uppercase tracking-wider">Years Experience</div>
              </div>
              <div>
                <div className="text-4xl font-bold font-display text-foreground mb-2">50+</div>
                <div className="text-sm font-mono text-muted-foreground uppercase tracking-wider">Projects Delivered</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
