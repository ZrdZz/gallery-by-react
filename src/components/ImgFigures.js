import React, {Component} from 'react'
import PropTypes from 'prop-types'
import ImgFigure from './ImgFigure'

export default class ImgFigures extends Component{
  render(){
  	return(
      <div>
        {this.props.imageDatas.map((imageData, i) => {
          return <ImgFigure imageData = {imageData} key = {i}/>
        })}
      </div>
  	)
  }
}

ImgFigures.propTypes = {
  imageDatas: PropTypes.array
}