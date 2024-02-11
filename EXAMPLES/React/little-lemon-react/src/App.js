import React from "react";
import "./App.css";

import SuperContainer from "./components/SuperContainer";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Main from "./components/Main";
import MainArticle from "./components/MainArticle";
import SecondaryArticle from "./components/SecondaryArticle";
import DessertsList from "./components/DessertsList";
import Footer from "./components/Footer";

// Mock database data
import articlesData from "./data/articlesData";
import dessertsData from "./data/dessertsData";

function App() {
  const [articles, setArticles] = React.useState(articlesData);

  return (
    <div className="App">
      {/* SUPER CONTAINER START */}
      <SuperContainer>
        <Header
          image="./Asset 14@4x.png"
          alt="Little Lemon big logo with text"
        />
        <Nav />
        <Main>
          <MainArticle />

          {/* SECONDARY SECTION START - CONTAINS ARTICLE CARDS */}
          <div
            className="secondary-section"
            style={{
              width: "100%",
              borderRadius: "1rem",
              display: "grid",
              gridTemplate: "1fr / repeat(3, 1fr)",
              gap: "1rem",
            }}
          >
            {articles.map((f) => (
              <SecondaryArticle header={f.header} img={f.img} alt={f.alt} />
            ))}
          </div>
          {/* SECONDARY SECTION END */}

          {/* MENU LIST (Only desserts for now) */}
          <DessertsList data={dessertsData} />
        </Main>
        <Footer />
      </SuperContainer>
      {/* SUPER CONTAINER END */}
    </div>
  );
}

export default App;
