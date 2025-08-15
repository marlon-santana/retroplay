import React, { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";
import { getGameList } from "~/service/api";

type Game = {
  _id: string;
  name: string;
  imageUrl: string;
};

type GameContextType = {
  games: Game[];
  loading: boolean;
  error: string | null;
  filterGames: Game[];
  setFilterGames: React.Dispatch<React.SetStateAction<Game[]>>;
};

type FilterGamesType = {
  games: Game[];
  loading: boolean;
  error: string | null;
};

const GameContext = createContext<GameContextType>({
  games: [],
  loading: false,
  error: null,
  filterGames: [],
  setFilterGames: () => {},
});

export function useGameContext() {
  return useContext(GameContext);
}

export function GameProvider({ children }: { children: ReactNode }) {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filterGames, setFilterGames] = useState<Game[]>([]);

  useEffect(() => {
    getGameList()
      .then((data) => {
        setGames(data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Erro ao carregar jogos");
        setLoading(false);
      });
  }, [setGames]);

  return (
    <GameContext.Provider
      value={{ games, loading, error, filterGames, setFilterGames }}
    >
      {children}
    </GameContext.Provider>
  );
}
