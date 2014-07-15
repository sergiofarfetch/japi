/**
 * @project FFAPI
 * @author Farfetch <micmath@gmail.com>
 * @module ffbrowser
 * @class ffbrowser-1.0.0.js
 * @folder essentials/
 */



/**
This module contains browser detection that is used for CSS rules and JavaScript specific behaviors
Browser JavaScript file. Native Javascript Browser and OS detection that adds classes to the HTML element<br>
* // This script sets OSName variable as follows:
* // "win"        for all versions of Windows
* // "mac"        for all versions of Macintosh OS
* // "linux"      for all versions of Linux
* // "unix"       for all other UNIX flavors
* // "ipad"       for all ipad
* // "ipod"       for all ipods
* // "iphone"     for all iphones
* // "android"    for all Android
* // "unknown-os" indicates failure to detect the OS
* // "mobile-device" if it is ipad, ipod, iphone or android<br>
This script will add classes to the html element
document.documentElement.className += " " +ffbrowser.browserName+" " +ffbrowser.browserClass+" "+ffbrowser.os+" "+ffbrowser.isMobile;
* // Generates classes like: <b>lt-ie10 lt-ie9 lt-ie8 ie10 gt-ie10 msie chrome opera</b>

*/

/*jslint browser: true*/



/**
* ffbrowser - the farfetch browser variable. This is the only place that is used
* <br><b><i>ffbrowser = {};<br /></i></b>
* @property ffbrowser
* @type Object
*/



var ffbrowser = {};
    /**
    * ffbrowser.nVer - browser version.
    * <br><b><i>ffbrowser.nVer=navigator.appVersion;<br /></i></b>
    * @property ffbrowser.nVer
    * @type String
    */
    ffbrowser.nVer = navigator.appVersion;
    /**
    * ffbrowser.nAgt - the browser user agent .
    * <br><b><i>ffbrowser.nAgt = navigator.userAgent;<br /></i></b>
    * @property ffbrowser.nAgt
    * @type String
    */
    ffbrowser.nAgt = navigator.userAgent;
    /**
    * ffbrowser.browserName - the browser Name .
    * <br><b><i>ffbrowser.browserName = navigator.appName;<br /></i></b>
    * @property ffbrowser.browserName
    * @type String
    */
    ffbrowser.browserName = navigator.appName;
    /**
    * ffbrowser.browserClass - the browsers Class to add - it will add something like chrome, or firefox .
    * <br><b><i>ffbrowser.browserClass = '';<br /></i></b>
    * @property ffbrowser.browserClass
    * @type String
    */
    ffbrowser.browserClass = '';
    /**
    * ffbrowser.fullVersion - the browsers full version .
    * <b><i>ffbrowser.fullVersion = ''+parseFloat(navigator.appVersion);<br /></i></b>
    * @property ffbrowser.fullVersion
    * @type String
    */
    ffbrowser.fullVersion = parseFloat(navigator.appVersion);
    /**
    * ffbrowser.majorVersion - the browser main version, it will be a Number like 31, or 21.
    * <br><b><i>ffbrowser.majorVersion= parseInt(navigator.appVersion,10);<br /></i></b>
    * @property ffbrowser.majorVersion
    * @type String
    */
    ffbrowser.majorVersion= parseInt(navigator.appVersion,10);
    /**
    * ffbrowser.nameOffset - the browser complete name.
    * <br><b><i>ffbrowser.nameOffset = '';<br /></i></b>
    * @property ffbrowser.nameOffset
    * @type String
    */
    ffbrowser.nameOffset = '';
    /**
    * ffbrowser.verOffset - the browser version name.
    * <br><b><i>ffbrowser.verOffset = '';<br /></i></b>
    * @property ffbrowser.verOffset
    * @type String
    */
    ffbrowser.verOffset = '';
    /**
    * ffbrowser.ix - the browser main version.
    * <br><b><i>ffbrowser.ix = '';<br /></i></b>
    * @property ffbrowser.ix
    * @type String
    */
    ffbrowser.ix = '';
    /**
    * ffbrowser.isIE8 - if the browser is IE8 this variable will be true.
    * <br><b><i>ffbrowser.isIE8 = false;<br /></i></b>
    * @property ffbrowser.isIE8
    * @type String
    */
    ffbrowser.isIE8 = false;
    /**
    * ffbrowser.os - the client operating system. If unknown adds the class unknown-os, if Windown adds win class, if Linux adds linux class, if Macintosh adds class mac
    * <br><b><i>ffbrowser.os = 'unknown-os';<br /></i></b>
    * @property ffbrowser.os
    * @type String
    */
    ffbrowser.os = 'unknown-os';
    /**
    * ffbrowser.isMobile - if the client is on a mobile device it will add the class mobile-device, if not adds the class no-mobile-device.
    * <br><b><i>ffbrowser.isMobile = 'no-mobile-device';<br /></i></b>
    * @property ffbrowser.isMobile
    * @type String
    */
    ffbrowser.isMobile = 'no-mobile-device';

