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
};

const GameContext = createContext<GameContextType>({
  games: [],
  loading: false,
  error: null,
});

export function useGameContext() {
  return useContext(GameContext);
}

export function GameProvider({ children }: { children: ReactNode }) {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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
    <GameContext.Provider value={{ games, loading, error }}>
      {children}
    </GameContext.Provider>
  );
}
