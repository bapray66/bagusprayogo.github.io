import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-2xl font-bold font-display">
            BP<span className="text-primary">.</span>
          </div>
          
          <p className="text-muted-foreground text-sm font-medium text-center md:text-left">
            &copy; {new Date().getFullYear()} Bagus Prayogo. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6 text-sm font-medium text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-foreground transition-colors">GitHub</a>
            <a href="mailto:hello@example.com" className="hover:text-foreground transition-colors">Email</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
