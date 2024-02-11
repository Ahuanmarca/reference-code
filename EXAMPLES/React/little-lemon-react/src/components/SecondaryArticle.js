function SecondaryArticle(props) {

  const secondaryArticleStyles = {
    backgroundColor: "var(--cards-color)",
    color: "var(--nav-background-color)",
    border: "2px dashed var(--nav-background-color)",
    borderRadius: "1rem",
    padding: "1rem",
    display: "grid",
    gridTemplate: "auto auto 8fr 1fr / 1fr",
    gap: "1rem",
    transition: "box-shadow 0.1s ease",
  }

  const articleHeaderLinkStyles = {
    /* For underline animation to work */
    position: "relative", 
    textDecoration: "none",
    color: "var(--nav-background-color)",
  }

  const secondaryImageContainerStyles = {
    /* TODO: Image not filling container to the bottom... Why? */
    /* border: 1px dashed gray; */
    borderRadius: "0.5rem",
    overflow: "hidden",
  }

  const imgStyles = {
    borderRadius: "0.5rem",
    opacity: "0.9",
    width: "100%",
    transition: "transform 2s ease, opacity 1s ease",
  }

  const articleFooterLinkStyles = {
    color: "var(--logo-green-color)",
    transition: "color 0.4s",
  }

  return (
    <article className="secondary-article" style={secondaryArticleStyles}>
      <h2>
        <a className="article-header-link" href="" style={articleHeaderLinkStyles}>
          {props.header}
        </a>
      </h2>
      <div className="secondary-image-container" style={secondaryImageContainerStyles}>
        <a href="" style={articleFooterLinkStyles}>
          <img
            src={props.img}
            alt={props.alt}
            style={imgStyles}
          />
        </a>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum odit
        mollitia voluptas itaque enim, possimus eos est vero ut atque nobis
        animi ipsa fugiat hic sint fugit! Pariatur veniam error eos labore ab id
        beatae incidunt iure, reiciendis sit blanditiis minima omnis ipsa
        nostrum nemo? Aut illum repellendus libero amet?
      </p>
      <a className="article-footer-link" href="">
        {props.header}
      </a>
    </article>
  );
}
export default SecondaryArticle;
