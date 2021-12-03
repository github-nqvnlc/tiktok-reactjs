import { createContext, useState } from 'react'
import Content from './Content'
import './App.css'

// function App() {

//   const [job, setJob] = useState('')
//   const [jobs, setJobs] = useState([])

//   const handleSub = () => {
//     setJobs([...jobs,job])
//     setJob('')
//   }

//   const handleDel = () => {
//     setJobs([])
//   }

//   return (
//     <div className="App" style={{ padding: 32 }}>
//       <h1>List To Do</h1>
//       <input value={job} onChange={e => setJob(e.target.value)} />
//       <button onClick={handleSub}>Add</button>

//       <ul>
//         {jobs.map((job, index) => (
//           <li key={index}>{job}</li>
//         )
//         )}

//       </ul>

//       <button onClick={handleDel}>Delete</button>
//     </div>
//   );
// }

export const ThemeContext = createContext()

function App1() {
  const [theme, setTheme] = useState('dark')

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <div style={{ padding: 20 }}>
      <ThemeContext.Provider value={theme}>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <Content />
      </ThemeContext.Provider>
    </div>
  )
}

export default App1;
