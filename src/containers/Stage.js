import React, {Component} from 'react'
import ImgFigures from '../components/ImgFigures'

//获取图片相关的数据
var imageDatas = require('../data/imageDatas.json');

//通过url-loader将图片名信息转换为图片URL路径信息
imageDatas = (function(imageDatasArr){
  for(var i = 0, len = imageDatasArr.length; i < len; i++){
    var singleImageData = imageDatasArr[i];

    singleImageData.imageURL = require('../images/' + singleImageData.fileName);
    imageDatasArr[i] = singleImageData;
    console.log(singleImageData.imageURL);
  }
  return imageDatasArr; 
})(imageDatas);

export default class Stage extends Component{
  render(){
    return(
      <section className = "stage">
        <section className = "img-sec">
          <ImgFigures imageDatas = {imageDatas}/>
        </section>
        <nav className = "controller-nav">
        
        </nav>
      </section>  
    )
  }
}
