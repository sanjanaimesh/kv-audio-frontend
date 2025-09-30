import axios from "axios";
import { useEffect, useState } from "react"
import toast from "react-hot-toast";

export default function Item() {
    const [state, setState] = useState("loading");//loading, success, error
    const [item, setItem] = useState([]);

    useEffect(() => {
        if (state == "loading") {
            axios.get("http://localhost:3000/api/products").then((res) => {
                setItem(res.data);
                setState("success")
            }).catch((err) => {
                toast.error(err?.response?.data?.error || "An error occured")
                setState("error")
            })
        }

    }, []);

    return (
        <div className="  w-full h-full flex flex-wrap justify-center pt-10">
            {
                state == "loading" &&
                <div className="w-full h-full flex justify-center items-center">
                    <div className="w-[50px] h-[50px] border-4 rounded-full border-t-green-500 animate-spin"></div>

                </div>
            }
            {
                state=="success" && 
                item.map((item)=>{
                    return(
                        <h1 key={item.key}>{item.name}</h1>
                    )
                })
            }
        </div>
    );
} 