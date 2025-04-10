"use client";
import React, { Component } from 'react';
type props =object;
type state ={
  message :string;
  count:number;
};
class ExampleComponent extends Component<props,state>{
  constructor(props:props){
    super(props);
    this.state={
      message:'hello,world',
      count:0
    };
  }
incrementCount=()=>{
  this.setState((prevState)=>({
    count:prevState.count+1
  }));
};
render(){
  return(
    <div>
      <h1>{this.state.message}</h1>
      <p>count:{this.state.count}</p>
      <button onClick={this.incrementCount}>Increment</button>
    </div>
  )
}
}

export default ExampleComponent;


