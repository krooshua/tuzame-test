(function () {
	'use strict';

	/* @ngInject */
    angular.module('app').directive('fallbackSrc', fallbackSrc);
    
    function fallbackSrc() {
        return {
            link: function (scope, element, attrs) {
                element.bind('error', function () {
                    if (attrs.src != attrs.onErrorSrc) {
                        attrs.$set('src', attrs.fallbackSrc);
                    }
                });
            }
        };
    };

})();