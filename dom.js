;(function (window) {
  var u = {};

  /**
   * 获取元素某种样式属性的值
   *
   * @param {*} el 元素
   * @param {*} prop 样式属性
   * @returns
   */
  u.getStyle = function (el, prop) {
    var win = el.ownerDocument.defaultView;
    return win.getComputedStyle(el, null)[prop];
  };

  /**
   * 为元素添加某个样式名
   *
   * @param {*} el 元素
   * @param {*} name 样式名
   */
  u.addClass = function (el, name) {
    el.classList.add(name);
  };

  /**
   * 移除元素的某个样式名
   *
   * @param {*} el 元素
   * @param {*} name 样式名
   */
  u.removeClass = function (el, name) {
    el.classList.remove(name);
  };

  /**
   * 切换元素的某个样式名
   *
   * @param {*} el 元素
   * @param {*} name 样式名
   */
  u.toggleClass = function name(el, name) {
    el.classList.toggle(name);
  };

  /**
   * 判断元素是否含有某个样式名
   *
   * @param {*} el 元素
   * @param {*} name 样式名
   * @returns
   */
  u.isContainClass = function (el, name) {
    return el.classList.contains(name);
  };

  /**
   * 获取滚动条滚动高度
   *
   */
  u.getScrollTop = function () {
    var top = document.documentElement
      ? document.documentElement.scrollTop
      : document.body.scrollTop;
    return top;
  };

  /**
   * 移除某个元素
   *
   * @param {*} el 元素
   */
  u.removeEl = function (el) {
    el.parentNode.removeChild(el);
  };

  /**
   * 获取元素内的文本字符串
   *
   * @param {*} el 元素
   */
  u.getText = function (el) {
    return el.textContent;
  };

  /**
   * 设置元素内的文本字符串
   *
   * @param {*} el 元素
   * @param {*} text 文本字符串
   */
  u.setText = function (el, text) {
    el.textContent = text;
  };

  /**
   * 获取元素内的元素节点
   *
   * @param {*} el 元素
   * @returns
   */
  u.getHtml = function (el) {
    return el.innerHTML;
  };

  /**
   * 将元素字符串插入到元素里
   *
   * @param {*} el 元素
   * @param {*} string 元素字符串
   */
  u.setHtml = function (el, string) {
    el.innerHTML = string;
  };

  /**
   * 文档加载完成
   *
   * @param {*} callback 回调函数
   */
  u.documentReady = function (callback) {
    if (document.readyState !== 'loading') {
      callback();
    } else {
      document.addEventListener('DOMContentLoaded', callback);
    }
  }


  window.dom = u;
})(window);