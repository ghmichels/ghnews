export default function Header() {
  return (
    <header className="grid grid-cols-6 h-20">
      <div className="grid grid-cols-2  items-center text-center divide-x py-4">
        <div className="h-full flex justify-center items-center">
          <a href="">Menu</a>
        </div>
        <div className="h-full flex justify-center items-center">
          <a href="">Assine</a>
        </div>
      </div>
      <div className="flex text-4xl font-bold items-center justify-center col-span-4">
        <a href="" className="text-blue-900">
          ghnews
        </a>
      </div>
      <div className="grid grid-cols-2  items-center text-center divide-x div py-4">
        <div className="h-full flex justify-center  items-center">
          <a href="">Login</a>
        </div>
        <div className="h-full flex justify-center items-center">
          <a href="">Busca</a>
        </div>
      </div>
    </header>
  );
}
