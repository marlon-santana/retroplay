export type Game = {
  _id: string;
  name: string;
  imageUrl: string;
};

export function getGameList(): Promise<Game[]> {
  return fetch("http://localhost:3001/games").then((response) => {
    if (!response.ok) {
      throw new Error("Failed to fetch game list");
    }
    return response.json();
  });
}
