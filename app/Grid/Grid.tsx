import { FixedSizeGrid as VirtualGrid } from "react-window";
import { Card } from "~/Card/Card";
import { useEffect, useState } from "react";
import { getGameList } from "~/service/api";
import { useGameContext } from "~/context";

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

  const { games } = useGameContext();

  // Configurações do grid
  const columnCount = 4;
  const rowCount = Math.ceil(games.length / columnCount);

  // Renderiza cada célula do grid virtualizado
  const Cell = ({ columnIndex, rowIndex, style }: any) => {
    const index = rowIndex * columnCount + columnIndex;
    if (index >= games.length) return null;
    const image = games[index];
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
