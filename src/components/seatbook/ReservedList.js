import React from 'react';
import './seatbook.css'

const ReservedList = (props) => {
  return (
    <div className="right">
      <h4>Reserved Seats: ({props.reserved.length})</h4>
      <ul>
        {props.reserved.map(res => <li key={res} >{res}</li>)}
      </ul>
    </div>
  )
}

export default ReservedList;
