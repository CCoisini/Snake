export default class Event { 
    events = {} //事件池:记录所有的相关事件及处理函数
    on(eventName,fn){//添加一个事件处理
        if(!this.events[eventName]){
            this.events[eventName] = [];
        }
        if(!this.events[eventName].includes(fn)){
            this.events[eventName].push(fn);
        }
    }
    off(eventName,fn){ //删除一个事件处理
        if(!this.events[eventName]){
            return ;
        }
        this.events[eventName] = this.events[eventName].filter(item=>item!=fn);
    }
    dispatch(eventName,...arg){ //触发事件
        if(!this.events[eventName]){
            return ;
        }
        this.events[eventName].forEach(item => {
            item.call(this,...arg);
        });
    }
}