import Post from './Post';
import { Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='posts'>
        <div className='create'>
          Home
          <Link to="/create-post">
            <button>Create Post</button>
          </Link>
        </div>
        <Post/>
        <Post/>
      </div>
      <div className='info-card'>

      </div>
      
    </div>
  );
}

export default App;
