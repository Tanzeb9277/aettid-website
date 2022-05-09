import Post from './Post';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='posts'>
        <div className='create'>
          Home
          <button>Create Post</button>
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
