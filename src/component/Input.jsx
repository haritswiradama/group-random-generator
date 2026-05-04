import React, { useState } from 'react'
import { CirclePlus } from 'lucide-react';

function Input({onAdd}) {
    const [value, setValue] = useState('')

    const handleSubmit = () => {
        const trimmed = value.trim();

        if (!trimmed) {
            return alert('please input name')
        } 

        onAdd(trimmed);
        setValue('')
    }
    
    
    return (
        <label for="Email" className="flex flex-row place-content-center gap-4 my-12 px-4 w-full h-12 ">
            <input
                value={value}
                onChange={e => setValue(e.target.value)}
                placeholder="input name"
                className=" rounded border  border-gray-300 bg-white shadow-sm sm:text-sm w-full max-w-4xl" />
                <button onClick={handleSubmit} className='bg-amber-300 w-11 cursor-pointer rounded-sm items-center justify-center flex'><CirclePlus /></button>
        </label>
    )
}

export default Input