import Socials from "../ui/Socials/Socials.jsx";
import "./Bio.css";

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

  return (
    <section>
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
