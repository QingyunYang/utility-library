;(function (global) {
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

  global.type = u;
})(global);


/**
 * 测试
 */
// var temp = [1, 23, 4];
// console.log(type.isArray(temp));

// console.log(type.isNumber('sss'));
// console.log(type.isNumber(33));
// console.log(type.isFunction(type.isNumber));