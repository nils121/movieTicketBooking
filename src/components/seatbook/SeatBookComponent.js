import React from 'react';
import DrawGrid from './DrawGrid'
import './seatbook.css'

class SeatBookComponent extends React.Component {
    constructor() {
        super();
        this.normalSeat = [];
        this.glass3DSeat = [];
        const normalCount = process.env.REACT_APP_TOT_NORMAL_SEATS || 10;
        const glassCount = process.env.REACT_APP_TOT_GLASS_SEATS || 10
        for (let i = 0; i <= normalCount; i++) {
            this.normalSeat.push(i)
        }
        for (let j = 0; j <= glassCount; j++) {
            this.glass3DSeat.push(j)
        }
        this.state = {
            normal_seats: this.normalSeat,
            seatAvailable: this.normalSeat,
            seatReserved: [],

            glass_seats: this.glass3DSeat,
            glassAvailable: this.glass3DSeat,
            glassReserved: []
        }
    }

    onClickData(seat) {
        if (this.state.seatReserved.indexOf(seat) > -1) {
            this.setState({
                seatAvailable: this.state.seatAvailable.concat(seat),
                seatReserved: this.state.seatReserved.filter(res => res != seat)
            })
        } else {
            this.setState({
                seatReserved: this.state.seatReserved.concat(seat),
                seatAvailable: this.state.seatAvailable.filter(res => res != seat)
            })
        }
    }

    onClickGlassData(seat) {
        if (this.state.glassReserved.indexOf(seat) > -1) {
            this.setState({
                glassAvailable: this.state.glassAvailable.concat(seat),
                glassReserved: this.state.glassReserved.filter(res => res != seat)
            })
        } else {
            this.setState({
                glassReserved: this.state.glassReserved.concat(seat),
                glassAvailable: this.state.glassAvailable.filter(res => res != seat)
            })
        }
    }

    render() {
        console.log("env11", process.env.TOTAL_SEATS)
        return (
            <div>
                <h1>Book Seat here</h1>
                <DrawGrid
                    seat={this.state.normal_seats}
                    glassSeat={this.state.glass_seats}
                    available={this.state.seatAvailable}
                    reserved={this.state.seatReserved}
                    glassAvailable={this.state.glassAvailable}
                    glassReserved={this.state.glassReserved}
                    onClickData={this.onClickData.bind(this)}
                    onClickGlassData={this.onClickGlassData.bind(this)}
                />
            </div>
        )
    }
}

export default SeatBookComponent;