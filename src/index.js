import React from 'react';
import './style.css';
import File from './file';
import {SelectControl} from './selectControl';
import Tree from './tree';


document.ondragstart=e=>e.preventDefault();
document.onselectstart=e=>e.preventDefault();

export default class BaseLayout extends React.Component {
  constructor(props){
    super(props);
  }
  handleKeyDown=(e)=>{
    if(e.code==="Delete"){
    }
  }
  componentDidMount(){
    this._control=new SelectControl(this._el);
    document.addEventListener('keydown',this.handleKeyDown)
  }
  componentWillUnmount(){
    this._control.cancel();
  }
  render() {
    return (
      <div id="container" ref={el=>this._el=el} style={{
        position:"relative"
      }}> 
        <Tree />
        <File />
      </div>
    )
  }
}