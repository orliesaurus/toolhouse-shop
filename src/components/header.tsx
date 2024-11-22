import Link from 'next/link'

export function Header() {
  return (
    <header className="w-full p-4">
      <nav className="container mx-auto flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold">
          SlickShop
        </Link>
        <ul className="flex space-x-4">
          <li><Link href="#products" className="hover:text-gray-300">Products</Link></li>
          <li><Link href="#" className="hover:text-gray-300">About</Link></li>
          <li><Link href="#" className="hover:text-gray-300">Contact</Link></li>
        </ul>
      </nav>
    </header>
  )
}