//GET THE OS
if (navigator.appVersion.indexOf('Win')!==-1) {ffbrowser.os='win';}
if (navigator.appVersion.indexOf('Mac')!==-1) {ffbrowser.os='mac';}
if (navigator.appVersion.indexOf('X11')!==-1) {ffbrowser.os='unix';}
if (navigator.appVersion.indexOf('Linux')!==-1) {ffbrowser.os='linux';}
if (navigator.userAgent.match(/iPad/i) !== null) {ffbrowser.os='ipad';}
if (navigator.userAgent.match(/iPod/i) !== null) {ffbrowser.os='ipod';}
if (navigator.userAgent.match(/iPhone/i) !== null) {ffbrowser.os='iphone';}
if (navigator.userAgent.match(/Android/i) !== null) {ffbrowser.os='android';}

//Check if is mobile os
if(ffbrowser.os==='ipad' || ffbrowser.os==='ipod' || ffbrowser.os==='iphone' || ffbrowser.os==='android'){
  ffbrowser.isMobile = 'mobile-device';
}

// In Opera, the true version is after 'Opera' or after 'Version'

if (ffbrowser.nAgt.indexOf('Opera')!==-1) {
 ffbrowser.verOffset=ffbrowser.nAgt.indexOf('Opera');
 ffbrowser.browserName = 'opera';
 ffbrowser.fullVersion = ffbrowser.nAgt.substring(ffbrowser.verOffset+6);
 
 if (ffbrowser.nAgt.indexOf('Version')!==-1){
   ffbrowser.verOffset=ffbrowser.nAgt.indexOf('Version');
   ffbrowser.fullVersion = ffbrowser.nAgt.substring(ffbrowser.verOffset+8);
   }
}

// In MSIE, the true version is after 'MSIE' in userAgent
else if (ffbrowser.nAgt.indexOf('MSIE')!==-1) {
 ffbrowser.verOffset=ffbrowser.nAgt.indexOf('MSIE');
 ffbrowser.browserName = 'msie';
 ffbrowser.fullVersion = ffbrowser.nAgt.substring(ffbrowser.verOffset+5);
}

//
else if (ffbrowser.nAgt.indexOf('Trident')!==-1) {
 ffbrowser.verOffset=ffbrowser.nAgt.indexOf('Trident');
 ffbrowser.browserName = 'msie';
 ffbrowser.fullVersion = ffbrowser.nAgt.substring(ffbrowser.verOffset+5);
 ffbrowser.majorVersion = 11;
}

// In Chrome, the true version is after 'Chrome'
else if (ffbrowser.nAgt.indexOf('Chrome')!==-1) {
 ffbrowser.verOffset=ffbrowser.nAgt.indexOf('Chrome');
 ffbrowser.browserName = 'chrome';
 ffbrowser.fullVersion = ffbrowser.nAgt.substring(ffbrowser.verOffset+7);
}

