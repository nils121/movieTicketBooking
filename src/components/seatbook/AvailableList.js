import React from 'react';
import './seatbook.css'

const AvailableList = (props) =>  {
      const seatCount = props.available.length;
      return(
        <div className="left">
          <h4>Available Seats: ({seatCount == 0? 'No seats available' : seatCount})</h4>
          <ul>
            {props.available.map( res => <li key={res} >{res}</li> )}
          </ul>
        </div>
      )
    }

  export default AvailableList;