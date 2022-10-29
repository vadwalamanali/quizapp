
import './App.css';
import Question from './components/Question';

function App() {
  return (
    <>
    <div className='App'>
      <div className="quizcontainer">
        <h1>Quiz App</h1>
        <button>play</button>      
      </div>
      <Question/>
    </div>
    </>
  );
}

export default App;
