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
              }
            };            
          }
          
          return <ImgFigure imageData = {imageData} key = {i} imgState = {this.props.imgsArrangeArr[i]}/>
        })}
      </div>
  	)
  }
}

ImgFigures.propTypes = {
  imageDatas: PropTypes.array
}