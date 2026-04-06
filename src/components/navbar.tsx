import Link from "next/link";  // Next.js link — faster than <a> tag

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-8 py-4 bg-white shadow-sm">
      
      {/* Left side — Logo / Name */}
      <div className="text-xl font-bold text-gray-800">
        MyPortfolio
      </div>

      {/* Right side — Nav Links */}
      <div className="flex gap-6">
        <Link href="/" className="text-gray-600 hover:text-black transition">
          Home
        </Link>
        <Link href="/about" className="text-gray-600 hover:text-black transition">
          About
        </Link>
        <Link href="/projects" className="text-gray-600 hover:text-black transition">
          Projects
        </Link>
        <Link href="/contact" className="text-gray-600 hover:text-black transition">
          Contact
        </Link>
      </div>

    </nav>
  );
}