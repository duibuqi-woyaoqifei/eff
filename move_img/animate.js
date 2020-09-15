// animate(对象,目标偏移值,回调函数)
function animate(obj, target, callback) {

    // 先清除之前的定时器
    clearInterval(obj.timer);

    obj.timer = setInterval(move, 10);
    function move() {

        // 步长
        var step = (target - obj.offsetLeft) / 10;

        // 判断步长是正数还是负数，并转换为远离0的整数
        step = step > 0 ? Math.ceil(step) : Math.floor(step);

        if (obj.offsetLeft == target) {

            // 停止定时器
            clearInterval(obj.timer);

            // 回调函数
            if (callback) {
                callback();
            }
        }
        else {

            // 更改对象的偏移值
            obj.style.left = obj.offsetLeft + step + 'px';
        }
    }
}