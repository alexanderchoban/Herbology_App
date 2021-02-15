import Cards from './Cards';
import herbology from '../herbology';
import Search from './Search';


function createCard({id, name, uses, preparation, warning}) {
  return (
    <Cards
      key={id}
      name={name}
      uses={uses}
      preparation={preparation}
      warning={warning}
  );
}
  

function App() {
  return (
    <div>
    <Search/>
    <ul>
      {herbology.map((herbology) => (
        <li key={herbology.id}>{herbology.name}</li>
      ))}
    </ul>
      <h1>
        <span>Herbology</span>
      </h1>
      <dl className="dictionary">{herbology.map(createCard)}</dl>
    </div>
  );
}

export default App;