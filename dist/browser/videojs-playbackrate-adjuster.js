(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.videojsPlaybackrateAdjuster = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _interopDefault(ex) {
  return ex && (typeof ex === 'undefined' ? 'undefined' : _typeof(ex)) === 'object' && 'default' in ex ? ex['default'] : ex;
}

var videojs = _interopDefault((typeof window !== "undefined" ? window['videojs'] : typeof global !== "undefined" ? global['videojs'] : null));

var createNewRanges = function createNewRanges(timeRanges, playbackRate) {
  var newRanges = [];

  for (var i = 0; i < timeRanges.length; i++) {
    newRanges.push([timeRanges.start(i) / playbackRate, timeRanges.end(i) / playbackRate]);
  }

  return videojs.createTimeRange(newRanges);
};

var playbackrateAdjuster = function playbackrateAdjuster(player) {
  var tech = void 0;

  player.on('ratechange', function () {
    tech.trigger('durationchange');
    tech.trigger('timeupdate');
  });

  return {
    setSource: function setSource(srcObj, next) {
      next(null, srcObj);
    },
    setTech: function setTech(newTech) {
      tech = newTech;
    },
    duration: function duration(dur) {
      return dur / player.playbackRate();
    },
    currentTime: function currentTime(ct) {
      return ct / player.playbackRate();
    },
    setCurrentTime: function setCurrentTime(ct) {
      return ct * player.playbackRate();
    },
    buffered: function buffered(bf) {
      return createNewRanges(bf, player.playbackRate());
    },
    seekable: function seekable(_seekable) {
      return createNewRanges(_seekable, player.playbackRate());
    },
    played: function played(_played) {
      return createNewRanges(_played, player.playbackRate());
    }
  };
};

// Register the plugin with video.js.
videojs.use('*', playbackrateAdjuster);

// Include the version number.
playbackrateAdjuster.VERSION = '1.0.0';

module.exports = playbackrateAdjuster;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}]},{},[1])(1)
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy92aWRlb2pzLXNwZWxsYm9vay9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwic3JjL2pzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztBQ0FBOzs7O0FBRUEsU0FBUyxlQUFULENBQTBCLEVBQTFCLEVBQThCO0FBQUUsU0FBUSxNQUFPLFFBQU8sRUFBUCx5Q0FBTyxFQUFQLE9BQWMsUUFBckIsSUFBa0MsYUFBYSxFQUFoRCxHQUFzRCxHQUFHLFNBQUgsQ0FBdEQsR0FBc0UsRUFBN0U7QUFBa0Y7O0FBRWxILElBQUksVUFBVSxnQkFBZ0IsUUFBUSxVQUFSLENBQWhCLENBQWQ7O0FBRUEsSUFBTSxrQkFBa0IsU0FBbEIsZUFBa0IsQ0FBQyxVQUFELEVBQWEsWUFBYixFQUE4QjtBQUNwRCxNQUFNLFlBQVksRUFBbEI7O0FBRUEsT0FBSyxJQUFJLElBQUksQ0FBYixFQUFnQixJQUFJLFdBQVcsTUFBL0IsRUFBdUMsR0FBdkMsRUFBNEM7QUFDMUMsY0FBVSxJQUFWLENBQWUsQ0FDYixXQUFXLEtBQVgsQ0FBaUIsQ0FBakIsSUFBc0IsWUFEVCxFQUViLFdBQVcsR0FBWCxDQUFlLENBQWYsSUFBb0IsWUFGUCxDQUFmO0FBR0Q7O0FBRUQsU0FBTyxRQUFRLGVBQVIsQ0FBd0IsU0FBeEIsQ0FBUDtBQUNELENBVkQ7O0FBWUEsSUFBTSx1QkFBdUIsU0FBdkIsb0JBQXVCLENBQVMsTUFBVCxFQUFpQjtBQUM1QyxNQUFJLGFBQUo7O0FBRUEsU0FBTyxFQUFQLENBQVUsWUFBVixFQUF3QixZQUFXO0FBQ2pDLFNBQUssT0FBTCxDQUFhLGdCQUFiO0FBQ0EsU0FBSyxPQUFMLENBQWEsWUFBYjtBQUNELEdBSEQ7O0FBS0EsU0FBTztBQUNMLGFBREsscUJBQ0ssTUFETCxFQUNhLElBRGIsRUFDbUI7QUFDdEIsV0FBSyxJQUFMLEVBQVcsTUFBWDtBQUNELEtBSEk7QUFLTCxXQUxLLG1CQUtHLE9BTEgsRUFLWTtBQUNmLGFBQU8sT0FBUDtBQUNELEtBUEk7QUFTTCxZQVRLLG9CQVNJLEdBVEosRUFTUztBQUNaLGFBQU8sTUFBTSxPQUFPLFlBQVAsRUFBYjtBQUNELEtBWEk7QUFhTCxlQWJLLHVCQWFPLEVBYlAsRUFhVztBQUNkLGFBQU8sS0FBSyxPQUFPLFlBQVAsRUFBWjtBQUNELEtBZkk7QUFpQkwsa0JBakJLLDBCQWlCVSxFQWpCVixFQWlCYztBQUNqQixhQUFPLEtBQUssT0FBTyxZQUFQLEVBQVo7QUFDRCxLQW5CSTtBQXFCTCxZQXJCSyxvQkFxQkksRUFyQkosRUFxQlE7QUFDWCxhQUFPLGdCQUFnQixFQUFoQixFQUFvQixPQUFPLFlBQVAsRUFBcEIsQ0FBUDtBQUNELEtBdkJJO0FBeUJMLFlBekJLLG9CQXlCSSxTQXpCSixFQXlCYztBQUNqQixhQUFPLGdCQUFnQixTQUFoQixFQUEwQixPQUFPLFlBQVAsRUFBMUIsQ0FBUDtBQUNELEtBM0JJO0FBNkJMLFVBN0JLLGtCQTZCRSxPQTdCRixFQTZCVTtBQUNiLGFBQU8sZ0JBQWdCLE9BQWhCLEVBQXdCLE9BQU8sWUFBUCxFQUF4QixDQUFQO0FBQ0Q7QUEvQkksR0FBUDtBQWtDRCxDQTFDRDs7QUE0Q0E7QUFDQSxRQUFRLEdBQVIsQ0FBWSxHQUFaLEVBQWlCLG9CQUFqQjs7QUFFQTtBQUNBLHFCQUFxQixPQUFyQixHQUErQixhQUEvQjs7QUFFQSxPQUFPLE9BQVAsR0FBaUIsb0JBQWpCIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gX2ludGVyb3BEZWZhdWx0IChleCkgeyByZXR1cm4gKGV4ICYmICh0eXBlb2YgZXggPT09ICdvYmplY3QnKSAmJiAnZGVmYXVsdCcgaW4gZXgpID8gZXhbJ2RlZmF1bHQnXSA6IGV4OyB9XG5cbnZhciB2aWRlb2pzID0gX2ludGVyb3BEZWZhdWx0KHJlcXVpcmUoJ3ZpZGVvLmpzJykpO1xuXG5jb25zdCBjcmVhdGVOZXdSYW5nZXMgPSAodGltZVJhbmdlcywgcGxheWJhY2tSYXRlKSA9PiB7XG4gIGNvbnN0IG5ld1JhbmdlcyA9IFtdO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdGltZVJhbmdlcy5sZW5ndGg7IGkrKykge1xuICAgIG5ld1Jhbmdlcy5wdXNoKFtcbiAgICAgIHRpbWVSYW5nZXMuc3RhcnQoaSkgLyBwbGF5YmFja1JhdGUsXG4gICAgICB0aW1lUmFuZ2VzLmVuZChpKSAvIHBsYXliYWNrUmF0ZV0pO1xuICB9XG5cbiAgcmV0dXJuIHZpZGVvanMuY3JlYXRlVGltZVJhbmdlKG5ld1Jhbmdlcyk7XG59O1xuXG5jb25zdCBwbGF5YmFja3JhdGVBZGp1c3RlciA9IGZ1bmN0aW9uKHBsYXllcikge1xuICBsZXQgdGVjaDtcblxuICBwbGF5ZXIub24oJ3JhdGVjaGFuZ2UnLCBmdW5jdGlvbigpIHtcbiAgICB0ZWNoLnRyaWdnZXIoJ2R1cmF0aW9uY2hhbmdlJyk7XG4gICAgdGVjaC50cmlnZ2VyKCd0aW1ldXBkYXRlJyk7XG4gIH0pO1xuXG4gIHJldHVybiB7XG4gICAgc2V0U291cmNlKHNyY09iaiwgbmV4dCkge1xuICAgICAgbmV4dChudWxsLCBzcmNPYmopO1xuICAgIH0sXG5cbiAgICBzZXRUZWNoKG5ld1RlY2gpIHtcbiAgICAgIHRlY2ggPSBuZXdUZWNoO1xuICAgIH0sXG5cbiAgICBkdXJhdGlvbihkdXIpIHtcbiAgICAgIHJldHVybiBkdXIgLyBwbGF5ZXIucGxheWJhY2tSYXRlKCk7XG4gICAgfSxcblxuICAgIGN1cnJlbnRUaW1lKGN0KSB7XG4gICAgICByZXR1cm4gY3QgLyBwbGF5ZXIucGxheWJhY2tSYXRlKCk7XG4gICAgfSxcblxuICAgIHNldEN1cnJlbnRUaW1lKGN0KSB7XG4gICAgICByZXR1cm4gY3QgKiBwbGF5ZXIucGxheWJhY2tSYXRlKCk7XG4gICAgfSxcblxuICAgIGJ1ZmZlcmVkKGJmKSB7XG4gICAgICByZXR1cm4gY3JlYXRlTmV3UmFuZ2VzKGJmLCBwbGF5ZXIucGxheWJhY2tSYXRlKCkpO1xuICAgIH0sXG5cbiAgICBzZWVrYWJsZShzZWVrYWJsZSkge1xuICAgICAgcmV0dXJuIGNyZWF0ZU5ld1JhbmdlcyhzZWVrYWJsZSwgcGxheWVyLnBsYXliYWNrUmF0ZSgpKTtcbiAgICB9LFxuXG4gICAgcGxheWVkKHBsYXllZCkge1xuICAgICAgcmV0dXJuIGNyZWF0ZU5ld1JhbmdlcyhwbGF5ZWQsIHBsYXllci5wbGF5YmFja1JhdGUoKSk7XG4gICAgfVxuXG4gIH07XG59O1xuXG4vLyBSZWdpc3RlciB0aGUgcGx1Z2luIHdpdGggdmlkZW8uanMuXG52aWRlb2pzLnVzZSgnKicsIHBsYXliYWNrcmF0ZUFkanVzdGVyKTtcblxuLy8gSW5jbHVkZSB0aGUgdmVyc2lvbiBudW1iZXIuXG5wbGF5YmFja3JhdGVBZGp1c3Rlci5WRVJTSU9OID0gJ19fVkVSU0lPTl9fJztcblxubW9kdWxlLmV4cG9ydHMgPSBwbGF5YmFja3JhdGVBZGp1c3RlcjtcbiJdfQ==
