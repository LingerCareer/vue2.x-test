;(function (win) {
    var docEl = win.document.documentElement,
        tid;

    function refreshRem() {
        var width = docEl.getBoundingClientRect().width;
        var rem = width / 7.5;//以750px为原稿，除以100可得各元素的rem
        docEl.style.fontSize = rem + "px";
        var actualSize = parseFloat(window.getComputedStyle(docEl)["font-size"]);
        if (actualSize !== rem) {
            var remScaled = rem / (actualSize / rem);
            docEl.style.fontSize = remScaled + "px"
        }
    }

    function dbcRefresh() {
        clearTimeout(tid);
        tid = setTimeout(refreshRem, 100)
    }

    win.addEventListener("resize", function () {
        dbcRefresh()
    }, false);
    win.addEventListener("pageshow", function (e) {
        if (e.persisted) {
            dbcRefresh()
        }
    }, false);
    refreshRem();
})(window);


