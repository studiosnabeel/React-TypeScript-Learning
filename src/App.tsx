import './App.css';
import Greet from './components/Greet';
import Person from './components/Person';
import { PersonList } from './components/PersonList';

function App() {
  const personName = {
    first: 'Nabeel',
    last: 'Akbar',
  };

  const nameList = [
    {
      first: 'Nabeel',
      last: 'Akbar',
    },
    {
      first: 'Fuad',
      last: 'Nabiyev',
    },
    {
      first: 'Robert',
      last: 'Alabi',
    },
  ];

  return (
    <div className="App">
      <Greet name="Akbar" messageCount={30} isLoggedIn={false} />
      <Person name={personName} />
      <PersonList names={nameList}/>
    </div>
  );
}

export default App;
