import React, { Component } from 'react';
import datatype from 'prop-types';
import $ from 'jquery';

export default class R018_PropsDatatype extends Component {

    render() {
        let {
            String, Number, Boolean, Array, ObjectJson,Function
        } = this.props
        return (
            <div style={{padding:"0px"}}>
                <p>StringProps:{String}</p>
                <p>NumberProps:{Number}</p>
                <p>BooleanProps:{Boolean}</p>
                <p>ArrayProps:{Array}</p>
                <p>ObjectJsonProps:{JSON.stringify(ObjectJson)}</p>
                <p>FunctionProps:{Function}</p>

            </div>
        )
    }
}

R018_PropsDatatype.propTypes = {
    String: datatype.number,
    Number:datatype.number,
    Boolean:datatype.bool,
    Array:datatype.array,
    ObjectJson:datatype.object,
    Function:datatype.func,

}