export default function Header() {
  return (
    <header className="grid grid-cols-6 h-20">
      <div className="grid grid-cols-2  items-center text-center divide-x py-4">
        <div className="h-full flex justify-center items-center">Menu</div>
        <div className="h-full flex justify-center items-center">Assine</div>
      </div>
      <div className="flex text-4xl font-bold items-center justify-center  col-span-4">
        globo.com
      </div>
      <div className="grid grid-cols-2  items-center text-center divide-x py-4">
        <div className="h-full flex justify-center  items-center">
          Conta Globo
        </div>
        <div className="h-full flex justify-center items-center">Busca</div>
      </div>
    </header>
  );
}
