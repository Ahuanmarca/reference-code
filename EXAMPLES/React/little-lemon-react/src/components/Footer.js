function Footer(props) {
  const footerStyles = {
    height: "7rem",
    width: "100%",
    bordeRadius: "1rem",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
  };

  const logoStyles = {
    height: "inherit",
    paddingLeft: "1rem",
  };

  const copyrightStyles = {
    padding: "2rem 1rem 0 0",
  };

  const paragraphStyles = {
    textAlign: "right",
    lineHeight: "2",
  };

  return (
    <footer style={footerStyles}>
      <img
        src="./Asset 18@4x cropped.png"
        alt="Little Lemon Logo"
        style={logoStyles}
      />
      <div class="footer-copyright-container" style={copyrightStyles}>
        <hr />
        <p style={paragraphStyles}>Copyright Little Lemon</p>
      </div>
    </footer>
  );
}
export default Footer;
