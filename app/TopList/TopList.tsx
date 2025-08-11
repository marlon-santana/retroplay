import { useRef, useState } from "react";

export function TopList() {
  const topList = [
    { name: "Sonic 1 master system" },
    { name: "Sonic 2 mega drive" },
    { name: "Sonic 3 snes " },
    { name: "Sonic & Knuckles mega drive" },
    { name: "Sonic CD sega cd" },
    { name: "Sonic Spinball" },
    { name: "Sonic 4 advance" },
    { name: "Sonic Generations mega drive" },
    { name: "Sonic Mania sega saturn" },
  ];

  return (
    <main className="flex flex-col items-center justify-center relative">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Top Games</h1>
      <ul className="list-disc pl-5 text-gray-800">
        {topList.map((game, index) => (
          <li key={index} className="mb-2">
            <a href={`/${game.name}`} className="text-blue-600 hover:underline">
              {game.name}
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}
