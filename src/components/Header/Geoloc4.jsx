import React, {Component} from 'react';
// import classes from '';

class Geoloc4 extends Component{
    constructor(){
        super();
        this.state={
            ToggleNudgeBanner: 'false'
        }
        this.testbutton = this.testbutton.bind(this);
    }

    nudgeCol = () => {
        this.setState({
            ToggleNudgeBanner: 'true'
        })
    }
    testbutton = () => {
        var nudgeTimeoutId = setTimeout(this.state.ToggleNudgeBanner, 2000);

        var geoSuccess = (position) => {
            this.nudgeCol();
            clearTimeout(nudgeTimeoutId);

          var startPos = position;
            document.getElementById('startLat').innerHTML = startPos.coords.latitude;
            document.getElementById('startLon').innerHTML = startPos.coords.longitude;
        };
        
        var geoError = (error) => {
            console.log(`Error Occured ${error.code +' ' + error.message}`);
        };

        navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
    }    

       render(){
           return(
               <div>
                   {this.state.ToggleNudgeBanner ? (
                 <div>
                           <h1>{this.testbutton()}</h1>
                           <h2 id="startLat"></h2>
                           <h2 id="startLon"></h2> 
                 </div>
                   ) : <h1>Error</h1> }
               </div>
           )
       }

}

    export default Geoloc4;
