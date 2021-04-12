import axios from 'axios';
import React, { useState, useEffect } from 'react';
//import { useQuery } from 'react-query';


const Plants = () => {
    const [plants, setPlants] = useState([])

const API_URL = 'api/v1/plants?token=qrbYXSsfNwVJLOQI24d-itX0n3dPO3GJ5veUkHz1J7o';

const fetchPlants = async () => {
    const { data } = await axios.get(API_URL);
    console.log(data)
    setPlants(data)
}

useEffect(() => {
    fetchPlants();
  }, []);


return (
    <div className="wrapper">
      {plants.length > 0 ? (
        <div className="content">
          {plants.map((plants) => (
            <div className="post">
              <h2>{plants.common_name}</h2>
              <p>{plants.bibliography}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="loading">Loading... </p>
      )}
    </div>
  );
}

export default Plants;