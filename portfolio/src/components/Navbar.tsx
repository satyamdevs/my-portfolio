export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-[#0a0a0a] border-b border-gray-800 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-white font-bold text-xl">Satyam</div>
        <ul className="flex space-x-6 text-gray-300">
          <li><a href="#about" className="hover:text-white">About</a></li>
          <li><a href="#projects" className="hover:text-white">Projects</a></li>
          <li><a href="#work" className="hover:text-white">Work</a></li>
          <li><a href="#contact" className="hover:text-white">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}
