import React from 'react'
import { Trash2 } from 'lucide-react'



function List({ names, onRemove }) {
    return (
        <section className='flex place-content-center w-full p-4 items-center justify-center'>
            <ul className='gap-4 flex flex-col items-center overflow-y-auto h-64 w-xs p-4 bg-amber-400 rounded-sm m-4'>
                {names.map((name, i) => (
                    <li className='flex gap-4 bg-white h-10 items-center justify-between px-4 w-3xs rounded-sm'>
                        <h1 className=' text-start flex items-center  h-10'>{name}</h1>
                        <button onClick={() => onRemove(i)} className='text-gray-400 '><Trash2 /></button>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default List