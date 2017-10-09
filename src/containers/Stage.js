import React, {Component} from 'react'

//获取图片相关的数据
var imageDatas = require('../data/imageDatas.json');

//通过url-loader将图片名信息转换为图片URL路径信息
imageDatas = (function(imageDatasArr){
  for(var i = 0, len = imageDatasArr.length; i < len; i++){
    var singleImageData = imageDatasArr[i];

    singleImageData.imageURL = require('../images/' + singleImageData.fileName);
    imageDatasArr[i] = singleImageData;
  }
  return imageDatasArr; 
})(imageDatas);

export default class Stage extends Component{
  render(){
<<<<<<< HEAD
    return(
      <section className = "stage">
        <section className = "img-sec">
           <p>aaaaaaaaa</p>
        </section>
        <nav className = "controller-nav">
        
        </nav>
      </section>  
    )
=======
    <section className = "stage">
      <section className = "img-sec">
        <ImgFigures />
      </section>
      <nav className = "controller-nav">
	<ControllerUnits />
      </nav>
    </section>	
>>>>>>> ee584a6525db5f565cfd7d54ef20ec483856d5eb
  }
}
