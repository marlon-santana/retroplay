import { useState } from "react";


type CardProps = {
  id: number;
  name: string;
  image: string;
};


export function Card({ image, name }: CardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <main
      className="border border-gray-300 rounded-lg overflow-hidden shadow-md h-[210px] w-[250px] relative group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative w-full h-[140px]">
        <img
          src={image}
          alt="Description of image"
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div
          className={`absolute inset-0 bg-black transition-opacity duration-300 ${
            hovered ? "opacity-50" : "opacity-0"
          }`}
        ></div>
        {/* Botão Start Game */}
        <button
          className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-4 py-2 cursor-pointer rounded shadow-lg transition-opacity duration-300 ${
            hovered ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          Start Game
        </button>
      </div>
       <button className="cursor-pointer w-full py-2 text-gray-800 font-semibold">
        {
          // Extrai o nome do arquivo da URL e remove extensão e prefixos
          image
            .split("/")
            .pop() // pega só o nome do arquivo
            ?.replace(/\.(png|jpg|jpeg)$/i, "") // remove extensão
            ?.replace(/^the-/, "") // remove "the-" do início
            ?.replace(/editorial-use-only.*$/i, "") // remove "editorial-use-only..." do final
            ?.replace(/_/g, "-") // troca _ por -
            ?.trim()
        }
      </button>
    </main>
  );
}