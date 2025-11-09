function capitalize(words) {
  if (!words) return "";
  return words
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

function Bio({ imgLink, name }) {
  return (
    <>
      <div className="portfolio-img">
        <img src={imgLink} alt={name} />
      </div>
      <h1 className="my-name">I'm {capitalize(name)}.</h1>
      <p className="bio">
        A frontend software developer building full-stack capabilities. In my
        free time, I enjoy working out, playing chess and designing graphics.
      </p>
    </>
  );
}

export default Bio;
