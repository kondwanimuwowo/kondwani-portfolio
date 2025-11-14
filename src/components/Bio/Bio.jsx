import Socials from "../ui/Socials/Socials.jsx";
import "./Bio.css";
import { FaDownload } from "react-icons/fa";

const BIO_TEXT_ONE =
  "I’m a frontend software developer expanding my expertise in full-stack development.";
const BIO_TEXT_TWO =
  "Outside coding, I enjoy fitness, chess, and creating graphic designs.";

function capitalize(words) {
  if (!words) return "";
  return words
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

function Bio() {
  const name = "kondwani";
  const imgLink = "/images/kondwani.png";

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/kondwani-resume.pdf";
    link.download = "Kondwani_Muwowo_Frontend_Developer_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="bio-section">
      <div className="bio-header">
        <button className="download-btn" onClick={handleDownload}>
          <FaDownload className="download-icon" />
          Resume
        </button>
      </div>
      <div className="portfolio-img">
        <img src={imgLink} alt={name} />
      </div>
      <div>
        <Socials />
      </div>
      <h1 className="my-name">I'm {capitalize(name)}.</h1>
      <div className="bio-text">
        <p className="bio">{BIO_TEXT_ONE}</p>
        <p className="bio">{BIO_TEXT_TWO}</p>
      </div>
    </section>
  );
}

export default Bio;
