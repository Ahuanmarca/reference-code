function SuperContainer(props) {

  const superContainerStyles = {
    width: "100%",
    maxWidth: "1100px",
    padding: "3rem 5% 3rem 5%",
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
  }

  return (
    <div className="super-container" style={superContainerStyles}>
      {props.children}
    </div>
  );
}

export default SuperContainer;