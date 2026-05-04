import React, { useState } from 'react'
import { Copy } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

function Result({ clicked, group, prefix, names }) {
    const [copied, setCopied] = useState(false)

    function handleCopy() {
        const text =
            group.map((g, i) => `${prefix} ${i + 1}\n${g.join('\n')}`).join('\n\n')
        navigator.clipboard.writeText(text)
        setCopied(true)
        setTimeout(() => setCopied(false), 500)
    }

    const scrollToSection = (id) => {
        document.getElementById(id).scrollIntoView({behavior : 'smooth'})
    }

    return (
        <section className='flex flex-col place-content-center items-center justify-center gap-12 my-12'>
            <button onClick={() => {clicked(), scrollToSection('result')}}  className='bg-amber-300 py-2 w-xs rounded-sm font-semibold text-xl'>acak</button>
            <div id='results' className='grid grid-cols-2 md:grid-cols-4 justify-between gap-6'>
                {group.map((g, i) => (
                    <div className='bg-amber-300 h-36 rounded-sm p-2 overflow-y-auto w-38'>
                        <h2 className=' font-bold'>{prefix} {i + 1}</h2>
                        {g.map((name, index) => (
                            <p key={index}>{name}</p>
                        ))}
                    </div>
                ))}
            </div>
            <div>
                {group.length === 0 ? <p className='hidden'>p</p> :
                    <button onClick={handleCopy} className='bg-amber-300 p-4 rounded-sm font-semibold flex items-center justify-center gap-1'>
                        <p className='text-center'>copy result</p><Copy className='size-4 text-center' />
                    </button>
                }

            </div>
            <AnimatePresence>
                {copied &&
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 50 }}
                        className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-amber-300 text-black px-6 py-2 rounded-full font-medium"
                    >
                        <p>copied!</p>
                    </motion.div>}
            </AnimatePresence>
        </section>
    )
}

export default Result