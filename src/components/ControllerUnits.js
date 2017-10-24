import React, {Component, PropTypes} from 'react'
import ControllerUnit from './ControllerUnit'

export default class ControllerUnits extends Component{
  render(){
  	return(
      <div>
        {
  	      this.props.imgsStateArr.map((imgState, i) => {
  	        return <ControllerUnit imgState = {imgState} imgsStateArr = {this.props.imgsStateArr} key = {i} index = {i} arrangeImgs = {this.props.arrangeImgs} arrange = {this.props.arrange}/>
  	      })
        }
      </div>
    )
  }
} 

