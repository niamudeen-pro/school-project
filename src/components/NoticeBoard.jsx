import React, { useState } from "react";
import { MdChevronLeft } from "react-icons/md";
import { MdChevronRight } from "react-icons/md";
import { FaClipboard } from "react-icons/fa";

const data = [
    // {
    //     date: '2024-01-01',
    //     title: 'New York No. 1 Lake ParkNew York No. 1 Lake ParkNew York No. 1 Lake ParkNew York No. 1 Lake ParkNew York No. 1 Lake ParkNew York No. 1 Lake ParkNew York No. 1 Lake ParkNew York No. 1 Lake ParkNew York No. 1 Lake ParkNew York No. 1 Lake ParkNew York No. 1 Lake ParkNew York No. 1 Lake ParkNew York No. 1 Lake Park',
    //     view: 'Download',
    //     id: 1,
    // },
];
export default function NoticeBoard() {
    const [currentPage, setCurrentPage] = useState(1);
    const itemPerPage = 10;

    const currentIndex = (currentPage - 1) * itemPerPage;

    const endIndex = currentIndex + itemPerPage;
    const paginatedDataList = data.slice(currentIndex, endIndex);

    return (
        <section className="section flex-col space-y-4">
            <div className="hide_scrollbar max-h-[700px] w-full overflow-auto rounded-md">
                <div className="bg-primary px-6 py-5 text-left text-xs font-semibold uppercase text-white">
                    <p className="flex items-center gap-4 text-white">
                        <FaClipboard size={22} />
                        notice board
                    </p>
                </div>
                <table className="w-full rounded-md">
                    <thead>
                        <tr className="sticky top-0 bg-primary text-white">
                            {/* {columns.map((column) => (
                                <th
                                    key={column}
                                    className="px-6 py-3 text-left text-xs font-semibold uppercase"
                                >
                                    {column}
                                </th>
                            ))} */}
                            <th></th>
                        </tr>
                    </thead>
                    <tbody className="border">
                        <tr>
                            {paginatedDataList.map((item, index) => (
                                <>
                                    <td className="whitespace-nowrap px-6 py-4 text-sm">
                                        {item.date}
                                    </td>
                                    <td className="px-6 py-4 text-sm">
                                        {item.title}
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-4 text-start">
                                        <button
                                            type="button"
                                            className="rounded-md bg-primary px-4 py-2 text-sm text-white transition duration-150"
                                        >
                                            {item.view}
                                        </button>
                                    </td>
                                </>
                            ))}
                        </tr>
                        {paginatedDataList.length === 0 && (
                            <data className="w-full p-4 text-center">
                                <p className="uppercase text-black">
                                    KEEP VISITING FOR LATEST UPDATES ON our
                                    SCHOOL ACTIVITIES.
                                </p>
                            </data>
                        )}
                    </tbody>
                </table>
            </div>
            {paginatedDataList.length > 0 && (
                <div className="flex justify-center">
                    <div className="space-x-4 text-sm">
                        <button
                            className="cursor-pointer rounded-lg bg-primary px-4 py-3 capitalize text-white shadow-lg transition-all duration-300 ease-in-out hover:bg-primary/80"
                            onClick={() => {
                                if (currentPage > 1 && data.length > 0)
                                    setCurrentPage(currentPage - 1);
                            }}
                        >
                            <MdChevronLeft />
                        </button>
                        <span>{currentPage}</span>
                        <button
                            className="cursor-pointer rounded-lg bg-primary px-4 py-3 capitalize text-white shadow-lg transition-all duration-300 ease-in-out hover:bg-primary/80"
                            onClick={() => {
                                if (
                                    currentPage <
                                        Math.ceil(data.length / itemPerPage) &&
                                    data.length > 0
                                ) {
                                    setCurrentPage(currentPage + 1);
                                }
                            }}
                        >
                            <MdChevronRight />
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
}
