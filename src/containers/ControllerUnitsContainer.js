import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import ControllerUnits from '../components/ControllerUnits'
import {arrangeImgs} from '../reducers/ImgStatesReducer'

class ControllerUnitsContainer extends Component{
  render(){
  	return(
      <ControllerUnits imgsStateArr = {this.props.imgsStateArr} arrangeImgs = {this.props.arrangeImgs} arrange = {this.props.arrange}/>
  	)
  }
}

const mapStateToProps = (state) => {
  return{
  	imgsStateArr: state.imgsStateArr
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    arrangeImgs: (imgsArrangeArr) => {
      dispatch(arrangeImgs(imgsArrangeArr))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ControllerUnitsContainer)