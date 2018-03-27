import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class ImgFigure extends Component{
  handleClick(e){
    if(this.props.imgState.isCenter){
      this.props.imgState.isInverse = !this.props.imgState.isInverse;
      this.props.arrangeImgs(this.props.imgsStateArr);
    }else{
      this.props.imgState.isCenter = !this.props.imgState.isCenter;
      this.props.arrangeImgs(this.props.arrange(this.props.index));
    }

    e.stopPropagation();
    e.preventDefault();
  }

  render(){
    var styleObj = {};
   
    //如果props中制定了这张图片的位置信息，则使用
    if(this.props.imgState.pos){
      let pos = this.props.imgState.pos;
      styleObj.transform = 'translate(' + pos.left + 'px,' + pos.top + 'px)';
    }

    if(this.props.imgState.rotate){
      styleObj.transform += ' rotate(' + this.props.imgState.rotate + 'deg)';
    }

    if(this.props.imgState.isCenter){
      styleObj.zIndex = 11;
    }

    var imgFigureClassName = "img-figure";

    if(this.props.imgState.isInverse){
      var transformValue = document.defaultView.getComputedStyle(this.figure)['transform'];
      var arr = transformValue.match(/-?\d+/g);

      var posX = parseInt(arr[4].trim()) + 320;
      var posY = parseInt(arr[5].trim());
      styleObj.transform = 'matrix3d(-1, 0, 1.22465e-16, 0, 0, 1, 0, 0, -1.22465e-16, 0, -1, 0,' + posX + ',' + posY + ', 0, 1)';
    }

  	return(
      <figure className = {imgFigureClassName} style = {styleObj} onClick={this.handleClick.bind(this)} ref={(figure) => {this.figure = figure}}>
        <img src = {this.props.imageData.imageURL} alt = {this.props.imageData.title}/>
        <figcaption>
          <h2 className = "img-title">{this.props.imageData.title}</h2>          
          <div className = "img-back" onClick={this.handleClick.bind(this)}>
            <p>
              {this.props.imageData.desc}
            </p>
          </div>
        </figcaption>
      </figure>
  	)
  }
}
