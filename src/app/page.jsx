'use client'

import Cover from "@/components/Cover";
import { data } from "@/lib/data";

export default function Overview() {
    return (
        <>
            <Cover />
            <div className="relative px-8 md:px-16 xl:px-48 py-16">
                <div className="grid sm:grid-cols-2 gap-8">
                    {data.map((item, index) => (
                        <Item key={index} {...item} />
                    ))}
                </div>
            </div>
        </>
    );
}

function Item ({ title, desc, href }) {
    return (
        <a href={href} className="bg-[#251b54] text-white rounded-2xl shadow-2xl hover:bg-[#181136] p-8 space-y-3">
            <h3 className="font-bold text-center text-xl">{title}</h3>
            <p>{desc}</p>
        </a>
    )
}