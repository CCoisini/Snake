export default class Snake {
    constructor(){
        this.data = [
            {x: 6, y: 4, color: "green"},
            {x: 5, y: 4, color: "white"},
            {x: 4, y: 4, color: "white"},
            {x: 3, y: 4, color: "white"},
            {x: 2, y: 4, color: "white"}
        ];
        this.direction = "right";
    }
    move(){
        let i = this.data.length-1;
        this.lastData = {
            x: this.data[i].x,
            y: this.data[i].y,
            color: this.data[i].color
        }
        /*让后边每一格走到前一格的位置上*/
        for(i; i > 0; i--){
            this.data[i].x = this.data[i-1].x;
            this.data[i].y = this.data[i-1].y;
        }

        // 根据方向移动蛇头
        switch(this.direction){
            case "left":
                this.data[0].x--;
                break;
            case "right":
                this.data[0].x++;
                break;
            case "top":
                this.data[0].y--;
                break;
            case "bottom":
                this.data[0].y++;
                break;             
        }
    }
    changeDir(dir){
        // 如果蛇本身现在在左右移动，我们只能修改让蛇上下移动
        if(this.direction === "left"||this.direction === "right"){
            if(dir==="left"||dir==="right"){
                return false; // 不能修改方向
            }
        } else {
            if(dir==="top"||dir==="bottom"){
                return false; // 不能修改方向
            }
        }
        this.direction = dir;
        return true;
        // 如果蛇正在上下移动，我们只能修改让蛇左右移动
    }
    // 吃到了食物蛇应该变大了
    eatFood(){
        this.data.push(this.lastData);
    }
}