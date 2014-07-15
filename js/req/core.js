/*global require, define, japi, $, ffbrowser, console, Modernizr, document,Element */
/*jslint browser: true*/
/*jslint plusplus: true */


try {
    /**
    * This functions makes the document.getElementsByClassName to work on IE8. This is a crucial fast performance enhancement. It uses the querySelectorAll method that is slower but works on IE8.
    * @method document.getElementsByClassName
    */
    
    if(!document.getElementsByClassName) {
        document.getElementsByClassName = function(className) {
            'use strict';
            return this.querySelectorAll("." + className);
        };
        Element.prototype.getElementsByClassName = document.getElementsByClassName;
    }

    /// Initial declaration of the japi, defined only once
    var japi = {};
    /// Define methods | variable
    japi.methods = {};
    japi.variables = {};

    /// Global variables for debugging
    japi.variables.steps = 0;
    japi.variables.debugMode = true;

    /**
     * If we are 
     * @param  {[type]} msg [description]
     * @return {[type]}     [description]
     */
    japi.methods.debug = function(msg){
        'use strict';
        if(japi.variables.debugMode===true){
            japi.variables.steps++;
            console.log(japi.variables.steps + " - "+msg);
        }
        return;
    };
    
    /**
    * Function that helps the inputs to show better info for the user
    * @method japi.methods.placeHolder
    */
    japi.methods.placeHolder = function(){
        'use strict';
        japi.methods.debug('Placeholder Function Started - japi.methods.placeholder()');
        /// Only if placeholder is supported
        if (Modernizr.input.placeholder) {
            japi.methods.debug('All inputs captured '+document.getElementsByTagName('input'));///[0].getAttribute("target");
          [].forEach.call(document.getElementsByTagName('input'), function(ele) {
            var placeHolder = ele.getAttribute('placeholder');
            if(placeHolder!=='undefined'){    
                japi.methods.debug('Placeholder is defined');
                ele.setAttribute('data-placeholder',placeHolder);
                japi.methods.debug('Input Focus Placeholder is defined');
                if(ele.getAttribute('data-heleper')){
                    ele.addEventListener('focus', function(){
                        ele.setAttribute('placeholder', ele.getAttribute('data-helper'));
                    },true);
                
                    japi.methods.debug('Input Blur Placeholder is defined');
                    ele.addEventListener('blur', function(){
                        ele.setAttribute('placeholder', ele.getAttribute('data-placeholder'));
                    },true);
                }
              }
            });
        } 
    };

    /**
    * Function that initializes the the core file
    * @method japi.methods.placeHolder
    */
    japi.methods.init = function(){
        'use strict';
        japi.methods.debug('Init Function Started - japi.methods.init()');
        japi.methods.placeHolder();
        japi.methods.debug('Get Weather - japi.methods.getWeather()');
        japi.methods.getWeather();
        japi.methods.debug('Weather Form Submit - japi.methods.weatherFormSubmit()');
        japi.methods.weatherFormSubmit();

    };
    japi.variables.icon = [];
    japi.variables.icon['01d'] = 'wi-day-sunny';
    japi.variables.icon['01n'] = 'wi-night-clear';

    japi.variables.yahoo = '7fea1f52bc82ae6ffb2341f9c13a61ad';


    /**
     * [weather description]
     * @type {Array}
     */
    japi.variables.weather = [];
    japi.variables.weatherLocal = document.getElementsByClassName('weather-location');
    japi.variables.weatherDescr = document.getElementsByClassName('weather-description');
    japi.variables.weatherDegrees = document.getElementsByClassName('weather-degrees');
    japi.variables.weatherIcon = document.getElementsByClassName('icon-for-weather');

    japi.variables.weatherCity = 'Porto';
    japi.variables.weatherCityImage = '';
    /**
     * [getWeather description]
     * @return {[type]} [description]
     */
    japi.methods.getWeather = function(){
        'use strict';



         

        var s = new XMLHttpRequest();
        s.open('GET', 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=7fea1f52bc82ae6ffb2341f9c13a61ad&format=json&nojsoncallback=1&text='+japi.variables.weatherCity+'', true);
        s.onreadystatechange = function () {
          if (s.readyState !== 4 || s.status !== 200) {return;}
            var data2 = JSON.parse(s.responseText);
            console.log(data2.photos.photo[0]);

            japi.variables.weatherCityImage = 
            'https://farm'+data2.photos.photo[0].farm+'.staticflickr.com/'+data2.photos.photo[0].server+'/'+data2.photos.photo[0].id+'_'+data2.photos.photo[0].secret+'_b.jpg';

            document.getElementsByClassName('bg')[0].src = japi.variables.weatherCityImage;

            

        };
        s.send();           

        

        var r = new XMLHttpRequest();
        r.open('GET', 'http://api.openweathermap.org/data/2.5/find?q='+japi.variables.weatherCity+'&APPID=4e9c53b0f20ac1daeb60e58ce6a3bfb0', true);
        r.onreadystatechange = function () {
          if (r.readyState !== 4 || r.status !== 200) {return;}
          
          var data = JSON.parse(r.responseText);
          console.log(data);
            japi.variables.weather = data.list[0];
            japi.variables.weatherDescr[0].textContent = japi.variables.weather.weather[0].description;
            japi.variables.weatherLocal[0].textContent = japi.variables.weather.name;
            japi.variables.weatherDegrees[0].textContent = parseInt(japi.variables.weather.main.temp_max-273.15,10)+'°C';

            console.log(japi.variables.weatherIcon[0]);
            console.log(japi.variables.icon);
            console.log(japi.variables.weather.weather[0].icon);

            japi.methods.addClass(japi.variables.weatherIcon[0], japi.variables.icon[japi.variables.weather.weather[0].icon]);
            
            

        };
        r.send();

        
        
    };


    japi.methods.weatherFormSubmitBehavior = function(){
        'use strict';
        var evt = window.event,
            formInput = document.getElementsByClassName('search-input');
        evt.preventDefault();
        japi.variables.weatherCity = formInput[0].value;
        japi.methods.getWeather();
        return false;
    };

    japi.methods.weatherFormSubmit = function(){
        'use strict';
        var ele = document.getElementById('search-form');
        if(ele.addEventListener){
            ele.addEventListener("submit", japi.methods.weatherFormSubmitBehavior, false);  //Cool modern browser!
        }else if(ele.attachEvent){
            ele.attachEvent('onsubmit', japi.methods.weatherFormSubmitBehavior);            //IE needs extra cares.
        }
    };





    /**
 * Generic hasClass function - Detects if element has a certain class
 * @method japi.methods.hasClass
 * @param {Object} ele HTML Object
 * @param {String} cls ClassName to check
 * @return Boolean
 */
japi.methods.hasClass = function (ele, cls) {
    'use strict';
    return ele.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
};


/**
 * Generic adds class function - Adds a certain class from an element
 * @method japi.methods.addClass
 * @param {Object} ele HTML object
 * @param {String} cls ClassName to add
 */
japi.methods.addClass = function (ele, cls) {
    'use strict';
    if (!japi.methods.hasClass(ele, cls)) {
        ele.className += " " + cls;
    }
};

/**
 * Generic remove class function - Removes a certain class from an element
 * @method japi.methods.removeClass
 * @param {Object} ele HTML Object
 * @param {String} cls ClassName to check
 */

japi.methods.removeClass = function (ele, cls) {
    'use strict';
    if (japi.methods.hasClass(ele, cls)) {
        var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
        ele.className = ele.className.replace(reg, ' ');
    }
};


} catch (e) {
    try {
        if (window.debug) {
            console.log(e);
        }
    } catch (ignore) {
    }
}
