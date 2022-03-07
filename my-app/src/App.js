import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import * as FlexLayout from "flexlayout-react";
import '../node_modules/flexlayout-react/style/light.css'


class App extends Component
{
json = { global: {}, 
borders: [], 
layout: { type: "row", weight: 100, children: [{ type: "tabset", weight: 50, children: [{ type: "tab", name: "One", component: "button", }] }, { type: "tabset", weight: 50, children: [{ type: "tab", name: "Two", component: "button", }] }] } }


factory = (node) => {
  var component = node.getComponent();
  if (component === "button") {
      return <button>{node.getName()}</button>;
  }
}
constructor(props) {
  super(props);
  this.state = {model: FlexLayout.Model.fromJson(this.json)};
}

render() {
  return (
    <div className="App">
      {<FlexLayout.Layout model={this.state.model} factory={this.factory}/>}
    </div>
  );
}
}
export default App;
