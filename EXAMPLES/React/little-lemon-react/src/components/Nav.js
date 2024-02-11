function Nav(props) {

  const navStyles = {
    backgroundColor: "rgb(51, 51, 51)",
    width: "100%",
    padding: "1rem 0 1rem 0",
    borderRadius: "1rem",
    display: "flex",
    justifyContent: "center"
  }

  const ulStyles = {
    listStyle: "none",
    display: "flex",
    gap: "1rem"
  }

  const linkStyles = {
    textDecoration: "none",
    color: "rgb(237, 239, 238)",
    fontSize: "1.5rem",
    position: "relative"
  }

  return (
    <nav style={navStyles}>
      <ul style={ulStyles}>
        <li><a href="" style={linkStyles}>Home</a></li>
        <li><a href="" style={linkStyles}>Menu</a></li>
        <li><a href="" style={linkStyles}>Book</a></li>
        <li><a href="" style={linkStyles}>About</a></li>
      </ul>
    </nav>
  );
}

export default Nav;
