import { useState } from 'react'
import Content from './Content'

function App() {

  const [job, setJob] = useState('')
  const [jobs, setJobs] = useState(() => {
    const storageJobs = JSON.parse(localStorage.getItem('jobs'))
    return storageJobs
      ?? []
  })

  const handleSub = () => {
    setJobs(prev => {
      const newJobs = [...prev, job]

      // save to local storage
      const jsonJobs = JSON.stringify(newJobs)
      localStorage.setItem('jobs', jsonJobs)
      return newJobs
    })
    setJob('')
  }

  const handleDel = () => {
    setJobs(() => {
      const newJobs = []
      // save to local storage
      const jsonJobs = JSON.stringify(newJobs)
      localStorage.setItem('jobs', jsonJobs)
      return newJobs
    })
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
