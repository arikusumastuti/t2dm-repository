'use client'

import { useState } from "react"
import { HiChevronDoubleDown } from "react-icons/hi";

export default function Cover () {
    const [show, setShow] = useState(true);

    return (
        <div className={`${show ? '' : '-translate-y-full'} relative w-full h-[50vh] bg-custom flex items-center justify-center text-center z-50 duration-500 text-white px-4 md:px-16 xl:px-24`}>
            <div className="space-y-2">
                <h1 className="text-xl md:text-3xl xl:text-5xl font-extrabold">T2DM Repository</h1>
                <p className="md:text-xl xl:text-2xl">Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem.</p>
            </div>
        </div>
    )
}