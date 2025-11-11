const BIO_TEXT =
  "I’m a frontend software developer expanding my expertise in full-stack development. Outside coding, I enjoy fitness, chess, and creating graphic designs.";

function capitalize(words) {
  if (!words) return "";
  return words
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

function Bio({ imgLink, name }) {
  return (
    <section>
      <div className="portfolio-img">
        <img src={imgLink} alt={name} />
      </div>
      <h1 className="my-name">I'm {capitalize(name)}.</h1>
      <p className="bio">{BIO_TEXT}</p>
    </section>
  );
}

export default Bio;
