import React from 'react'
import NumButton from './NumButton'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'

const styles = theme => ({
    root: {
        flexGrow: 1
    }
})

class Keypad extends React.Component{
    render(){
        const { classes } = this.props

        return(
            <div className={classes.root}>
                <Grid container spacing={1}>
                    <Grid container item xs={12} spacing={1}>
                        <Grid item xs={3}><NumButton display="1" value={1} handleClick={this.props.handleNum}/></Grid>
                        <Grid item xs={3}><NumButton display="2" value={2} handleClick={this.props.handleNum}/></Grid>
                        <Grid item xs={3}><NumButton display="3" value={3} handleClick={this.props.handleNum}/></Grid>
                        <Grid item xs={3}><NumButton display="+" value="+" handleClick={this.props.handleSign}/></Grid>
                    </Grid>
                    <Grid container item xs={12} spacing={1}>
                        <Grid item xs={3}><NumButton display="4" value={4} handleClick={this.props.handleNum}/></Grid>
                        <Grid item xs={3}><NumButton display="5" value={5} handleClick={this.props.handleNum}/></Grid>
                        <Grid item xs={3}><NumButton display="6" value={6} handleClick={this.props.handleNum}/></Grid>
                        <Grid item xs={3}><NumButton display="-" value="-" handleClick={this.props.handleSign}/></Grid>
                    </Grid>
                    <Grid container item xs={12} spacing={1}>
                        <Grid item xs={3}><NumButton display="7" value={7} handleClick={this.props.handleNum}/></Grid>
                        <Grid item xs={3}><NumButton display="8" value={8} handleClick={this.props.handleNum}/></Grid>
                        <Grid item xs={3}><NumButton display="9" value={9} handleClick={this.props.handleNum}/></Grid>
                        <Grid item xs={3}><NumButton display="*" value="*" handleClick={this.props.handleSign}/></Grid>
                    </Grid>
                    <Grid container item xs={12} spacing={1}>
                        <Grid item xs={3}><NumButton display="=" handleClick={this.props.handleEqual}/></Grid>
                        <Grid item xs={3}><NumButton display="0" value={0} handleClick={this.props.handleNum}/></Grid>
                        <Grid item xs={3}><NumButton display="C" handleClick={this.props.handleReset}/></Grid>
                        <Grid item xs={3}><NumButton display="/" value="/" handleClick={this.props.handleSign}/></Grid>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

Keypad.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Keypad)