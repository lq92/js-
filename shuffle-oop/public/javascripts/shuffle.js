/**
  * options = { 
  *   dots: Boolean  default false
  *   images: Array of Object  must pass
  * }
*/
let defaultOptions = {
  dots: true,
  images: [
    { src: '/images/slider/1.png' },
    { src: '/images/slider/2.jpg', href: '#' },
    { src: '/images/slider/3.jpg' },
    { src: '/images/slider/4.jpg', href: '#' },
    { src: '/images/slider/5.jpg', href: '#' }
  ],
  timingFunction: 'linear',
  duration: '0.2s',
  propertyName: 'all'
}
function isObject(obj){
  return typeof obj === 'object' && !!obj;
}
function getStyle(ele, property){
  return parseInt(window.getComputedStyle(ele, null)[property]);
}
function Slider(ele, options = {}){
  this.ele = isObject(ele) ? ele : document.querySelector(ele);
  this.options = Object.assign(defaultOptions, options);
  this.init();
}
Slider.prototype = {
  constructor: Slider,
  init(){
    let next = this.ele.querySelector('.next'),
        prev = this.ele.querySelector('.prev');
    let images = this.createImages(this.options.images);
    this.ele.insertBefore(images, this.ele.firstElementChild)
    console.log(images)
    console.log(images.firstElementChild.getBoundingClientRect())
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
    if(this.options.dots){
      this.switchDots(index);
    }
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
    ele.style.transition = `${this.options.timingFunction} ${this.options.duration} ${this.options.propertyName}`;
  },
  createDots(num){
    let dotBoxer = document.createElement('div');
    dotBoxer.className = 'dot_boxer';
    for(let i = 0; i < num; i++){
      let span = document.createElement('span');
      span.className = 'dot';
      dotBoxer.appendChild(span);
    }
    dotBoxer.firstElementChild.classList.add('active');
    return dotBoxer;
  },
  createImages(images){
    let container = document.createElement('div'),
        len = images.length;
    container.className = 'container';
    function createImg(src){
      let img = document.createElement('img');
      img.src = src;
      return img;
    }
    for(let i = 0; i < len; i++){
      if(!!images[i].href){
        let a = document.createElement('a');
        let img = createImg(images[i].src);
        a.href = images[i].href;
        a.appendChild(img);
        container.appendChild(a);
      }else{
        let img = createImg(images[i].src);
        container.appendChild(img);
      }
    }
    if(this.options.dots){
      let dotBoxer = this.createDots(len);
      this.ele.appendChild(dotBoxer);
    }
    return container
  }
}
