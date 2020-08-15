import React from 'react'
import { Button, Paper } from '@material-ui/core'

class NumButton extends React.Component{
    constructor(props){
        super(props)
    }
    
    render(){
        return(
            <div>
                {this.props.value === null ?
                <Button fullWidth variant="outlined" color="secondary" onClick={this.props.handleClick}>{this.props.display}</Button>:
                <Button fullWidth variant="outlined" color="secondary" onClick={() => this.props.handleClick(this.props.value)}>{this.props.display}</Button>}
            </div>
        )
    }
}

export default NumButton