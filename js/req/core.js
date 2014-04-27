try {
    // Initial declaration of the z
    var z = z || {};
    //Define methods | variable
    z.m = z.m || {};
    z.v = z.v || {};

    z.v.steps = 0;
    z.v.debugMode = true;


    z.m.debug = function(msg){
        if(z.v.debugMode===true){
            z.v.steps++;
            console.log(z.v.steps + " - "+msg);
        }
        return;
    }
    /**
    * This functions makes the document.getElementsByClassName to work on IE8. This is a crucial fast performance enhancement. It uses the querySelectorAll method that is slower but works on IE8.
    * @method document.getElementsByClassName
    */
    if(!document.getElementsByClassName) {
        document.getElementsByClassName = function(className) {
            return this.querySelectorAll("." + className);
        };
        Element.prototype.getElementsByClassName = document.getElementsByClassName;
    }


    /**
    * Function that helps the inputs to show better info for the user
    * @method z.m.placeHolder
    */
    z.m.placeHolder = function(){
        z.m.debug('Placeholder Function Started - z.m.placeholder()');
        /// Only if placeholder is supported
        if (Modernizr.input.placeholder) {
            z.m.debug('All inputs captured '+document.getElementsByTagName('input'));///[0].getAttribute("target");
          [].forEach.call(document.getElementsByTagName('input'), function(el) {
            var placeHolder = el.getAttribute('placeholder');
            if(placeHolder!=='undefined'){    
                z.m.debug('Placeholder is defined');
                el.setAttribute('data-placeholder',placeHolder);
                z.m.debug('Input Focus Placeholder is defined');
                el.addEventListener('focus', function(e){
                    el.setAttribute('placeholder', el.getAttribute('data-helper'));
                },true);
                z.m.debug('Input Blur Placeholder is defined');
                el.addEventListener('blur', function(e){
                    el.setAttribute('placeholder', el.getAttribute('data-placeholder'));
                },true);
              }
            });
        } 
    };

    /**
    * Function that initializes the the core file
    * @method z.m.placeHolder
    */
    z.m.init = function(){
        z.m.debug('Init Function Started - z.m.init()');
        z.m.placeHolder();

    };


} catch (e) {
    try {
        if (window.debug) {
            console.log(e)
        }
    } catch (ex) {
    }
};
