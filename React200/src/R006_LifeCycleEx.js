import React, { Component } from 'react'

export default class R006_LifeCycleEx extends Component {

    static getDerivedStateFromProps(props,state){
        console.log('2. getDerivedStateFromProps Call :'+props.prop_value)
        return{};
    }
    
    constructor(props){
        super(props);
        this.state = {};
        console.log('1. constructor Call');

    }
    render() {
        return (
            <div>
                <h2>[THIS IS constructor FUNCTION</h2>
            </div>
        )
    }
}
