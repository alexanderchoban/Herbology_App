import Cards from './Cards';
import herbology from '../herbology';


function createCard(herbTerm) {
  return (
    <Cards
      key={herbTerm.id}
      name={herbTerm.name}
      uses={herbTerm.uses}
      preperation={herbTerm.preperation}
      warning={herbTerm.warning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>Herbology</span>
      </h1>
      <dl className="dictionary">{herbology.map(createCard)}</dl>
    </div>
  );
}

export default App;