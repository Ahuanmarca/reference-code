function Main(props) {

  const mainStyles = {
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
  }

  return (
    <main style={mainStyles}>
      {props.children}
    </main>
  );
}

export default Main;