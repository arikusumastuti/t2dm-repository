import { FiX } from "react-icons/fi";
import { FaFilePdf } from "react-icons/fa6"

export default function DetailModal ({ show, setShow, title, authors, year, month, day, publisher, journal, issn, doi, pdf, url }) {
    return (
        <div className={`${show ? 'top-0' : 'top-full md:scale-0'} fixed left-0 w-screen h-screen z-[1500] flex justify-center items-end md:items-center duration-500`}>
            <div className='absolute w-screen h-screen top-0 left-0 -z-10' onClick={() => setShow(false)}></div>
            <div className='md:w-3/4 xl:w-1/2 h-[75vh] md:min-h-1/2 rounded-t-2xl md:rounded-2xl shadow-2xl bg-white p-4 overflow-auto'>
                <div className='flex justify-between items-center mb-4'>
                    <span className='opacity-0 text-gray-500 text-xl cursor-pointer rounded-full hover:bg-red-500 hover:text-white active:bg-red-500 active:text-white p-1'>
                        <FiX />
                    </span>
                    <h3 className='font-bold text-xl'>Detail</h3>
                    <span className='text-gray-500 text-xl cursor-pointer rounded-full hover:bg-red-500 hover:text-white active:bg-red-500 active:text-white p-1' onClick={() => setShow(false)}>
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