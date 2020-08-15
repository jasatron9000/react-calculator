import React from 'react'
import ReactDOM from 'react-dom'
import Calculator from './Components/Calculator'

class App extends React.Component{
    render(){
        return(
            <div>
                <Calculator/>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'))