import React, {Component, PropTypes} from 'react'

export default class ControllerUnit extends Component{
  handleClick(e){
    if(this.props.imgState.isCenter){
      this.props.imgState.isInverse = !this.props.imgState.isInverse;
      this.props.arrangeImgs(this.props.imgsStateArr);
    }else{
      this.props.imgState.isCenter = !this.props.imgState.isCenter;
      this.props.arrangeImgs(this.props.arrange(this.props.index));      
    }
    e.stopPropagation();
    e.preventDefault();   
  }

  render(){
  	var controllerUnitClassName = 'controller-unit';

  	if(this.props.imgState.isCenter){
  	  controllerUnitClassName += ' is-center';

  	  if(this.props.imgState.isInverse){
  	  	controllerUnitClassName += ' is-inverse';
  	  }
  	}

  	return(
      <span className = {controllerUnitClassName} onClick = {this.handleClick.bind(this)}></span>
  	)
  }
}