import { useRef, useState } from "react";

export function Search() {
  const [open, setOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleIconClick = () => {
    setOpen((prev) => !prev);
    setTimeout(() => {
      if (!open && inputRef.current) {
        inputRef.current.focus();
      }
    }, 250); // aguarda animação terminar
  };

  return (
    <main className="flex flex-col items-center justify-center relative">
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
        className={`absolute left-1/2 -translate-x-1/2 overflow-hidden w-[500px] top-[60px] left-[-215px] bg-white  transition-all duration-300 ease-in-out ${
          open ? "max-h-32 opacity-100 mt-2" : "max-h-0 opacity-0"
        } flex justify-center`}
       
      >
        <input
          ref={inputRef}
          type="text"
          placeholder="Buscar..."
          className=" w-[500px] 2 px-3 py-2 w-full  "
          style={{ color: "#333333"}}
        />
        <button className="bg-blue-500 text-white px-4 py-2 ">
          Buscar
        </button>
      </div>
    </main>
  );
}