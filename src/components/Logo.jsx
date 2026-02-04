import Link from "next/link";
import Image from "next/image";
import icon from "../app/favicon.ico";

export default function Logo ({ className="" }) {
    return (
        <Link href="/" className={`flex items-center gap-2 ${className}`}>
            <Image src={icon} alt="logo" className="h-8 w-8" />
            <span className="font-bold">DiabMet Repository</span>
        </Link>
    )
}