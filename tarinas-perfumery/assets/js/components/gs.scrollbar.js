/*========================================================
  Theme Name: Gravity
  Description: Gravity - Multi-Purpose HTML Template
  Author: G-Projects
  Author URI: https://www.templatemonster.com/authors/gworld
  Script: GSScrollBar Component
  Version: 2.5
========================================================*/

;(function ($) {
    'use strict';
    // ScrollBar Function
    $.GSCore.components.GSScrollBar = {
        // Base Configuration
        _baseConfig: {
            scrollInertia: 150,
            theme: 'minimal-dark'
        },
        // Page Collection
        _pageCollection: $(),
        // Init Function
        init: function (collection, config) {
            if (!collection || !collection.length) {
                return;
            }
            var self = this;
            config = config && $.isPlainObject(config) ? $.extend(true, {}, config, this._baseConfig) : this._baseConfig;
            return collection.each(function (i, el) {
                var $this = $(el),
                    scrollBar,
                    scrollBarThumb,
                    itemConfig = $.extend(true, {}, config, $this.data());
                $this.mCustomScrollbar(itemConfig);
                scrollBar = $this.find('.mCSB_scrollTools');
                scrollBarThumb = $this.find('.mCSB_dragger_bar');
                if (scrollBar.length && $this.data('scroll-classes')) {
                    scrollBar.addClass($this.data('scroll-classes'));
                }
                if (scrollBarThumb.length && $this.data('scroll-thumb-classes')) {
                    scrollBarThumb.addClass($this.data('scroll-thumb-classes'));
                }
                self._pageCollection = self._pageCollection.add($this);
            });
        },
        // Destroy Function
        destroy: function (collection) {
            if (!collection && !collection.length) {
                return $();
            }
            var _self = this;
            return collection.each(function (i, el) {
                var $this = $(el);
                $this.mCustomScrollbar('destroy');
                _self._pageCollection = _self._pageCollection.not($this);
            });
        }
    };
})(jQuery);
