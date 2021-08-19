import React, { Component } from 'react';
import datatype from 'prop-types';
import $ from 'jquery';

export default class R023_PropsNode extends Component {

    render() {

        return (
            <div style={{padding:"0px"}}>
                {this.props.children}
            </div>
        )
    }
}

