import React from "react";
import UserForm from "./UserForm";

const Spinner = (props) => {
  return ( 
    <div className="active ui dimmer">
      <div className="ui big text loader">
        {props.message}
        <UserForm />
      </div>
    </div>
   );
}
Spinner.defaultProps ={
  message: "Loading..."
}
export default Spinner;