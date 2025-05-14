import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed w-full bg-gray-800 text-gray-100 p-4 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">José Ignacio</div>
        <div className="space-x-4 hidden md:flex">
          <Link href="/#hero"><a>Home</a></Link>
          <Link href="/#about"><a>Sobre mí</a></Link>
          <Link href="/#projects"><a>Proyectos</a></Link>
          <Link href="/#publications"><a>Publicaciones</a></Link>
        </div>
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          ☰
        </button>
      </div>
      {open && (
        <div className="mt-2 space-y-2 md:hidden bg-gray-700 p-2 rounded">
          <Link href="/#hero"><a>Home</a></Link>
          <Link href="/#about"><a>Sobre mí</a></Link>
          <Link href="/#projects"><a>Proyectos</a></Link>
          <Link href="/#publications"><a>Publicaciones</a></Link>
        </div>
      )}
    </nav>
  );
}
