// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());


(function($) {
    			$.fn.countTo = function(options) {
        			// merge the default plugin settings with the custom options
       			 options = $.extend({}, $.fn.countTo.defaults, options || {});

       			 // how many times to update the value, and how much to increment the value on each update
       			 var loops = Math.ceil(options.speed / options.refreshInterval),
        			    increment = (options.to - options.from) / loops;

     			   return $(this).each(function() {
       			     var _this = this,
          			      loopCount = 0,
                		  value = options.from,
                          interval = setInterval(updateTimer, options.refreshInterval);

           		  function updateTimer() {
           			      value += increment;
          			      loopCount++;
              				  $(_this).html(value.toFixed(options.decimals));
	
           	  		   if (typeof(options.onUpdate) == 'function') {
             	       options.onUpdate.call(_this, value);
             			   }

             		   if (loopCount >= loops) {
                	    clearInterval(interval);
                   	    value = options.to;

                   	  if (typeof(options.onComplete) == 'function') {
                        options.onComplete.call(_this, value);
                    }
                }
            }
        });
    };

    $.fn.countTo.defaults = {
        from: 0,  // the number the element should start at
        to: 100,  // the number the element should end at
        speed: 20000,  // how long it should take to count between the target numbers
        refreshInterval: 100,  // how often the element should be updated
        decimals: 0,  // the number of decimal places to show
        onUpdate: null,  // callback method for every time the element is updated,
        onComplete: null,  // callback method for when the element finishes updating
    };
})(jQuery);

	jQuery(function($) {
        $('.loader').countTo({
            from: 0,
            to: 100,
            speed: 20000,
            refreshInterval: 100,
            onComplete: function(value) {
                console.debug(this);
            }
        });
    });

// Place any jQuery/helper plugins in here.
