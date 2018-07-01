/* function isObject(obj){
  return typeof obj === 'object' && !!obj;
}
let defaultOptions = {
  dots: true,
  images: [
    { src: '/images/slider/1.png', href: '#' },
    { src: '/images/slider/2.jpg', href: '#' },
    { src: '/images/slider/3.jpg', href: '#' },
    { src: '/images/slider/4.jpg', href: '#' },
    { src: '/images/slider/5.jpg', href: '#' }
  ]
} */
/**
  * options = { 
  *   dots: Boolean  default false
  *   images: Array of Object  must pass
  * }
*/
/* function Slider(ele, options){
  this.ele = isObject(ele) ? ele : document.querySelector(ele);
  this.options = Object.assign(defaultOptions, options);
}
Slider.prototype = {
  constructor: Slider,
  init(){

  },
  createFrag(){
    let frag = document.createDocumentFragment(),
        container = document.createElement('div');
    container.className = 'container';
  },
  createDots(){
    let dots;
    if(this.options.dots){
      dots =  
    }
  }
} */
function isObject(obj){
  return typeof obj === 'object' && !!obj;
}
function getStyle(ele, property){
  return parseInt(window.getComputedStyle(ele, null)[property]);
}
function Slider(ele, images = {}){
  this.ele = isObject(ele) ? ele : document.querySelector(ele);
  this.images = images;
  this.init();
}
Slider.prototype = {
  constructor: Slider,
  init(){
    let next = this.ele.querySelector('.next'),
        prev = this.ele.querySelector('.prev');
    next.addEventListener('click', e => {
      this.move(-520);
    })
    prev.addEventListener('click', e => {
      this.move(520);
    })
  },
  move(offset){
    let container = this.ele.querySelector('.container');
    let index = this.judge(container, offset);
    this.animate(container);
    this.switchDots(index);
  },
  switchDots(index){
    let dots = this.ele.querySelectorAll('.dot');
    [...dots].forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active')
  },
  judge(ele, offset){
    let initalOffset = getStyle(ele, 'left');
    let index;
    if(offset < 0){
      if(initalOffset < -1560){
        ele.style.left = '0px';
        index = 0;
      }else{
        ele.style.left = initalOffset + offset + 'px';
        index = Math.abs(initalOffset / offset) + 1;
      }
    }else{
      if(initalOffset >= 0){
        ele.style.left = '-2080px';
        index = 4;
      }else{
        ele.style.left = initalOffset + offset + 'px';
        index = Math.abs(initalOffset / offset) - 1;
      }
    }
    return index;
  },
  animate(ele){
    ele.style.transition = 'linear 0.2s all';
  }
}
