import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export default function Admin(){
    const navigate= useNavigate()
    const email =''
    useEffect(()=>{
        const sendProfileRequest = async () =>{
            const response = await fetch('localhost:8080/profile',{method:'POST',body:JSON.stringify(email)})
            const profile = await response.json()
            if(!profile.completed){
                navigate('/admin/profile')
            }
        }
        sendProfileRequest()
    },[])

    return(
        <div>
            <Outlet/>
        </div>
    )
}