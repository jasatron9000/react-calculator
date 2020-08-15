import React from 'react'
import NumButton from './NumButton'
import Display from './Display'
import Keypad from './Keypad'

class Calculator extends React.Component{
    constructor(){
        super()

        this.state = {
            valueOne:0,
            valueTwo:0,
            sign:"",
            isFirst:true,
            isCompleted:false
            
        }

        this.handleClickNum = this.handleClickNum.bind(this)
        this.handleClickSpecial = this.handleClickSpecial.bind(this)
        this.handleClickEquate = this.handleClickEquate.bind(this)
        this.handleClickReset = this.handleClickReset.bind(this)
    }

    handleClickNum(x){
        this.setState(prevState => {
            if(this.state.isFirst){
                if(this.state.isCompleted){
                    return{
                        isCompleted: false,
                        valueOne: x
                    }
                }

                let updatedVal = (prevState.valueOne*10) + x;
                return{
                    valueOne: updatedVal
                }
            }
            
            let updatedVal = (prevState.valueTwo*10) + x;
            return{
                valueTwo: updatedVal
            }
            
        })
    }

    handleClickSpecial(sign){
        this.setState({
            isFirst:false,
            sign:sign
        })
    }

    handleClickEquate(){
        let finalAnswer
        const vOne = this.state.valueOne;
        const vTwo = this.state.valueTwo;

        switch(this.state.sign){
            case "+":
                finalAnswer = vOne + vTwo
                break;
            case "-":
                finalAnswer = vOne - vTwo
                break;
            case "/":
                finalAnswer = vOne/vTwo
                break;
            case "*":
                finalAnswer = vOne*vTwo
                break;
            case "":
                finalAnswer = vOne
                break;
        }

        this.setState({
            isCompleted:true,
            isFirst:true,
            valueOne:finalAnswer,
            valueTwo:0
        })
    }

    handleClickReset(){
        this.setState({
            valueOne:0,
            valueTwo:0,
            
        })
    }

    render(){
        const nums = [1,2,3,4,5,6,7,8,9]

        return(
            <div style={{width:"50px"}}>
                <Display state={this.state}/>
                <Keypad 
                    handleNum={this.handleClickNum} 
                    handleSign={this.handleClickSpecial} 
                    handleReset={this.handleClickReset} 
                    handleEqual={this.handleClickEquate}/>
            </div>
        )
    }
}

export default Calculator