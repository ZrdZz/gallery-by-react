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

  deepCopy(p, c) {
　　var c = c || {};
　　　for (var i in p) {
　　　　if (typeof p[i] === 'object') {
　　　　　c[i] = (p[i].constructor === Array) ? [] : {};
　　　　　deepCopy(p[i], c[i]);
　　　　} else {
　　　　　c[i] = p[i];
　　　　}
　　　}
　　return c;
　}

  render(){
    var styleObj = {};
   
    //如果props中制定了这张图片的位置信息，则使用
    if(this.props.imgState.pos){
      styleObj = this.deepCopy(this.props.imgState.pos);
    }

    if(this.props.imgState.rotate){
      styleObj.transform = 'rotate(' + this.props.imgState.rotate + 'deg)';
    }

    if(this.props.imgState.isCenter){
      styleObj.zIndex = 11;
    }

    var imgFigureClassName = "img-figure";
        imgFigureClassName += this.props.imgState.isInverse ? ' is-inverse' : '';
   
  	return(
      <figure className = {imgFigureClassName} style = {styleObj} onClick={this.handleClick.bind(this)}>
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
