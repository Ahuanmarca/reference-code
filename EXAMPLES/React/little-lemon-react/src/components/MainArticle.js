function MainArticle(props) {
  const backgroundImageURL = "url('./pablo-merchan-montes-wYOPqmtDD0w-unsplash-reduced.jpg')";

  const mainArticleStyle = {
    backgroundColor: "var(--nav-background-color)",
    color: "var(--main-background-color)",
    borderRadius: "1rem",

    display: "grid",
    gridTemplate: "repeat(2, auto) / 1fr",

    padding: "2rem 0 2rem 1rem",

    position: "relative",
    // backgroundImage: "url('./pablo-merchan-montes-wYOPqmtDD0w-unsplash-reduced.jpg')",
    backgroundImage: backgroundImageURL,
    backgroundSize: "cover",
    backgroundPositionY: "center",

    transition: "transform 1s ease",
  };

  return (
    <article className="main-article" style={mainArticleStyle}>
      <div style={{ paddingBottom: "2rem" }}>
        <h1 style={{ position: "relative", fontSize: "2.5rem" }}>
          <a
            className="main-article-heading-link"
            href=""
            style={{
              textDecoration: "none",
              color: "var(--main-background-color)",
              position: "relative",
            }}
          >
            Celebrate Mother's Day with Us!
          </a>
        </h1>
      </div>
      <div style={{ paddingRight: "20%" }}>
        <p style={{ position: "relative", lineHeight: "1.6" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          alias perferendis, nisi repudiandae temporibus labore atque sint
          provident facere magni incidunt voluptatibus nostrum obcaecati neque
          quae esse velit explicabo dolor. Dolores quam natus odio molestiae,
          saepe tenetur repellat fugit veritatis ad, et fugiat sequi assumenda,
          ullam ea. Expedita, dolores in!
        </p>
      </div>
    </article>
  );
}

export default MainArticle;
