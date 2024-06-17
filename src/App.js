import { useNavigate } from 'react-router-dom';
import './App.css';


function App() {

  const navigate = useNavigate();

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to the Simple<span style={{ color: 'yellow' }}> MERN CRUD</span></h1>
        <button className='users-button enterBtn' onClick={()=> navigate('/users')}>Users</button>
      </header>
    </div>
  );
}

export default App;
