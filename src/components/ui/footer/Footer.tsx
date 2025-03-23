import { titleFont } from "config/fonts"
import Link from "next/link"


export const Footer = () => {
    return(
        <div className="flex w-full justify-center text-xs mb-10">
            <Link
            href='/'>
                <span className={`${titleFont.className} antialized font-bold`}>Del Rey Ecommerce</span>
                <span> { new Date().getFullYear() }</span>
            </Link>
        </div>
    )
}