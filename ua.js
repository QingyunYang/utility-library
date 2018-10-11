;(function (window) {
  var u = {};

  /**
   * 判断是否为iOS系统
   *
   */
  u.isIos = function () {
    var u = navigator.userAgent;
    return u.indexOf('iPhone') > -1 || u.indexOf('iPad') > -1;
  };

  /**
   * 判断是否为android系统
   *
   * @returns
   */
  u.isAndroid = function () {
    var u = navigator.userAgent;
    return u.indexOf('Android') > -1 || u.indexOf('Adr') > -1;
  }

  /**
   * 判断是否为ie浏览器
   *
   * @returns
   */
  u.isIE = function () {
    return u.indexOf('MSIE') > -1 || u.indexOf('Trident') > -1;
  }

  /**
   * 判断是否在微信浏览器内打开
   *
   */
  u.isWeChat = function () {
    var u = navigator.userAgent;
    return u.indexOf('MicroMessenger') > -1;
  }

  /**
   * 判断是否在UC浏览器内打开
   *
   * @returns
   */
  u.isUC = function () {
    return u.indexOf('UC') > -1 || u.indexOf(' UBrowser') > -1;
  }

  window.ua = u;
})(window);