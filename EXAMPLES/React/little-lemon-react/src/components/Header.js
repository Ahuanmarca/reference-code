function Header(props) {

  const headerStyles = {
    display: "flex",
    justifyContent: "center"
  }

  const linkStyles = {
    width: "50%"
  }

  const imgStyles = {
    width: "100%"
  }

  return (
    <header style={headerStyles}>
      <a href="" style={linkStyles}>
        <img 
          src={props.image}
          alt={props.alt}
          style={imgStyles}
        />
      </a>
    </header>
  );
};

export default Header;