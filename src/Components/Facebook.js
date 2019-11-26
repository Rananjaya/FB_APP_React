import React, { Component } from 'react'
import FacebookLogin from 'react-facebook-login';

export default class ItemRequest extends Component {

    state ={

        IsLoginIn:false,
        UserId:"",
        Name:"",
        Email:"",
        Picture:"",
    }
    responseFacebook = response =>{
        console.log(response);
    }
    componentClicked = () =>{
        console.log("clicked");
    }
   
  render() {
      let fbContent;
      if(this.state.IsLoginIn){

      }else{
        fbContent = ( <FacebookLogin
        appId="1088597931155576"
        autoLoad={true}
        fields="name,email,picture"
        onClick={this.componentClicked}
        callback={this.responseFacebook} />);
      }
    return (
      <div>
        {fbContent}
      </div>
    )
  }
}
