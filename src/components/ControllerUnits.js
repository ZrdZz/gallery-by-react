import React, {Component} from 'react'
import PropTypes from 'prop-types'
import ControllerUnit from './ControllerUnit'

export default class ControllerUnits extends Component{
  render(){
  	return(
      <div>
        {this.props.imgsArrangeArr.map((imgState, i) => {
		      return <ControllerUnit key = {i} imgsArrangeArr = {this.props.imgsArrangeArr} imgState = {imgState} inverse = {this.props.inverse(i)} center = {this.props.center(i)}/>
		    })}
      </div>
  	)
  }
}

ControllerUnits.propTypes = {
  imgsArrangeArr: PropTypes.array,
  inverse: PropTypes.func,
  center: PropTypes.func
}