import React, { Component } from 'react';
// import { Button, Checkbox, Form, Header} from 'semantic-ui-react'
import { Button, Form, FormGroup, Label, Input, Card } from 'reactstrap';

import { Grid,Image,Icon } from 'semantic-ui-react'
import './login.css';
import img from "../../img/vxplore-jobs.jpg";
// import { insertDataToServer } from '../../Networking/Server';
// import swal from 'sweetalert';
class Login extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      Username: '',
      Password: '',
    }
  }



  render() {
    return (  
      <div className="flex-container">
      <div>
       
      
            <Card className="cardContainer">
                <Image src={img} size='large' />
            </Card>

           
            </div>
            
        
   
        
      </div>
      

    );
  }
}

export default Login;