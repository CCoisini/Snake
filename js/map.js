export default class Map {
    constructor(el,rect = 10){
         this.el = el;
         this.rect = rect;
         this.data = [
             // {
             //     x: 10,
             //     y: 5,
             //     color: "red"
             // }
         ];
         this.rows = Math.ceil(Map.getStyle(el,"height") / rect);
         this.cells = Math.ceil(Map.getStyle(el,"width") / rect);
         Map.setStyle(el,"height",this.rows*rect);
         Map.setStyle(el,"width",this.cells*rect);
    } 
    static getStyle(el,attr){
         return parseFloat(getComputedStyle(el)[attr])
    }
    static setStyle(el,attr,val){
        el.style[attr] = val + "px";
    }
    setData(newData){
         this.data = this.data.concat(newData);
    }
    clearData(){
     this.data.length = 0;
    }
    include({x,y}){
         return !!this.data.find(item=>(item.x==x&&item.y==y));
    }
    render(){
         this.el.innerHTML =  this.data.map(item=>{
             return `<span style="position:absolute;left:${item.x*this.rect}px;top:${item.y*this.rect}px;width:${this.rect}px;height:${this.rect}px;background:${item.color};"></span>`
         }).join("");
    }
 }