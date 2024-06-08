import { Grip, Moon, Search, User } from "lucide-react";

export default function Header() {
  return (
    <header className="m-auto flex h-20 max-w-7xl justify-between px-6 text-sm text-slate-600 lg:grid lg:grid-cols-6">
      <div className="items-center divide-x py-4 text-center lg:grid lg:grid-cols-2">
        <div className="flex h-full items-center justify-between">
          <a href="" className="flex items-center gap-2">
            <Grip className="text-blue-700" />
            <span className="max-lg:hidden">Menu</span>
            <span className="text-3xl font-bold text-blue-700 lg:hidden">
              ghnews
            </span>
          </a>
        </div>
        <div className="flex h-full items-center justify-center max-lg:hidden">
          <a href="" className="flex gap-2" title="Modo Dark">
            <Moon className="text-slate-900" />
            <span>Dark</span>
          </a>
        </div>
      </div>
      <div className="flex items-center text-4xl font-bold max-lg:hidden lg:col-span-4 lg:justify-center">
        <a href="" className="text-blue-700">
          ghnews
        </a>
      </div>
      <div className="items-cente flex py-4 text-center md:divide-x lg:grid lg:grid-cols-2">
        <div className="flex h-full items-center justify-center">
          <a href="" className="flex gap-2 max-lg:px-4">
            <span className="max-lg:hidden">Login</span>
            <User className="text-blue-700" />
          </a>
        </div>
        <div className="flex h-full items-center justify-center">
          <a href="" className="flex gap-2 md:pl-4">
            <span className="max-lg:hidden">Busca</span>{" "}
            <Search className="text-blue-700" />
          </a>
        </div>
      </div>
    </header>
  );
}
