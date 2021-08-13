import React, { Component } from 'react'

export default class R004_LifeCycleEx extends Component {
    render() {
        console.log('3.render Call');
        return (
            <div>
                <h2>[This is render function]</h2>
            </div>
        )
    }
}
