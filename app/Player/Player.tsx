
type gameProps = {
  rom: string;
  core: string;
  setOpen?: (open: boolean) => void;
};

//remover sifrao do nome da romm

export const Player = ({rom,core, setOpen}: gameProps) => {
  rom.split("/")
            .pop() // pega só o nome do arquivo
            ?.replace(/\.(png|jpg|jpeg)$/i, "") // remove extensão
            ?.replace(/^the-/, "") // remove "the-" do início
            ?.replace(/editorial-use-only.*$/i, "") // remove "editorial-use-only..." do final
            ?.replace(/_/g, "-") // troca _ por -
            ?.replace(/\$/g, "") // remove todos os $
            ?.trim()
  {console.log('rom', rom)}
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      
      {/* Overlay atrás do iframe */}
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <button onClick={() => setOpen?.(false)} className="absolute top-4 right-4 text-white">
        X
      </button>
      
      <iframe
        className="absolute w-[600px] h-[600px] rounded shadow-lg"
        src={`https://emulador-retro.netlify.app/?rom=${rom}&core=${core}`}
        title="Emulador Retro"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{ left: "50%", top: "50%", transform: "translate(-50%, -50%)" }}
      ></iframe>
    </div>
  );
}