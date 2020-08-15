import React from 'react'
import NumButton from './NumButton'

class Keypad extends React.Component{
    render(){
        return(
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr",gridTemplateRows:"1fr 1fr 1fr 1fr"}}>
                    <NumButton display="1" value={1} handleClick={this.props.handleNum}/>
                    <NumButton display="2" value={2} handleClick={this.props.handleNum}/>
                    <NumButton display="3" value={3} handleClick={this.props.handleNum}/>
                    <NumButton display="+" value="+" handleClick={this.props.handleSign}/>
                    <NumButton display="4" value={4} handleClick={this.props.handleNum}/>
                    <NumButton display="5" value={5} handleClick={this.props.handleNum}/>
                    <NumButton display="6" value={6} handleClick={this.props.handleNum}/>
                    <NumButton display="-" value="-" handleClick={this.props.handleSign}/>
                    <NumButton display="7" value={7} handleClick={this.props.handleNum}/>
                    <NumButton display="8" value={8} handleClick={this.props.handleNum}/>
                    <NumButton display="9" value={9} handleClick={this.props.handleNum}/>
                    <NumButton display="*" value="*" handleClick={this.props.handleSign}/>
                    <NumButton display="=" handleClick={this.props.handleEqual}/>
                    <NumButton display="0" value={0} handleClick={this.props.handleNum}/>
                    <NumButton display="C" handleClick={this.props.handleReset}/>
                    <NumButton display="/" value="/" handleClick={this.props.handleSign}/>
            </div>
        )
    }
}

export default Keypad