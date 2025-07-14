import { Card } from "~/Card/Card";


export function Grid() {
  return (
    <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 h-[100vh] w-[70vw]"
    style={{ border: "1px solid black" }}>
        <Card />
        <Card />
        <Card />
        <Card />

    </main>
  );
}


