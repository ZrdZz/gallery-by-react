import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class ImgFigure extends Component{
  render(){
  	return(
      <figure>
        <img src = {this.props.imageData.imageURL} alt = {this.props.imageData.title}/>
        <figcaption>
          <h2>{this.props.imageData.title}</h2>
        </figcaption>
      </figure>
  	)
  }
}

ImgFigure.propTypes = {
  imageData: PropTypes.object
}