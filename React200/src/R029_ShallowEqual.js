import React, { Component } from 'react';
import {shallowEqualArrays} from 'shallow-equal';

class R029_ShallowEqual extends Component {
    constructor(props){
        super(props);
            this.state = {
                 StateString : 'react'
            }
        
    }

    shouldComponentUpdate(nextProps,nextState){
        console.log('should 나옴')
        console.log(nextProps,nextState)
        return !shallowEqualArrays(this.state,nextState)
    }

    componentDidMount(){
        const object = {react : '200'};
        const Array1 = ['리액트',object];
        const Array2 = ['리액트',object];
        const Array3 = ['리액트',{ react : '200'}];

        console.log('shallowEqualArrays(Array1,Array2) : '+
        shallowEqualArrays(Array1,Array2));
        console.log(`shallowEqualArrays(Array2,Array3) : ${shallowEqualArrays(Array2,Array3)}`);
        this.setState({StateString : 'react'})
    }

    render() {

        console.log('render() 실행')
        console.log(this.state.StateString)
        return (
            <div>
                
            </div>
        );
    }
}

export default R029_ShallowEqual;