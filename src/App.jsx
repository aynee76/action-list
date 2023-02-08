import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const initialData = ["Tomato"]
  const [note, setNote] = useState("")
  const [data, setData] = useState(initialData)

  const add = (e) => {
    e.preventDefault();
    setData(data.concat(note));
    setNote("");
  }
  return (
    <div className="App">
      <form onSubmit={add}>
        <h3 className='text-2xl'>Add Note</h3>
        <input type="text" className='border-2' value={note} onChange={(e) => setNote(e.target.value)} />
        <br />
        <br />
        <button>Add</button>
      </form>

      <section>
        {data.map((datas, index) => (
          <ul className='list-disc w-24'
            key={`${datas}-${index}`}>
            <li>{datas}</li>
          </ul>
        ))}

      </section>
    </div>
  )
}

export default App
