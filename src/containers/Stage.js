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

//取得随机值
function getRangeRandom(low, high){
  return Math.floor(Math.random() * (high - low) + low);
}

export default class Stage extends Component{
  constructor(props){
    super(props);
    this.state = {
      imgsArrangeArr:[
        /*{
            pos: {
              left: 0,
              top: 0
            }
          }*/
      ]
    };
  }

  //排布的取值范围
  Constant = {
    centerPos: {
      left: 0,
      right: 0
    },
    hPosRange: {
      leftSecX: [0, 0],
      rightSecX: [0, 0],
      y: [0, 0]
    },
    vPosRange: {
      x: [0, 0],
      topY: [0, 0]
    }
  }
  
  /*
   *布局图片
   *@param centerIndex 指定居中排布哪个图片
   */
  arrange(centerIndex){
    var imgsArrangeArr = this.state.imgsArrangeArr,
        
        Constant = this.Constant,
        centerPos = Constant.centerPos,
        
        hPosRange = Constant.hPosRange,
        hPosRangeLeftSecX = hPosRange.leftSecX,
        hPosRangeRightSecX = hPosRange.rightSecX,
        hPosRangeY = hPosRange.y,
        
        vPosRange = Constant.vPosRange,
        vPosRangeTopY = vPosRange.topY,
        vPosRangeX = vPosRange.x,

        //存储上层图片的状态信息,取0~1个图片
        imgsArrangeTopArr = [],
        topImgNum = Math.floor(Math.random() * 2),
        topImgSpliceIndex = 0,        //放在上部的图片序号

        //取得放在中部的图片状态
        imgsArrangeCenterArr = imgsArrangeArr.splice(centerIndex, 1);

      //居中图片
      imgsArrangeCenterArr[0] = {
        pos: centerPos
      };
    
      //取得上层的图片状态
      topImgSpliceIndex = Math.floor(Math.random() * imgsArrangeArr.length);
      imgsArrangeTopArr = imgsArrangeArr.splice(topImgSpliceIndex, topImgNum);
      
      //布局上层的图片
      imgsArrangeTopArr.map(function(value, index){
        imgsArrangeTopArr[index] = {
          pos: {
            top: getRangeRandom(vPosRangeTopY[0], vPosRangeTopY[1]),
            left: getRangeRandom(vPosRangeX[0], vPosRangeX[1])
          }
        };
      });

      //布局两侧图片
      for(var i = 0, len = imgsArrangeArr.length, k = len / 2; i < len; i++){
        var hPosRangeLORX = null;
          
        //前半部分图片放在左边，后半部分图片放在右边
        if(i < k){
          hPosRangeLORX = hPosRangeLeftSecX;
        }else{
          hPosRangeLORX = hPosRangeRightSecX;
        }

        imgsArrangeArr[i] = {
          pos: {
            top: getRangeRandom(hPosRangeY[0], hPosRangeY[1]),
            left: getRangeRandom(hPosRangeLORX[0], hPosRangeLORX[1])
          }
        };
      }

      //将图片状态信息合并回imgsArrangeArr数组
      if(imgsArrangeTopArr && imgsArrangeTopArr[0]){
        imgsArrangeArr.splice(topImgSpliceIndex, 0, imgsArrangeTopArr[0]);
      }

      imgsArrangeArr.splice(centerPos, 0, imgsArrangeCenterArr[0]);

      this.setState({imgsArrangeArr});
  }


  //为每张图片计算其位置的范围
  componentDidMount(){
    //舞台信息
    var stageDOM = this.stage,
        stageW = stageDOM.scrollWidth,
        stageH = stageDOM.scrollHeight,
        halfStageW = Math.floor(stageW / 2),
        halfStageH = Math.floor(stageH / 2);

    //单个图片信息
    var imgFigureDOM = this.imgs.firstElementChild.firstElementChild,
        imgW = imgFigureDOM.scrollWidth,
        imgH = imgFigureDOM.scrollHeight,
        halfImgW = Math.floor(imgW / 2),
        halfImgH = Math.floor(imgH / 2);

    //计算中心图片的位置
    this.Constant.centerPos = {
      left: halfStageW - halfImgW,
      top: halfStageH - halfImgH
    }

    //计算水平区域的范围
    this.Constant.hPosRange.leftSecX[0] = -halfImgW;
    this.Constant.hPosRange.leftSecX[1] = halfStageW - halfImgW * 3;
    this.Constant.hPosRange.rightSecX[0] = halfStageW + halfImgW;
    this.Constant.hPosRange.rightSecX[1] = stageW - halfImgW;
    this.Constant.hPosRange.y[0] = -halfImgH;
    this.Constant.hPosRange.y[1] = stageH - halfImgH;

    //计算垂直区域的范围
    this.Constant.vPosRange.topY[0] = -halfImgH;
    this.Constant.vPosRange.topY[1] = halfStageH - halfImgH * 3;
    this.Constant.vPosRange.x[0] = halfStageW - imgW;
    this.Constant.vPosRange.x[1] = halfStageW;

    this.arrange(0);
  }

  render(){
    return(
      <section className = "stage" ref = {(stage) => {this.stage = stage;}}>
        <section className = "img-sec" ref = {(imgs) => {this.imgs = imgs;}}>
          <ImgFigures imageDatas = {imageDatas} imgsArrangeArr = {this.state.imgsArrangeArr}/>
        </section>
        <nav className = "controller-nav">
        
        </nav>
      </section>  
    )
  }
}
