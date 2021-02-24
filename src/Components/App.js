import Cards from './Cards';
import herbology from '../herbology';
import Search from './Search';
import React, {useState} from 'react';


  

const App = () => {

  const [search, setSearch] = useState('')

  const filteredHerbs = search.length === 0 ? herbology
  : herbology.filter(item =>                         
   item.name.toLowerCase().includes(search.toLowerCase()))
  
  return (
    <div>
    <Search value={search} onChange={ (e) => setSearch(e.target.value)} />
      <h1>
        <span>Herbology</span>
      </h1>
      <dl className="dictionary">{filteredHerbs.map( ({id, name, uses, preparation, warning}) => {
        return (
    <Cards
      key={id}
      name={name}
      uses={uses}
      preparation={preparation}
      warning={warning}
      />
  ) } )
  }</dl>
    </div>
  )
}

export default App;