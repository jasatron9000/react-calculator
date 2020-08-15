import React from 'react'
import ReactDOM from 'react-dom'
import Calculator from './Components/Calculator'

class App extends React.Component{
    render(){
        const style = {
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        }

        return(
            <div style={style}>
                <div style={{backgroundColor:"#ecf0f1", border:"0px solid red", borderRadius:"10px"}}>
                    <Calculator/>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'))