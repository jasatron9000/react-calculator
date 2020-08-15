import React from 'react'
import Display from './Display'
import Keypad from './Keypad'
import { Box, Card } from '@material-ui/core'

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
            default:
                finalAnswer = 0
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
            <div>
                <Box width={300} m={1} p={1}>
                    <h1 style={{fontFamily:"Roboto", margin: "0px 0px 10px 0px"}}>Calculator</h1>
                    <Box border={1} borderColor="secondary.main" borderRadius={5} mb={1} mr={1} px={2}>
                        <Display state={this.state}/>
                    </Box>
                    <Keypad 
                        handleNum={this.handleClickNum} 
                        handleSign={this.handleClickSpecial} 
                        handleReset={this.handleClickReset} 
                        handleEqual={this.handleClickEquate}/>
                </Box>
            </div>
        )
    }
}

export default Calculator