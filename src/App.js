import React, { Component } from 'react';

class App extends Component {
  constructor(){
    super()
    this.state ={
      calcScreen: '' 
    }
  }



handleClick = e => {
  e.preventDefault()
  const value  = e.target.value
  switch(value){
    case '=': {
      try{
        const result = eval(this.state.calcScreen)
        this.setState({calcScreen: result})
      
      }catch(error){
        console.log(error)
        this.setState({calsScreen: "Error"})

      }
      break
    }
    case 'all-clear': {
      this.setState({calcScreen: ''})
      break
    }
    default: {
      this.setState({calscScreen: this.state.calcScreen += value})
    }
  }
}

  render() {
    const { calcScreen } = this.state;
    return (
      <div className="app">
        <h2 className="title">React Calculator</h2>
        <div className="calculator">
          <input type="text" className="calculator-screen" value={calcScreen} disabled />

          <div onClick={this.handleClick} onKeyPress={this.handleKeyPress} className="calculator-keys">
              <button type="button" className="operator" value='+'>
                +
              </button>
              <button type="button" className="operator" value='-'>
                -
              </button>
              <button type="button" className="operator" value='*'>
                &times;
              </button>
              <button type="button" className="operator" value='/'>
                &divide;
              </button>

              <button  type="button" value="7">
                7
              </button>
              <button type="button" value="8">
                8
              </button>
              <button type="button" value="9">
                9
              </button>

              <button type="button" value="4">
                4
              </button>
              <button type="button" value="5">
                5
              </button>
              <button type="button" value="6">
                6
              </button>

              <button type="button" value="1">
                1
              </button>
              <button type="button" value="2">
                2
              </button>
              <button type="button" value="3">
                3
              </button>

              <button type="button" value="0">
                0
              </button>
              <button type="button" className="decimal" value=".">
                .
              </button>
              <button type="button" className="all-clear" value="all-clear">
                AC
              </button>

              <button type="button" className="equal-sign" value="=">
                =
              </button>
            </div>
        </div>
      </div>
    );
  }
}

export default App;




