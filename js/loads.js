require.config({
    paths: {
        'jquery'        : 'jquery-2.1.0',
        'core'          : 'req/core',
        'autocomplete'  : 'req/typeahead.bundle'
    },
    shim: {
        'core': {
          deps: ['jquery'],
          exports: 'core'  //attaches "Backbone" to the window object
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