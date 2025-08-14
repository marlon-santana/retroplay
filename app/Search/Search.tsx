import { useRef, useState } from "react";
import { useGameContext } from "~/context";

export function Search() {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleIconClick = () => {
    setOpen((prev) => !prev);
    setTimeout(() => {
      if (!open && inputRef.current) {
        inputRef.current.focus();
      }
    }, 250);
  };

  const { games } = useGameContext();

  function normalize(text: string) {
    return text
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/\s+/g, " ")
      .trim()
      .toLowerCase();
  }

  const filteredGames = games.filter((game) =>
    normalize(game.name).includes(normalize(search))
  );

  // console.log(filteredGames);

  return (
    <main className="flex flex-col items-center justify-center relative z-10">
      <button
        type="button"
        onClick={handleIconClick}
        className="focus:outline-none"
        aria-label="Abrir busca"
      >
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </button>

      <div
        className={`absolute left-1/2 -translate-x-1/2 overflow-hidden w-[500px] top-[60px] left-[-200px] bg-white transition-all duration-300 ease-in-out ${
          open ? "max-h-32 opacity-100 mt-2" : "max-h-0 opacity-0"
        } flex justify-center `}
      >
        <input
          ref={inputRef}
          type="text"
          placeholder="Buscar..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-[500px] px-3 py-2 w-full"
          style={{ color: "#333333" }}
        />
        <button className="bg-blue-500 text-white px-4 py-2 ">Buscar</button>
      </div>

      {/* Exemplo de exibição dos resultados filtrados */}
      {open && search && (
        <ul className="absolute left-1/2 -translate-x-1/2 top-[110px] left-[-200px] bg-white w-[500px] max-h-96 overflow-y-auto shadow z-20">
          {filteredGames.length === 0 && (
            <li className="p-2 text-gray-500">Nenhum jogo encontrado</li>
          )}
          {filteredGames.map((game) => (
            <li
              key={game._id}
              className="p-2 border-b last:border-b-0 text-gray-800 cursor-pointer hover:bg-blue-100 hover:text-blue-700 transition-colors"
            >
              {game.name}
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
