;(function (window) {
  var u = {};

  /**
   * 判断值是否为数组
   *
   * @param {*} value 值
   * @returns
   */
  u.isArray = function (value) {
    return Array.isArray(value);
  };

  /**
   * 判断值是否为数字
   *
   * @param {*} value
   */
  u.isNumber = function (value) {
    return !isNaN(parseFloat(value)) && isFinite(value);
  };

  /**
   * 判断值是否为函数
   *
   * @param {*} value
   * @returns
   */
  u.isFunction = function (value) {
    if (typeof value === 'function') {
      return true;
    }
    var type = Object.prototype.toString(value);
    return type === '[object Function]' || type === '[object GeneratorFunction]';
  };

  /**
   * 判断值是否为空对象
   *
   * @param {*} value
   * @returns
   */
  u.isEmptyObject = function (value) {
    return Object.keys(value).length === 0;
  }

  

  window.type = u;
})(window);