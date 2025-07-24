import { FixedSizeGrid as VirtualGrid } from "react-window";
import { Card } from "~/Card/Card";
import { useEffect, useState } from "react";

type GridProps = {
  setRom: (rom: string) => void;
  setOpen?: (open: boolean) => void;
};

export function Grid({ setRom, setOpen }: GridProps) {
  type Game = {
    _id: string;
    name: string;
    imageUrl: string;
  };

  const [urls, setUrls] = useState<Game[]>([]);

  useEffect(() => {
    fetch("http://localhost:3001/games")
      .then((res) => res.json())
      .then((data) => setUrls(data))
      .catch(console.error);
  }, []);

  // Configurações do grid
  const columnCount = 4;
  const rowCount = Math.ceil(urls.length / columnCount);

  // Renderiza cada célula do grid virtualizado
  const Cell = ({ columnIndex, rowIndex, style }: any) => {
    const index = rowIndex * columnCount + columnIndex;
    if (index >= urls.length) return null;
    const image = urls[index];
    return (
      <div
        style={style}
        key={image._id}
        onClick={() => {
          setRom(`${image.name}.gen`);
          if (setOpen) setOpen(true);
        }}
        className="cursor-pointer flex items-center justify-center"
      >
        <Card image={image.imageUrl} name={image.name} />
      </div>
    );
  };

  return (
    <div
      className="border-t-2 border-t-gray-300"
      style={{
        minWidth: "1100px",
        height: "90vh",
        marginTop: "20px",
        // paddingTop: "50px",
        paddingLeft: "20px",
        overflow: "hidden",
      }}
    >
      <VirtualGrid
        columnCount={columnCount}
        columnWidth={270} // largura do card + gap
        height={800}
        rowCount={rowCount}
        rowHeight={230} // altura do card + gap
        width={1100}
      >
        {Cell}
      </VirtualGrid>
    </div>
  );
}
