export function Header() {
  return (
    <header className="bg-pink-200 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold">Deuze Cakes</h1>
        <nav className="flex gap-6">
          <a href="/" className="hover:text-pink-600">A Deuze</a>
          <a href="/cakes" className="hover:text-pink-600">Bolos</a>
          <a href="#contact" className="hover:text-pink-600">Contato</a>
        </nav>
      </div>
    </header>
  );
}
