;(function (window) {
  var u = {};

  /**
   * 判断值是否在数组内
   *
   * @param {*} array 数组
   * @param {*} value 值
   */
  u.isContain = function (array, value) {
    return array.indexOf(value) != -1;
  };

  /**
   * 数组去重
   *
   * @param {*} array 数组
   */
  u.unique = function (array) {
    if (Array.hasOwnProperty('from')) {
      return Array.from(new Set(array));
    }
    var r = [], NaNBol = true
    for (var i = 0; i < array.length; i++) {
      if (array[i] !== array[i]) {
        if (NaNBol && r.indexOf(array[i]) === -1) {
          r.push(array[i])
          NaNBol = false
        }
      } else {
        if (r.indexOf(array[i]) === -1) r.push(array[i])
      }
    }
    return r
  };

  window.arr = u;
})(window);