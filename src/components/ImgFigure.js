import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class ImgFigure extends Component{
  render(){
    var styleObj = {};

    //如果props中制定了这张图片的状态信息，则使用
    if(this.props.imgState.pos){
      styleObj = this.props.imgState.pos;
    }
  	return(
      <figure className = "img-figure" style = {styleObj}>
        <img src = {this.props.imageData.imageURL} alt = {this.props.imageData.title}/>
        <figcaption>
          <h2 className = "img-title">{this.props.imageData.title}</h2>
        </figcaption>
      </figure>
  	)
  }
}

ImgFigure.propTypes = {
  imageData: PropTypes.object
}