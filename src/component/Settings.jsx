function Settings({ mode, num, prefix, setMode, setNum, setPrefix }) {
    console.log(mode)
    
    return (

        <section className="w-full flex flex-col items-center justify-center place-content-center p-4 ">
            <div className="flex flex-col items-center">
                <label className="text-white w-full font-mono">mode pembagian</label>
                <select
                    value={mode}
                    onChange={e => setMode(e.target.value)}
                    className="bg-white text-gray-500 h-10 w-xs xl:w-md rounded-sm pl-4"
                >
                    <option value="size">Anggota perkelompok</option>
                    <option value="count">jumlah kelompok</option>
                </select>
            </div>
            
            
            <div className="flex flex-col items-center justify-center">
                <label className="text-white w-full text-start font-mono">{mode === "size" ? "anggota kelompok" : "jumlah kelompok"}</label>
                <input
                type="number"
                value={num}
                onChange={e => setNum(e.target.value)}
                className="bg-white text-gray-500 h-10 w-xs xl:w-md rounded-sm pl-4"
                />
            </div>
            
            <div className="flex flex-col items-center justify-center">
                <label className="text-white w-full text-start font-mono">prefix</label>
                <input
                    type="text"
                    placeholder="kelompok/regu/dll"
                    value={prefix}
                    onChange={e => setPrefix(e.target.value)}
                    className="bg-white text-gray-500 h-10 w-xs xl:w-md rounded-sm pl-4"
                >
                    
                </input>
            </div>
        </section>

    )
}

export default Settings