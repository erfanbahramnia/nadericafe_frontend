import React, { useState, FormEvent } from 'react';
import { LoginCredential } from "../types/types";
import { LoginWithCredential } from '../utils/req';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const navigate = useNavigate()
    // credential data
    const [data, setData] = useState<LoginCredential>({
        username: "",
        password: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            const jwt = await LoginWithCredential(data)
            localStorage.setItem("jwt", jwt);
            navigate("/dashboard")
        } catch (error) {
            localStorage.removeItem("jwt")
            console.log(error)
        }
    }

    return(
        // login page
        <div className="w-screen h-screen flex justify-center items-center bg-[#FCF7FF]">
            {/* login section */}
            <div className="h-[340px] w-fit px-8 py-6 flex flex-col justify-between items-center rounded-md border-[#C0C2C4] border-[1px] shadow-xl">
                {/* cafe */}
                <div>
                    <h2 className="font-mono font-semibold">Cafe Naderi</h2>
                </div>
                {/* get info */}
                <form className="h-[240px] flex flex-col justify-between items-center mt-12" onSubmit={handleSubmit}>
                    <div className='flex justify-between items-center flex-col gap-4'>
                        <div className="flex flex-col gap-1">
                            <label>Username:</label>
                            <input 
                                type="text"
                                name="username"
                                value={data.username}
                                onChange={handleChange}
                                className="rounded-md border-[#878C8F] border-[1px] outline-none px-2 py-[1px]"
                            />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label>Password:</label>
                            <input 
                                type="password"
                                name="password"
                                value={data.password}
                                onChange={handleChange}
                                className="rounded-md border-[#878C8F] border-[1px] outline-none px-2 py-[1px]"
                            />
                        </div>
                    </div>
                    {/* handle login */}
                    <button type='submit' className="bg-[#E55934] w-full py-1 flex justify-center items-center rounded-md shodow-md text-white hover:bg-[#E34F26] duration-300">Login</button>
                </form>
            </div>
        </div>
    )
}