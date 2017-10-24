const ARRANGE_IMGS = 'ARRANGE_IMGS'

export default function(imgsStateArr = [], action){
  if(imgsStateArr.length <= 0){
  	for(var i = 0; i < 16; i++){
      imgsStateArr[i] = {
        pos: {
          left: 0,
          top: 0,
        },
        rotate: 0,
        isInverse: false,
        isCenter: false
      }
    }

    return {imgsStateArr};
  }

  switch(action.type){
    case ARRANGE_IMGS:
      return{
        imgsStateArr: [...action.imgsStateArr]
      }
    default:
      return state
  }

}

export const arrangeImgs = (imgsStateArr) => {
  return {type: ARRANGE_IMGS, imgsStateArr};
}


