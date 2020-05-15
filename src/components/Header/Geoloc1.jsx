import React, {Component} from 'react';
// import {render} from 'react-dom';

class Geoloc1 extends Component{
    constructor(props){
        super(props);
        this.state = {
            col:[]
        };
    }

    componentDidMount(){
      navigator.geolocation.getCurrentPosition((position) => {
            console.log(`Latitude is: ${position.coords.latitude}`);
            console.log(`Longitude is: ${position.coords.longitude}`);
            console.log(position);
        }, (error) => {
            console.error(`Error code: ${error.code} - ${error.message}`);
        });

          navigator.geolocation.watchPosition((position) => {
            console.log(`Longitude is ${position.coords.longitude}`);
            console.log(position);
            this.setState({
                col: position.coords.latitude
            })
        });

        // navigator.geolocation.clearWatch((position) => {

        // })
    }
    

    render(){
        return(
            <div>
                <h4>Using geolocation javascript Api in React..</h4>
                {/* <h4>{navigator.geolocation.watchPosition()}</h4> */}
        <h1>{this.state.col}</h1>
            </div>
        );
    }
}

export default Geoloc1;