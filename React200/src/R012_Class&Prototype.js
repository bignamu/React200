import React, { Component } from 'react'

export default class ClassPrototype extends Component {

    constructor(props){
        super(props);
        this.state = {};
        
    }

    componentDidMount(){

        let ExamCountFunc = (function(){
            function ExamCount(num){
                this.number = num;
            }
            ExamCount.prototype.showNum = function(){
                console.log('1. react_ '+ this.number);
    
            };
            return ExamCount;
        }())

        var cnt = new ExamCountFunc('200');
        cnt.showNum();

        class ExamCountClass {
            constructor(num2){
                this.number2 = num2;
            }
            showNum(){
                console.log(`2. react_${this.number2}`);
            }
        }

        var cnt2 = new ExamCountClass('2hundred');
        cnt2.showNum();
        
        
        

    }

    render() {
        return (
            <div>
                <h2>[THIS IS Class]</h2>
            </div>
        )
    }
}
