import React, { Component } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'

class FourZeroFour extends Component {

  
  constructor(props) {
    super(props);
    this.state = {
    }
  }


  render() {
    return (  
      <div style={{justifyContent:'center',alignItems:'center',display:'flex',flex:1,height:'100vh'}}>
           <div style={{backgroundColor:"#e0e0e0"}} className="p-4">
              <b><h1><Icon name='blind' />404 Page Not Found</h1></b>
              
           </div>
      </div>
    );
  }
}

export default FourZeroFour;