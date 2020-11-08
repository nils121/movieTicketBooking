import React from 'react';
import '../register/form.css';
import { useLocation } from "react-router-dom";

const CheckOutComponent = () => {
    const location = useLocation();
    const normalPrize = process.env.REACT_APP_NORMAL_3D_PRIZE || 450;
    const glassPrize = process.env.REACT_APP_GLASS_3D_PRIZE || 450;

    const normalTotal = location.state.reserved.length * normalPrize;
    const glassTotal = location.state.glassReserved.length * glassPrize;

    return (
        <div className='form-container' >
            <div className='heading top'>
                <h3>Chekout Summary </h3>
            </div>
            <div className="checkout">
                <h3>Normal 3D Seats: {location.state.reserved.length} X {normalPrize} = {normalTotal}. Rs</h3>
                <br />
                <h3>Glass 3D Seats: {location.state.glassReserved.length} X {normalPrize} = {glassTotal}. Rs</h3>
                <br />
                <h3>SubTotal: {Math.floor(normalTotal + glassTotal)}. Rs</h3>
            </div>
        </div>

    )
}

export default CheckOutComponent
