export class SelectControl {
  constructor(container) {
    this._container = container;
    this._startX = 0;
    this._startY = 0;
    this._isDown = false;
    this._selectEl = document.createElement('div');
    container.appendChild(this._selectEl);
    this._selectEl.style.cssText = `
      position:absolute;
      width:0;
      height:0;
      border:1px solid #eee;
      background-color:#aaa;
      z-index:999;
      opacity:0.6;
      display:none;
    `;
    this.registerEvent();

    this._selectedEls=[];
  }
  registerEvent() {
    this._container.addEventListener('mousedown', this.onMouseDown);
    this._container.addEventListener('mousemove', this.onMouseMove);
    document.addEventListener('mouseup', this.onMouseUp);
  }
  getElOffset(obj){
    var parObj=obj;  
		var x=parObj.offsetLeft;  
    var y=parObj.offsetTop-parObj.scrollTop;  
	 	while(parObj=parObj.offsetParent){  
	  		x+=parObj.offsetLeft;  
	  		y+=(parObj.offsetTop+parObj.scrollTop);  
		}  
 		return {x,y};
  }
  onMouseDown = (e) => {
    let selectEls=this._container.querySelectorAll('li');
    for(let el of selectEls){
      el.className="";
    }
    if (e.button === 0) {
      this._offset=this.getElOffset(container);
      this._isDown = true;
      this._startX = e.pageX-this._offset.x;
      this._startY = e.pageY-this._offset.y;
      this._selectEl.style.left = this._startX + "px";
      this._selectEl.style.top = this._startY + "px";
    }
  }
  onMouseMove = (e) => {
    if (!this._isDown) return;
    let _x=e.pageX-this._offset.x;
    let _y=e.pageY-this._offset.y;
    this._selectEl.style.display = 'block';
    this._selectEl.style.left = Math.min(_x, this._startX) + 'px';
    this._selectEl.style.top = Math.min(_y, this._startY) + 'px';
    this._selectEl.style.width = Math.abs(_x - this._startX) + 'px';
    this._selectEl.style.height = Math.abs(_y - this._startY) + 'px';
  }
  onMouseUp=(e)=>{
    this._isDown=false;

    let selectElOffset=this.getElOffset(this._selectEl);
    let width=this._selectEl.offsetWidth;
    let height=this._selectEl.offsetHeight;
    this._selectedEls.length=0;
    let selectEls=this._container.querySelectorAll('li');
    for(let el of selectEls){
      let elOffset=this.getElOffset(el);
      let elWidth=el.offsetWidth;
      let elHeight=el.offsetHeight;
      if(Math.max(selectElOffset.x,elOffset.x)<Math.min(selectElOffset.x+width,elOffset.x+elWidth)
        && Math.max(selectElOffset.y,elOffset.y)<Math.min(selectElOffset.y+height,elOffset.y+elHeight)
      ){
        el.className="selected";
        this._selectedEls.push(el);
      }
    }
    this._selectEl.style.display = 'none';
    this._selectEl.style.width = 0;
    this._selectEl.style.height = 0;

  }
  cancel(){
    this._container.removeEventListener('mousedown', this.onMouseDown);
    this._container.removeEventListener('mousemove', this.onMouseMove);
    document.removeEventListener('mouseup', this.onMouseUp);
  }
}