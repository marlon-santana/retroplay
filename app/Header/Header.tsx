import { Search } from "~/Search/Search";

export function Header() {
  return (
    <main className="flex items-center justify-center  pt-16 pb-4  border-b bg-black shadow-md w-full">

      <div className="flex flex-row  items-center gap-10 min-h-0">

      <img src="/logo.png" alt="Description of image"  />

       <button className="bg-blue-500 text-white px-4 py-2 rounded hover:opacity-80">
        Sega Genesis
      </button>
      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:opacity-80">
        Super Nintendo
      </button>
      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:opacity-80">
        Arcade
      </button>
      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:opacity-80">
        PlayStation
      </button>
      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:opacity-80">
        Master System
      </button>

          <Search />
      </div>
   

    </main>
  );
}


