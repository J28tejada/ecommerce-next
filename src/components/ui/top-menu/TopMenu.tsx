import Link from 'next/link'
import { tittleFont } from "config/fonts"
import { IoSearchOutline, IoCartOutline } from 'react-icons/io5'

export const TopMenu = () => {
    return (
        <nav className="flex px5 justify-between items-center w-full">
            {/* Logo */}
            <div>
                <Link
                    href="/">
                        <span className={`${ tittleFont.className } antialiased font-bold `}>Del Rey Ecommerce</span>
                </Link>
            </div>

            {/* Center Menu */}
            <div className="hidden sm:block">
                <Link className="m-2 p-2 rounded-md transition-all hover:bg-gray-100" href="/category/smartphones">Smartphones</Link>
                <Link className="m-2 p-2 rounded-md transition-all hover:bg-gray-100" href="/category/laptops">Laptops</Link>
                <Link className="m-2 p-2 rounded-md transition-all hover:bg-gray-100" href="/category/consoles">Consoles</Link>

            </div>

            {/* Search, Cart, Menu */}

            <div className='flex items-center'>

                <Link href="/search" className='mx-2'>
                <IoSearchOutline className="w-5 h-5" />
                </Link>
                <Link href='/cart' className='mx-2'>
                    <div className='relative'>
                        <span className='absolute text-xs px-1 rounted-full font-bold -top-2 -right-2 bg-blue-700 text-white'>
                            3
                        </span>
                        <IoCartOutline className="w-5 h-5" />
                    </div>
                </Link>

                <button className='m-2 p-2 rounded-md transition-all hover:bg-gray-100'>
                    Menu
                </button>

            </div>

        </nav>
    );
};