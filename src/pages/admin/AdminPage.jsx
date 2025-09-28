import { BiBookBookmark } from "react-icons/bi";
import { CiSpeaker } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa6";
import { GoGraph } from "react-icons/go";
import { Link, Route, Routes } from "react-router-dom";

export default function AdminPage() {
    return (
        <div className='w-full h-screen flex'>
            <div className='w-[400px] h-full bg-green-200'>
                <button className='w-full h-[40px] text-[25px] font-bold flex justify-center items-center'>
                    <GoGraph />Dashboard
                </button>
                <Link to="/admin/booking" className='w-full h-[40px] text-[25px] font-bold flex justify-center items-center  '>
                    <BiBookBookmark />Booking
                </Link>
                <button className='w-full h-[40px] text-[25px] font-bold flex justify-center items-center'>
                    <CiSpeaker />Items
                </button>
                <button className='w-full h-[40px] text-[25px] font-bold flex justify-center items-center'>
                    <FaRegUser /> Users
                </button>

            </div>
            <div className='w-[calc(100vw-400px)] bg-blue-900'>
                <Routes path="/">
                <Route path="/booking" element={<h1>booking page</h1>} />
                </Routes>
            </div>

        </div>
    )
}