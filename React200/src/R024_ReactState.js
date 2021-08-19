import React, { Component } from 'react';
import datatype from 'prop-types';
import $ from 'jquery';

export default class R024_ReactState extends Component {
    constructor(props){
        super(props);
        this.state = {
            StateString : this.props.reactString,
            StateNumber : 200,
        }
    }
    render() {

        return (
            <div style={{padding:"0px"}}>
                {this.state.StateString}{this.state.StateNumber}
            </div>
        )
    }
}


