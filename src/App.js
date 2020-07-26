import React, { Component } from 'react';
import Names from './components/names';

class App extends Component {

state = { boys : [ 'kelvin','marley','seun','kanye','john','paul'] ,
  girls : ['bola','ayo','ola','rebecca','rachael','elizabeth']
}

generateName = (name) => {
  if (name === 'boy') alert('Your baby name is : ' + this.state.boys[Math.round(Math.random() * 5)])
  if (name === 'girl') alert('Your baby name is : ' + this.state.girls[Math.round(Math.random() * 5)])  
}  

render() {
  return (
    <div>
      <Names generateName={this.generateName} />
    </div>
  );
}
}

export default App;
