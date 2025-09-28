import { BiBookBookmark } from "react-icons/bi";
import { CiSpeaker } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa6";
import { GoGraph } from "react-icons/go";

export default function AdminPage() {
    return (
        <div className='w-full h-screen flex'>
            <div className='w-[400px] h-full bg-green-200'>
                <button className='w-full h-[40px] text-[25px] font-bold flex justify-center items-center'>
                    <GoGraph />Dashboard
                </button>
                <button className='w-full h-[40px] text-[25px] font-bold flex justify-center items-center  '>
                    <BiBookBookmark />Booking
                </button>
                <button className='w-full h-[40px] text-[25px] font-bold flex justify-center items-center'>
                    <CiSpeaker />Items
                </button>
                <button className='w-full h-[40px] text-[25px] font-bold flex justify-center items-center'>
                    <FaRegUser /> Users
                </button>

            </div>
            <div className='w-full bg-red-900'>

            </div>

        </div>
    )
}