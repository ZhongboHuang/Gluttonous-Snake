// 创建小蛇对象
function Snake(width, height, direction) {
    this.width = width;
    this.height = height;
    this.direction = direction || "right";
    this.body = [
        {x:3, y:2, color:"red"},
        {x:2, y:2, color:"orange"},
        {x:1, y:2, color:"orange"}
    ]
}
var snakeElements = [];
Snake.prototype.init = function(map) {
    remove(snakeElements);
    for(var i=this.body.length-1; i>-1; i--) {
        var div = document.createElement("div");
        div.style.width = this.width + "px";
        div.style.height = this.height + "px";
        div.style.position = "absolute";
        div.style.backgroundColor = this.body[i]["color"];
        div.style.left = this.body[i]["x"] * this.width + "px";
        div.style.top = this.body[i]["y"] * this.height + "px";
        map.appendChild(div);
        snakeElements.push(div);
    }
}
Snake.prototype.move = function(food, map) {
    var that = this;
    for(var i=this.body.length-1; i>0; i--) {
        this.body[i]["x"] = this.body[i-1]["x"];
        this.body[i]["y"] = this.body[i-1]["y"];
    }
    switch(this.direction) {
        case "right":
            this.body[0]["x"]++;
            break;
        case "left":
            this.body[0]["x"]--;
            break;
        case "bottom":
            this.body[0]["y"]++;
            break;
        case "top":
            this.body[0]["y"]--;
            break;
        default:
            console.log("没有有效的方向");
    }
    document.addEventListener("keydown", function(e) {
        switch (e.keyCode) {
            case 37:
                that.direction = "left";
                break;
            case 38:
                that.direction = "top";
                break;
            case 39:
                that.direction = "right";
                break;
            case 40:
                that.direction = "bottom";
                break;
        }
    }.bind(that), false);
    var headX = this.body[0]["x"] * this.width;
    var headY = this.body[0]["y"] * this.height;
    if(headX == food.x && headY == food.y) {
        var last = this.body[this.body.length-1];
        this.body.push({
            x:last.x,
            y:last.y,
            color:last.color
        });
        food.init(map)
    }
}