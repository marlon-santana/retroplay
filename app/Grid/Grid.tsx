import { Card } from "~/Card/Card";



const capas = [
  {
    id:1,
    image: 'https://i.kinja-img.com/image/upload/c_fit,q_60,w_1600/13863be644e033a6774644544d274f5e.jpg',
    name: 'Sonic the Hedgehog 3 (USA).gen'
  },
   {
    id:2,
    image: 'https://upload.wikimedia.org/wikipedia/pt/1/1a/Shinobi_III_-_Captura_de_tela.png',
    name: 'Shinobi III - Return of the Ninja Master (USA).gen'
  },
   {
    id:3,
    image: 'https://cdn.mobygames.com/screenshots/779788-ultimate-mortal-kombat-3-genesis-fighting-on-a-lava-background.png',
    name: 'Ultimate Mortal Kombat 3 (USA).gen'
  },
   {
    id:4,
    image: 'https://c7.alamy.com/comp/2BDJKDF/back-to-the-future-part-3-iii-sega-genesis-mega-drive-editorial-use-only-2BDJKDF.jpg',
    name: 'Back to the Future Part III (USA).gen'
  },
   {
    id:5,
    image: 'https://c7.alamy.com/comp/2BGPR4G/the-flintstones-sega-genesis-mega-drive-editorial-use-only-2BGPR4G.jpg',
    name: 'Flintstones, The (USA).gen'
  },


]

type GridProps = {
  setRom: (rom: string) => void;
  setOpen?: (open: boolean) => void;
  
};

export function Grid({ setRom, setOpen }: GridProps) {
  return (
    <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 h-[100vh] w-[100vw] mt-10 ml-10 border-t-2 border-t-gray-300 " 
      style={{ maxWidth: "1100px" }}>
      {capas.map((image) => (
        <div key={image.id} onClick={() => {
          setRom(image.name);
          if (setOpen) setOpen(true);
        }} className="cursor-pointer">
          <Card image={image.image} name={image.name} id={image.id} />
        </div>
      ))}
    </main>
  );
}


