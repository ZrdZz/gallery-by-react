import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class ControllerUnit extends Component{
  handleClick(e){
    if(this.props.imgState.isCenter){
      this.props.inverse(this.props.imgsArrangeArr);
    }else{
      console.log(this.props.imgsArrangeArr);
      this.props.center();
    }    
    e.stopPropagation();
    e.preventDefault();    
  }

  render(){
  	var controllerUnitClassName = 'controller-unit';

  	//如果对应的是居中的图片，显示控制按钮的居中态
    if(this.props.imgState.isCenter){
      controllerUnitClassName += ' is-center';

      //如果同时对应的是翻转图片，显示控制按钮的翻转态
      if(this.props.imgState.isInverse){
      	controllerUnitClassName += ' is-inverse';
      }
    }

  	return(
      <span className={controllerUnitClassName} onClick = {this.handleClick.bind(this)}></span>
  	);
  }
}

ControllerUnit.propTypes = {
  imageState: PropTypes.object,
  imgsArrangeArr: PropTypes.array,
  inverse: PropTypes.func,
  center: PropTypes.func
}