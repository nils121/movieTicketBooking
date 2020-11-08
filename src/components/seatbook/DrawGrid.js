import React, { useState } from 'react';
import './seatbook.css'
import { Link, useHistory } from 'react-router-dom';

const DrawGrid = (props) => {
  const history = useHistory('')

  const onClickSeat = (seat) => {
    props.onClickData(seat);
  }

  const onClickGlassSeat = (seat) => {
    props.onClickGlassData(seat);
  }

  const handleConfirm = () => {
    history.push({
      pathname: '/checkout',
      state: {
        reserved: props.reserved,
        glassReserved: props.glassReserved
      }
    })
  }

  return (
    <div className="container">
      <h2>Choose from Normal 3D 🎥</h2>
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
      <br />
      <h2>Choose from Glass 3D 🥽</h2>
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

      <button className='form-input-btn full' onClick={handleConfirm}>
        Confirm
        </button>
    </div>
  )
}

export default DrawGrid;