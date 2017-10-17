import React, {Component} from 'react'
import PropTypes from 'prop-types'
import ImgFigure from './ImgFigure'

export default class ImgFigures extends Component{
  render(){
  	return(
      <div>
        {this.props.imageDatas.map((imageData, i) => {
          if(!this.props.imgsArrangeArr[i]){
            this.props.imgsArrangeArr[i] = {
              pos: {
                left: 0,
                top: 0
              },
              rotate: 0,
              isInverse: false,
              isCenter: false
            };            
          }

          return <ImgFigure imageData = {imageData} key = {i} imgsArrangeArr = {this.props.imgsArrangeArr} imgState = {this.props.imgsArrangeArr[i]} inverse = {this.props.inverse(i)} center = {this.props.center(i)}/>
        })}
      </div>
  	)
  }
}

ImgFigures.propTypes = {
  imageDatas: PropTypes.array,
  imgsArrangeArr: PropTypes.array,
  inverse: PropTypes.func,
  center: PropTypes.func
}