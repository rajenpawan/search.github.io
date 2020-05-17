import React, { Component } from 'react';
import { Form, FormControl, Button, Nav } from "react-bootstrap";
// import Geoloc7 from '../Header/Geoloc7';
// import Geoloc1 from '../Header/Geoloc1';
// import Geoloc8 from "../Header/Geoloc8";
// import Geoloc3 from "../Header/Geoloc3";
// import Geoloc4 from "../Header/Geoloc4";
import Geoloc2 from "../Header/Geoloc2";
// import Geoshow from '../Header/Geoshow';

 class Home extends Component {
    constructor(props){
        super(props);
        this.state = {isToggleOn: false};

        this.toggleGeoloc = this.toggleGeoloc.bind(this);
    }
   
    toggleGeoloc = () => {
      // e.preventDefault(e);
        const doesShow = this.state.showGeoloc;
        this.setState({showGeoloc: !doesShow});
    }

    render() {
        return (
          <div className="hm">
            <h1>Initializing..!</h1>
            <Form inline className="forinl">
              <FormControl
                id="ser"
                type="text"
                placeholder="Search.."
                className="mr-sm-0"
                required
              />
              {/* <input type="text" placeholder="Search" className="mr-sm-2" id="ser"/> */}
              <Nav.Link className="atl" onClick={this.toggleGeoloc}>
                @ Locate Me!
                {this.state.showGeoloc ? "ON" : "OFF"}
              </Nav.Link>
              <Button className="serbut" variant="outline-info">
                Search
              </Button>
            </Form>
            {this.state.showGeoloc ? (
              <div>
                <Geoloc2/>
              </div>
            ) : null}
            {/* <Geoloc3 /> */}
            {/* <Geoloc1 /> */}
            {/* <Geoloc7 /> */}
            {/* <Geoloc4 /> */}
          </div>
        );
    }
}

export default Home;