// In Safari, the true version is after 'Safari' or after 'Version'
else if (ffbrowser.nAgt.indexOf('Safari')!==-1) {
 ffbrowser.verOffset=ffbrowser.nAgt.indexOf('Safari');
 ffbrowser.browserName = 'safari';
 ffbrowser.fullVersion = ffbrowser.nAgt.substring(ffbrowser.verOffset+7);
 if (ffbrowser.nAgt.indexOf('Version')!==-1){
    ffbrowser.verOffset=ffbrowser.nAgt.indexOf('Version');
    ffbrowser.fullVersion = ffbrowser.nAgt.substring(ffbrowser.verOffset+8);
   }
}

// In Firefox, the true version is after 'Firefox'
else if (ffbrowser.nAgt.indexOf('Firefox')!==-1) {
 ffbrowser.verOffset=ffbrowser.nAgt.indexOf('Firefox');
 ffbrowser.browserName = 'firefox';
 ffbrowser.fullVersion = ffbrowser.nAgt.substring(ffbrowser.verOffset+8);
}

// In most other browsers, 'name/version' is at the end of userAgent
else if ((ffbrowser.nAgt.lastIndexOf(' ')+1) < ffbrowser.nAgt.lastIndexOf('/'))
{
 ffbrowser.verOffset = ffbrowser.nAgt.lastIndexOf('/');
 ffbrowser.nameOffset = (ffbrowser.nAgt.lastIndexOf(' ')+1);
 ffbrowser.browserName = ffbrowser.nAgt.substring(ffbrowser.nameOffset ,ffbrowser.verOffset);
 ffbrowser.fullVersion = ffbrowser.nAgt.substring(ffbrowser.verOffset+1);
 if (ffbrowser.browserName.toLowerCase()===ffbrowser.browserName.toUpperCase()) {
  ffbrowser.browserName = navigator.appName;
 }
}

// trim the ffbrowser.fullVersion string at semicolon/space if present
if (ffbrowser.fullVersion.indexOf(';')!==-1){
   ffbrowser.ix=ffbrowser.fullVersion.indexOf(';');
   ffbrowser.fullVersion=ffbrowser.fullVersion.substring(0,ffbrowser.ix);
}
if (ffbrowser.fullVersion.indexOf(' ')!==-1){
    ffbrowser.ix=ffbrowser.fullVersion.indexOf(' ');
    ffbrowser.fullVersion=ffbrowser.fullVersion.substring(0,ffbrowser.ix);
}

ffbrowser.majorVersion = parseInt(ffbrowser.fullVersion,10);

if (isNaN(ffbrowser.majorVersion)) {
 ffbrowser.fullVersion  = parseFloat(navigator.appVersion);
 ffbrowser.majorVersion = parseInt(navigator.appVersion,10);
}

//If the browser is IE we add some special classes like HTML5 boilerplate does
if(ffbrowser.browserName === 'msie'){
  ffbrowser.browserClass = 'msie';
  if(ffbrowser.majorVersion===7){
    ffbrowser.browserClass='lt-ie10 lt-ie9 lt-ie8';
  }else{
    if(ffbrowser.majorVersion===8){
       ffbrowser.isIE8 = true;
       ffbrowser.browserClass='lt-ie10 lt-ie9';
    }else{
      if(ffbrowser.majorVersion===9){
       ffbrowser.browserClass='lt-ie10';
      }else{
        if(ffbrowser.majorVersion===10){
          ffbrowser.browserClass='ie10';
        }else{
          ffbrowser.browserClass='gt-ie10';
        }
      }
    }
  }
}else{
   ffbrowser.browserClass = ffbrowser.browserName+ffbrowser.majorVersion;
}

//And we add those classes to the HTML element
document.documentElement.className += ' ' +ffbrowser.browserName+' ' +ffbrowser.browserClass+' '+ffbrowser.os+' '+ffbrowser.isMobile;