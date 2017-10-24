import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import ImgFigures from '../components/ImgFigures'
import {arrangeImgs} from '../reducers/ImgStatesReducer'

class ImgFiguresContainer extends Component{
  render(){
  	return(
      <ImgFigures imageDatas = {this.props.imageDatas} imgsStateArr = {this.props.imgsStateArr} arrangeImgs = {this.props.arrangeImgs} arrange = {this.props.arrange}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(ImgFiguresContainer)
