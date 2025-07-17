import Image from "next/image";
import icon from "../app/favicon.ico";
import Link from "next/link";

export default function Header () {
    return (
        <header className="w-full flex items-center justify-between bg-[#181136] text-white p-4">
            <div className="flex items-center gap-2">
                <Image src={icon} className="h-8 w-8" />
                <span className="font-bold">T2DM Repository</span>
            </div>
            <div className="flex">
                <nav className="grid grid-cols-2 text-center font-bold">
                    <Link href="/">About</Link>
                    <Link href="/">Publications</Link>
                </nav>
            </div>
        </header>
    )
}