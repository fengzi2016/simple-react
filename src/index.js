import React from './react';
import ReactDom from './react-dom';

class App extends React.Componet {
  render(){
    return <div>Hello,World!</div>
  }
}
ReactDom.render(
  <App />,
  document.getElementById('root')
);