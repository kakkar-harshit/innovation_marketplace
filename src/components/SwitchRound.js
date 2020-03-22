import React, { Component } from 'react'
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import '../styles/roundSwitch.css'

import RegisterHook from './RegisterHook'

class SwitchRound extends Component {
    constructor(props) {
        super(props)

        this.state = { isToggleOn: false };
    this.status = "OFF";
    }

    handleInput = () => {
        this.setState(() => ({
          isToggleOn: !this.state.isToggleOn
        }));

        


       
      };

    render() {
        if (this.state.isToggleOn === true) {

            return (
                <>
                 <label className="switch">
          <input
            className="toggle-state"
            type="checkbox"
            checked={this.state.isToggleOn}
            onClick={this.handleInput}
          />
          <span className="slider round" />
        </label>
        <Redirect to='/home/register'/>
              
               
                </>
            )
            
            
           
          } else {

            return(
                <>
                <label className="switch">
          <input
            type="checkbox"
            checked={this.state.isToggleOn}
            onClick={this.handleInput}
          />
          <span className="slider round" />
        </label>
        <Redirect to='/home/login'/>
             
                
        </>
            )
            
            
          }



        
       
    }
}

export default SwitchRound
