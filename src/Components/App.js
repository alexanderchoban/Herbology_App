import Cards from './Cards';
import herbology from '../herbology';
import Search from './Search';
import React, { useState } from 'react';
import Plants from './Plants';
import { QueryClient, QueryClientProvider } from 'react-query'




const App = () => {

  const [search, setSearch] = useState('')

  const filteredHerbs = search.length === 0 ? herbology
    : herbology.filter(item =>
      item.name.toLowerCase().includes(search.toLowerCase()))

  const queryClient = new QueryClient()    

  return (
    <div>
    <QueryClientProvider client={queryClient}>
      <Search value={search} onChange={(e) => setSearch(e.target.value)} />
      <h1>
        <span>Herbology</span>
      </h1>
      <dl className="dictionary">{filteredHerbs.map(({ id, name, uses, preparation, warning }) => {
        return (
          <Cards
            key={id}
            name={name}
            uses={uses}
            preparation={preparation}
            warning={warning}
          />
        )
      })
      }</dl>
      <Plants />
      </QueryClientProvider>
    </div>
  )
}

export default App;