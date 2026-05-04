import { useState } from "react"
import shuffle from "./utils/shuffle.js"
import Input from "./component/Input.jsx"
import List from "./component/List.jsx"
import Settings from "./component/Settings.jsx"
import Result from "./component/Result.jsx"
import Footer from "./component/Footer.jsx"




function App() {
  const [names, setNames] = useState([])
  const [mode, setMode] = useState('size')
  const [num, setNum] = useState(3)
  const [prefix, setPrefix] = useState('kelompok')
  const [group, setGroup] = useState([])

  function handleAdd(name) {
    setNames([...names, name])
  }

  function handleRemove(index){
    setNames(names.filter((_, i) => i !== index))
  }

  function handleResult() {
    const groupCount = mode == "count"
    ? Math.min(num, names.length)
    : Math.ceil(names.length / num)

  
    const shuffled = shuffle(names)
    

    const result = Array.from({length : groupCount}, () => [])
    shuffled.forEach((name, i) => result[i % groupCount].push(name));

    setGroup(result)
    console.log(result)
  }
  return (
    <>
      <header className="flex place-content-center pt-12">
        <h1 className="text-5xl font-bold font-mono text-amber-300 text-center">group random generator</h1>
      </header>
      <Input onAdd={handleAdd}/>
      {names.length === 0 ? 
      <div className="flex place-content-center ">
        <p className="bg-amber-300 p-4 rounded-sm font-mono w-auto md:w-sm text-center">No names added yet</p>
      </div>
      :
        <List names={names} onRemove={handleRemove}/>
      }
      <Settings mode={mode} num={num} prefix={prefix} setMode={setMode} setNum={setNum} setPrefix={setPrefix} names={names}/>
      <Result clicked={handleResult} group={group} prefix={prefix} names={names}/>
      <Footer />
    </>
  )
}

export default App