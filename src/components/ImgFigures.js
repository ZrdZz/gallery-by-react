import React, {Component, PropTypes } from 'react'
import ImgFigure from './ImgFigure'

export default class ImgFigures extends Component{
  render(){
  	return(
      <div>
        {
          this.props.imageDatas.map((imageData, i) => {
            return <ImgFigure imageData = {imageData} key = {imageData.id} index = {i} imgsStateArr = {this.props.imgsStateArr} imgState = {this.props.imgsStateArr[i]} arrangeImgs = {this.props.arrangeImgs} arrange = {this.props.arrange}/>
          })
        }
      </div>
  	)
  }
}
