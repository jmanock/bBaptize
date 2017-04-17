(function() {
  'use strict';

  var globals = typeof global === 'undefined' ? self : global;
  if (typeof globals.require === 'function') return;

  var modules = {};
  var cache = {};
  var aliases = {};
  var has = {}.hasOwnProperty;

  var expRe = /^\.\.?(\/|$)/;
  var expand = function(root, name) {
    var results = [], part;
    var parts = (expRe.test(name) ? root + '/' + name : name).split('/');
    for (var i = 0, length = parts.length; i < length; i++) {
      part = parts[i];
      if (part === '..') {
        results.pop();
      } else if (part !== '.' && part !== '') {
        results.push(part);
      }
    }
    return results.join('/');
  };

  var dirname = function(path) {
    return path.split('/').slice(0, -1).join('/');
  };

  var localRequire = function(path) {
    return function expanded(name) {
      var absolute = expand(dirname(path), name);
      return globals.require(absolute, path);
    };
  };

  var initModule = function(name, definition) {
    var hot = hmr && hmr.createHot(name);
    var module = {id: name, exports: {}, hot: hot};
    cache[name] = module;
    definition(module.exports, localRequire(name), module);
    return module.exports;
  };

  var expandAlias = function(name) {
    return aliases[name] ? expandAlias(aliases[name]) : name;
  };

  var _resolve = function(name, dep) {
    return expandAlias(expand(dirname(name), dep));
  };

  var require = function(name, loaderPath) {
    if (loaderPath == null) loaderPath = '/';
    var path = expandAlias(name);

    if (has.call(cache, path)) return cache[path].exports;
    if (has.call(modules, path)) return initModule(path, modules[path]);

    throw new Error("Cannot find module '" + name + "' from '" + loaderPath + "'");
  };

  require.alias = function(from, to) {
    aliases[to] = from;
  };

  var extRe = /\.[^.\/]+$/;
  var indexRe = /\/index(\.[^\/]+)?$/;
  var addExtensions = function(bundle) {
    if (extRe.test(bundle)) {
      var alias = bundle.replace(extRe, '');
      if (!has.call(aliases, alias) || aliases[alias].replace(extRe, '') === alias + '/index') {
        aliases[alias] = bundle;
      }
    }

    if (indexRe.test(bundle)) {
      var iAlias = bundle.replace(indexRe, '');
      if (!has.call(aliases, iAlias)) {
        aliases[iAlias] = bundle;
      }
    }
  };

  require.register = require.define = function(bundle, fn) {
    if (bundle && typeof bundle === 'object') {
      for (var key in bundle) {
        if (has.call(bundle, key)) {
          require.register(key, bundle[key]);
        }
      }
    } else {
      modules[bundle] = fn;
      delete cache[bundle];
      addExtensions(bundle);
    }
  };

  require.list = function() {
    var list = [];
    for (var item in modules) {
      if (has.call(modules, item)) {
        list.push(item);
      }
    }
    return list;
  };

  var hmr = globals._hmr && new globals._hmr(_resolve, require, modules, cache);
  require._cache = cache;
  require.hmr = hmr && hmr.wrap;
  require.brunch = true;
  globals.require = require;
})();

(function() {
var global = typeof window === 'undefined' ? this : window;
var __makeRelativeRequire = function(require, mappings, pref) {
  var none = {};
  var tryReq = function(name, pref) {
    var val;
    try {
      val = require(pref + '/node_modules/' + name);
      return val;
    } catch (e) {
      if (e.toString().indexOf('Cannot find module') === -1) {
        throw e;
      }

      if (pref.indexOf('node_modules') !== -1) {
        var s = pref.split('/');
        var i = s.lastIndexOf('node_modules');
        var newPref = s.slice(0, i).join('/');
        return tryReq(name, newPref);
      }
    }
    return none;
  };
  return function(name) {
    if (name in mappings) name = mappings[name];
    if (!name) return;
    if (name[0] !== '.' && pref) {
      var val = tryReq(name, pref);
      if (val !== none) return val;
    }
    return require(name);
  }
};
require.register("initialize.js", function(exports, require, module) {
document.addEventListener('DOMContentLoaded', function() {
  $('.video').hide();
  $('.mDots').hide();

  $('.pictures').on('click', function(){
    $('.slideshow-container').show();
    $('.pDots').show();
    $('.video').hide();
    $('.mDots').hide();
  });// End `Pictures`

  $('.movies').on('click', function(){
    $('.slideshow-container').hide();
    $('.pDots').hide();
    $('.video').show();
    $('.mDots').show();
    showSlides(slideIndex,'v');
  });// End `Moives`

  $('.dot').on('click', function(){
    var n = $(this).attr('target');
    currentSlide(n,'p');
  });// End `Dot`

  $('.vDot').on('click', function(){
    var n = $(this).attr('target');
    currentSlide(n,'v');
  });

  $('.mNext').on('click', function(){
    plusSlides(1,'v');
  });// End `mNext`

  $('.mPrev').on('click', function(){
    plusSlides(-1,'v');
  });// End `mPrev`

  $('.next').on('click', function(){
    plusSlides(1,'p');
  });// End `Next`

  $('.prev').on('click', function(){
    plusSlides(-1,'p');
  });// End `Prev`

  var slideIndex = 1;
  showSlides(slideIndex,'p');
  function plusSlides(n,x){
    showSlides(slideIndex += n, x);
  }
  function currentSlide(n,x){
    showSlides(slideIndex = n,x);
  }
  function showSlides(n,x){
    if(x === 'v'){
      var slides = $('.myVslides');
      var dots = $('.vDot');
    }else{
      var slides = $('.mySlides');
      var dots = $('.dot');
    }
    var i = 0;
    if(n > slides.length){
      slideIndex = 1;
    }
    if(n < 1){
      slideIndex = slides.length;
    }
    for(i = 0; i<slides.length; i++){
      slides[i].style.display = 'none';
    }
    for(i = 0; i<dots.length; i++){
      dots[i].className = dots[i].className.replace(' active', '');
    }
    slides[slideIndex -1].style.display = 'block';
    dots[slideIndex -1].className += ' active';
  }
  /*
    ~ Add header/ footer
    ~ Change color of buttons
    ~ Add more pics and videos
    ~ Either change background color or dots color
    ~ Add captions
  */
});

});

require.register("___globals___", function(exports, require, module) {
  
});})();require('___globals___');

