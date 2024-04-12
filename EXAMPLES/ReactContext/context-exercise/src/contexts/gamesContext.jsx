/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { useContext, createContext, useState } from "react";

const SelectedGamesContext = createContext();

function SelectedGamesProvider(props) {
  const { children } = props;
  const [globalSelectedGames, setGlobalSelectedGames] = useState([]);

  function addToSelectedGames(games, id) {
    if (globalSelectedGames.some((game) => game._id === id)) return;

    const selectedGame = games.find((g) => g._id === id);
    const nextSelectedGames = [...globalSelectedGames, selectedGame];
    setGlobalSelectedGames(nextSelectedGames);
  }

  function removeGame(id) {
    const nextSelectedGames = globalSelectedGames.filter(
      (game) => game._id !== id
    );
    setGlobalSelectedGames(nextSelectedGames);
  }

  return (
    <SelectedGamesContext.Provider
      value={{ globalSelectedGames, addToSelectedGames, removeGame }}
    >
      {children}
    </SelectedGamesContext.Provider>
  );
}

function useSelectedGamesContext() {
  const context = useContext(SelectedGamesContext);
  if (!context) {
    throw new Error(
      "useClickContext must be used within a ClicksContextProvider"
    );
  }
  return context;
}

export { SelectedGamesProvider, useSelectedGamesContext };
