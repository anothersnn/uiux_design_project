import Link from "next/link"

const Navbar = () => {
  return (
    <nav className="bg-gray-900">
      <div className="font-bold text-neutral-100 p-4 max-w-7xl mx-auto container flex items-center justify-between tracking-wide">
        <Link href="/">
          <div className="flex items-center">
            <img src="pixel_goose.png" alt="Logo" className="mr-2 h-8 md:h-12" />
            <div className="text-base md:text-2xl">GooseComedian</div>
          </div>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
