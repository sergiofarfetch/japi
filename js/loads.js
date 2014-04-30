require.config({
    paths: {
        'jquery'        : 'jquery-2.1.0',
        'core'          : 'req/core',
        'autocomplete'  : 'req/typeahead.bundle',
        'googleJson'    : 'api/googleJson',
        'charts'        : 'plu/Chart.min',
        'd3'            : 'plu/graph/d3.v3',
        'nvd3'          : 'plu/graph/nv.d3'
        //http://nvd3.org/livecode/index.html#codemirrorNav
    },
    shim: {
        d3: { exports: 'd3' },
        nvd3: {
          exports: 'nv',
          deps: ['d3']
        },
        'googleJson': {
          deps: ['d3','nvd3','jquery','core'],
          exports: 'GoogleJson'  //attaches "GoogkeJson" to the window object
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


require(['d3'], function () {
    require(['nvd3'],function() {
        require(['googleJson'],function($) {
            z.m.debug('Loaded googleJson - require(["googleJson"])');

        });
    });
});

