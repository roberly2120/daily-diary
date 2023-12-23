import './App.css';
import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import postsGenerator from './data/FakePosts';
import Posts from './components/Posts';
import AIPage from './components/AIPage'
import Journal from './components/Journal';
import Home from './components/Home'


function App() {
  const [posts, setPosts] = useState([])
  const [formValues, setFormValues] = useState({ title: '', text: ''})
  const navigate = useNavigate()

  // need to remove this useEffect and replace it with a fetch request to the backend
  useEffect(() => {
    const defaultPosts = postsGenerator(5)
    setPosts(defaultPosts)
  }, [])

  return (
    <div className="App">
      <h1 className='main-title'>Daily</h1>
      <nav>
        <ul className='nav-bar'>
          <li className='menu-button' onClick={() => navigate('/')}>Home</li>
          <li className='menu-button' onClick={() => navigate('/posts')}>Posts</li>
          <li className='menu-button' onClick={() => navigate('/helper')}>ChatGPT Helper</li>
        </ul>
      </nav>
      <Routes>
        {/* home route
        posts/journal route
        chatgpt helper route */}
        <Route path='/' element={<Home />} />
        <Route path='/posts' element={<Posts posts={posts} />} />
        <Route path='/helper' element={<AIPage />} />
        <Route 
          path='/journal' 
          element={<Journal 
          posts={posts} 
          formValues={formValues} 
          setFormValues={setFormValues} 
          setPosts={setPosts} />} 
          />
      </Routes>
    </div>
  );
}

export default App;
