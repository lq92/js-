/* let slider = document.querySelector('.slider'),
    next = slider.querySelector('.next'),
    prev = slider.querySelector('.prev'),
    dots = slider.querySelectorAll('.dot'),
    img = slider.querySelector('img'),
    imgCollection = slider.querySelectorAll('img'),
    container = slider.querySelector('.container');
let imgWidth = parseInt(computedStyle(img, 'width')),
    imgLength = imgCollection.length;
function computedStyle(ele, property){
  return window.getComputedStyle(ele, null)[property]
}
function getOffset(ele){
  return parseInt(computedStyle(ele, 'left'))
}
function toggleDot(index, activeClass = 'active'){
  [...dots].forEach(dot => dot.classList.remove(activeClass));
  dots[index].classList.add(activeClass);
}
function judge(ele, offset){
  let initalOffset = getOffset(ele);
  let index;
  if(offset < 0){
    if(initalOffset < -imgWidth * (imgLength - 2)){
      ele.style.left = '0px';
      index = 0;
    }else{
      ele.style.left = initalOffset + offset + 'px';
      index = Math.abs(initalOffset / offset) + 1;
    }
  }
  if(offset > 0){
    if(initalOffset >= 0){
      ele.style.left = -imgWidth * (imgLength - 1) + 'px';
      index = imgLength - 1;
    }else{
      ele.style.left = initalOffset + offset + 'px';
      index = Math.abs(initalOffset / offset) - 1;
    }
  }
  toggleDot(index);
}
function move(ele, offset){
  judge(ele, offset);
  animate(ele, { timingFunction: 'ease-in-out', duration: '0.2s' });
}
function animate(ele, options){
  options = Object.assign({ timingFunction: 'linear', duration: '0.5s', property: 'all' }, options)
  return ele.style.transition = `${options.timingFunction} ${options.duration} ${options.property}`;
}
next.addEventListener('click', () => {
  move(container, -imgWidth)
})
prev.addEventListener('click', () => {
  move(container, imgWidth)
}) */
//import Slider from 'shuffle.js';
let slider = new Slider('.slider1')
let slider1 = new Slider('.slider2')