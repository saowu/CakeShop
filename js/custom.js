window.onscroll = function () {
    scrollFunction()
};

/**
 * 滚动时触发
 */
function scrollFunction() {
    if (document.documentElement.scrollTop > 500)
        document.getElementById("top-icon").style.visibility = "visible";//显示
    else
        document.getElementById("top-icon").style.visibility = "hidden";//隐藏
}

/**
 * 点击按钮，返回顶部
 */
function totop() {
    let requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame
        || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame
        || function (clb) {
            return setTimeout(clb, 1000 / 60);
        };

    let cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame
        || window.webkitCancelAnimationFrame || window.msCancelAnimationFrame
        || function (id) {
            clearTimeout(id);
        };
    let top = document.body.scrollTop || document.documentElement.scrollTop;
    //滚动时长
    let duration = 300; //300ms
    //计算步长
    let step = top / (duration / (1000 / 60)) >> 0; //取整

    function fn() {

        if (top >= 0) {
            top -= step;
            document.documentElement.scrollTop = document.body.scrollTop = top;
            fn.rafTimer = requestAnimationFrame(fn);
        } else {
            document.body.scrollTop = 0;
            cancelAnimationFrame(fn.rafTimer);
        }
    }

    fn.rafTimer = requestAnimationFrame(fn);
}





