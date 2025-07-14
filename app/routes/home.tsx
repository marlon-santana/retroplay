import type { Route } from "./+types/home";
import { Header } from "../Header/Header";
import { Grid } from "~/Grid/Grid";



export function meta({}: Route.MetaArgs) {
  return [
    { title: "Retro play " },
    { name: "description", content: "Jogos retrô online" },	
  ];
}

export default function Home() {
  return (
    <main  className="flex flex-col items-start justify-start bg-[#f0f0f0] h-[100vh] ">
      <Header />
      <Grid />
      
    </main>
  );
}
