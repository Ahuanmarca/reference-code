type Movie = {
  readonly title: string,
  originalTitle?: string,
  director: string,
  releaseYear: number,
  boxOffice: {
    budget: number,
    grossUS: number,
    grossWorldwide: number,
  }
}

const dune: Movie = {
  title: "Dune",
  director: "Denis Villeneuve",
  releaseYear: 2021,
  boxOffice: {
    budget: 165000000,
    grossUS: 108327830,
    grossWorldwide: 400671789,
  },
};

function getProfit(movie: Movie): number {
  return movie.boxOffice.grossWorldwide = movie.boxOffice.budget;
}

console.log(getProfit(dune));
