import React, { useEffect, useState } from 'react';

import Opening from '../Opening/Opening.js';
import Cart from '../Cart/Cart.js';
import Filter from '../Filter/Filter.js';
import searchResults from '../../schedule_response.json';
import { filterResults } from '../../utils/resultFilters.js';
import { formatDate } from '../../utils/dateTimeFormatting.js';

function SearchResults () {

  const [ cart, setCart ] = useState([]);
  const [ filter, setFilter ] = useState({
    dayOfWeek: "",
    timeOfDay: "",
    instructorGender: ""
  });

  return (
    <div className="container">

      <div className="row py-3 align-items-center">
        <div className="col-sm-10 d-flex justify-content-between align-items-center">
            <h3>Available Openings</h3>
            <Filter filter={filter} setFilter={setFilter} />
        </div>
        <div className="col-sm-2 d-flex justify-content-end">
            <Cart cart={cart} setCart={setCart} />
        </div>
      </div>

      <div className="row">
        <div className="col-sm-12 d-flex justify-content-center">
          {
            filterResults(searchResults, filter).map((result) => (
              <div key={result.date} className="result-wrapper pt-2 justify-content-center text-center">
                <h5 className="">{ formatDate(result.date)}</h5>
                {result.times.map((r) => (
                  <Opening date={ result.date } data={r} cart={cart} setCart={setCart} key={result.time}/>
                ))}
              </div>
            ))
          }
        </div>
      </div>

    </div>

  )
}

export default SearchResults;