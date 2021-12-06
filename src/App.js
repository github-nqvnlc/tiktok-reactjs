import {Routes, Route, Link} from 'react-router-dom'
import HomePage from './Pages/Home'
import NewsPage from './Pages/News'
import ContactPage from './Pages/Contact'

function App() {
return (
  <div>
    <nav>
      <>
        <button>
          <Link to="/">Home</Link>
        </button>
        <button>
          <Link to="/news">News</Link>
        </button>
        <button>
          <Link to="/contact">Contact</Link>
        </button>
      </>
    </nav>
    <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/news" element={<NewsPage />}/>
      <Route path="/contact" element={<ContactPage />}/>
    </Routes>
  </div>
);
}

export default App;
