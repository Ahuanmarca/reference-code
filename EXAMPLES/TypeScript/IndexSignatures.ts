interface HeroStats {
  [index: string]: number;
  hp: number;
  level: number;
}

const benjer: HeroStats = {
  hp: 100,
  level: 20,
}

console.log(benjer);

