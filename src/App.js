import { useState } from 'react'
import Content from './Content'

function App() {

  const [job, setJob] = useState('')
  const [jobs, setJobs] = useState([])

  const handleSub = () => {
    setJobs([...jobs,job])
    setJob('')
  }

  const handleDel = () => {
    setJobs([])
  }

  return (
    <div className="App" style={{ padding: 32 }}>
      <h1>List To Do</h1>
      <input value={job} onChange={e => setJob(e.target.value)} />
      <button onClick={handleSub}>Add</button>

      <ul>
        {jobs.map((job, index) => (
          <li key={index}>{job}</li>
        )
        )}

      </ul>

      <button onClick={handleDel}>Delete</button>
    </div>
  );
}



function App1(){
  const [show, setShow] = useState(false)
  return (
    <div style = {{padding: 20}}>
      <button onClick = {()=>{
        setShow(!show)
      }}>Switch</button>

      { show && <Content />}
    </div>
  )
}

export default App1;
