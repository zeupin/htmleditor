/**
 * htmleditor  -- A Tiny HTML Editor based on jquery.
 * Copyright (c) Zeupin LLC. (http://zeupin.com)
 *
 * Licensed under The MIT License.
 * Redistributions of files MUST retain the above copyright notice.
 */

(function ($) {
  $.fn.htmleditor = function(options) {
    // 默认设置
    var defaults = {
    };

    // 最终设置
    var settings = $.extend(defaults, options);

    // 对选择集的每个元素依次处理
    return this.each(function(idx, ele){
      console.log(ele.outerHTML);
    });
  };
})(jQuery);