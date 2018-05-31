// 获取dom元素的属性值
function getStyle(dom, property){
	return window.getComputedStyle(dom, null)[property];
}
class Drag {
	/**
		* cursorPos指鼠标移动时的坐标
		* targetPos指目标元素的坐标(每次鼠标按下的时候获取)
		* downPos值鼠标按下时鼠标的坐标
		*/
	constructor(dom){
		this.dom = document.querySelector(dom);
		this.cursorPos = null;
		this.targetPos = null;
		this.downPos = null;
	}
	/**
		* 设置目标的坐标
		* @param 一个坐标对象，包含left和top值
		*/
	setPos(pos){
		this.dom.style.transform = `matrix(1, 0, 0, 1, ${pos.left}, ${pos.top})`;
	}
	/**
		* 设置目标坐标 
		*/
	getPos(){
		let transformValue = getStyle(this.dom, 'transform');
		if(transformValue == 'none'){
			this.targetPos = { left: 0, top: 0 };
		}else{
			let temp = transformValue.split(/[^\d]/g).filter(item => item !== '');
			this.targetPos = { left: parseInt(temp[4]), top: parseInt(temp[5]) };
		}
		return this.targetPos;
	}
	/**
		* 启动拖拽
		* move函数——在鼠标按下后移动的过程中设置目标坐标
		* up函数——鼠标抬起后清除mousemove和mouseup事件
		* down函数——鼠标按下时获取目标坐标和鼠标坐标
		*/
	setDrag(){
		let move = e => {
			let pos = {
				left: e.clientX - this.downPos.left + this.targetPos.left,
				top: e.clientY - this.downPos.top + this.targetPos.top
			}
			setTimeout(this.setPos(pos), 100);
		}
		let up = () => {
			document.removeEventListener('mousemove', move);
			document.removeEventListener('mouseup', up);
		}
		let down = e => {
			this.getPos();
			this.downPos = {
				left: e.clientX,
				top: e.clientY
			}
			document.addEventListener('mousemove', move);
			document.addEventListener('mouseup', up);
		}
		this.dom.addEventListener('mousedown', down);
	}
}