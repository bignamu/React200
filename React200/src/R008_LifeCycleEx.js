import React, { Component } from 'react'

export default class R008_LifeCycleEx extends Component {

    static getDerivedStateFromProps(props,state){
        console.log('2. getDerivedStateFromProps Call :'+props.prop_value);
        
        return{tmp_state:props.prop_value};
    }

    constructor(props){
        super(props);
        this.state = {};
        console.log('1.constructor Call');
    }

    componentDidMount(){
        console.log('4. componentDidMount Call');
        console.log('5. tmp_state : '+this.state.tmp_state);
        console.log(this.state);
        this.setState({tmp_state2:true});
        console.log(this.state);

    }

    shouldComponentUpdate(props,state){
        console.log('6.shouldComponentUpdate Call / tmp_state2 = '
                    + state.tmp_state2);
        return state.tmp_state2
    }
    render() {
        console.log('3. render Call');
        console.log(this.state);
        return (
            <div>
                <h2>[THIS IS Component FUNCTION]</h2>
            </div>
        )
    }
}
