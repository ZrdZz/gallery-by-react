import React, {Component} from 'react'
import ImgFigures from './components/ImgFigures'
import ControllerUnits from './components/ControllerUnits'

//获取图片相关的数据
var imageDatas = require('../data/imageDatas.json');

getImageURL()

export default class Stage extends Component{
  render(){
  	<section className = "stage">
      <section className = "img-sec">
        <ImgFigures />
      </section>
      <nav className = "controller-nav">
	    <ControllerUnits />
      </nav>
  	</section>	
  }
}
