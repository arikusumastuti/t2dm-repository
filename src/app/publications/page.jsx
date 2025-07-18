'use client'

import { useMemo, useState } from 'react';
import {
    MaterialReactTable,
    useMaterialReactTable,
} from 'material-react-table';
import Cover from "@/components/Cover";
import { publicationsData } from "@/lib/data";
import { FaArrowUpRightFromSquare, FaFilePdf, FaMagnifyingGlass  } from "react-icons/fa6";
import { FiX } from "react-icons/fi";

export default function Publications () {
    const data = publicationsData;
    const [show, setShow] = useState(false);
    const [detail, setDetail] = useState({
        title: "",
        authors: "",
        year: "",
        month: "",
        day: "",
        publisher: "",
        doi: "",
        pdf: "",
        journal: {
            name: "",
            url: ""
        },
        issn: {
            print: "",
            electronic: ""
        },
        url: "",
    });
    
    const columns = useMemo(() => [
        {
            accessorKey: 'title',
            header: 'Title',
            size: 500
        },
        {
            accessorKey: 'authors',
            header: 'Authors',
            size: 300
        },
        {
            accessorKey: 'year',
            header: 'Year',
            size: 100
        },
        {
            accessorKey: 'url',
            header: 'URL',
            size: 100,
            Cell: (({ renderedCellValue, row }) => (
                <a href={renderedCellValue} target='_blank'><FaArrowUpRightFromSquare className='text-2xl text-[#251b54]' /></a>
            ))
        },
        {
            accessorKey: 'pdf',
            header: 'PDF',
            size: 100,
            Cell: (({ renderedCellValue, row }) => (
                <a href={renderedCellValue} target='_blank'><FaFilePdf className='text-3xl text-red-700' /></a>
            ))
        },
        {
            // accessorKey: '',
            header: 'Detail',
            size: 100,
            Cell: (({ renderedCellValue, row }) => (
                <button className='cursor-pointer' onClick={() => {setShow(true); setDetail(row.original)}}><FaMagnifyingGlass className='text-3xl text-yellow-700' /></button>
            ))
        },
    ], [])

    const table = useMaterialReactTable({
        columns,
        data,
    })

    return (
        <>
            <Cover title={"Publications"} desc={"Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem."} />
            <div className="relative px-8 xl:px-16 py-16">
                <MaterialReactTable table={table} />
            </div>
            <Detail {...{show, setShow}} {...detail} />
        </>
    )
}

function Detail ({ show, setShow, title, authors, year, month, day, publisher, journal, issn, doi, pdf, url }) {
    return (
        <div className={`${show ? 'top-0' : 'top-full scale-0'} fixed left-0 w-screen h-screen z-50 flex justify-center items-center duration-500`}>
            <div className='absolute w-screen h-screen top-0 left-0 -z-10' onClick={() => setShow(false)}></div>
            <div className='w-1/2 min-h-1/2 rounded-2xl shadow-2xl bg-white p-4'>
                <div className='flex justify-between items-center mb-4'>
                    <span className='opacity-0 text-gray-500 text-xl cursor-pointer rounded-full hover:bg-red-500 hover:text-white p-1'>
                        <FiX />
                    </span>
                    <h3 className='font-bold text-xl'>Detail</h3>
                    <span className='text-gray-500 text-xl cursor-pointer rounded-full hover:bg-red-500 hover:text-white p-1' onClick={() => setShow(false)}>
                        <FiX />
                    </span>
                </div>
                <div className='flex flex-col gap-2 px-4 pb-4'>
                    <DetailItem name={"Title"} value={title} />
                    <DetailItem name={"Authors"} value={authors} />
                    <DetailItem name={"Date of Publication"} value={`${day} ${month} ${year}`} />
                    <DetailItem name={"Publisher"} value={publisher} />
                    <DetailItem name={"Journal"} value={<a href={journal.url} target='_blank' className='text-blue-500 underline'>{journal.name}</a>} />
                    <DetailItem name={"Print ISSN"} value={issn.print} />
                    <DetailItem name={"Electronic ISSN"} value={issn.electronic} />
                    <DetailItem name={"DOI"} value={<a href={`https://doi.org/${doi}`} target='_blank' className='text-blue-500 underline'>{doi}</a>} />
                    <DetailItem name={"PDF"} value={<a href={pdf} target='_blank' className='text-blue-500 underline'><FaFilePdf className='text-2xl text-red-700' /></a>} />
                </div>
            </div>
        </div>
    )
}

function DetailItem ({ name, value }) {
    return (
        <div className='flex gap-2'>
            <p className='w-1/3 font-bold'>{name}</p>
            <p className='font-bold'>:</p>
            <p className='w-2/3'>{value}</p>
        </div>
    )
}