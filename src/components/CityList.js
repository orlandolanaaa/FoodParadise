import React from 'react';
import CityCard from './CityCard';
const CityList = (props) => {
    return (
        <div>
             <div className="row">
              <div className="col-12">
                <h3>{props.title}</h3>
              </div>
          </div>
          <div className="row">
            {props.cities == null ?(
              <div className="col">
                <p>Loading ...</p>
              </div>
            ): (
              
              props.cities.map(city =>
                <CityCard key={city.id} city={city}/>
              )
            )}

          </div>
        </div>
    );
};

export default CityList;