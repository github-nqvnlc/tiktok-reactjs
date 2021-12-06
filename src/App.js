import { Routes, Route, Link } from 'react-router-dom'
import HomePage from './Pages/Home'
import NewsPage from './Pages/News'
import ContactPage from './Pages/Contact'

function App() {
  return (
    <div>
      <nav>
        <button style={{ padding: '15px 30px' }}>
          <Link style={{ textDecoration: 'none', fontSize: '15px' }} to="/">Home</Link>
        </button>
        <button style={{ padding: '15px 30px' }}>
          <Link style={{ textDecoration: 'none', fontSize: '15px' }} to="/news">News</Link>
        </button>
        <button style={{ padding: '15px 30px' }}>
          <Link style={{ textDecoration: 'none', fontSize: '15px' }} to="/contact">Contact</Link>
        </button>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  );
}

export default App;
