import React, { useState } from 'react';
import AvailableList from './AvailableList';
import ReservedList from './ReservedList';

import './seatbook.css'

const DrawGrid = (props) => {

  const onClickSeat = (seat) => {
    props.onClickData(seat);
  }

  const onClickGlassSeat = (seat) => {
    props.onClickGlassData(seat);
  }
  return (
    <div className="container">
      <h2>Choose Normal 3D</h2>
      <table className="grid">
        <tbody>
          <tr>
            {props.seat.map(row =>
              <td
                className={props.reserved.indexOf(row) > -1 ? 'reserved' : 'available'}
                key={row} onClick={e => onClickSeat(row)}>{row} </td>)}
          </tr>
        </tbody>
      </table>

      <h2>Choose Glass 3D 🥽</h2>
      <table className="grid">
        <tbody>
          <tr>
            {props.glassSeat.map(row =>
              <td
                className={props.glassReserved.indexOf(row) > -1 ? 'glass-reserved' : 'glass-available'}
                key={row} onClick={e => onClickGlassSeat(row)}>{row} </td>)}
          </tr>
        </tbody>
      </table>

      <AvailableList available={props.available} />
      <ReservedList reserved={props.reserved} />
    </div>
  )
}

export default DrawGrid;