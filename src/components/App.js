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
          <div className="ft-recipe">
            <div className="ft-recipe__thumb">
                <h3>Today's Featured Recipe</h3><img src="https://zippypaws.com/app/uploads/2018/05/strawberry-waffles-1024x668.jpg" alt="Strawberry Waffle" />
            </div>
            <div className="ft-recipe__content">
                <header className="content__header">
                    <div className="row-wrapper">
                        <h2 className="recipe-title">Strawberry Waffle</h2>
                        <div className="user-rating"></div>
                    </div>
                    <ul className="recipe-details">
                        <li className="recipe-details-item time"><i className="ion ion-ios-clock-outline"></i><span className="value">20</span><span className="title">Minutes</span></li>
                        <li className="recipe-details-item ingredients"><i className="ion ion-ios-book-outline"></i><span className="value">5</span><span className="title">Ingredients</span></li>
                        <li className="recipe-details-item servings"><i className="ion ion-ios-person-outline"></i><span className="value">4-6</span><span className="title">Serving</span></li>
                    </ul>
                </header>
                <p className="description"> There’s no better way to celebrate May being National Strawberry Month than by sharing a sweet treat with your pup!!! Strawberries...</p>
                <footer className="content__footer"><a href="#">View Recipe</a></footer>
            </div>
        </div>
      </div>
      
    </div>
  );
}

export default App;
