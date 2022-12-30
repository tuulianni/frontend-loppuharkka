import React from 'react';
 
class Time extends React.Component {
  state={
    curDT : new Date().toLocaleString(),
  }
  render(){
    return (
      <div className="App">
        <p>Tallennusaika : {this.state.curDT}</p>
      </div>
    );
  }
}
 
export default Time;