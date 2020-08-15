import React, { Component } from 'react'

export default class Display extends Component {
    constructor(props){
        super(props)

        this.state = {
            topText:"",
            bottomText:""
        }

        this.displayTopText = this.displayTopText.bind(this)
        this.displayBottomText = this.displayBottomText.bind(this)
    }

    displayTopText(){
        this.setState(() => {
            let valueOneString = this.props.state.valueOne.toString()
            let valueTwoString = this.props.state.valueOne.toString() + " " +this.props.state.sign

            if(this.props.state.isFirst){
                if(this.props.state.isCompleted){
                    return{
                        topText: valueOneString
                    }
                }
                return{
                    topText: "0"
                }
            }
            
            return{
                topText: valueTwoString
            }
        })
    }

    displayBottomText(){
        this.setState(() => {
            let valueOneStringB = this.props.state.valueOne.toString()
            let valueTwoStringB = this.props.state.valueTwo.toString()

            if(this.props.state.isFirst){
                return{
                    bottomText: valueOneStringB
                }
            }
            
            return{
                bottomText: valueTwoStringB
            }
        })
    }

    componentDidMount(){
        this.displayTopText()
        this.displayBottomText()
    }

    componentDidUpdate(prevProps){
        if(prevProps.state !== this.props.state){
            this.displayTopText()
            this.displayBottomText()
        }
    }

    render() {

        return (
            <div style={{paddingTop:10, paddingBottom:10}}>
                <p style={{fontFamily:"Roboto", margin:"0"}}>{this.state.topText}</p>
                <h1 style={{fontFamily:"Roboto", margin:"0"}}>{this.state.bottomText}</h1>
            </div>
        )
    }
}
