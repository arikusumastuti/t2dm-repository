'use client'

import { useMemo, useState } from 'react';
import {
    MaterialReactTable,
    useMaterialReactTable,
} from 'material-react-table';
import Cover from "@/components/Cover";
import DetailModal from '@/components/DetailModal';
import { publicationsData } from "@/lib/data";
import { FaArrowUpRightFromSquare, FaFilePdf, FaMagnifyingGlass  } from "react-icons/fa6";

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
            <Cover 
                title={"Publications"} 
                desc={"Published works for each part of the repository"} 
            />
            <div className="relative px-8 xl:px-16 py-16">
                <MaterialReactTable table={table} />
            </div>
            <DetailModal {...{show, setShow}} {...detail} />
        </>
    )
}