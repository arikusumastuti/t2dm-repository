'use client'

import { useState } from "react"

export default function Cover ({ title, desc }) {
    const [show, setShow] = useState(true);

    return (
        <div className={`${show ? '' : '-translate-y-full'} relative w-full h-[50vh] bg-custom flex items-center justify-center text-center z-50 duration-500 text-white px-4 md:px-16 xl:px-24`}>
            <div className="space-y-2">
                <h1 className="text-xl md:text-3xl xl:text-5xl font-extrabold">{title}</h1>
                <p className="md:text-xl">{desc}</p>
            </div>
        </div>
    )
}