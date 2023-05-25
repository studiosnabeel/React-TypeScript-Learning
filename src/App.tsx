import './App.css';
import Greet from './components/Greet';
import Person from './components/Person';

function App() {
  const personName = {
    first: 'Nabeel',
    last: 'Akbar',
  };
  return (
    <div className="App">
      <Greet name="Akbar" messageCount={30} isLoggedIn={false} />
      <Person name={personName} />
    </div>
  );
}

export default App;
