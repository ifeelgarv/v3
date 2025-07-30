import { Github, Mail } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import { Time } from "./time";

export const Footer = () => {
  return (
    <footer className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <a href="https://x.com/ifeel_garv" target="_blank">
          <FaXTwitter className="text-secondary-foreground size-4 transition-colors duration-300 hover:text-white" />
        </a>
        <a href="https://github.com/ifeelgarv" target="_blank">
          <Github className="text-secondary-foreground size-4 transition-colors duration-300 hover:text-white" />
        </a>
        <a href="mailto:hey@gauravsingh.co.in" target="_blank">
          <Mail className="text-secondary-foreground size-4 transition-colors duration-300 hover:text-white" />
        </a>
      </div>
      <div className="text-sm">
        <div className="text-secondary-foreground">
          <Time />
        </div>
      </div>
      
    </footer>
  );
};