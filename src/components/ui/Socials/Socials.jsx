import {
  Download,
  Mail,
  Github,
  Linkedin,
  ExternalLink,
  FileText,
  Award,
  Briefcase,
  MessageCircle,
} from "lucide-react";
import "./Socials.css";

function Socials() {
  return (
    <div className="social-links">
      <a
        href="https://www.linkedin.com/in/kondwanimuwowo"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Linkedin size={24} color="#f0f0f0" />
      </a>
      <a
        href="https://www.github.com/kondwanimuwowo"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Github size={24} color="#f0f0f0" />
      </a>
      <a href="mailto:kondwanimuwowo@gmail.com">
        <Mail size={24} color="#f0f0f0" />
      </a>
    </div>
  );
}
export default Socials;
