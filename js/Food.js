// 创建食物对象
function Food(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
    this.x = 0;
    this.y = 0;
}
// 食物初始化方法
var foodElements = [];
Food.prototype.init = function(map) {
    remove(foodElements);
    var div = document.createElement("div")
    div.style.width = this.width + "px";
    div.style.height = this.height + "px";
    div.style.backgroundColor = this.color;
    div.style.position = "absolute";
    this.render(map);
    div.style.left = this.x + "px";
    div.style.top = this.y + "px";
    map.appendChild(div);
    foodElements.push(div);
    // console.log(elements);
}
Food.prototype.render = function(map) {
    this.x = rm.getRandom(0, map.offsetWidth/this.width)*this.width;
    this.y = rm.getRandom(0, map.offsetHeight/this.height)*this.height;
}
function remove(ele) {
    for(var i=ele.length-1; i>-1; i--) {
        ele[i].parentNode.removeChild(ele[i]);
        ele.splice(i,1);
    }
}
// 创建随机数对象
function Random() {}
Random.prototype.getRandom = function(min, max) {
    return Math.floor(Math.random() * (max-min) + min);
}
var rm = new Random();
