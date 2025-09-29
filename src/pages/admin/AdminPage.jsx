
import { BiBookBookmark } from "react-icons/bi";
import { CiSpeaker } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa6";
import { GoGraph } from "react-icons/go";
import { Link, Route, Routes } from "react-router-dom";
import AdminItemPage from "./adminItemPage";
import AddProductPage from "./addItemPage";

export default function AdminPage() {
    return (
        <div className='w-full h-screen flex'>
            <div className='w-[300px] h-full bg-green-200'>
                <Link to="/admin" className='w-full h-[40px] text-[25px] font-bold flex justify-center items-center'>
                    <GoGraph />Dashboard
                </Link>
                <Link to="/admin/booking" className='w-full h-[40px] text-[25px] font-bold flex justify-center items-center'>
                    <BiBookBookmark />Booking
                </Link>
                <Link to="/admin/items" className='w-full h-[40px] text-[25px] font-bold flex justify-center items-center'>
                    <CiSpeaker />Items
                </Link>
                <Link to="/admin/users" className='w-full h-[40px] text-[25px] font-bold flex justify-center items-center'>
                    <FaRegUser /> Users
                </Link>
            </div>
            
            <div className='w-[calc(100vw-300px)]'>
                <Routes>
                    <Route path="/" element={<div>Dashboard Content</div>} />
                    <Route path="/booking" element={<div>Booking Content</div>} />
                    <Route path="/items" element={<AdminItemPage/>} />
                    <Route path="/items/add" element={<AddProductPage/>} />
                    <Route path="/users" element={<div>Users Content</div>} />
                </Routes>
            </div>
        </div>
    )
}