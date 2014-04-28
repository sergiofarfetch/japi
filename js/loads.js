require.config({
    paths: {
        'jquery'        : 'jquery-2.1.0',
        'core'          : 'req/core',
        'autocomplete'  : 'req/typeahead.bundle',
        'googleJson'    : 'api/googleJson',
        'charts'        : 'plu/Chart.min'
    },
    shim: {
        'core': {
          deps: ['jquery'],
          exports: 'Core'  //attaches "Backbone" to the window object
        },
        'googleJson': {
          deps: ['jquery','core','charts'],
          exports: 'GoogleJson'  //attaches "Backbone" to the window object
        }
    }

});

require(['core'],function() {
    z.m.debug('Loaded Core - require(["core"])');
    z.m.init();
    //This function will be called when all the dependencies
    //listed above are loaded. Note that this function could
    //be called before the page is loaded.
    //This callback is optional.
});



define(['googleJson'],function($) {
    z.m.debug('Loaded googleJson - require(["googleJson"])');

});

