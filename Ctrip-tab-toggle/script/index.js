// 创建元素，并将传入的属性参数添加到元素
function createElement(ele, propertyHash = {}){
	let element = document.createElement(ele);
	Object.keys(propertyHash).forEach(property => {
		element[property] = propertyHash[property]
	})
	return element;
}
// 添加下拉项DOM结构
function appendElement(eleArr){
	let documentFragment = document.createDocumentFragment(),
			slideWrapper = createElement('div', { className: 'slide_wrapper' }),
			slideContainer = createElement('div', { className: 'slide_container' });
	eleArr.forEach(ele => {
		let eleA = createElement('a', { className: 'slide_item', textContent: ele.text, href: ele.href });
		documentFragment.appendChild(eleA);
		// 下拉项的最后一项不添加竖线
		if(eleArr.indexOf(ele) !== eleArr.length - 1){
			let span = createElement('span', { className: 'line' });
			documentFragment.appendChild(span);
		}
	})
	slideContainer.appendChild(documentFragment);
	slideWrapper.appendChild(slideContainer);
	return slideWrapper;
}
// 数组slice方法
let slice = Array.prototype.slice;
// 动态切换目标元素的class,传入的参数：dom节点,切换的class名,发生的事件名(optinal)
function toggleClass(node, className, ev = null){ 
	if(ev){
		node.addEventListener(ev, () => {
			node.classList.toggle(className)
		})
	}
	node.classList.toggle(className)
}
// 动态切换目标元素中子元素的显示隐藏,传入的参数: 发生事件的目标节点,要切换的子节点或子节点数组,子节点显示或隐藏的标志,发生的事件名(optinal)
function toggleDisplay(parentNode, childNode, flag, ev = null){
	let child = Array.isArray(childNode) ? slice.call(childNode) : childNode;
	function appearOrDisappear(){
		if(Array.isArray(childNode)){
			childNode.forEach(childnode => {
				childnode.style.display = flag ? 'block' : 'none'
			})
		}else{
			childNode.style.display = flag ? 'block' : 'none'
		}
	}
	if(ev){
		parentNode.addEventListener(ev, appearOrDisappear)
	}
	return appearOrDisappear;
}