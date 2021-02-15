import Cards from './Cards';
import herbology from '../herbology';
import Search from './Search';


const createCard = ({id, name, uses, preparation, warning}) => {
  return (
    <Cards
      key={id}
      name={name}
      uses={uses}
      preparation={preparation}
      warning={warning}
      />
  );
  }
    

const App = () => {
  return (
    <div>
    <Search/>
      <h1>
        <span>Herbology</span>
      </h1>
      <dl className="dictionary">{herbology.map(createCard)}</dl>
    </div>
  );
}

export default App;