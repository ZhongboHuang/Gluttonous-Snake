// 创建游戏对象
function Game(map, food, snake) {
    this.map = map;
    this.food = food;
    this.snake = snake;
}
Game.prototype.init = function() {
    var that = this;
    this.food.init(this.map);
    this.snake.init(this.map);
    var timeId = setInterval(function() {
        that.snake.move(that.food, that.map);
        that.snake.init(that.map);
        var maxX = that.map.offsetWidth/that.snake.width;
        var maxY = that.map.offsetHeight/that.snake.height;
        var headX = that.snake.body[0]["x"];
        var headY = that.snake.body[0]["y"];
        if(headX < 0 || headX >= maxX) {
            clearInterval(timeId);
            alert("游戏结束");
        }
        if(headY < 0 || headY >= maxY) {
            clearInterval(timeId);
            alert("游戏结束");
        }
        
    }.bind(that), 150);
}