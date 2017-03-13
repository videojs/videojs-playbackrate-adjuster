import videojs from 'video.js';

const playbackrateAdjuster = function(player) {
  let tech;

  player.on('ratechange', function() {
    tech.trigger('durationchange');
    tech.trigger('timeupdate');
  });

  return {
    setSource(srcObj, next) {
      next(null, srcObj);
    },

    setTech(newTech) {
      tech = newTech;
    },

    duration(dur) {
      return dur / player.playbackRate();
    },

    currentTime(ct) {
      return ct / player.playbackRate();
    },

    setCurrentTime(ct) {
      return ct * player.playbackRate();
    }
  };
};

// Register the plugin with video.js.
videojs.use('*', playbackrateAdjuster);

// Include the version number.
playbackrateAdjuster.VERSION = '__VERSION__';

export default playbackrateAdjuster;
