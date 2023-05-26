// import { render } from "@testing-library/react";
import React from "react";

class UserForm extends React.Component{
  state = {time:''};
  componentDidMount(){
    setInterval(() =>{
     this.setState({ time: new Date().toLocaleTimeString()})
    }, 1000)
  }
  render(){
    return(
      <div>The time is: {this.state.time}</div>
    )
  }
}

export default UserForm;