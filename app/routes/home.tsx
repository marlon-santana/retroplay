import { useState, useEffect } from "react";
import type { Route } from "./+types/home";
import { Header } from "../Header/Header";
import { Grid } from "~/Grid/Grid";
import { Player } from "~/Player/Player";
import { TopList } from "~/TopList/TopList";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Retro play " },
    { name: "description", content: "Jogos retrô online" },
  ];
}

export default function Home() {
  const [rom, setRom] = useState<string>("Aladdin%20(USA).gen");
  const [core, setCore] = useState<string>("segaMS");
  const [open, setOpen] = useState(false);

  return (
    <main className="flex flex-col items-start justify-start bg-[#f0f0f0] min-h-screen ">
      <Header />
      <div className="flex flex-row gap-6">
        <Grid setRom={setRom} setOpen={setOpen} />
        {open && <Player core={core} rom={rom} setOpen={setOpen} />}
        <TopList />
      </div>
    </main>
  );
}
